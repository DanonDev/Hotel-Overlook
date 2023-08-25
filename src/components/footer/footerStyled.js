import styled from "styled-components"

export const FooterStyle = styled.div`
margin-top: auto;

 .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    width: 100%;
    padding: 20px 0;
}

    .txt{
        cursor: default;
    }

    .social{
        display: flex;
        gap: 12px;
        img{
            cursor: pointer;
        }
    }

    .navbottom {
     display: flex;
     gap: 30px;
    }

    p{
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: #999999;
        cursor: pointer;
    }

`