import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import firebase from '../service/firebase';


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (e) {
            console.error(e);
            setError(error.message)
        }
    }

    return <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            width: 500,
            heigth: 500
        }
    }}>
        <form onSubmit={handleSubmit}>
            <Paper elevation={10} style={{ padding: '15px' }}>
                <Typography>Sign up</Typography>
                <br/>
                <p>Fill in the form below to login your account.</p>
                <br/>
                <TextField
                    type='email'
                    placeholder="email"
                    name={'email'}
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <br />
                <TextField
                    type='password'
                    placeholder="password"
                    name={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <br />
                <div>
                    {error && <Typography>{error}</Typography>}
                    <Button type="submit" variant="contained">Login</Button>
                </div>
            </Paper>
        </form>
    </Box>;
};

export default SignUp;