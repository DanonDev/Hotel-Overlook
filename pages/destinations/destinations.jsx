import { DestStyle } from "./destinationsStyled"

import slider12 from "../../src/assets/images/sliderImages/center-square-wroclaw.jpg"
import slider11 from "../../src/assets/images/sliderImages/city-houses-reykjavik.jpg"
import slider10 from "../../src/assets/images/sliderImages/fishmarket-hamborg.jpg"
import slider9 from "../../src/assets/images/sliderImages/frankfurt-skyline-germany.jpg"
import slider8 from "../../src/assets/images/sliderImages/gdansk-center-church-poland.jpg"
import slider7 from "../../src/assets/images/sliderImages/harbour-gothenburg.jpg"
import slider6 from "../../src/assets/images/sliderImages/harbour-tromso.jpg"
import slider5 from "../../src/assets/images/sliderImages/hjuldamper-silkeborg.jpg"
import slider4 from "../../src/assets/images/sliderImages/lagoon-keflavik.jpg"
import slider3 from "../../src/assets/images/sliderImages/landscape-jonkobing.jpg"
import slider2 from "../../src/assets/images/sliderImages/luftfoto-lillehammer.jpg"
import slider1 from "../../src/assets/images/sliderImages/mons-klint-denmark.jpg"

const Destinations = () => {
    return (
        <DestStyle>
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
        </section>
        </DestStyle>
    )
}

export { Destinations }