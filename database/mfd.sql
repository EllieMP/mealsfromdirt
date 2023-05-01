DROP DATABASE IF EXISTS MFD_meals_from_dirt;
CREATE DATABASE IF NOT EXISTS MFD_meals_from_dirt;
USE MFD_meals_from_dirt;

DROP TABLE IF EXISTS MFD_crops;
DROP TABLE IF EXISTS MFD_crop_tags;
DROP TABLE IF EXISTS MFD_crop_biomes;
DROP TABLE IF EXISTS MFD_recipes;
DROP TABLE IF EXISTS MFD_crops_in_recipe;


CREATE TABLE IF NOT EXISTS  MFD_crops (
    crop_id int NOT NULL AUTO_INCREMENT,
    crop_name varchar(128) NOT NULL,
    crop_description varchar(4096) DEFAULT NULL,
    crop_plant_month int DEFAULT NULL,
    crop_harvest_month int DEFAULT NULL,
    crop_image_link varchar(16384) DEFAULT NULL,
    PRIMARY KEY (crop_id)
);

CREATE TABLE IF NOT EXISTS MFD_crop_tags (
    crop_id int,
    crop_tag varchar(128),

    PRIMARY KEY (crop_id, crop_tag),
    FOREIGN KEY (crop_id) 
        REFERENCES MFD_crops(crop_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS MFD_crop_biomes (
    crop_id int,
    crop_biome varchar(128),

    PRIMARY KEY (crop_id, crop_biome),
    FOREIGN KEY (crop_id) 
        REFERENCES MFD_crops(crop_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS MFD_recipes (
    recipe_id int NOT NULL AUTO_INCREMENT,
    recipe_name varchar(256) NOT NULL,
    recipe_description varchar(4096) DEFAULT NULL,
    recipe_instructions varchar(4096) DEFAULT NULL,
    recipe_image_link varchar(2048) DEFAULT NULL,
    PRIMARY KEY (recipe_id)
);

CREATE TABLE IF NOT EXISTS MFD_crops_in_recipe (
    recipe_id int,
    crop_id int,

    PRIMARY KEY (recipe_id, crop_id),
    FOREIGN KEY (crop_id) 
        REFERENCES MFD_crops(crop_id)
        ON DELETE CASCADE,
	FOREIGN KEY (recipe_id) 
        REFERENCES MFD_recipes(recipe_id)
        ON DELETE CASCADE
);