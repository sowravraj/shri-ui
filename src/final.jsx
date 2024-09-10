import React, { useState } from 'react';
import { Container, TextField, Typography, FormControlLabel, Checkbox, Button, Box, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterApi } from './service/API'; // Import the RegisterApi function

const Final = () => {
    const [isChecked, setIsChecked] = useState(false); // State to manage checkbox status
    const [name, setName] = useState('OYO'); // Default value
    const [email, setEmail] = useState('sabarisabari17@gmail.com'); // Default value
    const [phoneNo, setPhoneNo] = useState('9842875842'); // Default value
    const [loading, setLoading] = useState(false); // State to manage loading status
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked); // Update checkbox state
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isChecked) {
            setLoading(true); // Set loading to true before API call
            try {
                await RegisterApi({
                    name: name,
                    email: email,
                    password: phoneNo, // Use phone number as password
                });
                navigate("/signin"); // Redirect to the sign-in page
            } catch (error) {
                console.error("Registration error:", error);
                alert("Registration failed. Please try again."); // Show error message if registration fails
            } finally {
                setLoading(false); // Set loading to false after API call completes
            }
        } else {
            alert("Please agree to Terms and Privacy Policy to continue."); // Alert if checkbox is not checked
        }
    };

    return (
        <Container
        sx={{
            maxWidth: {
            xs: '375px',  // For mobile screens
            sm: '1440px', // For small and larger screens
            },
            maxHeight: {
            xs: '828px',  // For mobile screens
            sm: '784px',  // For small and larger screens
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Add this to position spinner within form
        }}
        >
            <Box sx={{ textAlign: 'center', mt: { xs: "148px", lg: "148px" }, mb: { xs: "64px", lg: "64px" } }}>
                <Typography 
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: '18px', md: '20px' },
                        lineHeight: { xs: '22px', md: '24.2px' },
                        color: '#111111',
                    }}
                >
                    Welcome to PEELED ONION ❇️
                </Typography>
            </Box>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: { xs: '343px', lg: '400px' }, 
                    height: { xs: '334px', lg: '334px' },  
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative', // Add this to position spinner within form
                }}
            >
                {loading && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <CircularProgress color="primary" />
                    </Box>
                )}
                <TextField
                    label="Restaurant Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Handle name change
                    autoFocus
                    variant="outlined"
                    required
                    sx={{
                        width: '100%',
                        mb: { xs: "34px", lg: "34px" },
                        height: '46px',
                        borderRadius: '4px',
                    }}
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Handle email change
                    variant="outlined"
                    required
                    sx={{
                        width: '100%',
                        mb: { xs: "34px", lg: "34px" },
                        height: '46px',
                        borderRadius: '4px',
                    }}
                />
                <TextField
                    label="Phone No"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)} // Handle phone number change
                    variant="outlined"
                    required
                    sx={{
                        width: '100%',
                        mb: { xs: "34px", lg: "34px" },
                        height: '46px',
                        borderRadius: '4px',
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <FormControlLabel
                        sx={{ mb: { xs: "29px", lg: "29px" } }}
                        control={
                            <Checkbox 
                                value="remember" 
                                color="default" 
                                checked={isChecked}
                                onChange={handleCheckboxChange} // Handle checkbox changes
                            />
                        }
                        label={
                            <Typography
                                sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    lineHeight: '14.52px',
                                    color: '#989898',
                                }}
                            >
                                I agree to Terms and Privacy Policy
                            </Typography>
                        }
                    />
                </Box>
                <Button                 
                    type="submit" // Ensure button submits form
                    variant="contained"
                    fullWidth
                    sx={{
                        mb: { xs: "34px", lg: "34px" },
                        height: '46px',
                        borderRadius: '4px',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                    disabled={!isChecked || loading} // Disable button if checkbox is not checked or loading
                >
                    Continue
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
                        Already have an account?{' '}
                        <Link to="/signin" style={{ color: '#111111', textDecoration: 'underline' }}>
                            Sign in
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Final;
