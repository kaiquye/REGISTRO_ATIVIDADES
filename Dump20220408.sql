CREATE DATABASE  IF NOT EXISTS `gestao_registro` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gestao_registro`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: gestao_registro
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `setor` varchar(45) DEFAULT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `centrodecusto`
--

DROP TABLE IF EXISTS `centrodecusto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `centrodecusto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `setor` varchar(45) NOT NULL,
  `gastos` varchar(45) DEFAULT NULL,
  `livres` varchar(45) DEFAULT NULL,
  `empresa` varchar(45) DEFAULT NULL,
  `status` tinyint DEFAULT '1',
  `Decorrido` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `setor_UNIQUE` (`setor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centrodecusto`
--

LOCK TABLES `centrodecusto` WRITE;
/*!40000 ALTER TABLE `centrodecusto` DISABLE KEYS */;
INSERT INTO `centrodecusto` VALUES (2,'TI','000.000','100.000','Hect',1,NULL),(3,'RH','000.000','100.000','Hect',1,NULL);
/*!40000 ALTER TABLE `centrodecusto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nome_UNIQUE` (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gerente`
--

DROP TABLE IF EXISTS `gerente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gerente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `setor` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `matricula` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  UNIQUE KEY `cpf_UNIQUE` (`matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gerente`
--

LOCK TABLES `gerente` WRITE;
/*!40000 ALTER TABLE `gerente` DISABLE KEYS */;
INSERT INTO `gerente` VALUES (1,'Kaique.Mendes','TI','31-93660-8321','1'),(2,'Kaique.Mendes','TI','31-93020-8321','2'),(3,'Kaique.Mendes','TI','31-93370-8321','3'),(4,'Kaique.Mendes','TI','31-93320-8321','4'),(5,'Kaique.Mendes','TI','31-9320-8321','41');
/*!40000 ALTER TABLE `gerente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projeto`
--

DROP TABLE IF EXISTS `projeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projeto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `setor` varchar(45) NOT NULL,
  `descricao` varchar(777) NOT NULL,
  `inicio` varchar(45) NOT NULL,
  `gerente_id` int NOT NULL,
  `centrodecusto_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_projeto_gerente_idx` (`gerente_id`),
  KEY `fk_projeto_centrodecusto1_idx` (`centrodecusto_id`),
  CONSTRAINT `fk_projeto_centrodecusto1` FOREIGN KEY (`centrodecusto_id`) REFERENCES `centrodecusto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_projeto_gerente` FOREIGN KEY (`gerente_id`) REFERENCES `gerente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto`
--

LOCK TABLES `projeto` WRITE;
/*!40000 ALTER TABLE `projeto` DISABLE KEYS */;
INSERT INTO `projeto` VALUES (17,'DP','Nova tarefa','2022-04-08 11:30:34.000',2,2);
/*!40000 ALTER TABLE `projeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registros`
--

DROP TABLE IF EXISTS `registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `assunto` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `inicio` datetime NOT NULL,
  `termino` datetime NOT NULL,
  `projeto_id` int NOT NULL,
  `funcionario_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_registros_projeto1_idx` (`projeto_id`),
  KEY `fk_registros_funcionario1_idx` (`funcionario_id`),
  CONSTRAINT `fk_registros_funcionario1` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`id`),
  CONSTRAINT `fk_registros_projeto1` FOREIGN KEY (`projeto_id`) REFERENCES `projeto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (5,'Desenvolvimento','kaique@gmail.com','2022-04-08 11:42:40','2022-05-08 09:02:24',17,NULL),(6,'Desenvolvimento','kaique@gmail.com','2022-04-08 11:43:46','2022-05-08 09:02:24',17,NULL),(7,'Desenvolvimento','kaique@gmail.com','2022-04-08 11:44:38','2022-05-08 09:02:24',17,NULL),(8,'Desenvolvimento','kaique@gmail.com','2022-04-08 11:52:00','2022-05-08 09:02:24',17,NULL),(10,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:42:51','2022-05-08 09:02:24',17,NULL),(11,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:43:09','2022-05-08 09:02:24',17,NULL),(12,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:43:54','2022-05-08 11:52:00',17,NULL),(13,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:44:03','2022-04-08 11:52:00',17,NULL),(14,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:47:06','2022-05-08 16:52:00',17,NULL),(15,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:48:47','2022-04-08 16:52:00',17,NULL),(16,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:58:00','2022-04-08 16:52:00',17,NULL),(17,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:58:20','2022-04-08 12:52:00',17,NULL),(18,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:58:31','2022-04-08 19:52:00',17,NULL),(19,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:00:16','2022-04-08 19:52:00',17,NULL),(20,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:07:40','2022-04-08 19:52:00',17,NULL),(21,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:07:55','2022-04-08 19:52:00',17,NULL),(22,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:08:20','2022-04-08 19:52:00',17,NULL),(23,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:08:59','2022-04-08 19:52:00',17,NULL),(24,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:12:00','2022-04-08 19:52:00',17,NULL),(25,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:12:15','2022-04-08 19:52:00',17,NULL),(26,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:12:43','2022-04-08 19:52:00',17,NULL),(27,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:13:07','2022-04-08 19:52:00',17,NULL),(28,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:13:24','2022-04-08 19:52:00',17,NULL);
/*!40000 ALTER TABLE `registros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gestao_registro'
--

--
-- Dumping routines for database 'gestao_registro'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-08 14:22:57
