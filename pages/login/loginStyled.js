import styled from "styled-components"

export const LoginStyle = styled.div`
 .sectionLogin{
    display: flex;
    flex-direction: column;
    padding-left: 30%;
    height: 100vh;

    h1{
        font-family: 'Open Sans', sans-serif;
    }

    p{
        font-family: 'Open Sans', sans-serif;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 500px;
        
        input{
            height: 50px;
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

            *&:focus{
            outline: none;
            }

            &::placeholder {
                font-family: 'Open Sans', sans-serif;
                font-size: 15px;
            }
        }

        .btns{
            display: flex;
            gap: 30px;
            padding-top: 15px;
        }

        button{
            width: 100px;
            height: 50px;
            color: white;
            background: rgb(255,0,0);
            background: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(196,0,0,1) 55%, rgba(255,0,0,1) 100%);
            border: none;
            border-radius: 7px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 500;
            font-size: 15px;
            box-shadow: 0px 5px 12px -3px rgba(115,115,115,1);
            -webkit-box-shadow: 0px 5px 12px -3px rgba(115,115,115,1);
            -moz-box-shadow: 0px 5px 12px -3px rgba(115,115,115,1);
        }

        button:hover{
            font-weight: bold;
        }
    }
 }
`