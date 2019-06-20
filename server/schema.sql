DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- CREATE TABLE Users (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE Rooms (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255),
--   PRIMARY KEY (id)
-- );

CREATE TABLE Messages (
  id INT NOT NULL AUTO_INCREMENT,
  messages VARCHAR(255),
  username VARCHAR(255),
  roomname VARCHAR(255),
  PRIMARY KEY (id),
  -- FOREIGN KEY (userID) REFERENCES Users(id),
  -- FOREIGN KEY (roomID) REFERENCES Rooms(id)
);

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- -- ---
-- -- Globals
-- -- ---

-- -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- -- SET FOREIGN_KEY_CHECKS=0;

-- -- ---
-- -- Table 'Messages'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Messages`;
		
-- CREATE TABLE `Messages` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `text` MEDIUMTEXT NULL DEFAULT NULL,
--   `UserID` INTEGER NULL DEFAULT NULL,
--   `RoomID` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Users'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Users`;
		
-- CREATE TABLE `Users` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `Name` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Rooms'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `Rooms`;
		
-- CREATE TABLE `Rooms` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `Name` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Foreign Keys 
-- -- ---


-- -- ---
-- -- Table Properties
-- -- ---

-- -- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- -- ---
-- -- Test Data
-- -- ---

-- INSERT INTO `Messages` (`id`,`text`,`UserID`,`RoomID`) VALUES
-- ('','','','');
-- INSERT INTO `Users` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`Name`) VALUES
-- ('','');