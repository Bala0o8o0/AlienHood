import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img
              src="https://pbs.twimg.com/media/F75iZ_DXkAAurZb?format=jpg&name=900x900"
              alt=""
            />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">STORY</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Alienhood, a groundbreaking 5k pfp NFT collection! With 5000
                unique and captivating NFTs,
              </p>
              <p>
                Alienhood is powered by the Solana Blockchain, unlocking
                incredible utility and genuine value for our investors.
              </p>
              <h4> Join Us on Discord </h4>
            </div>
            <div className="buttons">
              {/* <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a> */}
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img
              src="https://pbs.twimg.com/media/F7vxcsrWYAAezmG?format=jpg&name=900x900"
              alt=""
            />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">FOCUS</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Simply holding a AlienHood will give you access to seasonal airdrops,
                merchandise, digital artworks, collectibles and
                more.
              </p>
              <p>
              At Alienhood, we recognize the profound connection between the realms of art and community. Our mission is to unite these two worlds in a harmonious fusion, fostering an environment where the community thrives through creative collaboration and innovation. 
              </p>
            </div>
            <div className="buttons">
              <Link href="https://twitter.com/Alienhood_">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
