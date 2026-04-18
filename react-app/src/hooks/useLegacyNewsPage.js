import { useEffect } from "react";
import { NEWS_ARTICLES } from "../legacy/newsArticlesData";

/**
 * Tin tức & sự kiện: render bài viết vào grid, cuộn mượt, tìm kiếm, modal đọc bài.
 * (HTML gốc dùng onclick + script inline — đã bị strip khi extract legacy.)
 */
export function useLegacyNewsPage(enabled, rootRef) {
  useEffect(() => {
    if (!enabled) return;
    const root = rootRef?.current;
    if (!root) return;

    const articles = NEWS_ARTICLES;

    const esc = (s) => {
      const d = document.createElement("div");
      d.textContent = s;
      return d.innerHTML;
    };

    function renderArticles() {
      articles.forEach((item) => {
        const container = root.querySelector(`#grid-${item.section}`);
        if (!container) return;
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";
        col.innerHTML = `
                        <div class="news-card h-100" data-news-article-id="${item.id}" data-aos="fade-up">
                            <div class="card-img-wrapper">
                                <img src="${esc(item.img)}" class="card-img" alt="${esc(item.title)}">
                                <span class="card-badge">${esc(item.cat)}</span>
                            </div>
                            <div class="card-body-custom">
                                <div class="card-meta">
                                    <span><i class="far fa-calendar-alt"></i> ${esc(item.date)}</span>
                                    <span><i class="far fa-clock"></i> 5 phút đọc</span>
                                </div>
                                <h4 class="card-title">${esc(item.title)}</h4>
                                <p class="card-excerpt">${esc(item.desc)}</p>
                                <div class="card-footer-custom">
                                    <span class="read-more">Đọc Tiếp <i class="fas fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    `;
        container.appendChild(col);
      });
      if (window.AOS) window.AOS.refresh();
    }

    let readerModal = null;
    try {
      const el = root.querySelector("#readerModal");
      if (el && window.bootstrap?.Modal) {
        readerModal = new window.bootstrap.Modal(el);
      }
    } catch {
      readerModal = null;
    }

    function openReader(id) {
      const article = articles.find((a) => a.id === id);
      if (!article) return;
      const imgEl = root.querySelector("#modalImg");
      const catEl = root.querySelector("#modalCat");
      const titleEl = root.querySelector("#modalTitle");
      const dateEl = root.querySelector("#modalDate");
      const contentEl = root.querySelector("#modalContent");
      if (imgEl) imgEl.src = article.img;
      if (catEl) catEl.innerText = article.cat;
      if (titleEl) titleEl.innerText = article.title;
      if (dateEl) dateEl.innerText = article.date;
      if (contentEl) contentEl.innerHTML = article.content;
      readerModal?.show();
    }

    function scrollToSection(sectionId, activeCatEl) {
      if (activeCatEl?.classList?.contains("cat-link")) {
        root.querySelectorAll(".cat-link").forEach((el) => el.classList.remove("active"));
        activeCatEl.classList.add("active");
      }
      const target = root.querySelector(`#sec-${sectionId}`);
      if (target) {
        const headerOffset = 140;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }

    function filterAll(activeEl) {
      root.querySelectorAll(".cat-link").forEach((el) => el.classList.remove("active"));
      if (activeEl) activeEl.classList.add("active");
      const searchResults = root.querySelector("#search-results");
      const sections = root.querySelectorAll('[id^="sec-"]');
      if (searchResults) searchResults.style.display = "none";
      sections.forEach((sec) => {
        sec.style.display = "block";
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function onRootClick(e) {
      const scrollBtn = e.target.closest("[data-news-scroll]");
      if (scrollBtn && root.contains(scrollBtn)) {
        e.preventDefault();
        const id = scrollBtn.getAttribute("data-news-scroll");
        if (id) scrollToSection(id, scrollBtn.closest(".cat-link"));
        return;
      }
      const filterBtn = e.target.closest("[data-news-filter]");
      if (filterBtn && root.contains(filterBtn)) {
        e.preventDefault();
        filterAll(filterBtn.closest(".cat-link") || filterBtn);
        return;
      }
      const card = e.target.closest("[data-news-article-id]");
      if (card && root.contains(card)) {
        const id = parseInt(card.getAttribute("data-news-article-id"), 10);
        if (!Number.isNaN(id)) openReader(id);
      }
    }

    renderArticles();

    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
      window.AOS.refresh();
    }

    const searchInput = root.querySelector("#search-input");
    const searchButton = root.querySelector("#search-button");
    const suggestionsContainer = root.querySelector("#search-suggestions");
    const suggestionsList = suggestionsContainer?.querySelector("ul");
    const searchResults = root.querySelector("#search-results");
    const searchResultsGrid = root.querySelector("#search-results-grid");
    const sections = root.querySelectorAll('[id^="sec-"]');

    function performSearch() {
      const query = (searchInput?.value || "").toLowerCase().trim();
      if (suggestionsContainer) suggestionsContainer.style.display = "none";

      if (query === "") {
        if (searchResults) searchResults.style.display = "none";
        sections.forEach((sec) => {
          sec.style.display = "block";
        });
        return;
      }

      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.desc.toLowerCase().includes(query) ||
          article.cat.toLowerCase().includes(query),
      );

      if (searchResultsGrid) searchResultsGrid.innerHTML = "";
      if (filtered.length > 0) {
        filtered.forEach((item) => {
          const col = document.createElement("div");
          col.className = "col-md-6 col-lg-4";
          col.innerHTML = `
                        <div class="news-card h-100" data-news-article-id="${item.id}" data-aos="fade-up">
                            <div class="card-img-wrapper">
                                <img src="${esc(item.img)}" class="card-img" alt="${esc(item.title)}">
                                <span class="card-badge">${esc(item.cat)}</span>
                            </div>
                            <div class="card-body-custom">
                                <div class="card-meta">
                                    <span><i class="far fa-calendar-alt"></i> ${esc(item.date)}</span>
                                    <span><i class="far fa-clock"></i> 5 phút đọc</span>
                                </div>
                                <h4 class="card-title">${esc(item.title)}</h4>
                                <p class="card-excerpt">${esc(item.desc)}</p>
                                <div class="card-footer-custom">
                                    <span class="read-more">Đọc Tiếp <i class="fas fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    `;
          searchResultsGrid?.appendChild(col);
        });
      } else if (searchResultsGrid) {
        searchResultsGrid.innerHTML =
          '<p class="no-results">Không tìm thấy bài viết phù hợp. Hãy thử từ khóa khác!</p>';
      }

      sections.forEach((sec) => {
        sec.style.display = "none";
      });
      if (searchResults) searchResults.style.display = "block";
      searchResults?.scrollIntoView({ behavior: "smooth" });
    }

    const onSearchInput = (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!suggestionsList || !suggestionsContainer) return;
      suggestionsList.innerHTML = "";
      if (query.length < 2) {
        suggestionsContainer.style.display = "none";
        return;
      }
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.desc.toLowerCase().includes(query) ||
          article.cat.toLowerCase().includes(query),
      );
      if (filtered.length > 0) {
        filtered.forEach((article) => {
          const li = document.createElement("li");
          li.innerHTML = `<strong>${esc(article.title)}</strong> <small>(${esc(article.cat)})</small>`;
          li.addEventListener("click", () => {
            openReader(article.id);
            if (searchInput) searchInput.value = "";
            suggestionsContainer.style.display = "none";
          });
          suggestionsList.appendChild(li);
        });
        suggestionsContainer.style.display = "block";
      } else {
        suggestionsContainer.style.display = "none";
      }
    };

    const hideSuggest = (e) => {
      if (!searchInput?.contains(e.target) && !suggestionsContainer?.contains(e.target)) {
        if (suggestionsContainer) suggestionsContainer.style.display = "none";
      }
    };

    root.addEventListener("click", onRootClick);
    searchInput?.addEventListener("input", onSearchInput);
    searchInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") performSearch();
    });
    searchButton?.addEventListener("click", performSearch);
    document.addEventListener("click", hideSuggest);

    return () => {
      root.removeEventListener("click", onRootClick);
      searchInput?.removeEventListener("input", onSearchInput);
      searchButton?.removeEventListener("click", performSearch);
      document.removeEventListener("click", hideSuggest);
    };
  }, [enabled, rootRef]);
}
