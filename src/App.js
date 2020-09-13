import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecommendedFriends from './components/RecommendedFriend/index';
function App() {
  const friends =[
    {name: 'Tronglinh0611'},
    {name:'BaTuyen1102'},
    {name: 'DucAnh1234'},
    {name:'VanTa0908'}
  ]
  return (
    <div className="App">
     
      <RecommendedFriends friends={friends}/>
    </div>
  );
}

export default App;
