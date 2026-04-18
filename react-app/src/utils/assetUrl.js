/** Đường dẫn tĩnh trong `public/` — luôn dùng khi trỏ ảnh/file để đúng trên GitHub Pages (có base /tên-repo/). */
export function assetUrl(path) {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
}
