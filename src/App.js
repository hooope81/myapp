import React, { useEffect, useState } from 'react';
import './App.scss';




function App() {
  const [value, setValue] = useState('');
  const [messageList, setMessageList] = useState([]);

  const handleCnange = (event) => {
    setValue(event.target.value);
  }

  function add() {
    setMessageList([...messageList, { text: value, author: "me" }]);
    setValue('');
  };

  const result = messageList.map((element, index) => {
    return <div className='wrap' key={index}><span className='author'>{element.author} </span><p className='chat' >{element.text} </p></div>;
  });

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
      setTimeout(() => {
        setMessageList([...messageList, { text: 'Hello!', author: "bot" }]);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className='box'>
      <h1 className='heading'>Chat</h1>
      <div className='App'>

        {result}
      </div>
      <div className='mess'>
        <input className='input' type="text" value={value} onChange={handleCnange} placeholder='Написать сообщение...'></input>
        <button className='btn' onClick={add}>
          &#10148;</button>
      </div>

    </div>
  )
}

export default App;

//
//
