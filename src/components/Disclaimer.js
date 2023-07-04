import { useTranslation } from "react-i18next";



const Disclaimer = () => {


    const { t } = useTranslation();


return(
    <div className="container-fluid disclaimer-footer">
        <p> 
            <span dangerouslySetInnerHTML={{__html: t(`footer.disclaimer`) }} />
        </p>
    </div>



);




}

export default Disclaimer;