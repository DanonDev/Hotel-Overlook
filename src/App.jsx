import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Login } from '../pages/login/login'
import { Home } from '../pages/home/home'
import { Reservation } from '../pages/reservation/reservation'
import { Destinations } from '../pages/destinations/destinations'
import './App.css'

function App() {
    const [activeLink, setActiveLink] = useState(null);

    const linckClicked = (className) => {
        setActiveLink(className);
    }

    return (
        <div className='App'>
        <GlobalStyle/>
        <Header activeLink={activeLink} linckClicked={linckClicked}/>
        {activeLink === "login" ? (
        <Login/>
        ) : activeLink === 'home' ? (
        <Home/> 
        ) : activeLink === "reservation" ? (
        <Reservation/>
        ) : activeLink === 'hotels' ? (
        <Destinations/>
        ) : null}
        <Footer/>
        </div>
    )
}

export default App
