-- MySQL dump 10.17  Distrib 10.3.13-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: salestrekker_task
-- ------------------------------------------------------
-- Server version	10.3.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Companies`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_person` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lead_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Companies_fk0` (`lead_id`),
  CONSTRAINT `Companies_fk0` FOREIGN KEY (`lead_id`) REFERENCES `Leads` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Companies`
--

INSERT INTO `Companies` VALUES (1,'Itzel','http://earnestine.net',5),(2,'Larissa','https://kristoffer.net',7),(3,'Koby','http://maurice.net',9),(4,'Freddie','https://tyrique.net',11),(5,'Armando','https://cody.org',13),(6,'Mathias','http://scot.com',15),(7,'Sibyl','https://ella.name',17),(8,'Diamond','https://dallin.net',19),(9,'Carmella','https://barrett.name',21),(10,'Hayley','https://zena.biz',23),(11,'Colby','https://blaise.com',25),(12,'Scottie','http://mabel.info',27),(13,'Felicia','https://roslyn.org',29),(14,'Adella','https://baron.com',31),(15,'Ellie','https://judah.org',33),(16,'Emmitt','https://hilario.org',35),(17,'Darren','http://kale.com',37),(18,'Taryn','https://kailyn.info',39),(19,'Alanis','http://magdalen.info',41),(20,'Audrey','https://madilyn.com',43),(21,'Mika','nekisajt.com',50);

--
-- Table structure for table `Employees`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Employees_fk0` (`role_id`),
  CONSTRAINT `Employees_fk0` FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employees`
--

INSERT INTO `Employees` VALUES (2,'Zinedine','Zidane','zizou@zizou.com','b8c8a95caff9be2eb8c39c47f32c46386fad3b9813be2dc6e345837801cedaa8',1),(4,'Admin','Adminic','admin@admin.com','240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',2);

--
-- Table structure for table `Leads`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Leads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Leads`
--

INSERT INTO `Leads` VALUES (5,'Dicki Inc','56409 Graham Shores Apt. 881','1-058-766-6118','DickiInc.Welch77@hotmail.com','new'),(6,'Neha','017 Romaguera Port Suite 896','1-477-019-3098','Neha.Bechtelar78@hotmail.com','new'),(7,'Beer and Sons','2451 Lind Plaza Apt. 166','1-791-047-0117','BeerandSons.Tromp53@hotmail.com','new'),(8,'Alfred','537 Jesus Prairie Apt. 265','1-529-888-4664','Alfred74@yahoo.com','new'),(9,'Sporer - Hickle','20972 Meghan Spur Apt. 609','1-100-138-2142','Sporer-Hickle_Schiller@hotmail.com','new'),(10,'Richmond','7461 Gennaro Ferry Suite 889','1-990-814-2313','Richmond65@yahoo.com','new'),(11,'Rice Inc','423 Oswaldo Causeway Apt. 963','1-868-513-1014','RiceInc_OKon52@hotmail.com','new'),(12,'Carmine','529 Immanuel Islands Suite 135','1-486-170-2041','Carmine_Kohler@hotmail.com','new'),(13,'Bashirian, Glover and Boyer','0623 Xander Views Apt. 762','1-624-736-5680','BashirianGloverandBoyer_Anderson@gmail.com','new'),(14,'Alberta','87254 Schuppe Center Apt. 014','1-609-472-7465','Alberta47@yahoo.com','new'),(15,'Stamm, O\'Reilly and Nikolaus','2131 Rhiannon Divide Apt. 344','1-742-869-5215','StammOReillyandNikolaus_Graham90@hotmail.com','new'),(16,'Breana','7995 Veum Point Apt. 246','1-039-892-8330','Breana36@gmail.com','new'),(17,'Bednar, Padberg and Ortiz','50005 Maddison Prairie Suite 495','1-292-929-7629','BednarPadbergandOrtiz.Beer85@gmail.com','new'),(18,'Keira','1885 Watsica Manor Apt. 687','1-967-957-5794','Keira.Botsford@yahoo.com','new'),(19,'Davis, Grant and Zboncak','80202 Mitchell Divide Apt. 750','1-144-661-3330','DavisGrantandZboncak67@yahoo.com','new'),(20,'Norwood','22818 Yost Shoals Suite 137','1-606-908-0588','Norwood.Sipes53@yahoo.com','new'),(21,'Farrell, Grady and Boehm','5765 Adrienne Bridge Apt. 320','1-436-379-7287','FarrellGradyandBoehm.Johnston41@hotmail.com','new'),(22,'Elouise','725 Turcotte Meadow Apt. 255','1-535-383-3503','Elouise84@yahoo.com','new'),(23,'Davis and Sons','156 Thiel Stream Suite 797','1-776-773-0611','DavisandSons.Kuvalis@gmail.com','new'),(24,'Taryn','742 Darwin Freeway Apt. 001','1-347-581-1635','Taryn_Toy@yahoo.com','new'),(25,'Willms and Sons','5827 Aaron Cape Suite 887','1-884-712-4451','WillmsandSons.Schowalter1@hotmail.com','new'),(26,'Izabella','3787 O\'Conner Stravenue Suite 371','1-748-740-8283','Izabella_Dietrich@gmail.com','new'),(27,'Murray - Ebert','37374 Cremin Village Apt. 096','1-606-493-4799','Murray-Ebert.Huels9@gmail.com','new'),(28,'Pasquale','761 Jermain Shore Suite 007','1-621-299-5090','Pasquale42@gmail.com','new'),(29,'Orn Inc','411 Arielle Mountains Apt. 152','1-510-377-5726','OrnInc20@yahoo.com','new'),(30,'Hardy','709 Zena Stravenue Apt. 485','1-470-897-9975','Hardy27@hotmail.com','new'),(31,'Mueller - O\'Reilly','657 Ledner Lane Apt. 632','1-050-332-5683','Mueller-OReilly_Blanda@hotmail.com','new'),(32,'Maudie','6967 Kiarra Fords Apt. 629','1-526-412-6453','Maudie_Harris@yahoo.com','new'),(33,'Graham, Marvin and Welch','4587 Antonietta Greens Suite 103','1-678-650-7104','GrahamMarvinandWelch.Mohr@yahoo.com','new'),(34,'Gladys','451 Kariane Forges Suite 314','1-229-336-8560','Gladys_Walter@gmail.com','new'),(35,'Hirthe, Boehm and Rowe','99954 McLaughlin Flat Apt. 415','1-531-390-5824','HirtheBoehmandRowe66@yahoo.com','new'),(36,'Oral','14124 Effertz Hill Suite 947','1-175-901-2557','Oral63@gmail.com','new'),(37,'Grant, Homenick and Goldner','234 Lawrence Garden Suite 861','1-148-109-5047','GrantHomenickandGoldner_Balistreri@gmail.com','new'),(38,'Katharina','2838 Prohaska Springs Apt. 738','1-158-503-4558','Katharina_Yundt@gmail.com','new'),(39,'Johnson, Romaguera and Lakin','839 Purdy Unions Suite 351','1-794-238-8399','JohnsonRomagueraandLakin.Roob52@gmail.com','new'),(40,'Ricardo','5204 Wyman Walk Suite 620','1-575-216-1534','Ricardo.Ernser77@yahoo.com','new'),(41,'Braun - Rogahn','829 Addison Harbor Apt. 725','1-772-060-4668','Braun-Rogahn.Goodwin@hotmail.com','new'),(42,'Shany','539 Aiyana Shores Apt. 375','1-718-830-9222','Shany55@gmail.com','new'),(43,'Tillman, Aufderhar and Cole','629 Jennyfer Hills Suite 203','1-040-214-8653','TillmanAufderharandCole_Ankunding@hotmail.com','new'),(44,'Alaina','7951 Dach Tunnel Suite 931','1-793-842-4846','Alaina_Swift@yahoo.com','new'),(50,'Ducan+','nekadresa 12','1-213-123-123','ducan@ducan.com','new'),(64,'Hernan','parma street 12','10123-123','crespo@parma.com','new');

--
-- Table structure for table `Persons`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` char(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lead_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Persons_fk1` (`lead_id`),
  CONSTRAINT `Persons_fk1` FOREIGN KEY (`lead_id`) REFERENCES `Leads` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Persons`
--

INSERT INTO `Persons` VALUES (1,'Pollich','f',6),(2,'Mante','m',8),(3,'Runte','m',10),(4,'Bergstrom','f',12),(5,'Hahn','f',14),(6,'Konopelski','f',16),(7,'Maggio','f',18),(8,'Emmerich','m',20),(9,'Gaylord','m',22),(10,'Jenkins','m',24),(11,'Lockman','f',26),(12,'Boyle','m',28),(13,'Dooley','m',30),(14,'Pollich','f',32),(15,'Rutherford','m',34),(16,'Goodwin','f',36),(17,'Monahan','f',38),(18,'Hermiston','m',40),(19,'Braun','m',42),(20,'Thiel','f',44),(36,'Crespo','m',64);

--
-- Table structure for table `Roles`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` VALUES (1,'employee'),(2,'manager');
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-02 21:59:17
