import { useTranslation } from "react-i18next";


const MetaTrader5 = () => {

    const { t } = useTranslation();

    return(
        <section className="mt5">
            <div className="container" id="metatrader5">
                <div className="row row-mt5">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="d-flex flex-column mt5-content">
                            <h2 className="mt5-title">MetaTrader 5</h2>
                            <p className="mt5-text">{t("mt5.text")}</p>

                              <div className="button-group">
                                <a href="https://goldenburggroup.eu/" rel="noreferrer" target="_blank" className="btn btn-primary">
                                <img alt="" src="https://toptrader.eu/assets/download-icon-1395acaf.svg" style={{ paddingRight: 10 }} />
                                {t("mt5.download")}
                                </a>

                                <a href="https://goldenburggroup.eu/" rel="noreferrer" target="_blank" className="btn btn-primary">
                                <img alt="" src="https://toptrader.eu//assets/google-play-logo-d55a13b8.svg" style={{ paddingRight: 10 }} />
                                    Google Play
                                </a>
                            </div>  
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <img alt="" src="https://toptrader.eu//assets/download-image-web-ccc1afc8.png" className="img-fluid"/>
                    </div>
                </div>
                <div className="row text-center hidden-mobile">
        <a className="scroll-btn-metatrader" href="#benefits-mt5">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M8.4707 10.6401L12.0007 14.1601L15.5307 10.6401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </a>
        </div>
            </div>
        </section>

    );


}


export default MetaTrader5;