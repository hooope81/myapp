import './App.scss';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { cyan, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Routers from './page/routers';

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
        </div>
      </div>
    </ThemeProvider>
  )
}
export default App;
