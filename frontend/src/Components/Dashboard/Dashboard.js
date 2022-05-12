import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Box, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Card from '../Card/Card';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Dashboard = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader theme={theme} />
                <Grid style={{ marginLeft: '10px' }} container spacing={2}>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={4}>
                        <Card />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Dashboard;