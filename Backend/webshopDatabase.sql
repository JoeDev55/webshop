-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Júl 19. 09:28
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `webshop`
--
CREATE DATABASE IF NOT EXISTS `webshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `webshop`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `favourites`
--

CREATE TABLE `favourites` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `favourites`
--

INSERT INTO `favourites` (`id`, `user_id`, `product_id`) VALUES
(2, 1, 2),
(3, 1, 2),
(4, 1, 2),
(5, 1, 2),
(6, 1, 2),
(7, 1, 2),
(15, 1, 2),
(16, 1, 2),
(17, 1, 2),
(18, 1, 2),
(19, 1, 2),
(20, 1, 2),
(21, 1, 2),
(22, 1, 2),
(23, 1, 2),
(24, 1, 2),
(25, 1, 2),
(26, 1, 2),
(27, 1, 2),
(28, 1, 2),
(8, 1, 3),
(9, 1, 3),
(10, 1, 3),
(11, 1, 3),
(12, 1, 3),
(13, 1, 3),
(35, 1, 3),
(29, 1, 5),
(30, 1, 5),
(31, 1, 5),
(32, 1, 5),
(33, 1, 5),
(34, 1, 5),
(1, 1, 18);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `address` varchar(200) NOT NULL,
  `apartment` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `zipCode` int(10) NOT NULL,
  `phone` int(20) NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`items`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `orders`
--

INSERT INTO `orders` (`id`, `email`, `firstName`, `lastName`, `address`, `apartment`, `city`, `zipCode`, `phone`, `items`) VALUES
(1, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 4231, 1123123123, '[{\"id\":8,\"name\":\"Ginger\",\"price\":600,\"category\":\"vegetable\",\"img\":\"ginger.jpg\",\"quantity\":1},{\"id\":4,\"name\":\"Coriander\",\"price\":350,\"category\":\"vegetable\",\"img\":\"coriander.jpg\",\"quantity\":1},{\"id\":3,\"name\":\"Coffee\",\"price\":300,\"category\":\"specialty\",\"img\":\"coffeebeans.jpg\",\"quantity\":1}]'),
(2, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 4321, 123123123, '[{\"id\":8,\"name\":\"Ginger\",\"price\":600,\"category\":\"vegetable\",\"img\":\"ginger.jpg\",\"quantity\":1},{\"id\":4,\"name\":\"Coriander\",\"price\":350,\"category\":\"vegetable\",\"img\":\"coriander.jpg\",\"quantity\":1},{\"id\":3,\"name\":\"Coffee\",\"price\":300,\"category\":\"specialty\",\"img\":\"coffeebeans.jpg\",\"quantity\":1}]'),
(3, 'emailcim@gmail.com', 'Peter', 'Proba', 'Fő utca 44', '4/15', 'Budapest', 1000, 630234567, '[{\"id\":3,\"name\":\"Coffee\",\"price\":300,\"category\":\"specialty\",\"img\":\"coffeebeans.jpg\",\"quantity\":1},{\"id\":9,\"name\":\"Onion\",\"price\":200,\"category\":\"vegetable\",\"img\":\"onion.jpg\",\"quantity\":1},{\"id\":7,\"name\":\"Garlic\",\"price\":260,\"category\":\"vegetable\",\"img\":\"garlic.jpg\",\"quantity\":1},{\"id\":6,\"name\":\"Eggs\",\"price\":360,\"category\":\"poultry\",\"img\":\"eggs.jpg\",\"quantity\":1}]'),
(4, 'emailcim@gmail.com', 'asd', 'asd', 'asd', 'asd', 'Budapest', 4231, 1123123123, '[{\"id\":4,\"name\":\"Coriander\",\"price\":600,\"category\":\"vegetable\",\"img\":\"coriander.jpg\",\"quantityType\":\"bunch\",\"quantity\":1},{\"id\":8,\"name\":\"Ginger\",\"price\":3500,\"category\":\"vegetable\",\"img\":\"ginger.jpg\",\"quantityType\":\"kg\",\"quantity\":1},{\"id\":7,\"name\":\"Garlic\",\"price\":1500,\"category\":\"vegetable\",\"img\":\"garlic.jpg\",\"quantityType\":\"kg\",\"quantity\":1}]'),
(5, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 234234, 234232434, '[{\"id\":2,\"name\":\"Cherry tomatoes\",\"price\":1700,\"category\":\"vegetable\",\"img\":\"cherrytomatoes.jpg\",\"quantityType\":\"box (500g)\",\"quantity\":1},{\"id\":3,\"name\":\"Coffee\",\"price\":3000,\"category\":\"specialty\",\"img\":\"coffeebeans.jpg\",\"quantityType\":\"250g pack\",\"quantity\":1}]'),
(6, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 234234, 2147483647, '[{\"id\":2,\"name\":\"Cherry tomatoes\",\"price\":1700,\"category\":\"vegetable\",\"img\":\"cherrytomatoes.jpg\",\"quantityType\":\"box (500g)\",\"quantity\":5},{\"id\":3,\"name\":\"Coffee\",\"price\":3000,\"category\":\"specialty\",\"img\":\"coffeebeans.jpg\",\"quantityType\":\"250g pack\",\"quantity\":1},{\"id\":4,\"name\":\"Coriander\",\"price\":600,\"category\":\"vegetable\",\"img\":\"coriander.jpg\",\"quantityType\":\"bunch\",\"quantity\":1}]'),
(7, 'johnsmith@gmail.com', 'John', 'Smith', 'Fő utca 45', '4/14', 'Debrecen', 4031, 365608801, '[{\"id\":5,\"name\":\"Corn\",\"price\":500,\"category\":\"vegetable\",\"img\":\"corn.jpg\",\"quantityType\":\"piece\",\"quantity\":1},{\"id\":3,\"name\":\"Coffee\",\"price\":3000,\"category\":\"specialty\",\"img\":\"coffeebeans.jpg\",\"quantityType\":\"250g pack\",\"quantity\":1},{\"id\":8,\"name\":\"Ginger\",\"price\":3500,\"category\":\"vegetable\",\"img\":\"ginger.jpg\",\"quantityType\":\"kg\",\"quantity\":1},{\"id\":7,\"name\":\"Garlic\",\"price\":1500,\"category\":\"vegetable\",\"img\":\"garlic.jpg\",\"quantityType\":\"kg\",\"quantity\":5}]');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` int(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `img` varchar(200) NOT NULL,
  `quantityType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category`, `img`, `quantityType`) VALUES
(1, 'Aubergine', 800, 'vegetable', 'aubergine.jpg', 'kg'),
(2, 'Cherry tomatoes', 1700, 'vegetable', 'cherrytomatoes.jpg', 'box (500g)'),
(3, 'Coffee', 3000, 'specialty', 'coffeebeans.jpg', '250g pack'),
(4, 'Coriander', 600, 'vegetable', 'coriander.jpg', 'bunch'),
(5, 'Corn', 500, 'vegetable', 'corn.jpg', 'piece'),
(6, 'Eggs', 1000, 'poultry', 'eggs.jpg', '10 pcs box'),
(7, 'Garlic', 1500, 'vegetable', 'garlic.jpg', 'kg'),
(8, 'Ginger', 3500, 'vegetable', 'ginger.jpg', 'kg'),
(9, 'Onion', 400, 'vegetable', 'onion.jpg', 'kg'),
(10, 'Peas', 1200, 'vegetable', 'peas.jpg', 'kg'),
(11, 'Raspberry', 2800, 'fruit', 'raspberry.jpg', 'box (500g)'),
(13, 'Zucchini', 700, 'vegetable', 'zucchini.jpg', 'kg'),
(14, 'Bacon', 5500, 'meat', 'bacon.jpg', 'kg'),
(15, 'Cucumber', 400, 'vegetable', 'cucumber.jpg', 'piece'),
(16, 'Potato', 300, 'vegetable', 'potato.jpg', 'kg'),
(17, 'Chocolate', 700, 'specialty', 'chocolate.jpg', 'bar (100g)'),
(18, 'Almond', 5500, 'specialty', 'almond.jpg', 'kg'),
(19, 'Banana', 700, 'fruit', 'banana.jpg', 'kg'),
(20, 'Cashew', 6500, 'specialty', 'cashew.jpg', 'kg'),
(21, 'Chai spice', 1500, 'specialty', 'chaimix.jpg', 'jar (50g)'),
(22, 'Cheese', 3500, 'dairy', 'cheese.jpg', 'kg'),
(23, 'Cornmeal', 700, 'specialty', 'cornmeal.jpg', 'kg'),
(24, 'Curry powder', 1800, 'specialty', 'currypowder.jpg', 'jar (100g)'),
(25, 'Grapes', 1500, 'fruit', 'grapes.jpg', 'kg'),
(26, 'Hazelnut', 6000, 'specialty', 'hazelnut.jpg', 'kg'),
(27, 'Lentil mix', 1000, 'specialty', 'lentilmix.jpg', 'kg'),
(28, 'Mung beans', 1200, 'specialty', 'mungbeans.jpg', 'kg'),
(29, 'Orange', 550, 'fruit', 'orange.jpg', 'kg'),
(30, 'Peaches', 800, 'fruit', 'peaches.jpg', 'kg'),
(31, 'Pistachio', 4800, 'specialty', 'pistachio.jpg', 'kg'),
(32, 'Radish', 350, 'vegetable', 'radish.jpg', 'bunch'),
(33, 'Red lentil', 1100, 'specialty', 'redlentils.jpg', 'kg'),
(34, 'Rice mix', 1000, 'specialty', 'ricemix.jpg', 'kg'),
(35, 'Walnut', 3200, 'specialty', 'walnut.jpg', 'kg'),
(36, 'Watermelon', 400, 'fruit', 'watermelon.jpg', 'kg'),
(37, 'Pomegranate', 1200, 'fruit', 'pomegranate.jpg', 'piece');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `phoneNumber` int(100) NOT NULL,
  `birthDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `phoneNumber`, `birthDate`) VALUES
(1, 'asd', '$2b$10$anbesosmXMWADOgmjybm1OAy8JGRKYRlphb1lJlHtYF98x8rBFjy.', 'asd', 'asd', 123, '2003-05-09'),
(2, 'joci.galxd@gmail.com', '$2b$10$TRtpO/rxJ6l/YjVDdkBC0ec95UNw3sVq4U8ymF/sm9o.3SUGMJUuq', 'joci', 'joci', 123, '2003-05-09');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
