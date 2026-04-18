import { Navigate, useParams } from "react-router-dom";
import LegacyHtmlPage from "../components/LegacyHtmlPage";
import { LEGACY_BY_SCHOOL_SLUG } from "../legacy/legacyRegistry";

function resolveSchool(slug) {
  if (!slug) return null;
  if (LEGACY_BY_SCHOOL_SLUG[slug]) return LEGACY_BY_SCHOOL_SLUG[slug];
  const lower = slug.toLowerCase();
  const found = Object.keys(LEGACY_BY_SCHOOL_SLUG).find((k) => k.toLowerCase() === lower);
  return found ? LEGACY_BY_SCHOOL_SLUG[found] : null;
}

function SchoolPage() {
  const { slug } = useParams();
  const cfg = resolveSchool(slug);
  if (!cfg) {
    return <Navigate to="/" replace />;
  }
  return <LegacyHtmlPage bodyHtml={cfg.bodyHtml} cssText={cfg.cssText} pageKey={cfg.pageKey} />;
}

export default SchoolPage;
