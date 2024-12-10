import { useEffect, useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";

const KendurnsHero = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setActive(active >= 5 ? 1 : active + 1);
    }, 7000);
  });

  return (
    <div className="neoh_fn_hero">
      {/* <WaterWave> */}
      {/* Overlay (of hero header) */}
      <div className="bg_overlay">
        {/* Overlay Color */}
        <div className="bg_color" />
        {/* !Overlay Color */}
        {/* Overlay Slider */}
        <div
          className="overlay_slider vegas-slide vegas-container"
          style={{ height: `100%` }}
        >
          <div
            className="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out"
            style={{ transition: "all 1000ms ease 0s" }}
          >
            <div
              className={`vegas-slide-inner vegas-animation-${
                active % 2 ? "kenburnsRight" : "kenburnsLeft"
              }`}
              style={{
                // backgroundImage: `url("img/drops/${active}.jpg")`,
                backgroundImage: `url("https://media4.giphy.com/media/NKEt9elQ5cR68/giphy.gif?cid=6c09b952a9sg8x4q8fnainv33fynw0ksxkk8l8faqdujda4d&ep=v1_gifs_search&rid=giphy.gif&ct=g")`,
                // backgroundImage: `url("https://pbs.twimg.com/media/F7vxcsrWYAAezmG?format=jpg&name=900x900")`,
                backgroundColor: "rgba(0, 0, 0, 0)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                animationDuration: "7000ms",
              }}
            />
          </div>
        </div>
        {/* !Overlay Slider */}
      </div>
      {/* Overlay (of hero header) */}
      <div className="hero_content">
        <div className="container">
          <div className="content">
            <div id="magic" />
            <h2 className="fn_title" title="Alienhood">
            Alienhood
            </h2>
            <p className="fn_desc fn_animated_text">
            Introducing Alienhood, a groundbreaking 5k pfp NFT collection!
            </p>
          </div>
        </div>
        <div className= "content">
        <div className="buttons">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/alien.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">MINT</span>
              </a>

        </div>
        </div>
      </div>
      <a href="#about" className="neoh_fn_down magic-hover magic-hover__square">
        <span className="text">Scroll Down</span>
        <span className="icon">
          <img src="svg/right-arr.svg" alt="" className="fn__svg" />
        </span>
      </a>
    {/* </WaterWave> */}
    </div>
  );
};
export default KendurnsHero;
