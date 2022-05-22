import * as React from 'react';
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
import image from '../../images/rightarrow.jpg';
import { Link } from 'react-router-dom'
import CommentIcon from '@mui/icons-material/Comment';
import { addlike } from '../../api/travel';

export default function RecipeReviewCard({ travel }) {
    console.log(travel)
    const handlelike = () => {
        addlike(travel._id)
            .then(() => {
                window.location.reload()
            })
            .catch((e) => console.log(e))
    }

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        PV
                    </Avatar>
                }
                title={travel.title}
                subheader={travel.createdAt !== undefined ? travel.createdAt.slice(0, 10) : travel.date.slice(0, 10)}
            />
            <Link to={`../travel/${travel._id}`} style={{ textDecoration: 'none', color: 'black' }} >
                <CardContent style={{ paddingTop: '0px' }} >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }} >
                        <Typography variant="h6" >{travel.source}</Typography>
                        <img src={image} width="100px" height="50px" />
                        <Typography variant="h6" >{travel.destination}</Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {travel.content}
                    </Typography>
                    <div style={{ marginTop: '10px' }} >
                        <Typography style={{ display: 'inline' }} variant="subtitle1">Expense Per Head:- </Typography>
                        <Typography variant="body2" style={{ display: 'inline' }}>{travel.ExpensePerHead}</Typography>
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        <Typography style={{ display: 'inline' }} variant="subtitle1">Available Seats:- </Typography>
                        <Typography variant="body2" style={{ display: 'inline' }}>{travel.AvailableSeats}</Typography>
                    </div>
                </CardContent>
            </Link>
            <CardActions disableSpacing>
                <IconButton onClick={handlelike} aria-label="add to favorites">
                    <FavoriteIcon />
                    <Typography>{travel.Likes.length}</Typography>
                </IconButton>
                <IconButton aria-label="share">
                    <CommentIcon />
                    <Typography>{travel.comments.length}</Typography>
                </IconButton>
            </CardActions>
        </Card >
    );
}
