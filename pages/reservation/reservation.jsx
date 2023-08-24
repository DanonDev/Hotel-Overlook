import { ReservationStyle } from "./reservationStyled"

const Reservation = () => {
    return (
        <ReservationStyle>
        <div className="sectionReservation">
            <h1>Reservation</h1>
            <p>Udfyld nedenstående formular for at reservere er af vores værelser.</p>
            <form>
            <label/>
                <select id="destonations" name="destonation & hotel">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="inlineplacingfirst">
                <label/>
                <select id="rooms" name="værelsestype">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label/>
                <select id="person" name="antalPersoner">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </div>
                <p>Vælg prisklasse:</p>
                <div className="inlineplacingradio">
                <input type="radio" id="" name="Normal" value="Normal"/><span>Normal</span>
                </div>
                <div className="inlineplacingradio">
                <input type="radio" id="" name="Flex" value="Flex"/><span>Flex</span>
                </div>
                <div className="inlineplacingdate">
                <input type="date" id="" name=""></input>
                <input type="date" id="" name=""></input>
                </div>
                <input type="text" id="" name="Name" placeholder="Fornavn"></input>
                <input type="text" id="" name="Surname" placeholder="Efternavn(e)"></input>
                <div className="inlineplacingemtel">
                <input type="email" id="" name="Email" placeholder="Email"></input>
                <input type="number" id="" name="Telefon" placeholder="Telefon"></input>
                </div>
                <textarea placeholder="Kommentarer"/>
                <div className="inlineplacingbox">
                <input type="checkbox" id="" name="Tacc"/><span>Jeg accepterer hermed Overlooks betingelser (sæt kryds)</span>
                </div>
                <div className="inlineplacingbtns">
                <button>Send Reservation</button>
                <button>Annuller</button>
                </div>
            </form>
        </div>
        </ReservationStyle>
    )
}
export {Reservation}