CREATE DATABASE  IF NOT EXISTS `gestao_registro` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gestao_registro`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gestao_registro
-- ------------------------------------------------------
-- Server version	8.0.26

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
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `password` varchar(999) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'Kaique','TI','Estagio','kaique@gmail.combr','319939212','$2b$10$6EMXKe/PRzlyrOwH1iEeduAVFsCXNVXFGUFykcvV1V0mbwehV.qhO');
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
  `Decorrido` float DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `setor_UNIQUE` (`setor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centrodecusto`
--

LOCK TABLES `centrodecusto` WRITE;
/*!40000 ALTER TABLE `centrodecusto` DISABLE KEYS */;
INSERT INTO `centrodecusto` VALUES (2,'TI','000.000','100.000','Hect',1,0),(3,'RH','000.000','100.000','Hect',1,0);
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
  `decorrido` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_projeto_gerente_idx` (`gerente_id`),
  KEY `fk_projeto_centrodecusto1_idx` (`centrodecusto_id`),
  CONSTRAINT `fk_projeto_centrodecusto1` FOREIGN KEY (`centrodecusto_id`) REFERENCES `centrodecusto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_projeto_gerente` FOREIGN KEY (`gerente_id`) REFERENCES `gerente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto`
--

LOCK TABLES `projeto` WRITE;
/*!40000 ALTER TABLE `projeto` DISABLE KEYS */;
INSERT INTO `projeto` VALUES (17,'DP','Nova tarefa','2022-04-08 11:30:34.000',2,2,5.11213),(18,'TI','desenvolvimento de alocacao','2004-05-05 13:04:20.000',2,2,2);
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
  `decorrido` float DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_registros_projeto1_idx` (`projeto_id`),
  KEY `fk_registros_funcionario1_idx` (`funcionario_id`),
  CONSTRAINT `fk_registros_funcionario1` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`id`),
  CONSTRAINT `fk_registros_projeto1` FOREIGN KEY (`projeto_id`) REFERENCES `projeto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (5,'Desenvolvimento','kaique@gmail.com','2022-04-03 11:42:40','2022-05-08 09:02:24',17,NULL,0),(6,'Desenvolvimento','kaique@gmail.com','2022-04-03 11:43:46','2022-05-08 09:02:24',17,NULL,0),(7,'Desenvolvimento','kaique@gmail.com','2022-04-02 11:44:38','2022-05-08 09:02:24',17,NULL,0),(8,'Desenvolvimento','kaique@gmail.com','2022-04-04 11:52:00','2022-05-08 09:02:24',17,NULL,0),(10,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:42:51','2022-05-08 09:02:24',17,NULL,0),(11,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:43:09','2022-05-08 09:02:24',17,NULL,0),(12,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:43:54','2022-05-08 11:52:00',17,NULL,0),(13,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:44:03','2022-04-08 11:52:00',17,NULL,0),(14,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:47:06','2022-05-08 16:52:00',17,NULL,0),(15,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:48:47','2022-04-08 16:52:00',17,NULL,0),(16,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:58:00','2022-04-08 16:52:00',17,NULL,0),(17,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:58:20','2022-04-08 12:52:00',17,NULL,0),(18,'Desenvolvimento','kaique@gmail.com','2022-04-08 13:58:31','2022-04-08 19:52:00',17,NULL,0),(19,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:00:16','2022-04-08 19:52:00',17,NULL,0),(20,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:07:40','2022-04-08 19:52:00',17,NULL,0),(21,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:07:55','2022-04-08 19:52:00',17,NULL,0),(22,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:08:20','2022-04-08 19:52:00',17,NULL,0),(23,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:08:59','2022-04-08 19:52:00',17,NULL,0),(24,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:12:00','2022-04-08 19:52:00',17,NULL,0),(25,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:12:15','2022-04-08 19:52:00',17,NULL,0),(26,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:12:43','2022-04-08 19:52:00',17,NULL,0),(27,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:13:07','2022-04-08 19:52:00',17,NULL,0),(28,'Desenvolvimento','kaique@gmail.com','2022-04-08 14:13:24','2022-04-08 19:52:00',17,NULL,0),(42,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:18:20','2022-04-08 23:31:30',17,NULL,0),(45,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:19:32','2022-04-08 23:31:30',17,NULL,0),(46,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:19:45','2022-04-08 23:31:30',17,NULL,0),(50,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:20:54','2022-04-08 23:31:30',17,NULL,0),(51,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:21:25','2022-04-08 23:31:30',17,NULL,0),(52,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:21:39','2022-04-08 23:31:30',17,NULL,0),(53,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:22:03','2022-04-08 23:31:30',17,NULL,0),(54,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:22:36','2022-04-08 23:31:30',17,NULL,0),(55,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:25:28','2022-04-08 23:31:30',17,NULL,0),(56,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:25:36','2022-04-08 23:31:30',17,NULL,0),(57,'Desenvolvimento software registro','kaique@gmail.com','2022-04-08 17:39:56','2022-04-08 23:31:30',17,NULL,0),(58,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:09:45','2022-04-08 23:31:30',17,NULL,0),(59,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:16:36','2022-04-08 23:31:30',17,NULL,0.656319),(60,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:16:39','2022-04-08 23:31:30',17,NULL,0.656354),(61,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:18:47','2022-04-08 00:31:30',17,NULL,1.61617),(62,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:19:20','2022-04-08 13:31:30',17,NULL,1.07488),(63,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:19:53','2022-04-09 13:31:30',17,NULL,0.0752662),(64,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:20:38','2022-04-09 15:15:30',17,NULL,0.00356481),(65,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:20:52','2022-04-09 15:20:30',17,NULL,0.00025463),(66,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:21:07','2022-04-09 15:20:50',17,NULL,0.000196759),(67,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:36:19','2022-04-09 15:20:50',17,NULL,929),(68,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:36:42','2022-04-09 15:20:50',17,NULL,952),(69,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:42:44','2022-04-09 15:20:50',17,NULL,0.022),(70,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:43:00','2022-04-09 15:20:50',17,NULL,0.023),(71,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:43:21','2022-04-09 15:20:50',17,NULL,1649530000),(72,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:43:35','2022-04-09 15:20:50',17,NULL,1649530000),(73,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:43:55','2022-04-09 15:20:50',17,NULL,1649530000),(74,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:44:25','2022-04-09 15:20:50',17,NULL,1649530000),(75,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:44:38','2022-04-09 15:20:50',17,NULL,1649530000),(76,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:45:05','2022-04-09 15:20:50',17,NULL,1649530000),(77,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:45:52','2022-04-09 15:20:50',17,NULL,1649530000),(78,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:50:46','2022-04-09 15:20:50',17,NULL,1649530000),(79,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:51:53','2022-04-09 15:20:50',17,NULL,1649530000),(80,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:52:03','2022-04-09 15:20:50',17,NULL,1649530000),(81,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:52:59','2022-04-09 15:20:50',17,NULL,1649530000),(82,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:54:33','2022-04-09 15:20:50',17,NULL,1649530000),(83,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:54:43','2022-04-09 15:20:50',17,NULL,1649530000),(84,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:54:52','2022-04-09 15:20:50',17,NULL,1649530000),(85,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:55:29','2022-04-09 15:20:50',17,NULL,1649530000),(86,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:56:07','2022-04-09 15:20:50',17,NULL,-244.151),(87,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:56:39','2022-04-09 15:20:50',17,NULL,-0.00320494),(88,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:57:03','2022-04-09 15:20:50',17,NULL,0.996528),(89,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:57:24','2022-04-09 15:20:50',17,NULL,0.0254049),(90,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:57:35','2022-04-09 15:20:50',17,NULL,0.612603),(91,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:57:43','2022-04-09 15:20:50',17,NULL,36.8868),(92,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:58:04','2022-04-09 15:20:50',17,NULL,37.2428),(93,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:58:10','2022-04-09 15:20:00',17,NULL,38.1693),(94,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:58:27','2022-04-09 14:20:00',17,NULL,98.4613),(95,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:58:41','2022-04-09 14:10:00',17,NULL,108.697),(96,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 15:59:10','2022-04-09 14:10:00',17,NULL,1.81949),(97,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:00:01','2022-04-09 14:50:00',17,NULL,1.16715),(98,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:00:04','2022-04-09 14:50:00',17,NULL,1.16779),(99,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:00:27','2022-04-09 14:50:00',17,NULL,1.17433),(100,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:00:49','2022-04-09 15:00:00',17,NULL,1.01388),(101,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:01:05','2022-04-09 15:00:00',17,NULL,1.01827),(102,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:02:03','2022-04-10 15:00:00',17,NULL,-0.9569),(103,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:02:29','2022-04-08 15:00:00',17,NULL,1.0434),(104,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:03:21','2022-04-09 15:00:00',17,NULL,0.0439959),(105,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:03:32','2022-04-09 10:00:00',17,NULL,0.252464),(106,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:04:14','2022-04-07 10:00:00',17,NULL,2.25294),(107,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:07:35','2022-04-07 15:00:00',17,NULL,2.04694),(108,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:07:42','2022-04-09 15:00:00',17,NULL,0.0470162),(109,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:14:46','2022-04-09 15:00:00',17,NULL,0.0519299),(110,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:14:55','2022-04-09 15:00:00',17,NULL,0.0520322),(111,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:19:18','2022-04-09 15:00:00',17,NULL,0.0550765),(112,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:19:33','2022-04-05 15:00:00',17,NULL,4.05525),(113,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:19:37','2022-04-08 15:00:00',17,NULL,1.05529),(114,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:19:41','2022-04-02 15:00:00',17,NULL,7.05534),(115,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:20:41','2022-04-08 15:00:00',17,NULL,1.05603),(116,'Desenvolvimento software registro','kaique@gmail.com','2022-04-09 16:20:46','2022-04-05 15:00:00',17,NULL,4.0561);
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

-- Dump completed on 2022-04-11  0:08:50
