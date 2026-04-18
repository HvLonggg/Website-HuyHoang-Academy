import { Link } from "react-router-dom";

function SiteTopBar() {
  return (
    <div className="border-bottom py-1 bg-white">
      <div className="container d-flex justify-content-between align-items-center small fw-semibold">
        <div>
          Hà Nội: <span className="text-primary">098.972.3000</span> – HẢI DƯƠNG:{" "}
          <span className="text-primary">096.456.1122</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link to="/news-events" className="text-primary text-decoration-none">
            Tin tức
          </Link>{" "}
          |
          <Link to="/news-events" className="text-primary text-decoration-none">
            Sự kiện
          </Link>{" "}
          |
          <a href="#" className="text-primary text-decoration-none">
            Tuyển dụng
          </a>{" "}
          |
          <Link to="/about" className="text-primary text-decoration-none">
            Về chúng tôi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SiteTopBar;
