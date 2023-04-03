DROP TABLE IF EXISTS `mfd_crops`;

CREATE TABLE `mfd_crops` (
  `crop_id` int NOT NULL AUTO_INCREMENT,
  `crop_name` varchar(256) NOT NULL,
  `crop_description` varchar(2048) DEFAULT NULL,
  `crop_info_link` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`crop_id`)
);