DROP DATABASE IF EXISTS `funproject`;

CREATE DATABASE funproject;

USE funproject;

-- create tables
CREATE TABLE `test` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` tinytext,
  `address` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `state` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- mysql -u root -p < server/database/schema.sql