-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`UserType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UserType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_type` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Region` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(225) NOT NULL,
  `last_name` VARCHAR(225) NOT NULL,
  `email` VARCHAR(225) NOT NULL,
  `phone_number` VARCHAR(225) NULL,
  `UserType_id` INT NOT NULL,
  `Region_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `Region_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_User_UserType_idx` (`UserType_id` ASC),
  INDEX `fk_User_Region1_idx` (`Region_id` ASC),
  CONSTRAINT `fk_User_UserType`
    FOREIGN KEY (`UserType_id`)
    REFERENCES `mydb`.`UserType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_Region1`
    FOREIGN KEY (`Region_id`)
    REFERENCES `mydb`.`Region` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Result`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Result` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `time_to_complete` DATETIME GENERATED ALWAYS AS (),
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_Result_User1_idx` (`User_id` ASC),
  CONSTRAINT `fk_Result_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Restaurant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Restaurant` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `User_id` INT NOT NULL,
  `Region_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `Region_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_Restaurant_Region1_idx` (`Region_id` ASC),
  CONSTRAINT `fk_Restaurant_Region1`
    FOREIGN KEY (`Region_id`)
    REFERENCES `mydb`.`Region` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Language` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Question` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `correct_answer_id` INT NOT NULL,
  `Language_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `Language_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_Question_Language1_idx` (`Language_id` ASC),
  CONSTRAINT `fk_Question_Language1`
    FOREIGN KEY (`Language_id`)
    REFERENCES `mydb`.`Language` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`QuestionResult`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`QuestionResult` (
  `Result_id` INT UNSIGNED NOT NULL,
  `Question_id` INT UNSIGNED NOT NULL,
  `Question_Language_id` INT UNSIGNED NOT NULL,
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_answer_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Result_id`, `Question_id`, `Question_Language_id`),
  INDEX `fk_Result_has_Question_Question1_idx` (`Question_id` ASC, `Question_Language_id` ASC),
  INDEX `fk_Result_has_Question_Result1_idx` (`Result_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_Result_has_Question_Result1`
    FOREIGN KEY (`Result_id`)
    REFERENCES `mydb`.`Result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Result_has_Question_Question1`
    FOREIGN KEY (`Question_id` , `Question_Language_id`)
    REFERENCES `mydb`.`Question` (`id` , `Language_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`UserRestaurant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UserRestaurant` (
  `Restaurant_id` INT UNSIGNED NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`Restaurant_id`, `User_id`),
  INDEX `fk_Restaurant_has_User_User1_idx` (`User_id` ASC),
  INDEX `fk_Restaurant_has_User_Restaurant1_idx` (`Restaurant_id` ASC),
  CONSTRAINT `fk_Restaurant_has_User_Restaurant1`
    FOREIGN KEY (`Restaurant_id`)
    REFERENCES `mydb`.`Restaurant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Restaurant_has_User_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Answer` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `answer_option` VARCHAR(255) NOT NULL,
  `Question_id` INT UNSIGNED NOT NULL,
  `Question_Language_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `Question_id`, `Question_Language_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_Answer_Question1_idx` (`Question_id` ASC, `Question_Language_id` ASC),
  CONSTRAINT `fk_Answer_Question1`
    FOREIGN KEY (`Question_id` , `Question_Language_id`)
    REFERENCES `mydb`.`Question` (`id` , `Language_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`QuestionResult`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`QuestionResult` (
  `Result_id` INT UNSIGNED NOT NULL,
  `Question_id` INT UNSIGNED NOT NULL,
  `Question_Language_id` INT UNSIGNED NOT NULL,
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_answer_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Result_id`, `Question_id`, `Question_Language_id`),
  INDEX `fk_Result_has_Question_Question1_idx` (`Question_id` ASC, `Question_Language_id` ASC),
  INDEX `fk_Result_has_Question_Result1_idx` (`Result_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_Result_has_Question_Result1`
    FOREIGN KEY (`Result_id`)
    REFERENCES `mydb`.`Result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Result_has_Question_Question1`
    FOREIGN KEY (`Question_id` , `Question_Language_id`)
    REFERENCES `mydb`.`Question` (`id` , `Language_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb` ;

-- -----------------------------------------------------
-- Placeholder table for view `mydb`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `mydb`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`view1`;
USE `mydb`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
