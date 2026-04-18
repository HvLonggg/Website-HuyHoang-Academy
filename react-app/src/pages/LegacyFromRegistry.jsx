import { Navigate, useLocation } from "react-router-dom";
import LegacyHtmlPage from "../components/LegacyHtmlPage";
import { LEGACY_BY_PATH } from "../legacy/legacyRegistry";
import { normalizeAppPath } from "../utils/normalizeAppPath";

function LegacyFromRegistry() {
  const { pathname } = useLocation();
  const key = normalizeAppPath(pathname);
  const cfg = LEGACY_BY_PATH[key];
  if (!cfg) {
    return <Navigate to="/" replace />;
  }
  return <LegacyHtmlPage bodyHtml={cfg.bodyHtml} cssText={cfg.cssText} pageKey={cfg.pageKey} mode={cfg.mode} />;
}

export default LegacyFromRegistry;
