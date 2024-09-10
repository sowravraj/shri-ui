import { Container, TextField, Typography, Button, Box } from '@mui/material';
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const SignIn = () => {

    const Navigate = useNavigate()
    const handleSignIn = (event) => {
        event.preventDefault();
        Navigate("/dashboard")
    };

    return (
        <Container 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '1440px', 
                height: '784px',
                padding: {
                    xs: '10px',
                    md: '70px 0px 214px 0px',
                },
            }}
        >
            <Box sx={{ textAlign: 'center', mt: { xs: "10px", md: "40px" }, mb: { xs: "40px", md: "56px" } }}>
                <Typography       
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: '18px', md: '20px' },
                        lineHeight: { xs: '22px', md: '24.2px' },
                        color: '#111111',
                    }}
                >
                    Sign In to PEELED ONION ❇️
                </Typography>
            </Box>
            <Box 
                sx={{ 
                    width: { xs: '300px', md: '360px' }, 
                    height: 'auto', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSignIn}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        required
                        sx={{
                            width: '100%',
                            mb: { xs: "30px", md: "40px" },
                            height: '46px',
                            borderRadius: '4px',
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        sx={{
                            width: '100%',
                            mb: { xs: "40px", md: "50px" },
                            height: '46px',
                            borderRadius: '4px',
                        }}
                    />
                    <Button                 
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mb: { xs: "20px", md: "36px" },
                            height: '46px',
                            borderRadius: '4px',
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                        }}
                    >
                        Sign In
                    </Button>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '14.52px',
                                textAlign: 'left',
                                color: '#111111',
                            }}
                        >
                            Don't have an account?{' '}
                            <Link to="/" style={{ color: '#111111', textDecoration: 'underline' }}>
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default SignIn;
