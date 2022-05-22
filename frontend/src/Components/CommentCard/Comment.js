import React, { useEffect, useState } from 'react';
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
import { getuser } from '../../api/auth';

const Comment = ({ comment }) => {

    const [CreatorData, setCreatorData] = useState(null);

    useEffect(() => {
        getuser(comment.userid)
            .then((res) => {
                setCreatorData(res.data)
            })
            .catch((e) => console.log(e))
    }, [])

    if (CreatorData === null) {
        return (
            <div>

            </div>
        )
    }

    return (
        <Card sx={{ maxWidth: '90%' }} style={{ marginButtom: '20px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {CreatorData.name[0].toUpperCase()}
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
                title={CreatorData.name}
                subheader="March 08, 2022"
            />
            <CardContent style={{ paddingTop: '0px' }} >
                <Typography variant="body2" color="text.secondary">
                    {comment.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Comment;