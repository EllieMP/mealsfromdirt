DROP TABLE IF EXISTS `mfd_ingredents`;

CREATE TABLE `mfd_ingredents` (
  `relationship_id` int NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `crop_id` int NOT NULL,
  PRIMARY KEY (`tag_id`),
  FOREIGN KEY (`recipe_id`) REFERENCES `mfd_recipes` (`recipe_id`),
  FOREIGN KEY (`crop_id`) REFERENCES `mfd_crops` (`crop_id`)
);