
import { useTranslation } from "react-i18next";

const Benefits = () =>{

    const { t } = useTranslation();

    return(
        <section id="benefits-mt5">
            <div className="container">
                <div className="row benefits">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img alt="" src="/benefits-laptop.png" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex flex-column benefits-content">
                                <h1><span dangerouslySetInnerHTML={{__html: t(`benefits.title`) }} /></h1>
                                <ul className="benefit-li">
                                    <li>{t("benefits.benefits.li1")}</li>
                                    <li>{t("benefits.benefits.li2")}</li>
                                    <li>{t("benefits.benefits.li3")}</li>
                                    <li>{t("benefits.benefits.li4")}</li>
                                    <li>{t("benefits.benefits.li5")}</li>
                                    <li>{t("benefits.benefits.li6")}</li>
                                    <li>{t("benefits.benefits.li7")}</li>
                                </ul>
                            </div>
                    </div>

                </div>
            </div>
        </section>
    )
    ;
}

export default Benefits