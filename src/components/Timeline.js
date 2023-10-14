import Link from "next/link";
import { Fragment, useState } from "react";
const Timeline = () => {
  const [active, setActive] = useState(2);
  const [activeTimeline, setActiveTimeline] = useState(2);
  const onClick = (value) => {
    setActive(value);
  };
  const activeClass = (value) =>
    value === active ? "active" : value > active ? "next" : "previous";
  const filter = (value) => (100 / active) * value;
  return (
    <Fragment>
      {/* Main Title */}
      <div className="neoh_fn_title">
        <h3 className="fn_title">Roadmap</h3>
        <div className="line">
          <span />
        </div>
      </div>
      {/* !Main Title */}
      {/* Timeline */}
      <div className="neoh_fn_timeline">
        {/* Timeline Content */}
        <div className="timeline_content">
          <ul className="timeline_list">
            <li className={`timeline_item ${activeClass(1)}`} data-index={1}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="https://pbs.twimg.com/media/F8QSn-1XUAAOQHk?format=jpg&name=900x900" alt="" />
                      </div>
                      <div className="item">
                        <img src="https://pbs.twimg.com/media/F8NYBr2XQAAcnrg?format=jpg&name=900x900" alt="" />
                      </div>
                      <div className="item">
                        <img src="https://pbs.twimg.com/media/F8I_ML3WIAAJxtq?format=jpg&name=900x900" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>1</span>
                  </p>
                  <h3 className="fn_title">
                   
                    Creation
                  
                  </h3>
                  <p className="fn_desc">
                   AlienHood NFT Creation 
                  </p>
                 
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="https://pbs.twimg.com/media/F8BUzydXcAEf1jh?format=jpg&name=900x900" alt="" />
                      </div>
                      <div className="item">
                        <img src="https://pbs.twimg.com/media/F75lqBHXwAAd4Is?format=jpg&name=900x900" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>2</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                     Twitter Creation
                    </Link>
                  </h3>
                  <p className="fn_desc">
                   Twitter account creation for AlienHood NFT
                  </p>
                  <p className="fn_read">
                    <Link href="https://twitter.com/Alienhood_/media">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Twitter</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(3)}`} data-index={3}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="https://i.pinimg.com/736x/be/dd/c6/beddc667e33d0c343f6600cfbfc01321.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="https://pbs.twimg.com/media/F70jcbBXgAAAbZV?format=jpg&name=900x900" alt="" />
                      </div>
                      <div className="item">
                        <img src="https://pbs.twimg.com/media/F7spGENXMAAkriQ?format=jpg&name=900x900" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>3</span>
                  </p>
                  <h3 className="">
                    <Link href="https://discord.gg/MaVG4cKx">
                 Discord   Creation
                    </Link>
                  </h3>
                  <p className="fn_desc">
                  Discord  account creation for AlienHood NFT
                  </p>
                  <p className="fn_read">
                    <Link href="https://discord.gg/MaVG4cKx">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Discord</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(4)}`} data-index={4}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/4/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>4</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                      --
                    </Link>
                  </h3>
                  <p className="fn_desc">
                   --
                  </p>
                  <p className="fn_read">
                    <Link href="">
                      <a className="neoh_fn_button only_text">
                        <span className="text">---</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(5)}`} data-index={5}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/5/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>5</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                     --------
                    </Link>
                  </h3>
                  <p className="fn_desc">
                 ----------------
                  </p>
                  <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">----</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
         
            
          </ul>
        </div>
        {/* !Timeline Content */}
        {/* Timeline Progress */}
        <div className="timeline_progress">
          {/* Nav */}
          <a
            className="nav_prev c-pointer"
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 1 ? activeTimeline : activeTimeline - 1
              )
            }
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          <a
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 7 ? activeTimeline : activeTimeline + 1
              )
            }
            className="nav_next c-pointer"
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          {/* !Nav */}
          <div className="progress_line_wrapper">
            <div
              className="progress_line"
              style={{
                width: "1645.66px",
                transform: `translateX(-${
                  (100 / activeTimeline) * (activeTimeline - 2)
                }%)`,
              }}
            >
              <ul>
                <li className={activeClass(1)}>
                  <a onClick={() => onClick(1)}>
                    <span className="text">1</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(1)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">2</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(2)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(3)}>
                  <a onClick={() => onClick(3)}>
                    <span className="text">3</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(3)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(4)}>
                  <a onClick={() => onClick(4)}>
                    <span className="text">4</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(4)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(5)}>
                  <a onClick={() => onClick(5)}>
                    <span className="text">5</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(5)}%)` }}
                    />
                  </a>
                </li>
               
              
              </ul>
              <span className="active_line" />
            </div>
          </div>
        </div>
        {/* !Timeline Progress */}
      </div>
      {/* !Timeline */}
    </Fragment>
  );
};
export default Timeline;
