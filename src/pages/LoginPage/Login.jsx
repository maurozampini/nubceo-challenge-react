import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormHelperText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../stateManagement/actions/auth';

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/mauro-zampini-7329a7104/" target="_blank">
                Mauro Zampini
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validations = () => {
        let temp = { ...errors }

        temp.email = email ? "" : "El campo es requerido."

        if (email)
            temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
                ? ""
                : "Correo electrónico no válido."

        temp.password = password ? "" : "El campo es requerido."

        setErrors({
            ...temp
        });

        return formIsValid(temp);
    }

    const formIsValid = (errors) => {
        const isValid = email && password &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    };

    const setCredentials = () => {
        setEmail("nubceo@nubceo.com")
        setPassword("123456")
    };

    const handleSubmit = () => {
        dispatch(startLogin(password, email));
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            error={errors.email !== "" ? true : false}
                        />
                        <FormHelperText id="email_error" error={errors.email !== ""}>
                            {errors.email}
                        </FormHelperText>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            error={errors.password !== "" ? true : false}
                        />
                        <FormHelperText id="password_error" error={errors.password !== ""}>
                            {errors.password}
                        </FormHelperText>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => {
                                if (validations()) (
                                    handleSubmit())
                            }}
                        >
                            Sign In
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={setCredentials}
                        >
                            Fill form
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider >
    );
}

export default Login;
