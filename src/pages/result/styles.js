import styled from 'styled-components'

export const Score = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    align-items: center;
    color:#fff;

    a{
        margin-top:100px;
    }

    `

export const List = styled.div`
  display: block;

  p{
    margin:15px 0;
    font-size:24px;
  }

  li{
    list-style: none;
    font-size: 16px;
    

  }
  `

export const App = styled.div`
background-color: #252d4a;
width: 100%;
margin-top: 30px;
margin-bottom: 30px;
max-width: 500px;
min-height: 200px;
height: min-content;
border-radius: 15px;
padding: 20px;
box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
display: flex;
justify-content: space-evenly;
`