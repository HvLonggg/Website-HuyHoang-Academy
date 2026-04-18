import { useEffect } from "react";

/** Logic từ ProgramPage.html: hero slide, modal, FAQ accordion, form demo. */
export function useLegacyProgramPage(enabled, rootRef) {
  useEffect(() => {
    if (!enabled) return;
    const root = rootRef?.current;
    if (!root) return;

    const mainEl = root.querySelector("main");
    if (mainEl) {
      mainEl.style.paddingTop = "0";
    }

    const slides = root.querySelectorAll(".hero-slide");
    let slideInterval = null;
    if (slides.length) {
      let currentSlide = 0;
      const nextSlide = () => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      };
      slideInterval = setInterval(nextSlide, 5000);
    }

    const onModalOpen = (e) => {
      const btn = e.target.closest("[data-modal]");
      if (!btn || !root.contains(btn)) return;
      e.preventDefault();
      const id = btn.getAttribute("data-modal");
      const m = document.getElementById(id);
      if (m) {
        m.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    };

    const onModalClose = (e) => {
      const closeBtn = e.target.closest("[data-close]");
      if (!closeBtn || !root.contains(closeBtn)) return;
      const modal = closeBtn.closest(".modal");
      if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
      }
    };

    const onModalBackdrop = (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.classList.remove("open");
        document.body.style.overflow = "";
      }
    };

    root.addEventListener("click", onModalOpen);
    root.addEventListener("click", onModalClose);
    root.querySelectorAll(".modal").forEach((m) => {
      m.addEventListener("click", onModalBackdrop);
    });

    const onAcc = (e) => {
      const head = e.target.closest(".acc-head");
      if (!head || !root.contains(head)) return;
      head.parentElement.classList.toggle("active");
    };
    root.querySelectorAll(".acc-item .acc-head").forEach((h) => {
      h.addEventListener("click", onAcc);
    });

    const form = root.querySelector("#adviceForm");
    const onSubmit = (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const required = ["fullname", "phone", "email", "program"];
      for (const k of required) {
        if (!fd.get(k)) {
          window.alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
          return;
        }
      }
      window.alert("Gửi đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất.");
      form.reset();
    };
    if (form) form.addEventListener("submit", onSubmit);

    return () => {
      if (slideInterval) clearInterval(slideInterval);
      root.removeEventListener("click", onModalOpen);
      root.removeEventListener("click", onModalClose);
      root.querySelectorAll(".modal").forEach((m) => {
        m.removeEventListener("click", onModalBackdrop);
      });
      root.querySelectorAll(".acc-item .acc-head").forEach((h) => {
        h.removeEventListener("click", onAcc);
      });
      if (form) form.removeEventListener("submit", onSubmit);
    };
  }, [enabled, rootRef]);
}
