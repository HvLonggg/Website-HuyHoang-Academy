import { useEffect, useRef } from "react";

function ContactFloating() {
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.add("scrolled");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        el.classList.remove("scrolled");
      }, 1000);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div ref={ref} className="contact-icons">
      <a href="tel:0989723000" target="_blank" rel="noreferrer">
        <img src="/images/whatsapp-48.png" alt="WhatsApp" />
      </a>
      <a href="https://www.facebook.com/messages/t/100850988083090" target="_blank" rel="noreferrer">
        <img src="/images/messenger_logo.png" alt="Messenger" />
      </a>
    </div>
  );
}

export default ContactFloating;
