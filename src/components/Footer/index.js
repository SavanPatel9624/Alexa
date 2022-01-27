import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getFooterData } from "../../reducer/action";
import { handleEnterLeave, handleEnterMouse } from "../../common";
import InquiryForm from "../Form";

const addressData = [
  { name: "company", title: "Company", defaultValue: "" },
  { name: "area", title: "Area", defaultValue: "" },
  { name: "landmark", title: "Landmark", defaultValue: "" },
  { name: "city", title: "City", defaultValue: "" },
  { name: "state", title: "State", defaultValue: "" },
  { name: "pincode", title: "Pincode", defaultValue: "" },
];

const Footer = (props) => {
  const [address, setAddress] = useState();
  const [addressJson, setAddressJson] = useState(addressData);
  const [sendMessage, setSendMessage] = useState(false);

  const { footerData } = props || {};

  useEffect(() => {
    if (footerData?.address) {
      const oldAddress = [];
      const JionArray = footerData?.address?.split("$");
      addressJson.map((e, i) => (e.defaultValue = JionArray[i]));
      setAddressJson(addressJson);

      oldAddress["company"] = JionArray[0];
      JionArray.shift();
      oldAddress["adLine"] = JionArray.map((e) => e).join(", ");
      setAddress(oldAddress);
    }
  }, [footerData]);

  useEffect(() => {
    props.getFooterData();
  }, []);

  const handleMessage = () => {
    setSendMessage(!sendMessage);
  };
  return (
    <footer
      className="main-footer dark position-relative"
      style={{ clear: "both" }}
    >
      <span className="whats_app_icon">
        <a
          href="https://wa.me/919512345033"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp-square" />
        </a>
      </span>
      <span className={`send_message_block ${sendMessage ? 'right_side' : ''}`}>
        <span
          className={`${sendMessage ? "full_label" : ""} send_message`}
          onClick={() => !sendMessage && handleMessage()}
        >
          <span>{!sendMessage ? "Send ema.." : "Send email"}</span>
          {sendMessage && (
            <span>
              <i className="fa fa-close" onClick={() => handleMessage()} />
            </span>
          )}
        </span>
        <div className={`sms_box ${sendMessage ? "full_height_form" : ""}`}>
          <div>
            <p>
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>
          </div>
          <div></div>
          <InquiryForm isContact isFooter />
        </div>
      </span>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 item-box">
            <div className="item abot">
              <div className="logo-footer">
                <Link
                  to="/"
                  className="logo"
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <img src={footerData?.logo} alt="Alexa" />
                </Link>
              </div>
              <div className="social-icon">
                {footerData?.facebook &&<a
                    href={footerData?.facebook}
                    target="_blank"
                    onMouseEnter={handleEnterMouse}
                    onMouseLeave={handleEnterLeave}
                >
                  <i className="fab fa-facebook-f" />
                </a>}
                {footerData?.instagram &&<a
                    href={footerData?.instagram}
                    target="_blank"
                    onMouseEnter={handleEnterMouse}
                    onMouseLeave={handleEnterLeave}
                >
                  <i className="fab fa-instagram" />
                </a>}
                {footerData?.twitter && <a
                    href={footerData?.twitter}
                    target="_blank"
                    onMouseEnter={handleEnterMouse}
                    onMouseLeave={handleEnterLeave}
                >
                  <i className="fab fa-twitter" />
                </a>}
                {footerData?.printrest && <a
                    href={footerData?.printrest}
                    target="_blank"
                    onMouseEnter={handleEnterMouse}
                    onMouseLeave={handleEnterLeave}
                >
                  <i className="fab fa-pinterest-p" />
                </a>}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 item-box">
            <div className="item usful-links">
              <div className="fothead">
                <h6>Useful Links</h6>
              </div>
              <ul>
                <li
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/">Home</Link>
                </li>
                <li
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/company-profile">Company Profile</Link>
                </li>
                <li
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/collection">Collections</Link>
                </li>
                <li
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <i className="fas fa-chevron-right" />
                  <Link to="/catalogue">Catalogue</Link>
                </li>
                <li
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <i className="fas fa-chevron-right" />
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item-box">
            <div className="item fotcont write">
              <div className="fothead">
                <h6>Contact Us</h6>
              </div>
              <p>
                <a
                  href={`tel:+${footerData?.mobile}`}
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <i className="fas fa-phone-volume" /> +91{footerData?.mobile}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footerData?.email}`}
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleEnterLeave}
                >
                  <i className="far fa-envelope" /> {footerData?.email}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item-box">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Visit</h6>
              </div>
              <span>
                <i className="fas fa-map-marker-alt" /> {address?.company}
              </span>
              <p className="faddress">{address?.adLine}</p>
            </div>
          </div>
        </div>
        <div className="d-flex copany-rights">
          <p>© 2021 All Right Reserved</p>
          <p>Made By:- Miracle Software Solution</p>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  footerData: state?.footerData,
});
const mapDispatchToProps = {
  getFooterData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
