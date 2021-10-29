import styled from 'styled-components';


export const App = styled.div`
    background-color: #252d4a;
    width: 100%;
    max-width: 500px;
    margin-top: 30px;
    margin-bottom: 30px;
    min-height: 200px;
    height: min-content;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: space-evenly;
`


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

export const QuestSection = styled.div`

  width: 100%;
  color:#fff;
  position: relative;
  margin-right: 15px;

`

export const QuestCont = styled.div`
  margin-bottom: 20px;
  span{
    font-size: 28px;
    margin-left: 10px;
  }

`

export const List = styled.div`
  display: block;

  p{
    margin-bottom:10px;
    font-size:18px;
  }

  li{
    list-style: none;
    font-size: 16px;
    

  }
  `

export const Category = styled.span`
    display: block;
    margin-bottom: 20px;

`


export const QuestText = styled.div`
 margin-bottom: 12px;


`
export const AnswerSection = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;

`

export const Button = styled.button`

  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 12px;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid #234668;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s;

  :hover{
      background-color:#949ec1;
  };
`

