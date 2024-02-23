
import { Button, Paper, Grid, Box } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../layout/Navbar/Navbar';


const ErrorPage = (props) => {
    const navigate = useNavigate();
    const onHomeHandler = () => {
        navigate('/home');
    }
    return <React.Fragment>
        <main>
            <Navbar />
            <Grid container>
                <Grid item xs={12} sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    height: '400px'
                }}>
                    <Box>
                        <h1>You are looking for something that doesnot exist.</h1>
                        <Box sx={{
                            textAlign:'center'
                        }}>
                            <Button variant="outlined" onClick={onHomeHandler} startIcon={<HomeIcon />}>
                                Back
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>


        </main>
    </React.Fragment>
}
export default ErrorPage;