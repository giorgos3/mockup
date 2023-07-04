import { useTranslation } from "react-i18next";
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



const styles = {
    primary: {
        background: "#41EFD2",
        color: "black",
        fontSize: "14px",
        fontWeight: 600,
        border: "none",
        padding: "10px",
        width: "120px",
        borderRadius: '15px'

    },

}


const NavBar = () => {



    const { t, i18n } = useTranslation();

    return (
        
        <Navbar bg="white" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="https://goldenburggroup.eu/" target="_blank" >
                    <img
                        src="https://toptrader.eu/assets/main-logo-298345fa.svg"
                        width="auto"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="header logo"
                         />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link  rel="noreferrer" href="https://goldenburggroup.eu/" target="_blank" >
                    {t("header.products")}
                    <FontAwesomeIcon icon={faChevronDown} style={{paddingLeft:"5px"}} size="xs"/> 
                        </Nav.Link>
                        <Nav.Link  rel="noreferrer" href="https://goldenburggroup.eu/" target="_blank">
                        {t("header.platforms")}
                        <FontAwesomeIcon icon={faChevronDown} style={{paddingLeft:"5px"}} size="xs"/> 
                        </Nav.Link>
                        <Nav.Link  rel="noreferrer" href="https://goldenburggroup.eu/" target="_blank">
                        {t("header.learn")}
                        <FontAwesomeIcon icon={faChevronDown} style={{paddingLeft:"5px"}} size="xs"/> 
                        </Nav.Link>
                        <Nav.Link  rel="noreferrer" href="https://goldenburggroup.eu/" target="_blank">
                        {t("header.company")}
                        <FontAwesomeIcon icon={faChevronDown} style={{paddingLeft:"5px"}} size="xs"/> 
                        </Nav.Link>
                        
                    </Nav>
                    <Nav className="ms-auto px-10" style={{alignItems: 'center'}}>
                        <NavDropdown title={i18n.language.toUpperCase()} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('fr')}>Français</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('zh')}>中国人</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link  rel="noreferrer" href="https://goldenburggroup.eu/" target="_blank">{t("header.signin")}</Nav.Link>
                        <Nav.Link  rel="noreferrer" href="https://goldenburggroup.eu/" target="_blank">
                            <Button style={styles.primary}
                                href="https://goldenburggroup.eu/">
                                {t("header.register")}
                            </Button>
                        </Nav.Link>
                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );



}

export default NavBar;

