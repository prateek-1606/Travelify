import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../api/auth";
import { getAllTravel } from "../../api/travel";
import Navbar from '../Navbar/Navbar';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TravelCard from "../Card/Card";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Profile = () => {
    const theme = useTheme();
    const params = useParams();
    const [username, setUserName] = useState(params.username);
    const [userData, setUserData] = useState(null);
    const [travelData, setTravelData] = useState(null);
    useEffect(() => {
        getAllTravel()
            .then((res) => {
                setTravelData(res.data);
            })
            .catch((e) => console.log(e));
    }, [])
    useEffect(() => {
        getUserByUsername(username)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar data={travelData} setData={setTravelData} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader theme={theme} />
                {userData === null ? (
                    <CircularProgress />
                ) : (
                    <Grid container spacing={2}>
                        <Card sx={{ width: '100%', height: "260px", padding: "40px", display: "flex" }}>
                            <CardMedia
                                component="img"
                                height="150"
                                image="https://sm.askmen.com/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_gstt.jpg"
                                alt="Paella dish"
                                sx={{ borderRadius: '100px', width: "150px" }}
                            />
                            <CardContent sx={{ marginLeft: "40px", marginTop: "-10px" }}>
                                <Typography component="div" variant="h5">
                                    Prateek Varshney
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginBottom: "10px" }} >
                                    Hi,I am a aspiring Software Developer
                                </Typography>
                                <div>
                                    <Typography sx={{ display: "inline", marginRight: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                        <EmailIcon fontSize="small" style={{ marginRight: "2px" }} />
                                        varshneyprateek20@gmail.com
                                    </Typography>
                                    <Typography sx={{ display: "inline", marginRight: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                        <LocalPhoneIcon fontSize="small" style={{ marginRight: "2px" }} />
                                        919548467461
                                    </Typography>
                                    <Typography sx={{ display: "inline" }} variant="subtitle1" color="text.secondary" component="div">
                                        <LocationOnIcon fontSize="small" style={{ marginRight: "2px" }} />
                                        Aligarh,UP,India
                                    </Typography>
                                </div>
                                <div style={{ marginTop: "10px" }} >
                                    <Typography sx={{ display: "inline", marginRight: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                        <InstagramIcon fontSize="small" style={{ marginRight: "2px" }} />
                                        insta
                                    </Typography>
                                    <Typography sx={{ display: "inline", marginRight: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                        <FacebookIcon fontSize="small" style={{ marginRight: "2px" }} />
                                        facebook
                                    </Typography>
                                    <Typography sx={{ display: "inline" }} variant="subtitle1" color="text.secondary" component="div">
                                        <TwitterIcon fontSize="small" style={{ marginRight: "2px" }} />
                                        twitter
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                        {travelData.map((travel) => {
                            return (
                                <Grid key={travel._id} item md={4} sm={6} xs={12} >
                                    <TravelCard travel={travel} />
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </Box>
        </Box >
    )
}

export default Profile;