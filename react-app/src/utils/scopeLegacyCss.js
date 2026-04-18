/**
 * Giảm ảnh hưởng selector body/html trong CSS trang cũ bằng cách scope vào wrapper.
 * Các rule .navbar / .nav-link trong file legacy (header đã bỏ khỏi HTML) vẫn còn trong CSS
 * và sẽ đè lên navbar React nếu không scope.
 */
export function scopeLegacyCss(css, scope = ".legacy-html-root") {
  if (!css) return "";
  let out = css;
  out = out.replace(/\bbody\s*\{/gi, `${scope} {`);
  out = out.replace(/\bhtml\s*\{/gi, `${scope} {`);
  out = out.replace(/(^|[,\s])body([,\s#.:])/gm, `$1${scope}$2`);

  const NAV_CLASS =
    "\\.(?:navbar(?:-(?:collapse|toggler|nav|brand))?|top-bar|logo-box|brand-title|brand-subtitle|nav-item|nav-link|btn-header-cta)\\b";

  const alreadyHasScope = (fragment) =>
    fragment.includes(`${scope} .`) || fragment.includes(`${scope} `);

  /** nav/header/footer ở root (vd. nav ul li a) — không scope sẽ đè SiteNav / SiteFooter React */
  out = out.replace(/^(\s*)(header|footer|nav)(\s+[^{]+)\{/gm, (full, indent, tag, rest) => {
    if (full.includes(scope)) return full;
    return `${indent}${scope} ${tag}${rest}{`;
  });

  out = out.replace(/^(\s*)(header|footer|nav)\s*\{/gm, (full, indent, tag) => {
    if (full.includes(scope)) return full;
    return `${indent}${scope} ${tag} {`;
  });

  out = out.replace(new RegExp(`^(\s*)(${NAV_CLASS})`, "gm"), (full, indent, cls) => {
    if (alreadyHasScope(full)) return full;
    return `${indent}${scope} ${cls}`;
  });

  out = out.replace(new RegExp(`(\\{\\s*)(${NAV_CLASS})`, "g"), (full, braceWs, cls) => {
    if (alreadyHasScope(full)) return full;
    return `${braceWs}${scope} ${cls}`;
  });

  const commaList = new RegExp(`,\\s*(${NAV_CLASS})`, "g");
  out = out.replace(commaList, (full, cls) => {
    if (alreadyHasScope(full)) return full;
    return `, ${scope} ${cls}`;
  });

  out = out.replace(
    /(^|\n)(\s*)(header\s+\.navbar-brand)\b/g,
    (m, nl, ind) =>
      m.includes(`${scope} header`) ? m : `${nl}${ind}${scope} header .navbar-brand`
  );

  return out;
}
