-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2021 at 01:50 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_leave_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(11) NOT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `days` float DEFAULT NULL,
  `leave_status` enum('pending','approved','rejected') DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `casual_leave` float DEFAULT NULL,
  `sick_leave` float DEFAULT NULL,
  `paid_leave` float DEFAULT NULL,
  `lwp` float DEFAULT NULL,
  `daterange` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`id`, `reason`, `days`, `leave_status`, `userId`, `casual_leave`, `sick_leave`, `paid_leave`, `lwp`, `daterange`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 1, 'pending', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:07:35', '2021-11-23 22:07:35'),
(2, '', 1, 'rejected', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:08:35', '2021-11-24 00:17:44'),
(3, '', 1, 'rejected', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:08:49', '2021-11-24 00:13:41'),
(4, NULL, 1, 'pending', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:12:49', '2021-11-23 22:12:49'),
(5, '', 1, 'approved', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:14:44', '2021-11-24 00:12:42'),
(6, '', 1, 'approved', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:15:32', '2021-11-24 00:33:01'),
(7, '', 1, 'approved', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:16:22', '2021-11-24 00:11:36'),
(8, NULL, 1, 'pending', 1, NULL, NULL, NULL, 1, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:16:25', '2021-11-23 22:16:25'),
(9, NULL, 1, 'pending', 1, 1, NULL, NULL, NULL, '24/11/2021 - 24/11/2021', NULL, '2021-11-23 22:20:45', '2021-11-23 22:20:45'),
(10, NULL, 7, 'pending', 1, NULL, NULL, NULL, 7, '24/11/2021 - 30/11/2021', NULL, '2021-11-23 22:58:14', '2021-11-23 22:58:14'),
(11, '', 4, 'rejected', 1, NULL, 4, NULL, NULL, '24/11/2021 - 27/11/2021', NULL, '2021-11-24 00:36:50', '2021-11-24 00:41:01'),
(12, '', 2, 'approved', 1, NULL, NULL, 2, NULL, '24/11/2021 - 25/11/2021', NULL, '2021-11-24 00:41:52', '2021-11-24 00:42:21');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20211123163648-create-user.js'),
('20211123164355-create-leave.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('hr','employee') DEFAULT NULL,
  `casual_leave` float DEFAULT NULL,
  `sick_leave` float DEFAULT NULL,
  `paid_leave` float DEFAULT NULL,
  `lwp` float DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `role`, `casual_leave`, `sick_leave`, `paid_leave`, `lwp`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'employee', 'test@mailinator.com', 'test@123', 'employee', 6, 6, 6, 0, NULL, '0000-00-00 00:00:00', '2021-11-24 00:42:21'),
(2, 'hr', 'test', 'hr@mailinator.com', 'hr@123', 'hr', 6, 6, 6, 0, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
