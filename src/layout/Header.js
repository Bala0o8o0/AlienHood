import Link from "next/link";
import { Fragment } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { darkTheme, lightTheme } from "@thirdweb-dev/react";

const customDarkTheme = darkTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    modalBg: "#000000",
    accentText: "#39ff14",

    primaryButtonBg: "#39ff14",
  },
});

<ConnectWallet theme={customDarkTheme} />;
const Header = () => {

  return (
    <Fragment>
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="img/logo2.png" alt="" />
                </a>
              </Link>
            </div>

            <ConnectWallet theme={customDarkTheme} />
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
