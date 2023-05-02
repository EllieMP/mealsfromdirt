import { Fragment, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Stack from '@mui/material/Stack';

function CropCard(props){
    const {cropName, cropImgURL, cropDesc, cropResources} = props;

    const [open, setOpen] = useState(false);

    const handleCardOpen = () => {
        setOpen(true);
    }
    const handleCardClose = () => {
        setOpen(false);
    }

    return(
        <Fragment>
            <Card sx={{  width:200, height:200, m: 2 }}>
                <CardActionArea onClick={handleCardOpen}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {cropName}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        image={cropImgURL}
                        component="img"
                        height="100"
                        alt="image"
                    />
                </CardActionArea>
            </Card>
            <Stack>
                <Dialog
                    open={open}
                    onClose={handleCardClose}
                >
                    <DialogTitle>Crop Card Content</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Description: {cropDesc}
                        </DialogContentText>
                        <DialogContentText>
                            Resources: {cropResources}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </Stack>
        </Fragment>
    )
}

export default CropCard;