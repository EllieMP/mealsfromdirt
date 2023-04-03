DROP TABLE IF EXISTS `mfd_crop_tags`;

CREATE TABLE `mfd_crop_tags` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `crop_id` int NOT NULL,
  `tag` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`tag_id`),
  FOREIGN KEY (`crop_id`) REFERENCES `mfd_crops` (`crop_id`)
);