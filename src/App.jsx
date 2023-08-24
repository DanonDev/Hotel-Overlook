import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Login } from '../pages/login/login'
import { Home } from '../pages/home/home'
import { Reservation } from '../pages/reservation/reservation'

function App() {
    const [activeLink, setActiveLink] = useState(null);

    const linckClicked = (className) => {
        setActiveLink(className);
    }

    return (
        <>
        <Header activeLink={activeLink} linckClicked={linckClicked}/>
        {activeLink === "login" ? (
        <Login/>
        ) : activeLink === 'home' ? (
        <Home/> 
        ) : activeLink === "reservation" ? (
            <Reservation/>
        ) : null}
        <Footer/>
        </>
    )
}

export default App
