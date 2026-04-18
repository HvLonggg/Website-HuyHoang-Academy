import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function SiteNav() {
  const navbarRef = useRef(null);
  const prevScrollRef = useRef(typeof window !== "undefined" ? window.pageYOffset : 0);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchWrapRef = useRef(null);
  const searchBtnRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const onScroll = () => {
      const current = window.pageYOffset;
      if (prevScrollRef.current > current) {
        navbar.classList.remove("hidden");
      } else {
        navbar.classList.add("hidden");
      }
      prevScrollRef.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      const box = searchWrapRef.current;
      const btn = searchBtnRef.current;
      if (!box || !btn) return;
      if (!box.contains(e.target) && !btn.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <nav
      id="site-header-nav"
      ref={navbarRef}
      className="navbar navbar-expand-md border-bottom py-3 site-nav-main"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src="/images/LOGO.jpg"
            alt="Logo Huy Hoàng"
            style={{
              width: "75px",
              height: "75px",
              objectFit: "contain",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)",
              backgroundColor: "white",
              padding: "4px",
            }}
          />
          <div className="ms-3">
            <div className="fs-4 fw-bold">
              <span className="brand-color">HUY</span>{" "}
              <span className="text-primary">HOÀNG</span>
            </div>
            <div className="small text-primary">Chắp cánh ước mơ</div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav me-3 gap-3 fw-semibold small">
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/">
                <i className="fas fa-home" /> HOME
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                id="gioiThieuDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                GIỚI THIỆU
              </a>
              <ul className="dropdown-menu" aria-labelledby="gioiThieuDropdown">
                <li>
                  <Link className="dropdown-item" to="/about">
                    Về Huy Hoàng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/staff">
                    Đội ngũ tư vấn
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/affiliate-partner">
                    Đối tác & Trường liên kết
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/commitment">
                    Cam kết đồng hành
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                id="duHocDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                DU HỌC
              </a>
              <ul className="dropdown-menu" aria-labelledby="duHocDropdown">
                <li>
                  <Link className="dropdown-item" to="/about-taiwan">
                    Giới thiệu về Đài Loan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/affiliate-partner">
                    Danh sách trường
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/programs">
                    Chương trình học tại Đài Loan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/study-abroad-conditions">
                    Điều kiện du học
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/registration-procedure">
                    Thủ tục đăng ký
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa">
                    Visa & giấy tờ
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                id="hocBongDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                HỌC BỔNG
              </a>
              <ul className="dropdown-menu" aria-labelledby="hocBongDropdown">
                <li>
                  <Link className="dropdown-item" to="/scholarship-1-4">
                    Chương trình học bổng 1+4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/work-study-scholarship">
                    Chương trình học bổng hệ vhvl
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/taiwan-full-scholarship">
                    Học bổng toàn phần
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                id="gocTuVanDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                SỰ KIỆN HOT
              </a>
              <ul className="dropdown-menu" aria-labelledby="gocTuVanDropdown">
                <li>
                  <Link className="dropdown-item" to="/news-events">
                    Tin tức/sự kiện
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/industry-selection-consulting">
                    Định hướng nghề nghiệp
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/study-abroad-consulting">
                    Thông tin dịch vụ
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-primary" to="/contact">
                LIÊN HỆ
              </Link>
            </li>

            <div className="search-container position-relative d-inline-block">
              <button
                ref={searchBtnRef}
                type="button"
                className="btn btn-link p-0 text-primary fs-4"
                aria-label="Tìm kiếm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchOpen((v) => !v);
                }}
              >
                <i className="fas fa-search" />
              </button>
              <div
                ref={searchWrapRef}
                id="search-box"
                className={`search-box ${searchOpen ? "" : "d-none"}`}
                onClick={(e) => e.stopPropagation()}
              >
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                <button type="button" className="btn search-submit" aria-label="Tìm">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </ul>
          <Link to="/register-consultation" className="btn btn-dang-ky fw-semibold px-4">
            ĐĂNG KÝ TƯ VẤN
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SiteNav;
