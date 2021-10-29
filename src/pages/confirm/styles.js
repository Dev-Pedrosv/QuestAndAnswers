import styled from 'styled-components'

export const Title = styled.h1`
    color: #fff;
    text-align: center;
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
    background-color: #252d4a;
    padding: 20px;
    border-radius: 10px;
    height: 450px;


`

export const Flex = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const Button = styled.button`


    border-radius: 10px;
    width: 150px;
    height: 36px;
    font-size: 16px;
    display: block;
    color:#fff;
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
