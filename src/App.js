
// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';

import './App.scss';

//пример1: State
// function App() {
// const [summ, setSumm] = useState(0);
// const updateSumm = () => {
//   setSumm(summ+1);
// }

//   return (
//     <div>
//     <span>{summ}</span>
//     <button onClick={updateSumm}>Click!</button>
//     </div>
//   );
// }


//пример2: useState с коллбеком
// function App() {
// const [summ, setSumm] = useState(0);
// const getSumm = () => {
//   setSumm((prevSumm) => prevSumm +1);
//   //делаем коллбек, чтобы всегда было актуальное значение
// }
//   return (
//     <div>
//       <span>{summ}</span>
//       <button onClick={getSumm}>Click!</button>
//     </div>
//   )
// }



//пример3: классовый компонент
// class App extends React.Component {
//  state = {
//     summ: 0,
//   };
//   getSumm = () => {
//     const {summ} = this.state;
//     this.setState ({summ: summ+1});
//   };
//   render(){
//     return (
//       <div>
//         <span>{this.state.summ}</span>
//         <button onClick={this.getSumm}>Click!</button>
//       </div>
//     );
//   }
// }

//пример4: асинхронность+2 свойства объекта
// class App extends React.Component {
//   state = {
//     summ: 0,
//     name: 'Nadin'
//   };
//   getSumm = () => {
//     const { summ } = this.state;
//     this.setState({ summ: summ + 1 });
//     console.log(this.state);
//     //console.log выполнится до обновления state
//   };
//   render() {
//     return (
//       <div>
//         <p>{this.state.name}</p>
//         <p>{this.state.summ}</p>
//         <button onClick={this.getSumm}>Click!!!</button>
//       </div>
//     )
//   }
// }


//пример5: актуальное значение в console.log
// class App extends React.Component {
//   state = {
//     summ: 0,
//     name: 'Nadin'
//   };
//   getSumm = () => {
//     const { summ } = this.state;
//     this.setState({ summ: summ + 1 },
//       () => {

//         console.log(this.state);
//       });
//       //теперь в console.log будут выводиться актуальные значения
//   };
//   render() {
//     return (
//       <div>
//         <p>{this.state.name}</p>
//         <p>{this.state.summ}</p>
//         <button onClick={this.getSumm}>Click!!!</button>
//       </div>
//     )
//   }
// }

// function App() {
//   const [value, setValue] = useState('');
//   const handleCnange = (event) =>{
//   setValue(event.target.value);
//   }
//   return(
//     <div>
//       <input type="text" value={value} onChange={handleCnange}></input>
//     </div>
//   )
//   }


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
