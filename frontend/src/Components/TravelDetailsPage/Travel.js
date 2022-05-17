import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Box, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import image from '../../images/profile1.jpg';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image1 from '../../images/rightarrow.jpg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import CommentCard from '../CommentCard/Comment';
import Input from '../Utiles/Input';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { getTravel } from '../../api/travel';
import { useParams } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Travel = (props) => {
    const theme = useTheme()
    const params = useParams();
    const { id } = params;
    const [data, setData] = useState(null);
    useEffect(() => {
        getTravel(id)
            .then((res) => {
                setData(res.data)
            })
            .catch((e) => console.log(e));
    }, [])

    if (data === null) return (
        <div>Loading...</div>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader theme={theme} />
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <img src={image} height="250px" width="100%" />
                        {/* <Card sx={{ maxWidth: '100%' }}>
                            <CardContent style={{ paddingTop: '0px' }} >
                                <Typography variant="body2" color="text.secondary">
                                    varshneyprateek20@gmail.com
                                </Typography>
                            </CardContent>
                        </Card> */}
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        PV
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton style={{ marginRight: '10px' }} aria-label="settings">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                }
                                title={data.title}
                                subheader={data.createdAt !== undefined ? data.createdAt.slice(0, 10) : data.date.slice(0, 10)}
                            />
                            <CardContent style={{ paddingTop: '0px' }} >
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', maxWidth: '400px' }} >
                                    <Typography variant="h6" >{data.source}</Typography>
                                    <img src={image1} width="100px" height="50px" />
                                    <Typography variant="h6" >{data.destination}</Typography>
                                </div>
                                <Typography variant="body2" color="text.secondary">
                                    {data.content}
                                </Typography>
                                <div style={{ marginTop: '10px' }} >
                                    <Typography style={{ display: 'inline' }} variant="subtitle1">Expense Per Head:- </Typography>
                                    <Typography variant="body2" style={{ display: 'inline' }}>{data.ExpensePerHead}</Typography>
                                </div>
                                <div style={{ marginTop: '5px' }}>
                                    <Typography style={{ display: 'inline' }} variant="subtitle1">Available Seats:- </Typography>
                                    <Typography variant="body2" style={{ display: 'inline' }}>{data.AvailableSeats}</Typography>
                                </div>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton style={{ marginRight: '10px' }} aria-label="add to favorites">
                                    <FavoriteIcon />
                                    <Typography>{data.Likes.length}</Typography>

                                </IconButton>
                                <IconButton aria-label="share">
                                    <CommentIcon />
                                    <Typography>{data.comment.length}</Typography>

                                </IconButton>
                            </CardActions>
                        </Card>
                        <br />
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardHeader
                                title="Write a comment..."
                            />
                            <CardContent style={{ paddingTop: '0px', marginTop: '-10px' }} >
                                <form>
                                    <Input margin="normal" name="Title" label="Comment" autoFocus />
                                </form>
                            </CardContent>
                            <CardActions style={{ marginTop: '-15px' }} disabeSpacing>
                                <IconButton style={{ marginRight: '10px' }} aria-label="add to favorites">
                                    <SendIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4} style={{ maxHeight: '90vh', overflow: 'auto' }} >
                        {data.comment.map((c) => {
                            return (
                                <div>
                                    <CommentCard comment={c} />
                                    <br />
                                </div>
                            )
                        })}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Travel;