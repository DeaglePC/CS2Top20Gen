import { RefObject, useState, useCallback } from "react";
import { toPng } from "html-to-image";

interface UseExportImageOptions {
  scale?: number;
  backgroundColor?: string | null;
}

export function useExportImage(
  cardRef: RefObject<HTMLDivElement>,
  options: UseExportImageOptions = {}
) {
  const [isExporting, setIsExporting] = useState(false);

  const { scale = 2, backgroundColor = null } = options;

  const exportAsImage = useCallback(
    async (filename: string = "hltv-top20-card"): Promise<void> => {
      if (!cardRef.current) {
        console.error("Card ref is not available");
        return;
      }

      setIsExporting(true);

      // 等待图片加载完成
      const images = cardRef.current.querySelectorAll("img");
      await Promise.all(
        Array.from(images).map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            })
        )
      );

      try {
        const dataUrl = await toPng(cardRef.current, {
          pixelRatio: scale,
          backgroundColor: backgroundColor ?? undefined,
          cacheBust: true,
        });

        const link = document.createElement("a");
        link.download = `${filename}.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Export failed:", error);
      }

      setIsExporting(false);
    },
    [cardRef, scale, backgroundColor]
  );

  return { exportAsImage, isExporting };
}
