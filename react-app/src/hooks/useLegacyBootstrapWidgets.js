import { useEffect } from "react";

/**
 * Khởi tạo Bootstrap cho DOM inject (carousel, collapse...), và refresh AOS nếu có.
 * File HTML gốc thường dựa vào Bootstrap sau DOMContentLoaded; cần gọi lại sau khi dangerouslySetInnerHTML.
 */
export function useLegacyBootstrapWidgets(rootRef, refreshKey) {
  useEffect(() => {
    const root = rootRef?.current;
    if (!root) return undefined;

    const id = window.setTimeout(() => {
      const bs = window.bootstrap;
      if (bs?.Carousel) {
        root.querySelectorAll(".carousel").forEach((el) => {
          try {
            bs.Carousel.getOrCreateInstance(el);
          } catch (_) {
            /* ignore */
          }
        });
      }
      if (window.AOS) {
        window.AOS.refresh();
      }
    }, 0);

    return () => window.clearTimeout(id);
  }, [rootRef, refreshKey]);
}
