import { Fragment, useState } from "react";
import Container from "@mui/material/Container";
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
//import switchConfig from "./configuration";

function MealMenu(){
    const [open, setOpen] = useState(false);

    const handleCardOpen = () => {
        setOpen(true);
    }
    const handleCardClose = () => {
        setOpen(false);
    }

    return(
        <Fragment>
            <Container
                maxWidth="md"
                sx={{
                    alignItems: 'center',
                    border: '1px solid black',
                    backgroundColor: 'grey'
                    
                }}
            >
                <Card sx={{  width:200, height:200, m: 2 }}>
                    <CardActionArea onClick={handleCardOpen}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Meal Card Content
                            </Typography>
                        </CardContent>
                        <CardMedia
                            //src={}
                            component="img"
                            height="100"
                            alt="image"
                        />
                    </CardActionArea>
                </Card>
                <Stack>
                    <Dialog open={open}
                            onClose={handleCardClose}>
                            <DialogTitle>Meal Card Content</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Ingredients
                                </DialogContentText>
                                <DialogContentText>
                                    Description
                                </DialogContentText>
                                <DialogContentText>
                                    Recommendation
                                </DialogContentText>
                                <DialogContentText>
                                    Resources
                                </DialogContentText>
                            </DialogContent>
                    </Dialog>
               </Stack>
            </Container>
        </Fragment>
    )
}

export default MealMenu;