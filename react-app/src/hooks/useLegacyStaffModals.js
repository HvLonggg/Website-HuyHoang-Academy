import { useEffect } from "react";

/** Gắn hàm openModal/closeModal như file staff.html gốc (onclick trên HTML). */
export function useLegacyStaffModals(enabled, rootRef) {
  useEffect(() => {
    if (!enabled) return;

    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    }

    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }

    function closeModalOnOutside(event, modalId) {
      if (event.target.classList.contains("modal-overlay")) {
        closeModal(modalId);
      }
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
    window.closeModalOnOutside = closeModalOnOutside;

    const onKey = (event) => {
      if (event.key === "Escape") {
        const activeModal = document.querySelector(".modal-overlay.active");
        if (activeModal) {
          activeModal.classList.remove("active");
          document.body.style.overflow = "";
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      delete window.openModal;
      delete window.closeModal;
      delete window.closeModalOnOutside;
    };
  }, [enabled, rootRef]);
}
