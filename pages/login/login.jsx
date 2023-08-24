import { LoginStyle } from "./loginStyled"

const Login = () => {
    return (
        <LoginStyle>
        <div className="sectionLogin">
        <h1>Login</h1>
        <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
        <form>
            <input type="text" placeholder="Brugernavn"></input>
            <br/>
            <input type="password" placeholder="Adgangskode"></input>
            <br/>
            <div className="btns">
            <button>Login</button> {/* and */} <button>Annuller</button>
            </div>
        </form>
        </div>
        </LoginStyle>
    )
}

export {Login}