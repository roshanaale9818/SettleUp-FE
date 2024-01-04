
import { Button, Paper,Grid } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
// import classes from './ErrorPage.module.css';

const ErrorPage = (props) => {
    const navigate = useNavigate();
    const onHomeHandler = ()=>{
        navigate('/home');
    }
    return <React.Fragment>
        <main>
            <Grid container>
                <Grid item xs={12}>
                    <Paper
                        elevation={2} // Set the elevation for a shadow effect (optional)
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 'calc(100vw * 0.5625)', // For a 16:9 aspect ratio
                            padding: 0, // Set padding
                        }}
                    >
                        <div>
                            <h1>Oops!! could not found page.</h1>
                            <Button variant="outlined" onClick={onHomeHandler} startIcon={ <HomeIcon/> }>
                            Home
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>


        </main>
    </React.Fragment>
}
export default ErrorPage;