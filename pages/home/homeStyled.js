import styled from "styled-components"

export const HomeStyle = styled.div `
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

        .welcome{
                background-color: #333333;
                position: absolute;
                width: 750px;
                top: 40%;
                left: 10%;
                opacity: 85%;
                border-bottom-right-radius: 80px;
                border-top-right-radius: 10px;
                 
                h1{
                    color: white;
                    padding-left: 20px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 500;
                    font-size: 30px;
                }
                .underline{
                    position: absolute;
                    background-color: red;
                    height: 15px;
                    width: 550px;
                    opacity: 85%;
                    border-bottom-right-radius: 80px;
                }
            }
    }

    .NewsRooms{
        display: flex;
        flex-direction: column;
    }

    
    h2{
        font-family: 'Open Sans', sans-serif;
        padding-left: 13%;
    }

    .news, .rooms {
        display: flex;
        justify-content: center;
        gap: 100px;

        .contentNews, .contentRooms{
            width: 400px;
            height: 200px;
            background-color: red;
            border: 1px solid black;
        }

        .contentRooms{
            margin-bottom: 70px;
        }
    }
`


