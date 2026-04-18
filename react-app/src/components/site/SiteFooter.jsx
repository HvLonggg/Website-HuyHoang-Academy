import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer
      className="footer-custom text-white pt-5 pb-4"
      style={{ background: "linear-gradient(90deg,#006699,#00b3b3)" }}
    >
      <div className="container-fluid px-5">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-4 col-md-6">
            <h5 className="d-flex align-items-center mb-3">
              <img src="/images/LOGO.jpg" alt="Logo Huy Hoàng" className="footer-logo me-2" />
              HUY HOÀNG
            </h5>
            <p className="small">
              Trung tâm tư vấn du học Đài Loan uy tín, đồng hành cùng bạn trên hành trình chinh phục ước mơ tri
              thức.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase fw-bold mb-3">Liên kết</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/programs" className="footer-link">
                  Chương trình học
                </Link>
              </li>
              <li>
                <Link to="/scholarship-1-4" className="footer-link">
                  Học bổng
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h6 className="text-uppercase fw-bold mb-3">Thông tin liên hệ</h6>
            <p className="small mb-2">
              <i className="bi bi-geo-alt-fill me-2" />
              <a
                href="https://www.google.com/maps?q=Số+6B7+KĐT+Mỹ+Đình+1,+Cầu+Diễn,+Nam+Từ+Liêm,+Hà+Nội"
                target="_blank"
                rel="noreferrer"
                className="footer-link d-inline"
              >
                Số 6B7 KĐT Mỹ Đình 1, P. Cầu Diễn, Q. Nam Từ Liêm, Hà Nội
              </a>
            </p>
            <p className="small mb-2">
              <i className="bi bi-envelope-fill me-2" />
              <a href="mailto:huyhoangvn.ht@gmail.com" className="footer-link d-inline">
                huyhoangvn.ht@gmail.com
              </a>
            </p>
            <p className="small">
              <i className="bi bi-telephone-fill me-2" />
              <a href="tel:0989723000" className="footer-link d-inline">
                0989723000
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
