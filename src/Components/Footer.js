import React from 'react';
import './Footer/Footer.scss';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from './Footer/image/logo.jpg'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="introduction">
                            <h5>Giới thiệu</h5>
                            <p>Về chúng tôi</p>
                            <p>Sản Phẩm</p>
                            <p>Khuyến mãi</p>
                            <p>Chuyện cà phê</p>
                            <p>Cửa hàng</p>
                            <p>Tuyển dụng</p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="rule">
                            <h5>Điều khoản</h5>
                            <p>Điều khoản sử dụng</p>
                            <p>Quy tắc bảo mật</p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className='contact'>
                            <p className="mb-24"><FontAwesomeIcon icon={faPhoneAlt} id='phone-icon' />
                                <h6 className="contact__heading">Đặt hàng: 1800 6936</h6>
                            </p>

                            <p className="mb-24">
                                <FontAwesomeIcon icon={faMapMarkerAlt} id='location-icon' />
                                <h6 className="contact__heading">Liên hệ</h6>
                            </p>

                            <p>
                                Tầng 3-4 Hub Building <br></br>
                                195/10E Điện Biên Phủ, P.15 , <br></br>
                                Q.Bình Thạnh, TP.Hồ Chí Minh
                            </p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className='addr'>
                            <img  src={logo} alt='coffe_addr' className="addr__logo"/>
                            <h4 className="brand-name">The Coffee House</h4>
                            <p className="addr__like">601.660 lượt thích</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;