import { useLocation } from "react-router-dom";
import ContactFloating from "../components/site/ContactFloating";
import SiteFooter from "../components/site/SiteFooter";
import SiteNav from "../components/site/SiteNav";
import SiteTopBar from "../components/site/SiteTopBar";
import { normalizeAppPath } from "../utils/normalizeAppPath";

function MainLayout({ children }) {
  const { pathname } = useLocation();
  const isHome = normalizeAppPath(pathname) === "/";

  return (
    <>
      {isHome ? <SiteTopBar /> : null}
      <SiteNav />
      {isHome ? <ContactFloating /> : null}
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export default MainLayout;
