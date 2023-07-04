
import { useTranslation } from "react-i18next";


const PromoBox = () =>{

    const { t } = useTranslation();

return(
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column justify-content-center align-items-start promo">
                    <h1 className="promo-title">
                        <span dangerouslySetInnerHTML={{__html: t(`promo.title`) }} />
                    </h1>
                    <a href="https://goldenburggroup.eu/" className="btn-contact" rel="noreferrer" target="_blank">{t("promo.cta")}</a>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <img alt=""src="/wave.png" className="img-fluid wave" />

                    
                </div>
            </div>
        </div>
    </section>
);
    
}

export default PromoBox