import { Fragment, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import MealCard from './MealCard.js';

//import switchConfig from "./configuration";

function MealMenu(props){

  const { coordinates } = props;
  const [recipeCardInfo, setRecipeInfo] = useState([]);
  
  useEffect(() => {
      const fetchCropData = async () => {
          const result = await fetch(`http://192.168.1.101:3307/api/v1/cords_to_recipes/${coordinates.lat}/${coordinates.lng}`);
          result.json().then(json => {
              setRecipeInfo(json);
          })
      }
      fetchCropData();
  }, []);

  if (recipeCardInfo != undefined && recipeCardInfo.length != 0) {
    return(
        <Fragment>
            <Container
                maxWidth="md"
                sx={{
                    alignItems: 'center',
                    border: '1px solid black',
                    backgroundColor: 'lightgrey'
                    
                }}
            >
                <Grid container>
                    {
                        recipeCardInfo.map((recipeCardInfo, idx) => 
                            <Grid item key={idx}>
                                <MealCard recipe_name={recipeCardInfo.recipe_name} 
                                        recipe_description={recipeCardInfo.recipe_description} 
                                        recipe_image_link={recipeCardInfo.recipe_image_link} 
                                        recipe_instructions={recipeCardInfo.recipe_instructions}/>
                            </Grid>)
                    }
                    </Grid>
            </Container>
        </Fragment>
    )
  }
  else {
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
                  Loading your results...
              </Container>
          </Fragment>
      )
  }
}

export default MealMenu;