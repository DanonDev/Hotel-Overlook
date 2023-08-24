import { HomeStyle } from "./homeStyled"

import slider1 from "../../src/assets/images/sliderImages/center-square-wroclaw.jpg"
import slider2 from "../../src/assets/images/sliderImages/city-houses-reykjavik.jpg"
import slider3 from "../../src/assets/images/sliderImages/fishmarket-hamborg.jpg"
import slider4 from "../../src/assets/images/sliderImages/frankfurt-skyline-germany.jpg"
import slider5 from "../../src/assets/images/sliderImages/gdansk-center-church-poland.jpg"
import slider6 from "../../src/assets/images/sliderImages/harbour-gothenburg.jpg"
import slider7 from "../../src/assets/images/sliderImages/harbour-tromso.jpg"
import slider8 from "../../src/assets/images/sliderImages/hjuldamper-silkeborg.jpg"
import slider9 from "../../src/assets/images/sliderImages/lagoon-keflavik.jpg"
import slider10 from "../../src/assets/images/sliderImages/landscape-jonkobing.jpg"
import slider11 from "../../src/assets/images/sliderImages/luftfoto-lillehammer.jpg"
import slider12 from "../../src/assets/images/sliderImages/mons-klint-denmark.jpg"




const Home = () => {
    return (
        <HomeStyle>
        <section className="sectionHome">
            <div className="imgContainer">
                <div className="imgWrapper">
                <img src={slider1}/>
                </div>
                <div className="imgWrapper">
                <img src={slider2}/>
                </div>
                <div className="imgWrapper">
                <img src={slider3}/>
                </div>
                <div className="imgWrapper">
                <img src={slider4}/>
                </div>
                <div className="imgWrapper">
                <img src={slider5}/>
                </div>
                <div className="imgWrapper">
                <img src={slider6}/>
                </div>
                <div className="imgWrapper">
                <img src={slider7}/>
                </div>
                <div className="imgWrapper">
                <img src={slider8}/>
                </div>
                <div className="imgWrapper">
                <img src={slider9}/>
                </div>
                <div className="imgWrapper">
                <img src={slider10}/>
                </div>
                <div className="imgWrapper">
                <img src={slider11}/>
                </div>
                <div className="imgWrapper">
                <img src={slider12}/>
                </div>
            </div>
            <div className="welcome">
            <h1>VELKOMMEN TIL HOTEL OVERLOOK ONLINE</h1>
            <div className="underline"/>
            </div>
        </section>
        <section className="NewsRooms">
        <h2>Sidste nyt</h2>
        <div className="news">
            <div className="contentNews"></div>
            <div className="contentNews"></div>
            <div className="contentNews"></div>
        </div>
        <h2>Se vores ugvalg af værelser</h2>
        <div className="rooms">
            <div className="contentRooms"></div>
            <div className="contentRooms"></div>
            <div className="contentRooms"></div>
        </div>
        </section>
        </HomeStyle>
    )
}

export {Home}