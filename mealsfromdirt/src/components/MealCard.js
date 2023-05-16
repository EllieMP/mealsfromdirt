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

function MealCard(props) {

    const [open, setOpen] = useState(false);

    const handleCardOpen = () => {
        setOpen(true);
    }
    const handleCardClose = () => {
        setOpen(false);
    }

    const { recipe_name, recipe_description, recipe_instructions, recipe_image_link } = props;

    return (
    <Fragment>
        <Card sx={{  width: 300, m: 2, justifyContent: 'center'}}>
            <CardActionArea onClick={handleCardOpen}>
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div" fontWeight="bold">
                        {recipe_name}
                    </Typography>
                </CardContent>
                <CardMedia
                        image={recipe_image_link}
                        component="img"
                        height="100"
                        alt="image"
                    />
            </CardActionArea>
        </Card>
        <Stack>
            <Dialog open={open}
                    onClose={handleCardClose}>
                    <DialogTitle>{recipe_name}</DialogTitle>
                    <DialogContent dividers>
                        <DialogContentText fontWeight="bold">
                            Description: 
                            <Typography variant="body2" color="text.secondary">
                                {recipe_description}
                            </Typography>
                        </DialogContentText>
                        <DialogContentText fontWeight="bold">
                            Instructions: 
                            <Typography variant="body2" color="text.secondary">
                                {recipe_instructions}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
            </Dialog>
        </Stack>
    </Fragment>
)   
}

export default MealCard;