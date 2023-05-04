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
import Box from '@mui/material/Box';

// recipe_id, recipe_name, recipe_description, recipe_instructions, recipe_image_link
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
        <Card sx={{  width:200, height:270, m: 2 }}>
            <CardActionArea onClick={handleCardOpen}>
                <Box sx={{ height: 150, 
                           width: 200}}>
                    <CardContent >
                        <Typography gutterBottom variant="h6" component="div">
                            {recipe_name}
                        </Typography>
                    </CardContent>
                </Box>
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
                    <DialogContent>
                        <DialogContentText>
                            Description: {recipe_description}
                        </DialogContentText>
                        <DialogContentText>
                            Instructions: {recipe_instructions}
                        </DialogContentText>
                    </DialogContent>
            </Dialog>
        </Stack>
    </Fragment>
)   
}

export default MealCard;