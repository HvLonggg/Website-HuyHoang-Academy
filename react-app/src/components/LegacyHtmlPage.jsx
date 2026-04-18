import { useEffect, useMemo, useRef } from "react";
import { prepareLegacyHtml } from "../utils/prepareLegacyHtml";
import { scopeLegacyCss } from "../utils/scopeLegacyCss";
import { useLegacyBootstrapWidgets } from "../hooks/useLegacyBootstrapWidgets";
import { useLegacyNewsPage } from "../hooks/useLegacyNewsPage";
import { useLegacyProgramPage } from "../hooks/useLegacyProgramPage";
import { useLegacyStaffModals } from "../hooks/useLegacyStaffModals";

/**
 * Hiển thị nội dung HTML gốc (đã trích) + CSS gốc, bọc trong .legacy-html-root.
 * mode: 'aos' khởi tạo AOS; 'program' | 'staff' | 'news' gắn script tương ứng.
 */
function LegacyHtmlPage({ bodyHtml, cssText, pageKey, mode }) {
  const rootRef = useRef(null);
  const styleId = `legacy-css-${pageKey}`;

  const html = useMemo(
    () => prepareLegacyHtml(bodyHtml || "", pageKey || "", import.meta.env.BASE_URL),
    [bodyHtml, pageKey]
  );
  const scopedCss = useMemo(() => scopeLegacyCss(cssText || ""), [cssText]);

  useEffect(() => {
    const el = document.createElement("style");
    el.id = styleId;
    el.textContent = scopedCss;
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
  }, [scopedCss, styleId]);

  useEffect(() => {
    if (mode !== "aos") return;
    const run = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          easing: "ease-in-out",
        });
        window.AOS.refresh();
      }
    };
    let intervalId;
    if (window.AOS) {
      run();
    } else {
      intervalId = setInterval(() => {
        if (window.AOS) {
          run();
          clearInterval(intervalId);
        }
      }, 50);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [html, mode]);

  useLegacyProgramPage(mode === "program", rootRef);
  useLegacyStaffModals(mode === "staff", rootRef);
  useLegacyNewsPage(mode === "news", rootRef);
  useLegacyBootstrapWidgets(rootRef, `${pageKey}:${html.length}`);

  return (
    <div ref={rootRef} className="legacy-html-root" data-legacy-page={pageKey} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default LegacyHtmlPage;
