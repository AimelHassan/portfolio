import { useEffect, useRef } from "react";

interface TransparentVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TransparentVideo({ src, className, style }: TransparentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  
  // Refs to reuse typed arrays for BFS to avoid garbage collection overhead
  const visitedRef = useRef<Uint8Array | null>(null);
  const queueRef = useRef<Int32Array | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    // Use an offscreen canvas to extract raw frames from the video
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d", { willReadFrequently: true });

    const processFrame = () => {
      if (video.paused || video.ended) {
        requestRef.current = requestAnimationFrame(processFrame);
        return;
      }

      if (video.readyState >= 2) {
        // Adapt canvas dimensions if the video resolution changes
        if (width !== video.videoWidth || height !== video.videoHeight) {
          // Scale down processing resolution to max 240px to ensure smooth 60fps performance
          const maxDimension = 240;
          let targetWidth = video.videoWidth;
          let targetHeight = video.videoHeight;

          if (targetWidth > maxDimension || targetHeight > maxDimension) {
            if (targetWidth > targetHeight) {
              targetHeight = Math.round((targetHeight * maxDimension) / targetWidth);
              targetWidth = maxDimension;
            } else {
              targetWidth = Math.round((targetWidth * maxDimension) / targetHeight);
              targetHeight = maxDimension;
            }
          }

          width = targetWidth;
          height = targetHeight;
          canvas.width = width;
          canvas.height = height;
          tempCanvas.width = width;
          tempCanvas.height = height;

          // Allocate helper arrays for BFS
          const size = width * height;
          visitedRef.current = new Uint8Array(size);
          queueRef.current = new Int32Array(size);
        }

        if (width > 0 && height > 0 && tempCtx && visitedRef.current && queueRef.current) {
          // Draw raw video frame to offscreen canvas
          tempCtx.drawImage(video, 0, 0, width, height);

          // Get image pixel data
          const imgData = tempCtx.getImageData(0, 0, width, height);
          const data = imgData.data;
          const size = width * height;

          const visited = visitedRef.current;
          visited.fill(0);

          const queue = queueRef.current;
          let head = 0;
          let tail = 0;

          // Bounding box of the white area in the 720x1280 video:
          // The top 160 rows and bottom 162 rows are solid black letterbox bars.
          const topCut = Math.round(0.125 * height);
          const bottomCut = Math.round(0.8734 * height);

          // Thresholds for background detection:
          // Since the background has a mean brightness of ~237, using maxThreshold = 215
          // ensures that all background pixels (including compression noise) are mapped to 100% transparency.
          // minThreshold = 130 handles the edge transition and de-multiplying.
          const minThreshold = 130;
          const maxThreshold = 215;

          const checkAndPush = (x: number, y: number) => {
            if (y < topCut || y >= bottomCut) return; // Skip black letterbox rows
            const idx = y * width + x;
            if (visited[idx] === 0) {
              const rIdx = idx * 4;
              const r = data[rIdx];
              const g = data[rIdx + 1];
              const b = data[rIdx + 2];
              
              if (r >= minThreshold && g >= minThreshold && b >= minThreshold) {
                visited[idx] = 1;
                queue[tail++] = idx;
              }
            }
          };

          // Seed the flood fill from the borders of the white content box
          for (let x = 0; x < width; x++) {
            checkAndPush(x, topCut);
            checkAndPush(x, bottomCut - 1);
          }
          for (let y = topCut; y < bottomCut; y++) {
            checkAndPush(0, y);
            checkAndPush(width - 1, y);
          }

          // BFS to find all connected background and edge pixels
          while (head < tail) {
            const idx = queue[head++];
            const x = idx % width;
            const y = Math.floor(idx / width);

            if (x > 0) checkAndPush(x - 1, y);
            if (x < width - 1) checkAndPush(x + 1, y);
            if (y > 0) checkAndPush(x, y - 1);
            if (y < height - 1) checkAndPush(x, y + 1);
          }

          // Set transparency and colors
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const i = y * width + x;
              const rIdx = i * 4;

              if (y < topCut || y >= bottomCut) {
                // Completely transparent for top/bottom black letterbox bars
                data[rIdx + 3] = 0;
              } else if (visited[i] === 1) {
                const r = data[rIdx];
                const g = data[rIdx + 1];
                const b = data[rIdx + 2];
                const min = Math.min(r, g, b);
                
                if (min >= maxThreshold) {
                  data[rIdx + 3] = 0; // Pure background
                } else {
                  // Smooth alpha scaling between minThreshold and maxThreshold
                  const a = (maxThreshold - min) / (maxThreshold - minThreshold);
                  const alphaVal = Math.max(0, Math.min(255, Math.round(a * 255)));
                  
                  if (alphaVal < 5) {
                    data[rIdx + 3] = 0;
                  } else {
                    data[rIdx + 3] = alphaVal;
                    // De-multiply the background color (maxThreshold) to recover the true foreground color
                    data[rIdx]     = Math.max(0, Math.min(255, Math.round((r - maxThreshold * (1 - a)) / a)));
                    data[rIdx + 1] = Math.max(0, Math.min(255, Math.round((g - maxThreshold * (1 - a)) / a)));
                    data[rIdx + 2] = Math.max(0, Math.min(255, Math.round((b - maxThreshold * (1 - a)) / a)));
                  }
                }
              } else {
                // Internal character pixel - keep fully opaque and original colors
                data[rIdx + 3] = 255;
              }
            }
          }

          // Render transparent frame on the display canvas
          ctx.putImageData(imgData, 0, 0);
        }
      }

      requestRef.current = requestAnimationFrame(processFrame);
    };

    // Custom time update loop to play video starting from 1 second
    const handleTimeUpdate = () => {
      if (video.currentTime >= video.duration - 0.1) {
        video.currentTime = 1;
        video.play().catch(() => {});
      }
    };

    const handleLoadedMetadata = () => {
      video.currentTime = 1;
      video.play().catch(() => {});
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Initial trigger
    video.play().catch(() => {});
    requestRef.current = requestAnimationFrame(processFrame);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        style={{ display: "none" }}
      />
      <canvas
        ref={canvasRef}
        className={className}
        style={{
          ...style,
          // Apply contrast and brightness adjustments
          filter: "contrast(1.05) brightness(1.05)",
        }}
      />
    </>
  );
}
