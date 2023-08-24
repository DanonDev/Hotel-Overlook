import styled from "styled-components"

export const HeaderStyle = styled.div`

.navigation {
    display: flex;
    justify-content: space-around;
    background-color: black;
    padding-top: 22px;
    padding-bottom: 22px;

    /* .logo {
        
    } */

    nav {
        display: flex;
        align-items: center;

        ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding-top: 55px;
            margin: 0;

            li{
                border-right: 2px solid #c4c4c4;
                display: inline-block;
                padding: 0 25px;

            &:last-child {
                border-right: 0;
            }


                a{
                    color: white;
                    cursor: pointer;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 500;
                    transition: color 0.3s, border-color 0.3s; 

                &.active {
                    color: #FF0000;
                    /* font-weight: 400; */
            }
        }
    }
}
}
}

`