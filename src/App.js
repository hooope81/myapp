import React, { useEffect, useState } from 'react';
import './App.scss';
import { TextField, Button, Avatar, AppBar, Toolbar, Typography, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';

import { cyan, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
  const [value, setValue] = useState('');
  const [messageList, setMessageList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  function add() {
    setMessageList([...messageList, { text: value, author: "me" }]);
    setValue('');
  };

  const result = messageList.map((element, index) => {
    return <div className={element.author === "me" ? "me": "bot"} key={index}>
      <Avatar sx={{ bgcolor: cyan[500] }}>{element.author}</Avatar>
      <p className='mess'>{element.text} </p></div>;
  });

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
      setTimeout(() => {
        setMessageList([...messageList, { text: 'Hello!', author: "bot" }]);
      }, 1500);
    }
  }, [messageList]);

  const chats = [{ id: 1, name: "chat1" }, { id: 2, name: "chat2" }, { id: 3, name: "chat3" }];

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
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white'}}>
          {chats.map((value, index) => (
            <ListItem
              key={index}
              disableGutters
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[500] }} />
              </ListItemAvatar>
              <ListItemText primary={value.name} />
            </ListItem>
          ))}
        </List>
        <div className='boxApp'>
          <div className='App'>
            {result}
          </div>
          <div className='waper'>
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
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App;

//
//
