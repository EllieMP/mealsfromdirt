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

/**
 * 
 * @param {*} props Contains props passed to component
 * @prop cropName A string containing the name of the card's crop
 * @prop cropImgURL A string containing a link to an image of the card's crop
 * @prop cropDesc A string containing a description of the card's crop
 * @prop cropResources A string containing relevant links to the card's crop
 * @prop cropPlantMonth An integer 0-11 representing the month this card's crop should be planted
 * @prop cropHarvestMonth An integer 0-11 representing the month this card's crop should be harvested
 * @returns A CropCard react component
 */
function CropCard(props){

    const {cropName, cropImgURL, cropDesc, cropResources, cropPlantMonth, cropHarvestMonth} = props;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',' December'];

    const [open, setOpen] = useState(false);

    const handleCardOpen = () => {
        setOpen(true);
    }
    const handleCardClose = () => {
        setOpen(false);
    }



    return(
        <Fragment>
            <Card sx={{  width: 250, m: 2 }}>
                <CardActionArea onClick={handleCardOpen}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div"  fontWeight="bold">
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
                    <DialogTitle fontWeight="bold">{cropName}</DialogTitle>
                    <DialogContent dividers>
                        <DialogContentText fontWeight="bold">
                            Description:
                            <Typography variant="body2" color="text.secondary">
                                {cropDesc}
                            </Typography>
                        </DialogContentText>
                        <DialogContentText fontWeight="bold">
                            Plant Month: 
                            <Typography variant="body2" color="text.secondary">
                              {months[cropPlantMonth - 1]}
                            </Typography>
                        </DialogContentText>
                        <DialogContentText fontWeight="bold">
                            Harvest Month: 
                            <Typography variant="body2" color="text.secondary">
                              {months[cropHarvestMonth - 1]}
                            </Typography>
                        </DialogContentText>
                        <DialogContentText fontWeight="bold">
                            Resources / Other Useful Information: 
                            <Typography variant="body2" color="text.secondary">
                                {cropResources}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </Stack>
        </Fragment>
    )
}

export default CropCard;