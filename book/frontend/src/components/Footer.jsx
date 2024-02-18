
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid " style={{paddingTop:"8%"}}>
      <hr />
      <div className="row p-5">
        <div className="col-lg-3">
          <h2 className="fs-4 text-primary fw-bold">BookHub</h2>
          <p className="mt-3 ">The best Look anytime,anywhere</p>
        </div>
        <div className="col-lg-3">
          <h2 className="fs-4 text-primary fw-bold">Links</h2>
          <div className="mt-3">
            <p>Featured</p>
            <p>Books</p>
            <p>About Us</p>
           
          </div>
        </div>
        <div className="col-lg-3">
          <h2 className="fs-4 text-primary fw-bold">Services</h2>
          <div className="mt-3">
            <p>Email Marketing</p>
            <p>Branding</p>
            <p>Offline</p>
           
          </div>
        </div>
        <div className="col-lg-3">
          <h1 className="fs-4 text-primary fw-bold">Subscribe</h1>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Your email address"
              className="form-control p-2"
            />
          </div>
          <button className="mt-3 py-2 px-3 border rounded bg-danger text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="row shadow-lg p-3">
        <div className="col-lg-6 p-3">
          <p className="fw-bolder fs-5">Copyright &copy; 2024 BookHub </p>
        </div>
        <div className="col-lg-6 p-3">
          <div className="ms-5 d-flex align-items-center justify-content-center gap-4">
            <FaFacebook size={20} className="text-primary"/>
            <FaYoutube size={20} className="text-primary"/>
            <FaInstagram size={20} className="text-primary"/>
            <FaTwitter size={20} className="text-primary"/>
            <FaGoogle size={20} className="text-primary"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;




