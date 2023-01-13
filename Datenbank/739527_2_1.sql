-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 13. Jan 2023 um 10:56
-- Server-Version: 10.3.31-MariaDB-0+deb10u1
-- PHP-Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `739527_2_1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artikel`
--

CREATE TABLE `artikel` (
  `ID` int(11) NOT NULL,
  `artikel` varchar(100) NOT NULL,
  `bild` varchar(300) NOT NULL,
  `kategorie_id` int(11) NOT NULL,
  `beschreibung` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  `preis` float NOT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `artikel`
--

INSERT INTO `artikel` (`ID`, `artikel`, `bild`, `kategorie_id`, `beschreibung`, `status`, `user_id`, `preis`, `timestamp`) VALUES
(1, 'NutriBullet Standmixer', 'https://www.landi.ch/ImageOriginal/Img/product/050/973/50973_mixer-nutri-silber-1000-w_50973_1.jpg?width=1600&height=1600&mode=pad&bgcolor=fff', 2, ' Perfekter Mixer für Früchte und Nüsse!', 1, 1, 15, '2023-01-12 15:01:58'),
(2, 'Mikrowelle Mio Star', 'https://image.migros.ch/fm-lg/775438654fb46fcbfef7d294b105f4a1cf753e06/mio-star-wave-easy-mikrowelle.jpg', 2, 'Super Mikrowelle mit nur zwei Leistungsstufen für eine erleichterte Bedienung.', 0, 2, 10, '2023-01-12 15:26:51'),
(3, 'Kennwood Küchenmaschine', 'https://dpv87w1mllzh1.cloudfront.net/kenwood_swiss/attachments/data/000/013/708/original/titanium-chef-baker.jpg?1633354513', 2, ' Genial für Hobbybäcker:innen, die mehr von ihrer Küchenmaschine verlangen.', 1, 3, 50, '2023-01-12 15:31:20'),
(4, 'Sandwich Grill Toaster', 'https://i.erli.pl/utse6.851677.xl.jpg', 2, ' Grossartig für einen Sandwich-Abend.', 1, 4, 25, '2023-01-12 15:40:13'),
(5, 'Nudelmaschine für Pasta', 'https://www.deubaxxl.ch/media/image/f8/6b/25/a_de_101309g20.jpg', 1, ' Mit der manuellen Pasta-Maschine zauberst Du Dir im Nu die besten Pastas der Welt. ', 1, 5, 10, '2023-01-12 15:43:04');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kategorie`
--

CREATE TABLE `kategorie` (
  `ID` int(11) NOT NULL,
  `kategorie` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `kategorie`
--

INSERT INTO `kategorie` (`ID`, `kategorie`) VALUES
(1, 'Nicht elektronische Geräte'),
(2, 'Elektronische Geräte');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `session`
--

CREATE TABLE `session` (
  `ID` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(42) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `session`
--

INSERT INTO `session` (`ID`, `user_id`, `token`, `timestamp`) VALUES
(27, 1, 'xv3FRi7EDwzcHvd608KIbUYednUpBpqpElBWcKTldg', '2023-01-13 08:31:22'),
(28, 3, '5GliF0LhLSmXrITC1CNpXcRzUFMXIMNU4RbS4iSxGp', '2023-01-13 09:10:13'),
(29, 2, 'i0Ya3jjQ3A0BWa1E5Rmlj7k7IepTG8XozR45MZv93m', '2023-01-13 09:50:09');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`ID`, `name`, `email`, `password`) VALUES
(1, 'Elodie', 'elodie@mmp.ch', '$2y$10$ZIspBENtW8lOZbJA5vlk2u39au6oVg/u0SScv8z9229514lCTv5IK'),
(2, 'Julia', 'julia@mmp.ch', '$2y$10$RiR0Ip2tytK71H.dq5N8x.5PeaeffHoIXiviTXnJC6xzYatFXBBb2'),
(3, 'Livia', 'livia@mmp.ch', '$2y$10$ReU8xaEZdisgngyrOSIJaOnBQnm2UOi3kZ5DpusIiPL3pI9bKMkb.'),
(4, 'Joanne', 'joanne@mmp.ch', '$2y$10$pLEwPZuwEZJ81Fb/9I/mZ.xHfVHtLiVBvG8GzNPdrz0A8dVRfU6oG'),
(5, 'Corinne', 'corinne@mmp.ch', '$2y$10$uwSPVqWcRHMrHnQc1MHcsePTeVaase2bU/5vCy/V1hqpOnPOF.O6i');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `kategorie` (`kategorie_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indizes für die Tabelle `kategorie`
--
ALTER TABLE `kategorie`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `artikel`
--
ALTER TABLE `artikel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT für Tabelle `kategorie`
--
ALTER TABLE `kategorie`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT für Tabelle `session`
--
ALTER TABLE `session`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
