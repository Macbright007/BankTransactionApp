import styled from 'styled-components';

export const Screen = styled.h1`
 padding: 25px;
 width: 100%;
 max-width: 300px;
 margin: 0 auto;
 background-color: rgba(250, 129, 150, 0.986)
`

export const Wrapper = styled.div`
 padding: 20px;
 display: grid;
 grid-template-column: 1fr;
 gap: 25px;
 width: 100%;
 max-width: 250px;
 margin: 0 auto;

 input {
     padding: 10px;
     border-radius: 5px;
     border: 1px solid silver;
 }
`

export const Button = styled.button`
padding: 15px;
border-radius: 7px;
border: none;
color: #fff;
font-weight: 800;

&:hover {
    cursor: pointer;
}
`
