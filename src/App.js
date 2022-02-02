// import React, { useEffect, useState } from 'react';
import './App.scss';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { cyan, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Routers from './page/routers'; 
// import MessageList from './page/messageList';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: cyan[500],
    },
  },
});

function App() {
  // const [value, setValue] = useState('');
  // const [messageList, setMessageList] = useState([]);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // }

  // function add() {
  //   setMessageList([...messageList, { text: value, author: "me" }]);
  //   setValue('');
  // };

  

  // useEffect(() => {
  //   if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
  //     setTimeout(() => {
  //       setMessageList([...messageList, { text: 'Hello!', author: "bot" }]);
  //     }, 1500);
  //   }
  // }, [messageList]);

  

  return (
    <ThemeProvider theme={theme}>
      <div className='box'>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='container'>



        <Routers />



          {/* <div className='boxApp'> */}
           
              {/* <MessageList messageList={messageList}/> */}
         
            {/* <div className='waper'>
              <div className="boxInput">
                <TextField
                  style={{ margin: '20px' }}
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  value={value}
                  onChange={handleChange}
                  autoFocus
                  fullWidth
                  size="small"
                  placeholder="Type something..."
                />
              </div>
              <Button color="primary" onClick={add} size="medium" variant="contained">

                &#10148;
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;

//
//
