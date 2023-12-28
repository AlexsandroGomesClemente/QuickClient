-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para quick_client
CREATE DATABASE IF NOT EXISTS `quick_client` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `quick_client`;

-- Copiando estrutura para tabela quick_client.clients
CREATE TABLE IF NOT EXISTS `clients` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint(20) NOT NULL,
  `data_hora_cadastro` datetime NOT NULL,
  `codigo` varchar(15) NOT NULL,
  `name` varchar(150) NOT NULL,
  `cpf_cnpj` varchar(20) NOT NULL DEFAULT '',
  `cep` int(11) DEFAULT 0,
  `logradouro` varchar(100) DEFAULT NULL,
  `endereco` varchar(120) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `cidade` varchar(60) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `complemento` varchar(150) DEFAULT NULL,
  `telefone` varchar(15) NOT NULL,
  `limite_credito` float DEFAULT NULL,
  `validate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela quick_client.clients: ~3 rows (aproximadamente)
INSERT INTO `clients` (`id`, `id_usuario`, `data_hora_cadastro`, `codigo`, `name`, `cpf_cnpj`, `cep`, `logradouro`, `endereco`, `numero`, `bairro`, `cidade`, `uf`, `complemento`, `telefone`, `limite_credito`, `validate`) VALUES
	(20, 405, '2023-12-27 23:49:58', '1063', 'Alex', '12345678990', 13178, 'Rua Odette Jones Gigo', 'Rua Odette Jones Gigo', '352', 'Jardim Maria Luíza', 'Sumaré', 'SP', 'casa', '1999999', 10, '2024-01-06'),
	(21, 278, '2023-12-27 23:50:32', '708', 'Alexsandro.', '12312312', 0, 'teste', 'rua alferes joao jose', '312', 'Jardim Maria Luíza', 'campinas', 'SP', 'casa', '19983728297', 23, '2024-01-06'),
	(22, 127, '2023-12-28 01:07:12', '959', 'Evando', '12345678909', 45880, 'Rua Rondon', 'Rua rondon', '68', 'Centro', 'Camacan', 'BA', 'casa', '19999999999', 23, '2024-01-07');

-- Copiando estrutura para tabela quick_client.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela quick_client.users: ~4 rows (aproximadamente)
INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
	(5, 'Alex 123', 'Teste@teste.com', '12345'),
	(6, 'Carol', 'carol@teste.com', '726'),
	(7, 'Alexsandro Gomes 123', 'alexsandro.gomes.clemente@hotmail.com', '1627'),
	(8, 'Caroline Ravena Santos Almeida', 'carol@teste.com.br', '1234');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
