import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { formatTimeStrings } from '../utils/formatTimeStrings';
// import ForTest from '../forTest';

const Home = () => {
    return (
        <Box>
            <Typography style={{ marginBottom: '15px' }}>Log in to continue
            </Typography>
            <div>
                <Button variant="outlined" size="large">
                    <Link to='/login' className="link">Sing in</Link>
                </Button>
            </div>
            <br></br>
            <br></br>
            <div>
                <Typography style={{ marginBottom: '15px' }}>Don't have an account? Create one now </Typography>
                <Button variant="outlined" size="large" >
                    <Link to='signup' className="link">Sing out</Link>
                </Button>
            </div>
            {/* <div>{formatTimeStrings(['12.02','18.02'])}</div> */}
            {/* <ForTest /> */}
        </Box>
    );
};
export default Home;