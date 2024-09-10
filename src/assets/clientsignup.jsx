import { Container, TextField, Typography, FormControlLabel, Checkbox, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate

const Final = () => {
    const navigate = useNavigate(); // Corrected the hook name to lowercase 'n'

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        navigate("/signup"); // Corrected the function name
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
                    xs: '10px', // Padding for mobile devices
                    md: '148px 0px 214px 0px', // Padding for desktop devices
                },
            }}
        >
            <Box sx={{ textAlign: 'center', mt: { xs: "10px", md: "76px" }, mb: { xs: "40px", md: "86px" } }}>
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
                    onSubmit={handleSubmit} // Changed to lowercase 'h' in handleSubmit
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <TextField
                        label="Restaurant Name"
                        autoFocus
                        variant="outlined"
                        defaultValue="OYO"
                        required
                        sx={{
                            width: '100%',
                            mb: { xs: "30px", md: "46px" },
                            height: '46px',
                            borderRadius: '4px',
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        defaultValue="sabarisabari17@gmail.com"
                        required
                        sx={{
                            width: '100%',
                            mb: { xs: "30px", md: "46px" },
                            height: '46px',
                            borderRadius: '4px',
                        }}
                    />
                    <TextField
                        label="Phone No"
                        variant="outlined"
                        defaultValue="9842875842"
                        required
                        sx={{
                            width: '100%',
                            mb: { xs: "20px", md: "46px" },
                            height: '46px',
                            borderRadius: '4px',
                        }}
                    />
                    <Box
                        sx={{
                            mb: { xs: "20px", md: "31px" },
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox value="remember" color="default" />}
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
            </Box>
        </Container>
    );
}

export default Final;
