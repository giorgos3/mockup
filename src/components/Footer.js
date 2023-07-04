
import { useTranslation } from "react-i18next";





const Footer = () => {

    const { t } = useTranslation();

    return (


        <footer>
            <div className="footer" style={{ background: '#f3f3f3', paddingTop: "2%" }}>
                <div className="container">
                    <div className="row mx-auto p-2">
                        <div className="col-lg-3 text-center hidden-mobile">
                            <img
                                src="https://toptrader.eu/assets/main-logo-298345fa.svg"
                                width="auto"
                                height="auto"
                                className="img-fluid"
                                alt="header logo"
                                />
                        </div>
                        <div className="col-lg-9 center">
                            <div className="row ">
                                <div className="col-lg-7 col-md-6 col-sm-12">
                                    <div className="d-flex flex-row justify-content-between">

                                    <ul className="list-group list-unstyled">
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
              <span>{t("footer.products")}</span>
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.stocks")}
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.etfs")}
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.indices")}
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.commodities")} 
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.crypto")}  
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.forex")}  
          </a>
      </li>
                                    </ul>

                                    <ul className="list-group list-unstyled">
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
              <span> {t("footer.platforms")} </span>
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.topTrader")}
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.mt5")}
          </a>
      </li>
                                    </ul>

                                    <ul className="list-group list-unstyled">
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
              <span> {t("footer.learn")}</span>
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.help-center")}
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.signal-center")}
          </a>
      </li>
                                    </ul>

                                    <ul className="list-group list-unstyled">
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
              <span> {t("footer.company")}</span>
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.about")} 
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.regulation")}   
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.legal")}
          </a>
      </li>
      <li>
          <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
          {t("footer.contact")}  
          </a>
      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-5 col-md-6 d-flex justify-content-between icons-footer">
                                    <div className="d-flex-column">
                                        <span className="social-title"> {t("footer.social")}  </span>
                                        <ul className="list-unstyled d-flex social-media-icons">

                                            <li>
                                                <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                                    <div className="social-icon footer-social-icon-fb"></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                                    <div className="social-icon footer-social-icon-ig"></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                                    <div className="social-icon footer-social-icon-tw"></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                                    <div className="social-icon footer-social-icon-lin"></div>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                <div className="footer-apps d-flex flex-column">
                                    <div className="d-flex flex-column" style={{ gap: '20px' }}>
                                        <a href="https://goldenburggroup.eu/" rel="noreferrer" target="_blank">
                                            <img src="https://toptrader.eu/assets/appstore-2e1991ba.svg" width="124" height="35" alt="appstore icon" />

                                        </a>
                                        <a href="https://goldenburggroup.eu/" rel="noreferrer" target="_blank">
                                            <img src="https://toptrader.eu/assets/googleplay-dc23b6a8.svg" width="124" height="35" alt="appstore icon" />
                                        </a>
                                        <a className="qr-code" href="https://goldenburggroup.eu/">
                                            <img src="https://toptrader.eu/assets/QR-89fbc179.png" width="60" height="60" alt="qr code" />

                                        </a>
                                        </div>
                                 </div>



                                    
                                </div>
                              

                            </div>

                        </div>
                    </div>    
                       

                        <div className="row" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                            <div className="col-lg-3 col-md-3 col-sm-12"></div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">

                                <ul className="d-flex flex-row list-unstyled" style={{gap:30}}>
                                    <li>
                                        <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                        {t("footer.client-agree")}
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                        {t("footer.privacy")}  
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                        {t("footer.cookie")} 
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="noreferrer" target="_blank" href='https://goldenburggroup.eu/'>
                                        {t("footer.risk")} 
                                        </a>
                                    </li>

                                </ul>

                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 "></div>
                        </div>

                        <div className="row terms-area">
                         
                            <div className="col-lg-6 col-md-10 col-sm-12 mx-auto footer-terms">
                                <p> {t("footer.terms.p")}  </p>
                                <p>{t("footer.terms.risk")} </p>
                                <p>{t("footer.terms.area")} </p>
                            </div>
                           
                        </div>



                    </div>
                </div>
            
           
        </footer>


    );



}


export default Footer