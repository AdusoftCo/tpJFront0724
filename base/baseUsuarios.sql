-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for 24100cac
CREATE DATABASE IF NOT EXISTS `24100cac` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `24100cac`;

-- Dumping structure for table 24100cac.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `clientes_tipos_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `clientes_tipos_id` (`clientes_tipos_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table 24100cac.clientes: ~6 rows (approximately)
INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `email`, `imagen`, `clientes_tipos_id`) VALUES
	(1, 'Emanuel Oscar', 'Aduviri Fernandez', '48113584@gmail.com', NULL, 3),
	(2, 'Jane', 'Fernandez D.', 'janere_645@hotmail.com', '/imagenes/kity.jpg', 1),
	(8, 'Tomasa', 'Alejo', 'tomy@gmail.com', NULL, 3),
	(11, 'sebas', 'adus', 'sebas@hotmail', 'imagenes/tipo.gif', 1),
	(13, 'Silvia', 'Adus', 'silvia@gmail.com', NULL, 3),
	(14, 'Roverto', 'Adus', 'adis@hhd', NULL, 1);

-- Dumping structure for table 24100cac.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `activo` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table 24100cac.roles: ~2 rows (approximately)
INSERT INTO `roles` (`id`, `nombre`, `activo`) VALUES
	(1, 'ADMIN', 1),
	(2, 'GUEST', 1);

-- Dumping structure for table 24100cac.tipo_clientes
CREATE TABLE IF NOT EXISTS `tipo_clientes` (
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table 24100cac.tipo_clientes: ~0 rows (approximately)

-- Dumping structure for table 24100cac.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table 24100cac.usuarios: ~2 rows (approximately)
INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`) VALUES
	(1, 'juan', 'juan@email.com', 'test1234'),
	(2, 'ale', 'ale@gmail.com', 'test1234');

-- Dumping structure for table 24100cac.usuarios_roles
CREATE TABLE IF NOT EXISTS `usuarios_roles` (
  `usuarios_id` int(11) NOT NULL,
  `roles_id` int(11) NOT NULL,
  KEY `Index 1` (`usuarios_id`),
  KEY `Index 2` (`roles_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table 24100cac.usuarios_roles: ~3 rows (approximately)
INSERT INTO `usuarios_roles` (`usuarios_id`, `roles_id`) VALUES
	(1, 1),
	(1, 2),
	(2, 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
