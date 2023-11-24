import React from "react";
import "./footer.css";
import Layout from "../../utils/layout/layout";
import Logo from "../../assets/logo.svg";
import AppStore from "../../assets/app-store.png";
import PlayStore from "../../assets/google-play.png";
import { NavLink } from "react-router-dom";
import Linkedin from "../../svg-component/linkedin/linkedin";
import Twitter from "../../svg-component/twitter/twitter";
import Facebook from "../../svg-component/facebook/facebook";
import Instagram from "../../svg-component/instagram/instagram";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer-container">
      <Layout>
        <div className="footer-cont">
          <div className="footer-header">
            <div className="footer-text">
              <img src={Logo} alt="footer" />
              <p>BankIT is a financial technology company and not a Money Service Business. All Deposit services are provided by partner banks.</p>
              <p>Currently, only virtual cards are issued at this time. Physical cards will be made available at a later date.</p>
            </div>
            <div className="footer-links">
              <div className="footer-quick-links">
                <h2>Quick Links</h2>
                <NavLink>Accounts</NavLink>
                <NavLink>Loans</NavLink>
                <NavLink>Cards</NavLink>
              </div>
              <div className="footer-quick-links">
                <h2>Company</h2>
                <NavLink>About us</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Privacy & Terms</NavLink>
              </div>
              <div className="footer-quick-links">
                <h2>Security</h2>
                <NavLink>Fraud Prevention</NavLink>
                <NavLink>Security</NavLink>
              </div>
              <div className="footer-quick-links">
                <h2>Support</h2>
                <NavLink>FAQ’S</NavLink>
                <NavLink>Help</NavLink>
                <NavLink>Contact us</NavLink>
              </div>
            </div>
          </div>
          <div className="footer-body">
            <p>© {date.getFullYear()} BankIt Inc</p>
            <div className="footer-socials">
              <Linkedin />
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
            <div className="footer-stores">
              <img src={AppStore} alt="app-store" />
              <img src={PlayStore} alt="play-store" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Footer;
