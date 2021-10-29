import styled from 'styled-components'

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
    font-size: 32px;
    span{
        display: block;
        font-size: 52px;
        color:rgb(100, 230, 172);
    }

`

export const Container = styled.div`
    width: 375px;
    margin: 50px auto;
    display: block;
    background-color: #252d4a;
    padding: 20px;
    border-radius: 10px;
    height: 450px;



`

export const Flex = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const Button = styled.button`


    width: 200px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    font-size:16px;
    margin: 10px auto;
    color: #fff;
    align-items: center;
    justify-content:center;
    background: ${props => `${props.background}`};
    border: none;
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
    :active{
        opacity: 0.6;
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

export const Input = styled.input`
    width: 250px;
    height: 35px;
    display: block;
    margin: 10px auto;
    border-radius: 6px;
    color:#000;
    text-align:center;
    font-size: 16px;
    outline: none;
    border: none;
    ::placeholder{
        color: #000;
    }
`