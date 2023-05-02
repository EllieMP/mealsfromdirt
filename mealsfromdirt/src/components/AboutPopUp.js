import * as React from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

function AboutUs(props) {
    const {open} = props;
    const {handleAboutClose} = props;

    const [openMFDStory, setMFDStoryOpen] = React.useState(false);
    const [openInstructions, setInstructionsOpen] = React.useState(false);
    const [openCredits, setCreditsOpen] = React.useState(false); 

    const handleClickMFDStoryOpen = () => {
        setMFDStoryOpen(true);
    };
    const handleMFDStoryClose = () => {
        setMFDStoryOpen(false);
    };

    const handleClickInstructionsOpen = () => {
        setInstructionsOpen(true);
    };
    const handleInstructionsClose = () => {
        setInstructionsOpen(false);
    };

    const handleClickCreditsOpen = () => {
        setCreditsOpen(true);
    };
    const handleCreditsClose = () => {
        setCreditsOpen(false);
    };

    return(
        <Dialog
            open={open}
            onClose={handleAboutClose}
        >
            <DialogTitle>About Us</DialogTitle>
            <DialogContent>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text">
                                <Button
                                onClick={handleClickMFDStoryOpen}
                                sx={{ color: 'black', textTransform: 'capitalize'  }} 
                                key="AboutMFD">Meals From Dirt Story</Button>
                                <Dialog
                                    onClose={handleMFDStoryClose}
                                    open={openMFDStory}
                                >
                                    <DialogTitle onClose={handleMFDStoryClose}>
                                    Meals From Dirt - Our Story
                                    </DialogTitle>
                                    <DialogContent dividers>
                                    <Typography gutterBottom>
                                        Meals From Dirt was grown from the ground up. Our mission was to create
                                        an application influenced by the American Agriculture Industry. What sprouted from that
                                        was a tool that would enable people to find crops growing near them or for curiousity 
                                        farther than them and make fresh from the dirt of the earth meals. 
                                    </Typography>
                                    </DialogContent>
                                </Dialog>

                                <Button 
                                onClick={handleClickInstructionsOpen}
                                sx={{ color: 'black', textTransform: 'capitalize'  }} 
                                key="Instructions">Instructions</Button>
                                <Dialog
                                    onClose={handleInstructionsClose}
                                    open={openInstructions}
                                >
                                    <DialogTitle onClose={handleInstructionsClose}>
                                    Instructions - How It All Works!
                                    </DialogTitle>
                                    <DialogContent dividers>
                                    <Typography gutterBottom>
                                        1. At the home page, located at the center will be a search bar where
                                        you are able to input an address. To proceed press the enter key.
                                    </Typography>
                                    <Typography gutterBottom>
                                        2. After the address has been processed, the search bar will move to the top of the screen where
                                        a toggle is located to the upper right of the screen. By default the toggle is set to show crops 
                                        and can be clicked to showcase recipes.
                                    </Typography>
                                    <Typography gutterBottom>
                                        3. Beneath the search bar is a "Filter" button that can be clicked to drop down filtering for
                                        crop types between "fruit" and "vegetable". It also includes a slider for potential mile ranges.
                                    </Typography>
                                    <Typography gutterBottom>
                                        4. Toggling between the crop and meal cards, you can then explore what crops you can find in your area along
                                        with what meals you could make with those crops.
                                    </Typography>
                                    <Typography gutterBottom>
                                        Thank you for using our application!
                                    </Typography>
                                    </DialogContent>
                                </Dialog>

                                <Button
                                onClick={handleClickCreditsOpen}
                                sx={{ color: 'black', textTransform: 'capitalize'  }} 
                                key="Credits">Credits</Button>
                                <Dialog
                                    onClose={handleCreditsClose}
                                    open={openCredits}
                                >
                                    <DialogTitle onClose={handleCreditsClose}>
                                    Credits and More!
                                    </DialogTitle>
                                    <DialogContent dividers>
                                    <Typography gutterBottom>
                                    Meals From Dirt was created by the following 
                                    Sonoma State University developers:
                                    <List>
                                        <ListItem>* Ellie Parker</ListItem>
                                        <ListItem>* Erika Mendoza</ListItem>
                                        <ListItem>* Welinton De Leon</ListItem>
                                    </List>
                                    </Typography>
                                    <Typography gutterBottom>Our Repository: <Link>https://github.com/EllieMP/mealsfromdirt</Link></Typography> 
                                    <Typography gutterBottom> © Spring 2023 - Sonoma State University </Typography> 
                                    </DialogContent>
                                </Dialog>
                    </ButtonGroup>
            </DialogContent>
        </Dialog>
    )
}

export default AboutUs;