DROP TABLE IF EXISTS `mfd_biomes`;

CREATE TABLE `mfd_biomes` (
  `relationship_id` int NOT NULL AUTO_INCREMENT,
  `crop_id` int NOT NULL,
  `biome_name` varchar(2048) NOT NULL,
  `crop_plant_date` date DEFAULT NULL,
  `crop_harvest_date` date DEFAULT NULL,
  PRIMARY KEY (`relationship_id`),
  FOREIGN KEY (`crop_id`) REFERENCES `mfd_crops` (`crop_id`)
);