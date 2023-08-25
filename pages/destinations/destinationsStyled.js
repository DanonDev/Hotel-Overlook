import styled from "styled-components"

export const DestStyle = styled.div `
    .sectionHome{
        width: 100%;
        overflow: hidden;
        position: relative;

        

        .imgContainer{
            background-color: yellow;
            display: flex;
            animation: slide 35s linear infinite;

            @keyframes slide{
            0% {
                transform: translateX(0);
            }
            5% {
                transform: translateX(0);
            }
            10% {
                transform: translateX(-2000px);
            }
            15% {
                transform: translateX(-2000px);
            }
            20% {
                transform: translateX(-4000px);
            }
            25% {
                transform: translateX(-4000px);
            }
            30% {
                transform: translateX(-6000px);
            }
            35% {
                transform: translateX(-6000px);
            }
            40% {
                transform: translateX(-8000px);
            }
            45% {
                transform: translateX(-8000px);
            }
            50% {
                transform: translateX(-10000px);
            }
            55% {
                transform: translateX(-10000px);
            }
            60% {
                transform: translateX(-12000px);
            }
            65% {
                transform: translateX(-12000px);
            }
            70% {
                transform: translateX(-14000px);
            }
            75% {
                transform: translateX(-14000px);
            }
            80% {
                transform: translateX(-16000px);
            }
            85% {
                transform: translateX(-16000px);
            }
            90% {
                transform: translateX(-18000px);
            }
            95% {
                transform: translateX(-18000px);
            }
            100% {
                transform: translateX(-20000px);
            }
            }

            .imgWrapper{
                height: 50vh;

                img{
                    width: 2000px;
                    height: 100%;
                    object-fit: cover;
                }
            }

        }
    }
`

export const CountrysNav = styled.div`

    .countryDetails{
        display: flex;
        margin-left: 20%;
        margin-right: 20%;
        box-shadow: 3px 10px 10px -10px #111; 
    }
    
    .coutryNav{
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: 'Open Sans', sans-serif;
        background-color:  white;

        p{
            color: #333333;
            cursor: pointer;
        }

        
        p:hover{
            color: #FF0000;
        }
    }
`