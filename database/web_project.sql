-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 14 Iun 2018 la 03:39
-- Versiune server: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_project`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `game_state`
--

CREATE TABLE `game_state` (
  `id` int(20) UNSIGNED NOT NULL,
  `id_user` int(20) UNSIGNED NOT NULL,
  `score` int(20) UNSIGNED NOT NULL,
  `checkpoint` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `checkpointX` int(11) NOT NULL,
  `checkpointY` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Salvarea datelor din tabel `game_state`
--

INSERT INTO `game_state` (`id`, `id_user`, `score`, `checkpoint`, `checkpointX`, `checkpointY`) VALUES
(2, 1, 70, 'ala', 1138, 77),
(3, 2, 30, 'bala', 0, 0),
(4, 3, 60, 'cala', 0, 0),
(5, 4, 100, 'dala', 0, 0),
(6, 5, 70, 'eala', 0, 0),
(7, 6, 50, 'alabala', 1137, 92),
(8, 7, 0, 'alabala', 0, 0),
(9, 8, 0, 'alabala', 0, 0);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `users`
--

CREATE TABLE `users` (
  `id` int(20) UNSIGNED NOT NULL,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Salvarea datelor din tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'zreika', 'mihnea.bigu@yahoo.com', 'bmwbmw'),
(2, 'dinoSaph', 'andra.oica@yahoo.com', 'hamster'),
(3, 'andrei', 'andrei.sfartz@gmail.com', 'andrei123'),
(4, 'alex', 'alex@gmail.com', 'alex123'),
(5, 'test', 'test@gmail.com', 'testpass'),
(6, 'testare', 'testare@gmail.com', '1234'),
(7, 'Ciprian', 'ciprian@gmail.com', '1234'),
(8, 'testVideo', 'testVideo@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game_state`
--
ALTER TABLE `game_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_index` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game_state`
--
ALTER TABLE `game_state`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrictii pentru tabele sterse
--

--
-- Restrictii pentru tabele `game_state`
--
ALTER TABLE `game_state`
  ADD CONSTRAINT `fk_id` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
