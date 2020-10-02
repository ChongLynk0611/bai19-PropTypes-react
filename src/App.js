import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecommendedFriends from './components/RecommendedFriend/index';
function App() {
  const friends =[
    {
      name: 'Tronglinh0611',
      url:'https://znews-photo.zadn.vn/w660/Uploaded/aobovhp/2020_03_18/avatar.jpg'
    },
    {
      name:'BaTuyen1102',
      url:'https://znews-photo.zadn.vn/w660/Uploaded/aobovhp/2020_03_18/avatar.jpg'
    },
    {
      name: 'DucAnh1234',
      url:'https://znews-photo.zadn.vn/w660/Uploaded/aobovhp/2020_03_18/avatar.jpg'
    },
    {
      name:'VanTa0908',
      url:'https://znews-photo.zadn.vn/w660/Uploaded/aobovhp/2020_03_18/avatar.jpg'
    }
  ]
  return (
    <div className="App">
     
      <RecommendedFriends friends={friends}/>
    </div>
  );
}

export default App;
