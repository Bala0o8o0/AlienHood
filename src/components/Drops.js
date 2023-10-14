import { Fragment, useState } from "react";
import ProductPopup from "./popup/ProductPopup";
import Timeline from "./Timeline";

const Drops = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({ img: "", title: "" });
  const dropData = [
    {
      img: "img/drops/1.jpg",
      title: "AlienHood #",
    },
    {
      img: "img/drops/2.jpg",
      title: "AlienHood #",
    },
    {
      img: "img/drops/3.jpg",
      title: "AlienHood #",
    },
    {
      img: "img/drops/4.jpg",
      title: "AlienHood #",
    },
    {
      img: "img/drops/5.jpg",
      title: "AlienHood #",
    },
    {
      img: "img/drops/6.jpg",
      title: "AlienHood #",
    },
  ];

  const onClick = (value) => {
    setData(dropData[value - 1]);
    setToggle(true);
  };

  const { img, title } = data;

  return (
    <Fragment>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        title={title}
      />
      {/* Drops Section */}
      <section id="drop">
        <div className="container">
          {/* Main Title */}
          <div className="neoh_fn_title">
            <h3 className="fn_title">Our Latest Drops</h3>
            <div className="line">
              <span />
            </div>
          </div>
          {/* !Main Title */}
          {/* Drops List */}
          <div className="neoh_fn_drops">
            <ul>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/1.jpg"
                  data-modal-title="AlienHood #"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://pbs.twimg.com/media/F8TUEhWWwAEBcn4?format=jpg&name=900x900" alt="" />
                    <a className="full_link" onClick={() => onClick(1)} />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(1)}>AlienHood #102</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/2.jpg"
                  data-modal-title="AlienHood #120"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url=""
                  data-modal-discord-url="#"
                >
                  <div className="img_holder">
                    <img src="https://pbs.twimg.com/media/F8D6JefW8AATsAy?format=jpg&name=900x900" alt="" />
                    <a onClick={() => onClick(2)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(2)}>AlienHood #120</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/3.jpg"
                  data-modal-title="AlienAlienHood #1000"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://pbs.twimg.com/media/F8NYBr2XQAAcnrg?format=jpg&name=900x900" alt="" />
                    <a onClick={() => onClick(3)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(3)}>AlienAlienHood #600</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/4.jpg"
                  data-modal-title="AlienHood #1000"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://pbs.twimg.com/media/F7nPqyFWsAA6jNp?format=jpg&name=900x900" alt="" />
                    <a onClick={() => onClick(4)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(4)}>AlienHood #1200</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/5.jpg"
                  data-modal-title="AlienHood #1000"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://pbs.twimg.com/media/F67vEaMWsAAjj0P?format=jpg&name=900x900" alt="" />
                    <a onClick={() => onClick(5)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(5)}>AlienHood #1030</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/6.jpg"
                  data-modal-title="AlienHood #2 "
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://pbs.twimg.com/media/FzI2viLX0Ak6ITa?format=jpg&name=900x900" alt="" />
                    <a onClick={() => onClick(6)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(6)}>AlienHood #2</a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
            {/* Clearfix */}
            <div className="clearfix" />
          </div>
          {/* !Drops List */}
          <Timeline />
        </div>
      </section>
      {/* !Drops Section */}
    </Fragment>
  );
};
export default Drops;
