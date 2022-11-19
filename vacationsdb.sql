-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2021 at 09:08 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacationsdb`
--
CREATE DATABASE IF NOT EXISTS `vacationsdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vacationsdb`;

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `userId` int(11) NOT NULL,
  `vacationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `follows`
--

INSERT INTO `follows` (`userId`, `vacationId`) VALUES
(3, 3),
(4, 3),
(4, 5),
(4, 6),
(4, 11),
(4, 12),
(4, 13),
(5, 6),
(8, 3),
(8, 6),
(9, 9),
(9, 11),
(10, 5),
(10, 6),
(10, 12),
(15, 10),
(16, 14),
(17, 5),
(18, 9),
(19, 7),
(19, 12),
(21, 13);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(128) CHARACTER SET utf8 NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `username`, `password`, `isAdmin`) VALUES
(1, 'maayan', 'biton', 'admin', 'ecd2f1491b4504f30ec3b491c109727e2b14b5fb1490fcb79bf97e8c3bca4c8f790bb06c4c605c91b3a8ab7d17b4f681b3d3f2b93cd8d913023878ea146ef694', 1),
(2, 'bob', 'the-builder', 'bob', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(3, 'ricky', 'grandpa', 'shiftty', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(4, 'gal', 'gadot', 'wonderwomen', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(5, 'gal', 'gebarm', 'gigi', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(8, 'mini', 'mouse', 'mini', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(9, 'omer', 'adam', 'omer', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(10, 'rohama', 'vardie', 'vardie', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(11, 'ron', 'ben-simon', 'ronbensimon', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(12, 'kiki', 'do-you-love-me', 'drake', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(13, 'mia', 'colocci', 'mia', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(14, 'rick', 'morty', 'swifty', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(15, 'kim', 'k', 'kkw', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(16, 'fibi', 'bofa', 'fibi', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(17, 'miley', 'cyrus', 'smiley', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(18, 'snoop', 'dog', 'snoopdog', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(19, 'jessica', 'alba', 'jessica', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(20, 'mama', 'biton', 'mama', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(21, 'jhon', 'duo', 'jhon', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(24, 'undefined', 'undefined', 'undefined', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(27, 'Maayan', 'Biton', 'mini12', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(28, '‪Maayan', 'Biton‬‏', 'kikiki', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(29, 'jimmy', 'jam', 'kiki', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(30, '‪reily', 'rio', 'reily', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(31, '‪Maayan', 'Biton‬‏', 'mtob', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(32, '‪Maayan', 'Biton‬‏', 'maayanb', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(33, '‪Maayan', 'Biton‬‏', 'kikiki1', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0),
(34, '‪Maayan', 'Biton‬‏', '125202', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77', 0);

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationId` int(11) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `dateFrom` date NOT NULL DEFAULT current_timestamp(),
  `dateTo` date NOT NULL,
  `vacationPrice` decimal(65,0) NOT NULL,
  `description` varchar(250) NOT NULL,
  `imageName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationId`, `destination`, `dateFrom`, `dateTo`, `vacationPrice`, `description`, `imageName`) VALUES
(1, 'Bahamas - Warwick Paradise', '2021-07-23', '2021-07-30', '11000', 'the best beachs, best view', '1.jpg'),
(2, 'Greece - saloniki', '2021-07-30', '2021-07-25', '7000', 'fix', '2.jpg'),
(3, 'Mexico - Puerto Vallarta', '2021-07-01', '2021-07-17', '22000', 'good food, good people, great clubs', '3.jpg'),
(4, 'Mexico - Cancun', '2021-07-18', '2021-07-30', '24000', 'beachs, clubs, and what ever you want', '4.jpg'),
(5, 'France - Alpa Dhuez', '2021-07-17', '2021-05-21', '5000', 'ski for the riches', '5.jpg'),
(6, 'Greece - Rhodes', '2021-08-03', '2021-08-06', '7000', 'great place, and lots of clubs', '6.jpg'),
(7, 'Costa Rica - Potrero', '2021-08-08', '2021-08-13', '7000', 'heaven on earth', '7.jpg'),
(8, 'Spain - Ibiza', '2021-07-25', '2021-08-06', '15000', 'party, beach, tan, do you need more?', '8.jpg'),
(9, 'Brazil - Rio de Janeiro', '2021-08-23', '2021-08-27', '8000', 'lots of festivals', '9.jpg'),
(10, 'Spain - Madrid', '2021-07-23', '2021-07-30', '11000', 'great place for summer vacation', '10.jpg'),
(11, 'Greece - Mykonos', '2021-06-18', '2021-06-18', '2500', 'when all the riches and the famous travel', '11.jpg'),
(12, 'Turkey - Anatlya', '2021-07-04', '2021-07-10', '1200', 'cheap fun, easy to travel\' and great people', '12.jpg'),
(13, 'Australia - Main Beach', '2021-07-04', '2021-07-10', '2000', 'loving people, and fun time with kangaroo', '13.jpg'),
(14, 'England - London', '2021-07-04', '2021-07-10', '2000', 'in the winter is the best place', '14.jpg'),
(136, 'Israel - eliat', '2021-07-04', '2021-07-10', '2000', 'fix', '136.jpg'),
(140, 'dassdaasdas', '2021-06-30', '2021-06-25', '21412', 'eadsdasd', '140.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`userId`,`vacationId`),
  ADD KEY `vacationId` (`vacationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`vacationId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
