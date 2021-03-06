import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import './App.css';
import { Wrapper, Button, Screen } from "./style"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import React, { useState, ChangeEvent } from 'react';



const App = () => {

  const dispatch = useDispatch();
  
  const { depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)

  const [value, setValue] = useState(0);

  const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(Number(e.target.value));
  }

  const handleDepositClick = () => {
    depositMoney(value)
    setValue(0)
  }
  

  return (
    <div className="App">
      <Container maxWidth="sm" style={{marginLeft: '27rem'}}>
        <Paper elevation={5} style={{ marginTop: 40, width: '25rem', padding: 20 }}>
          <h2 style={{fontSize: 28}}> Banking App</h2>

          <Screen>{ amount }</Screen>
          <Wrapper>
            <input value={`${value}`} type="number" placeholder='Enter any Amount' style={{marginTop: 30}} onChange={amountHandler} />
            {value}
           <Button onClick={handleDepositClick} style={{backgroundColor: '#282c34', marginTop: 10}}>Deposit</Button>
           <Button onClick={() => withdrawMoney(value)} style={{backgroundColor: '#d6b916'}}>Withdraw</Button>
           <Button onClick={() => bankrupt()} style={{backgroundColor: '#bd4016'}}>Bankrupt</Button>
          </Wrapper>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
