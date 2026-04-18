const HREF_MAP = [
  ["../index.html", "/"],
  ["index.html", "/"],
  ["about_us.html", "/about"],
  ["staff.html", "/staff"],
  ["Affiliate_Partner.html", "/affiliate-partner"],
  ["Commitment page.html", "/commitment"],
  ["about_taiwan.html", "/about-taiwan"],
  ["ProgramPage.html", "/programs"],
  ["programs.html", "/programs"],
  ["study_abroad_condititions.html", "/study-abroad-conditions"],
  ["Registration procedure.html", "/registration-procedure"],
  ["visa.html", "/visa"],
  ["scholarship1+4.html", "/scholarship-1-4"],
  ["work-study scholarship.html", "/work-study-scholarship"],
  ["Taiwan full scholarship.html", "/taiwan-full-scholarship"],
  ["news-events.html", "/news-events"],
  ["Industry selection consulting.html", "/industry-selection-consulting"],
  ["study abroad consulting.html", "/study-abroad-consulting"],
  ["contact.html", "/contact"],
  ["register-consultation.html", "/register-consultation"],
  ["about_hsinchu.html", "/about-hsinchu"],
];

const SCHOOL_FILES = [
  "about_changhua.html",
  "about_kunshan.html",
  "about_Mingchuan.html",
  "about_kainan.html",
  "about_nationalTaiwan.html",
  "about_quoclap.html",
  "about_Tsinghua.html",
];

/** Thay placeholder / link sai (xyz123, Rick Roll) bằng video phù hợp từng trang (legacy registry `pageKey`). */
const LEGACY_VIRTUAL_TOUR_EMBED_ID = {
  hsinchu: "C06pQGzH430",
  school_tsinghua: "C06pQGzH430",
  school_changhua: "Fne9fAYbcbo",
  school_kunshan: "JX1L02rH9fU",
  school_mingchuan: "E5Wl6ivTht8",
  school_kainan: "flZFLI0HQq4",
  school_ntu: "Kb3ZEnuimJI",
  school_quoclap: "Kb3ZEnuimJI",
};

export function prepareLegacyHtml(html, pageKey = "", baseUrl = "/") {
  if (!html) return "";
  let s = html;

  const embedId = pageKey && LEGACY_VIRTUAL_TOUR_EMBED_ID[pageKey];
  if (embedId) {
    s = s.replace(
      /https:\/\/www\.youtube\.com\/embed\/(?:xyz123|dQw4w9WgXcQ)(?=["'])/g,
      `https://www.youtube.com/embed/${embedId}`,
    );
  }

  s = s.replace(/\.\.\/images\//g, "/images/");
  s = s.replace(/\.\/images\//g, "/images/");

  s = s.replace(/href="\.\.\/user\/school\/([^"]+\.html)"/g, (_, file) => {
    const slug = file.replace(/\.html$/i, "");
    return `href="/schools/${slug}"`;
  });
  s = s.replace(/href='\.\.\/user\/school\/([^']+\.html)'/g, (_, file) => {
    const slug = file.replace(/\.html$/i, "");
    return `href='/schools/${slug}'`;
  });
  s = s.replace(/href="\.?\.?\/?user\/school\/([^"]+\.html)"/g, (_, file) => {
    const slug = file.replace(/\.html$/i, "");
    return `href="/schools/${slug}"`;
  });

  for (const [from, to] of HREF_MAP) {
    s = s.split(`href="${from}"`).join(`href="${to}"`);
    s = s.split(`href='${from}'`).join(`href='${to}'`);
  }

  for (const file of SCHOOL_FILES) {
    const slug = file.replace(/\.html$/, "");
    s = s.split(`href="${file}"`).join(`href="/schools/${slug}"`);
    s = s.split(`href='${file}'`).join(`href='/schools/${slug}'`);
    s = s.split(`href="./school/${file}"`).join(`href="/schools/${slug}"`);
    s = s.split(`href="school/${file}"`).join(`href="/schools/${slug}"`);
  }

  /* GitHub Pages: mọi link / ảnh gốc phải có tiền tố /tên-repo/ */
  const b = typeof baseUrl === "string" && baseUrl !== "/" ? baseUrl.replace(/\/$/, "") : "";
  if (b) {
    s = s.replace(/href="\//g, `href="${b}/`);
    s = s.replace(/href='\//g, `href='${b}/`);
    s = s.replace(/src="\//g, `src="${b}/`);
    s = s.replace(/src='\//g, `src='${b}/`);
  }

  return s;
}
