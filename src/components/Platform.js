import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";


const Platform = () => {


    const { t, i18n } = useTranslation();

    const data = [
        {
            id:1,
            img:"/assets/secure-web-6817a64b.png",
            content:{
                title :`${t("platform.caption.simple.title")}`,
                li :[`${t("platform.caption.simple.li1")}`,
                `${t("platform.caption.simple.li2")}`,
                `${t("platform.caption.simple.li3")}`]
            }
        },
        {
            id:2,
            img:"/assets/simple-web-aaaceaf7.png",
            content:{
                title :`${t("platform.caption.secure.title")}`,
                li :[`${t("platform.caption.secure.li1")}`,
                `${t("platform.caption.secure.li2")}`,
                `${t("platform.caption.secure.li3")}`]
            }
        },
        {
            id:3,
            img:"/assets/functional-mob-e36a224b.png",
            content:{
                title :`${t("platform.caption.functional.title")}`,
                li :[`${t("platform.caption.functional.li1")}`,
                `${t("platform.caption.functional.li2")}`,
                `${t("platform.caption.functional.li3")}`]
            }

        }
    ]

    const [count, setCount] = useState(0);
    const [content, setContent] = useState(data[count]);
    


    useEffect(() => {

        setContent(data[0])
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[i18n.language]);



    let handleContent = () => {
        
        setCount(count+1)
            if(count === 2){
                setCount(0)
                setContent(data[0])
            }
        
        setContent(data[count])


    }

return(
    <section className="platforms">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-7">
                <div className="images-section" onClick={() => handleContent()}>
                        <img alt=""  src={`https://toptrader.eu/${content.img}`} className="img-fluid" />
                </div>

            </div>
            <div className="col-lg-6 col-md-5">
               <div className="wrapper"> 
                    <div className="platform-box">
                    <h2 className="platforms-title title">{t("platform.title")}</h2>
                    <h3 className="platforms-caption title">{content.content.title}</h3>
                    <ul>
                        {
                            content.content.li.map((text, i) =>(
                                 <li key={i}>{text}</li>
                                    )
                                )
                        }

                    </ul>
                    </div>
            </div>
            </div>

        </div>
        <div className="row text-center hidden-mobile">
        <a className="scroll-btn" href="#metatrader5">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M8.4707 10.6401L12.0007 14.1601L15.5307 10.6401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </a>
        </div>
    </div>
    
    </section>

);


}


export default Platform;