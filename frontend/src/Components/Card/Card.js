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

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        PV
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="March 08, 2022"
            />
            <CardContent style={{ paddingTop: '0px' }} >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }} >
                    <Typography variant="h6" >Source </Typography>
                    <img src={image} width="100px" height="50px" />
                    <Typography variant="h6" >Destination </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
                <div style={{ marginTop: '10px' }} >
                    <Typography style={{ display: 'inline' }} variant="subtitle1">Expense Per Head:- </Typography>
                    <Typography variant="body2" style={{ display: 'inline' }}> 400Rs</Typography>
                </div>
                <div style={{ marginTop: '5px' }}>
                    <Typography style={{ display: 'inline' }} variant="subtitle1">Available Seats:- </Typography>
                    <Typography variant="body2" style={{ display: 'inline' }}> 4</Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
