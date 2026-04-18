/** Chuẩn hóa pathname để khớp route (bỏ slash cuối, trừ root). */
export function normalizeAppPath(pathname) {
  if (!pathname) return "/";
  const p = pathname.replace(/\/+$/, "") || "/";
  return p;
}
