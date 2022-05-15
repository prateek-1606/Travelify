import React from 'react';
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

const Comment = () => {
    return (
        <Card sx={{ maxWidth: '90%' }} style={{ marginButtom: '20px' }}>
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
                title="Shrimp and Chorizo Paella"
                subheader="March 08, 2022"
            />
            <CardContent style={{ paddingTop: '0px' }} >
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Comment;