import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableBody, TableRow, TableCell, Paper, Box, AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { UserDetailsApi } from './service/API'; // Adjust the path if needed
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate(); // Call useNavigate at the top level

    const handleLogout = () => {
        localStorage.removeItem('auth'); // Clear the auth flag
        navigate('/signin'); // Redirect to sign-in page
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await UserDetailsApi();
                if (response.data && Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                } else {
                    setError("No users found in response.");
                }
            } catch (error) {
                console.error("Error fetching users:", error.response?.data || error.message);
                setError("Failed to load user data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My Dashboard
                    </Typography>
                    <Button color="inherit" onClick={() => setDrawerOpen(true)}>Settings</Button>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{ width: 240 }}
            >
                <Box
                    sx={{ width: 240 }}
                    role="presentation"
                    onClick={() => setDrawerOpen(false)}
                    onKeyDown={() => setDrawerOpen(false)}
                >
                    <List>
                        <ListItem button>
                            <ListItemText primary="Profile Settings" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Account Settings" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Notification Settings" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Privacy Settings" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            <Container
                sx={{
                    display: 'flex',
                    mt: 4,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        mx: 2,
                    }}
                >
                    <Paper
                        sx={{
                            width: '100%',
                            overflow: 'hidden',
                            mb: 2,
                        }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Hotel</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Email ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Phone Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.email}>
                                        <TableCell>{user.displayName || 'N/A'}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.phoneNumber || 'N/A'}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        mx: 2,
                    }}
                >
                    {/* Right-side content such as charts, statistics, etc. */}
                    <Paper
                        sx={{
                            padding: 2,
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Dashboard Overview
                        </Typography>
                        <Typography>
                            {/* Add your overview content here */}
                            
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
};

export default Dashboard;
