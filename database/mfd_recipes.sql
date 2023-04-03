DROP TABLE IF EXISTS `mfd_recipes`;

CREATE TABLE `mfd_recipes` (
  `recipe_id` int NOT NULL AUTO_INCREMENT,
  `recipe_name` varchar(2048) NOT NULL,
  `recipe_desc` varchar(2048) DEFAULT NULL,
  `recipe_instructions` varchar(2048) DEFAULT NULL,
  `recipe_image_link` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`recipe_id`)
);