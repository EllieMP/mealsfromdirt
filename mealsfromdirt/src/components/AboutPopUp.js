import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function AboutUs(props) {
    const {open} = props;
    const {handleAboutClose} = props;

    return(
        <Dialog
            open={open}
            onClose={handleAboutClose}
        >
            <DialogTitle>About Us</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    About MealsFromDirt
                </DialogContentText>
                <DialogContentText>
                    Instructions
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default AboutUs;