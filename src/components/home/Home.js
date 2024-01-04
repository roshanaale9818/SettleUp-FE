import { Button, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
const Home = () => {
  return <React.Fragment>
    <Grid container>
      <Grid item xs={12}>
        <Paper
          elevation={4} // Set the elevation for a shadow effect (optional)
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vw * 0.5625)', // For a 16:9 aspect ratio
            padding: 0, // Set padding
          }}
        >
          <img
            src="/images/account.jpg"
            alt="desc"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              // To maintain aspect ratio and cover the container
            }}
          />


<div>
          {/* Banner Content */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white', // Text color
            }}
          >
            <Typography variant="h3" gutterBottom sx={{
              backgroundColor:'primary',
              padding:'3'
            }}>
             Less Stress When Sharing Expenses
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ margin: 2 }}>
              Sign up
            </Button>
            <Button variant="outlined" color="primary" size="large" sx={{ margin: 2 }}>
              Learn More
            </Button>
          </div>
          </div>
   
        </Paper>
      </Grid>
      {/* <Grid item xs={4}>
    4
  </Grid>
  <Grid item xs={4}>
   4
  </Grid>
  <Grid item xs={8}>
    8
</Grid>*/}
    </Grid>
  </React.Fragment>;
}


export { Home };