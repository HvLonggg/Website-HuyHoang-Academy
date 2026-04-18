import { Link, useNavigate } from "react-router-dom";
import HomeSlider from "../components/site/HomeSlider";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HomeSlider />

      <section className="container py-5">
        <h2 className="text-center text-primary fw-bold fs-2 mb-5">TẠI SAO CHỌN DU HỌC ĐÀI LOAN?</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="text-center p-4 rounded-3 brand-bg h-100">
              <div
                className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <i className="fas fa-plane fs-3" />
              </div>
              <h5 className="fw-bold text-primary">GẦN VIỆT NAM</h5>
              <p>
                Chỉ mất khoảng 3 tiếng bay từ Việt Nam sang Đài Loan. Gần gũi về vị trí địa lý, văn hóa tương đồng,
                thuận tiện cho phụ huynh thăm con và kết hợp du lịch.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center p-4 rounded-3 brand-bg h-100">
              <div
                className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <i className="fas fa-hourglass-half fs-3" />
              </div>
              <h5 className="fw-bold text-primary">THỜI GIAN HỌC NGẮN</h5>
              <p>Có thể tốt nghiệp cử nhân khi 19 tuổi. Chương trình học tối ưu, linh hoạt.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center p-4 rounded-3 brand-bg h-100">
              <div
                className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <i className="fas fa-university fs-3" />
              </div>
              <h5 className="fw-bold text-primary">NỀN GIÁO DỤC</h5>
              <p>Chất lượng giáo dục hàng đầu châu Á, thu hút nhiều du học sinh khu vực.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center p-4 rounded-3 brand-bg h-100">
              <div
                className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mx-auto mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <i className="fas fa-user-graduate fs-3" />
              </div>
              <h5 className="fw-bold text-primary">BẰNG CẤP TOÀN CẦU</h5>
              <p>Bằng cấp quốc tế, được công nhận rộng rãi, tăng cơ hội việc làm toàn cầu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center text-primary fw-bold fs-2 mb-5">CHI PHÍ VÀ ĐIỀU KIỆN DU HỌC ĐÀI LOAN</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 rounded-3" style={{ backgroundColor: "#e7f4ff" }}>
              <h5 className="fw-bold text-primary mb-3">CHI PHÍ DU HỌC ĐÀI LOAN</h5>
              <p className="small fst-italic text-muted">
                (*) Chi phí du học Đài Loan có thể thay đổi tùy theo trường công hay tư, khu vực sinh sống, ngành học
                và mức sinh hoạt cá nhân.
              </p>
              <p className="fw-semibold mb-1 small">Học phí:</p>
              <ul className="small ps-3 mb-3">
                <li>Trường công lập: 30 – 60 triệu VND/năm</li>
                <li>Trường tư thục: 60 – 120 triệu VND/năm</li>
                <li>Các ngành đặc biệt (Y, Dược...): Có thể cao hơn</li>
              </ul>
              <p className="fw-semibold mb-1 small">Sinh hoạt phí:</p>
              <p className="small mb-2">5 – 8 triệu VND/tháng (tùy thành phố)</p>
              <p className="fw-semibold mb-1 small">Ký túc xá / Nhà ở:</p>
              <p className="small mb-2">1 – 2 triệu VND/tháng (ký túc xá), 2 – 4 triệu VND/tháng (thuê ngoài)</p>
              <p className="fw-semibold mb-1 small">Bảo hiểm & lệ phí khác:</p>
              <p className="small mb-2">~ 3 triệu VND/năm</p>
              <p className="small">
                Nhiều trường hỗ trợ học bổng bán phần hoặc toàn phần giúp giảm gánh nặng tài chính cho sinh viên quốc
                tế.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 rounded-3" style={{ backgroundColor: "#e7f4ff" }}>
              <h5 className="fw-bold text-primary mb-3">ĐIỀU KIỆN ĐẦU VÀO DU HỌC ĐÀI LOAN</h5>
              <p className="small mb-3">
                Du học Đài Loan có yêu cầu linh hoạt và phù hợp với đa dạng đối tượng học sinh Việt Nam. Một số chương
                trình có thể học hoàn toàn bằng tiếng Anh hoặc tiếng Trung.
              </p>
              <p className="fw-semibold small mb-1">Hệ đại học:</p>
              <ul className="small ps-3 mb-3">
                <li>Tốt nghiệp THPT</li>
                <li>Điểm trung bình lớp 12 từ 6.5 trở lên</li>
                <li>Yêu cầu tiếng Trung TOCFL cấp 2 hoặc IELTS 5.5 trở lên</li>
              </ul>
              <p className="fw-semibold small mb-1">Hệ sau đại học:</p>
              <ul className="small ps-3 mb-3">
                <li>Tốt nghiệp đại học</li>
                <li>Có đề cương nghiên cứu (với hệ Thạc sĩ nghiên cứu)</li>
                <li>Yêu cầu TOCFL cấp 3 trở lên hoặc IELTS 6.0+</li>
              </ul>
              <p className="fw-semibold small mb-1">Học bổng:</p>
              <ul className="small ps-3">
                <li>Hồ sơ học lực tốt, thư giới thiệu, kế hoạch học tập rõ ràng</li>
                <li>Nhiều học bổng chính phủ, học bổng trường và doanh nghiệp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-center text-primary fw-bold fs-2 mt-5 mb-5">KẾ HOẠCH DU HỌC ĐÀI LOAN</h2>

      <section className="study-plan-section" style={{ backgroundColor: "#fff", padding: "40px 0" }}>
        <div className="container-lg px-4" style={{ maxWidth: "1100px" }}>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/images/KHHT.jpg"
                className="img-fluid rounded shadow"
                style={{ marginLeft: "-40px" }}
                alt="Kế hoạch du học"
              />
            </div>
            <div className="col-md-6">
              <p className="text-center fs-4 fw-semibold mb-1">Bạn đang lên kế hoạch du học Đài Loan?</p>
              <p>
                Huy Hoàng đồng hành cùng bạn từ bước chuẩn bị hồ sơ, chọn trường, xin học bổng đến khi đặt chân tới
                giảng đường đại học.
              </p>
              <ul className="list-unstyled mb-4">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2" /> Tư vấn chọn ngành và trường phù hợp
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2" /> Hỗ trợ làm hộ chiếu, hồ sơ chi tiết
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2" /> Hỗ trợ free ktx, lớp học với trang thiết
                  bị hiện đại
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2" /> Hỗ trợ xin học bổng & visa
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary px-4 btn-tu-van">
                  <i className="bi bi-chat-dots me-1" /> Tôi muốn được tư vấn
                </Link>
                <a href="#ho-so-thanh-cong" className="btn btn-outline-success px-4 btn-ho-so">
                  <i className="bi bi-folder-check me-1" /> Xem hồ sơ thành công
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-center text-primary fw-bold fs-2 mb-7 mt-5 home-dong-hanh-title">
        ĐỒNG HÀNH CÙNG DU HỌC SINH ĐÀI LOAN
      </h2>
      <section className="home-dong-hanh-section" style={{ backgroundColor: "#fff" }}>
        <div className="container-lg px-4 home-dong-hanh-inner">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <div className="row g-3">
                <div className="col-6" style={{ marginTop: "50px" }}>
                  <a
                    href="https://taiwandiary.vn/dai-hoc-khkt-ngo-phung-wufeng-university/"
                    className="image-box-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="image-box small-box">
                      <img
                        src="/images/dai-hoc-ngo-phung-3-1.jpg"
                        alt="WuFeng University"
                        className="img-fluid rounded shadow-sm hover-zoom"
                      />
                      <div className="school-name-overlay">WuFeng University - WFU</div>
                    </div>
                  </a>
                </div>
                <div className="col-6" style={{ marginTop: "90px" }}>
                  <a
                    href="https://taiwandiary.vn/dai-hoc-cong-nghe-trung-quoc-china-university-of-technology-cute/"
                    className="image-box-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="image-box tall-box">
                      <img
                        src="/images/dai-hoc-cong-nghe-trung-quoc-6.jpg"
                        alt="China University of Technology"
                        className="img-fluid rounded shadow-sm hover-zoom"
                      />
                      <div className="school-name-overlay">China University of Technology</div>
                    </div>
                  </a>
                </div>
                <div className="col-6" style={{ marginTop: "-90px" }}>
                  <a
                    href="https://taiwandiary.vn/dai-hoc-cong-nghe-nam-khai/"
                    className="image-box-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="image-box tall-box">
                      <img
                        src="/images/namkhai1.jpeg"
                        alt="Nan Kai University of Technology"
                        className="img-fluid rounded shadow-sm hover-zoom"
                      />
                      <div className="school-name-overlay">Nan Kai University of Technology (NKUT)</div>
                    </div>
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="https://taiwandiary.vn/tim-hieu-ve-dai-hoc-con-son-dai-loan/"
                    className="image-box-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="image-box small-box">
                      <img
                        src="/images/kunsan.jpeg"
                        alt="Kun Shan University"
                        className="img-fluid rounded shadow-sm hover-zoom"
                      />
                      <div className="school-name-overlay">Kun Shan University</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="dong-hanh-commitment">
                <h3 className="fw-bold mb-4 dong-hanh-commitment-title">
                  <i className="fas fa-star" /> Cam kết với sinh viên <i className="fas fa-star" />
                </h3>
                <p className="mb-3 text-dark dong-hanh-commitment-p">
                  <i className="fas fa-university text-warning me-2" />
                  <strong>Hợp tác với hơn 30 trường đại học hàng đầu Đài Loan</strong> như NTU, NYCU, NTHU, NCKU… giúp bạn
                  dễ dàng chọn được ngôi trường phù hợp với năng lực và mục tiêu.
                </p>
                <p className="mb-3 text-dark dong-hanh-commitment-p">
                  <i className="fas fa-user-graduate text-primary me-2" />
                  <strong>Kinh nghiệm hỗ trợ hơn 1.000 sinh viên</strong> đạt học bổng chính phủ, bán phần hoặc toàn
                  phần, tăng cơ hội học tập quốc tế với chi phí tối ưu.
                </p>
                <p className="mb-3 text-dark dong-hanh-commitment-p dong-hanh-commitment-highlight">
                  <i className="fas fa-tags me-2" />
                  <strong>Chi phí dịch vụ chỉ 1.500 - 2.000 USD</strong> – thấp hơn nhiều so với mức 3.000 - 4.500 USD ở
                  các đơn vị khác.
                </p>
                <p className="mb-3 text-dark dong-hanh-commitment-p">
                  <i className="fas fa-headset text-success me-2" />
                  <strong>Hỗ trợ 24/7</strong> từ khâu tư vấn, chuẩn bị hồ sơ, xin visa, đến khi ổn định học tại Đài Loan.
                </p>
                <p className="text-dark mb-0 dong-hanh-commitment-p">
                  <i className="fas fa-handshake text-success me-2" />
                  <strong>Không ép buộc – Không lợi nhuận – Cam kết vì sinh viên!</strong> Mục tiêu của chúng tôi là giúp
                  bạn chạm tới ước mơ du học một cách dễ dàng và an toàn nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-4">
        <section className="mt-extra">
          <h2 id="ho-so-thanh-cong" className="text-center text-primary fw-bold fs-2 mb-5">
            HỌC BỔNG DU HỌC ĐÀI LOAN
          </h2>
        </section>

        <div className="table-responsive" style={{ maxWidth: "100%", margin: "0 auto" }}>
          <table className="table table-bordered table-sm align-middle scholarship-table" style={{ fontSize: "0.8rem" }}>
            <thead className="table-light text-secondary">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Trường</th>
                <th scope="col">Tên học bổng</th>
                <th scope="col">Cấp học</th>
                <th scope="col">Hỗ trợ</th>
                <th scope="col">Điều kiện chính</th>
                <th scope="col">Apply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ĐH Quốc lập Đài Loan (NTU)</td>
                <td>MOE Taiwan Scholarship</td>
                <td>Cử nhân, ThS, TS</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  Học phí + 15.000 TWD/tháng
                </td>
                <td>Thành tích học tập tốt</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>ĐH Quốc lập Thanh Hoa (NTHU)</td>
                <td>Outstanding Int&apos;l Scholarship</td>
                <td>Cử nhân, Thạc sĩ</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  100% học phí
                </td>
                <td>Học lực tốt, hồ sơ nổi bật</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>ĐH Quốc lập Thành Công (NCKU)</td>
                <td>NCKU Int&apos;l Scholarship</td>
                <td>Cử nhân, ThS, TS</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  Học phí + sinh hoạt phí
                </td>
                <td>KQ học tập & phỏng vấn</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>ĐH Quốc lập Giao thông (NYCU)</td>
                <td>Graduate Int&apos;l Scholarship</td>
                <td>Thạc sĩ, Tiến sĩ</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  Học phí + trợ cấp nghiên cứu
                </td>
                <td>GPA cao, có đề cương</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>ĐH Quốc lập Trung ương (NCU)</td>
                <td>NCU Scholarship</td>
                <td>Thạc sĩ, Tiến sĩ</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  Học phí + hỗ trợ nhà ở
                </td>
                <td>GPA tốt, thư GT & KHHT</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>ĐH KH và CN Đài Loan (NTUST)</td>
                <td>NTUST Grad Scholarship</td>
                <td>Thạc sĩ, Tiến sĩ</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  Học phí + trợ cấp đến 15.000 TWD
                </td>
                <td>IELTS 6.0+, GPA ≥ 7.5</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>ĐH KH&CN Cao Hùng (NKUST)</td>
                <td>NKUST Int&apos;l Scholarship</td>
                <td>Cử nhân, Thạc sĩ, TS</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  Miễn học phí + trợ cấp
                </td>
                <td>Học lực & HĐ ngoại khóa</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>ĐH Dương Minh Giao Thông (NYCU)</td>
                <td>Grad Student Scholarship</td>
                <td>Thạc sĩ, Tiến sĩ</td>
                <td>
                  <i className="fas fa-check text-success me-1" />
                  Học phí + tài trợ nghiên cứu
                </td>
                <td>Phù hợp ngành & KH học</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-sm rounded-pill px-3"
                    onClick={() => navigate("/registration-procedure")}
                  >
                    Apply
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomePage;
