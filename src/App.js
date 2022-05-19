import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { decrementAction, decrementActionAsync, incrementAction, incrementActionAsync } from './store/countReducer';
import { addCustomerAction, addManyCustomersActionAsync, removeCustomerAction } from './store/customerReducer';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const count = useSelector(state => state.counter.count);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    dispatch(addCustomerAction({ name, id: Date.now() }))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  const increment = () => {
    dispatch(incrementActionAsync(1));
  }

  const decrement = () => {
    dispatch(decrementActionAsync(1));
  }

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '18px', marginRight: '10px' }}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '18px', marginRight: '10px' }}>{count}</div>
        <button onClick={() => increment()}>INCREMENT</button>
        <button onClick={() => decrement()}>DECREMENT</button>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов</button>
        <button onClick={() => dispatch(addManyCustomersActionAsync())}>Получить клиентов (ASYNC)</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => addCustomer(prompt())}>Удалить клиента</button>
      </div>
      {customers.length > 0 ?
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
          {
            customers.map(customer =>
              <div key={customer.id} onClick={() => removeCustomer(customer)} style={{ border: '1px solid teal', padding: '3px' }}>{customer.name}</div>
            )
          }
        </div>
        :
        <div>Клиенты отсутствуют</div>
      }
    </div>
  );
}

export default App;
