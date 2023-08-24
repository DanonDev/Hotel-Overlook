import Twitter from "../../assets/images/Icon-twitter.png"
import Facebook from "../../assets/images/Icon-facebook.png"
import { FooterStyle } from "./footerStyled"

const Footer = () => {
    return (
        <>
        <FooterStyle>
        <div className="footer">
            <p className="txt">© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
            <div className="social">
                <img src={Twitter}/>
                <img src={Facebook}/>
            </div>
            <div className="navbottom">
                <p>Forside</p>
                <p>Hoteller & Destinationer</p>
                <p>Værelser</p>
                <p>Reservation</p>
                <p>Login</p>
            </div>   
        </div>
        </FooterStyle>
        </>
    )
}

export {Footer}