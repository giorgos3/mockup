import { useTranslation } from "react-i18next";


const Header = () => {

    const { t } = useTranslation();

    return (
        <main className="header-section main-header-section">
        <div className="container header">
            <div className="row align-items-center">
           
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="header-content d-flex flex-column mx-auto">
                        <h1>{t("section-header.h1")}</h1>
                        <p style={{ paddingTop: "30px" }}>{t("section-header.p")}</p>

                        <ul className="list-styled" >
                            <li>{t("section-header.li1")}</li>
                            <li>{t("section-header.li2")}</li>
                            <li>{t("section-header.li3")} </li>

                        </ul>

                        <div className="button group">
                            <div className="d-flex trader">
                                <a rel="noreferrer" target="_blank" href="https://goldenburggroup.eu/" className="btn btn-primary btn-lg">
                                    <img alt="" src="https://toptrader.eu//assets/apple-logo-7e35ae5a.svg" style={{ paddingRight: 10 }}/>
                                    App Store
                                </a>
                                <a rel="noreferrer" target="_blank" href="https://goldenburggroup.eu/" className="btn btn-primary btn-lg">
                                    <img alt="" src="https://toptrader.eu//assets/google-play-logo-d55a13b8.svg" style={{ paddingRight: 10 }}/>
                                    Google Play</a>
                            </div>
                        
                            <div className="d-flex trader">
                                <a rel="noreferrer" target="_blank" href="https://goldenburggroup.eu/" className="btn btn-primary btn-lg">
                                    <img alt="" src="https://toptrader.eu//assets/icon-planet-ab33efd7.svg" style={{ paddingRight: 10 }} />
                                    WebTrader
                                </a>
                                <a rel="noreferrer" target="_blank" className="qr-code" href="https://goldenburggroup.eu/">
                                        <img  src="https://toptrader.eu/assets/QR-89fbc179.png" width="50" height="50" alt="qr code" />
                                    </a>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{zIndex:3}}>
                    <img alt="" src="/laptop-section1.png" className="img-fluid"/>

                </div>
            </div>
        </div>
        </main>
    );

}

export default Header;