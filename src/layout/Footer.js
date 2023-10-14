import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img src="img/footer.png" alt="" />
                
                </div>
                {/* <h4 className="fn_title">Join Now For Early Access</h4> */}
              <h4>Join Now For Early Access</h4>
              
              </div>
           
              <div className="neoh_fn_social_list">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fn-icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fn-icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fn-icon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fn-icon-youtube-play" />
                    </a>
                  </li>
                 
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>
                   Designed &amp;
                  Developed by{" "}
                  <a
                    href="https://blocktrix-labs.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                BlocktrixLabs
                  </a>
                </p>
              </div>
              <div className="fb_right">
                <ul>
                 
                 
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
