import { Fragment } from "react";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import switchConfig from "./configuration";

function CardBox(){
    return(
        <Fragment>
            <Container
                maxWidth="md"
                sx={{
                    alignItems: 'center',
                    border: '1px solid black',
                    backgroundColor: switchConfig.backgroundColor
                    
                }}
            >
                <Card
                    sx={{
                        width:200,
                        height:200,
                        m: 2
                    }}
                >
                    Card Content
                </Card>
            </Container>
        </Fragment>
    )
}

export default CardBox;