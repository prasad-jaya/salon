-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 24, 2019 at 04:58 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salon`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `Book_ID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Date` varchar(50) DEFAULT NULL,
  `StylistID` int(11) DEFAULT NULL,
  `SownerID` int(11) DEFAULT NULL,
  `Book_Date` date DEFAULT NULL,
  `Description` varchar(5000) DEFAULT NULL,
  `Book_Time` varchar(50) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Book_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`Book_ID`, `Date`, `StylistID`, `SownerID`, `Book_Date`, `Description`, `Book_Time`, `Status`) VALUES
(36, NULL, 362, 366, '2019-01-02', 'I need to do this', 'Morning', 'InProcess'),
(37, NULL, 363, 366, '2019-01-02', 'I want this', 'Morning', 'Pending'),
(38, NULL, 362, NULL, '2019-01-02', 'I need Hair style', 'Morning', 'Finished');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `stylist_id` int(11) NOT NULL,
  `Sowner_id` int(11) NOT NULL,
  `Amount` double NOT NULL,
  `Date` int(11) NOT NULL DEFAULT '0',
  `BookID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `salon`
--

DROP TABLE IF EXISTS `salon`;
CREATE TABLE IF NOT EXISTS `salon` (
  `SalonID` int(11) DEFAULT NULL,
  `FirstName` varchar(100) DEFAULT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `City` varchar(30) DEFAULT NULL,
  `PhoneNo` int(12) DEFAULT NULL,
  KEY `FK_salon_users` (`SalonID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salon`
--

INSERT INTO `salon` (`SalonID`, `FirstName`, `LastName`, `Address`, `City`, `PhoneNo`) VALUES
(366, 'Salon Hansika', 'Hans', 'Hiribura Road', 'Galle', 124578965);

-- --------------------------------------------------------

--
-- Table structure for table `stylist`
--

DROP TABLE IF EXISTS `stylist`;
CREATE TABLE IF NOT EXISTS `stylist` (
  `StylistID` int(11) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `City` varchar(50) NOT NULL,
  `PhoneNo` varchar(50) NOT NULL,
  `StylistRole` varchar(50) NOT NULL,
  `Description` varchar(10000) NOT NULL,
  `Stars` int(10) NOT NULL,
  `Skills` varchar(500) NOT NULL,
  `Hr_Rate` varchar(50) NOT NULL,
  PRIMARY KEY (`StylistID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stylist`
--

INSERT INTO `stylist` (`StylistID`, `FirstName`, `LastName`, `Address`, `City`, `PhoneNo`, `StylistRole`, `Description`, `Stars`, `Skills`, `Hr_Rate`) VALUES
(362, 'Prasad', 'Jyasundara', 'Galle', 'Galle', '0765244405', 'Stylist', 'I have been a partner in two very successful salons in Oak Lawn - Abracadabra and Nolan Ryan Hair Salon.  I have trained at academies in Dallas, Las Vegas, and New York.  I am a certified stylist using Deva Curl technique and products.  I attend as many classes and shows as I can.  Continuing education is crucial in this profession. ', 0, 'Head massage,Shampoo,Shaving,Texturizing', '35'),
(363, 'Kasun', 'Saranga', 'Kurunegala', 'Kurunegala', '01125874635', 'Stylist And Educator', 'I have been working in a salon since I was 17. After a few years of shampooing and assisting many talented stylists, I decided that I wanted to be the one behind the chair. I started beauty school and while there I attended as many extra classes as I could.  I enjoy furthering my education with as many classes as I can attend. ', 0, 'Shaving,Texturizing', '28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Role` varchar(20) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=369 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `Email`, `Password`, `Role`) VALUES
(362, 'stylist@gmail.com', '1234', 'Stylist'),
(363, 'stylist2@gmail.com', '1234', 'Stylist'),
(364, 'salon@gmial.com', '1234', 'Salon'),
(365, 'salon@gmial.com', '1234', 'Salon'),
(366, 'salon@gmial.com', '1234', 'Salon'),
(367, 'aaa@sdsd.com', '123', 'Stylist'),
(368, '12121@vvcv', 'cxxc', 'Salon');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `salon`
--
ALTER TABLE `salon`
  ADD CONSTRAINT `FK_salon_users` FOREIGN KEY (`SalonID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `stylist`
--
ALTER TABLE `stylist`
  ADD CONSTRAINT `FK_stylist_users` FOREIGN KEY (`StylistID`) REFERENCES `users` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
