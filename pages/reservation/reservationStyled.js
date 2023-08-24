import styled  from "styled-components";

export const ReservationStyle = styled.div `

.sectionReservation{
    display: flex;
    flex-direction: column;
    padding-left: 20%;
    height: 120vh;

    h1, p, span, input, textarea, button{
        font-family: 'Open Sans', sans-serif;
        padding: 10px;
    }

    input, textarea{
        border: none;
        border-radius: 5px;
        padding-left: 10px;
        margin-top: 5px;
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        box-shadow: 0px 5px 12px -3px rgba(115,115,115,0.51);
        -webkit-box-shadow: 0px 5px 12px -3px rgba(115,115,115,0.51);
        -moz-box-shadow: 0px 5px 12px -3px rgba(115,115,115,0.51);
        cursor: pointer;

        *&:focus{
            outline: none;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        width: 500px;
        gap: 20px;

        .inlineplacingfirst{
            display: flex;
            justify-content: space-between;

            select{
                /* width: 50px; */
            }
        }

        .inlineplacingradio{

            input{
                transform: scale(1.5);
            }
            span{
                padding-left: 10px;
            }
        }

        .inlineplacingdate{
            display: flex;
            gap: 30px;

            input{
                width: 100%;
                padding: 10px;
            }
        }

        .inlineplacingemtel {
            display: flex;
            gap: 30px;
            
            input[type="email"]{
                width: 60%;
            }

            input[type=number] {
                width: 40%;
            }

            input::-webkit-inner-spin-button {
               -webkit-appearance: none;
            }
        }

        textarea{
            height: 10vh;
            resize: none;
        }

        .inlineplacingbox{
            input{
                transform: scale(1.5);
            }
        }

        .inlineplacingbtns{
            display: flex;
            gap: 20px;

            button{
                color: white;
                background: rgb(255,0,0);
                background: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(196,0,0,1) 55%, rgba(255,0,0,1) 100%);
                border: none;
                border-radius: 7px;
                font-family: 'Open Sans', sans-serif;
                font-weight: 500;
                font-size: 15px;
                cursor: pointer;
            }

            button:hover{
                font-weight: bold;
            }
        }


    }
}

`