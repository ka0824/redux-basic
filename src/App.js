import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { changeName, changeAge } from './store/actions/infoActions';
import axios from 'axios';

function App() {
  const age = useSelector(state => state.info.age);
  const name = useSelector(state => state.info.name);
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async() => {
      const result = await axios.get('http://localhost:3001');
      setData(result.data);
    }
    fetchData();
  },[]);

  

  return (
    <div className="App">
      <div>{`이름은 ${name}이고, 나이는 ${age}입니다.`}</div>
      <div>
        <input onChange={(e)=> setNameInput(e.target.value)}></input>
        <button onClick={() => dispatch(changeName(nameInput))}>이름 수정</button>
      </div>
      <div>
        <input onChange={(e) => setAgeInput(e.target.value)}></input>
        <button onClick={() => dispatch(changeAge(ageInput))} >나이 수정</button>  
      </div>
      <div>
        <button onClick={() => console.log(nameInput)}>nameInput 확인</button>
        <button onClick={() => console.log(ageInput)} >ageInput 확인</button>
      </div>
      <div>
        <button onClick={() => console.log(data)}>데이터를 받아왔나 확인하기</button>  
      </div> 
    </div>
  );
}

export default App;
