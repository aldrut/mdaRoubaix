-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : ven. 29 oct. 2021 à 07:22
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mda_roubaix`
--

-- --------------------------------------------------------

--
-- Structure de la table `langue`
--

DROP TABLE IF EXISTS `langue`;
CREATE TABLE IF NOT EXISTS `langue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  `deleted` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `langue`
--

INSERT INTO `langue` (`id`, `nom`, `icone`, `code`, `deleted`) VALUES
(1, 'Français', 'france', 'fr', 0),
(2, 'English', 'united-kingdom', 'en', 0),
(3, 'Português', 'portugal', 'pt', 0),
(4, 'العربية', 'saudi-arabia', 'ar', 0);

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `enonce` text NOT NULL,
  `ordre` smallint(6) NOT NULL,
  `reponse1` text NOT NULL,
  `reponse2` text DEFAULT NULL,
  `type` varchar(100) NOT NULL DEFAULT 'radio',
  `is_editable` tinyint(1) NOT NULL DEFAULT 1,
  `deleted` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `enonce`, `ordre`, `reponse1`, `reponse2`, `type`, `is_editable`, `deleted`) VALUES
(1, 'Êtes-vous un homme ou une femme ?', 1, 'Homme', 'Femme', 'radio', 0, 0),
(2, 'Combien avez-vous des enfants ?', 3, '', '', 'number', 1, 0),
(3, 'Êtes-vous étudiant(e) ?', 4, 'Oui', 'Non', 'radio', 1, 0),
(4, 'Êtes-vous au chômage ?', 5, 'Oui', 'Non', 'radio', 1, 0),
(5, 'Êtes-vous à la retraite ?', 6, 'Oui', 'Non', 'radio', 1, 0),
(6, 'Êtes-vous sans domicile fixe ?', 7, 'Oui', 'Non', 'radio', 1, 0),
(7, 'Avez-vous une reconnaissance handicap ?', 8, 'Oui', 'Non', 'radio', 1, 0),
(8, 'Quelle est votre année de naissance ?', 2, '', '', 'date', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `reponses`
--

DROP TABLE IF EXISTS `reponses`;
CREATE TABLE IF NOT EXISTS `reponses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_utilisateur` int(11) NOT NULL,
  `id_question` int(11) NOT NULL,
  `reponse` text NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `annee` date NOT NULL,
  `id_langue` int(11) NOT NULL,
  `deleted` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id_langue` (`id_langue`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `mail`, `mdp`, `annee`, `id_langue`, `deleted`) VALUES
(10, 'af66ab3198faa33052506887425a49764b1679486fd3b465c16c2e4c9cf1f2b8', 'zbHNKxokqr059NCkeey0/w$kBQ6akd9RbO33m4MA3S7UBCCD7JZwTyhkJeCgotJK2g', '0000-00-00', 1, 0),
(11, 'af66ab3198faa330463677896f3d51747862434a52c3e97eec560340', 'wI87sLPcvnpEmVjfwyFvJA$MCkxFG9BzxUlgGRMY3l1KDqjV1V2DX7STq74OqByNN4', '0000-00-00', 1, 0),
(12, 'af66ab3198faa33052506887425a49764b1679486fd3b465c16c2e4c9fad82f1', '2vmeIAQpUp5+GP0vFWMsRQ$YBbJsuqWv2YQygIzhTiSsG8Ab14/xXv8KOqNmjuKAyw', '0000-00-00', 1, 0),
(13, 'ae76c424a5e8d575513a60ce6c054962', '1mxhgJ+rGXlOlcd0109wPg$KZNfXv3V+y6YYY+IDA42z/za5kIPXA5Cn8F3GhjtE0U', '0000-00-00', 1, 0),
(14, 'ae76c424a5e8d575513a60ce6c055d6d78002c03', 'e9yIoEQyOd5UXAqsXMgIpA$ia0uir1pXUG9sXn4s3GRPWZEGYaJ6JLLfWUqyY0kijE', '0000-00-00', 2, 0),
(15, 'af66ab6ba39dd575513a60ce6c054962', '$2b$08$k8ZOgyVzSZ7soYe5hWRz.Ov4h.fUgtNR.zeG.yr682a9r0x2mCT0K', '0000-00-00', 1, 0),
(16, 'ae76ab6ea39ec5046f257884442b267679362c03', '$2b$08$rHXFJ7PcIrxqELAILySdNugoxv1.g1crjxU0VEXJqWaqiyq0SGbQS', '0000-00-00', 1, 0),
(17, '905cc4689bc0c1735a2a60934301267679362c03', '$2b$08$6gZ4/0I/r2mCWazRF1GhXO.GAKV4Svx37GGUU9wnzNkuh3iLwBmtK', '0000-00-00', 1, 0),
(18, '905cc4339b9fc17351526c847a065a6e403f5803', '$2b$08$.yPr/mDWPtGsWQBKXgzNNOMFqGhG54GoXgJp9l6QM/hTZMDGyMKaG', '0000-00-00', 1, 0),
(19, '905cc4339bfacd7351526c847a065a6e403f5803', '$2b$08$MGjMg8nyPDVtXJRuD7eXlu9iD0mxGTyOyldTHlmke4zScv/o194.i', '0000-00-00', 1, 0),
(20, '9079e2369bc0c12852376c957a065a6e403f5803', '$2b$08$6wsuMPRq/TcscgqkDjV0kem3vqKTMrC5839KOO6Ci0y/gEtYEp1pK', '0000-00-00', 1, 0),
(21, '9303c433a4c6d53f510c678b7a5b4226', '$2b$08$xJ/tK/9Ww1xHis2mNYTxPOTSzB1vdjp06wZSMoL5oKNdi0kYI9Wt.', '0000-00-00', 1, 0),
(22, '9303c4339b9edd3c51515ebf435a4962563c750e', '$2b$08$5q1AfVtrqGChdWLJodiWCOeZWrGx2RdT2a3NrUq9KQMVTV5cZVD72', '0000-00-00', 1, 0),
(23, 'af66ab3198faa330463677896f3d51687b094b5247f9df74', '$2b$08$eaKMwy0giso8jS0ZU5M2tu08oXtus/PseXndEK/j6fRdQU9497abO', '0000-00-00', 1, 0),
(24, 'af66ab3198faa330463677896f3d512b40095f0e47f9df74', '$2b$08$rA5ifrsXydr7kzgzxx97cuALOroKY55chb5CA2NgnwZKTPVavbpN6', '0000-00-00', 1, 0),
(25, 'af66ab3198faa330512a5e967a0555764006575051c3c038f1730b55a5aceaf0ca0ce8a4', '$2b$08$xK2OmYZA8YIsHpENj9vnqu1cs4mT8mZJ7W9HGF1NpO.tfKgUxlhfK', '0000-00-00', 1, 0),
(26, 'af66ab3198faa33052506887425a49764016575351ccf561fa560f0f9cf4f9eaf251f3ed60a8423354665f73', '$2b$08$0/4kjz35ggjwLlPx/OpzX.KzM8Dd0SDSF0Y/xVzvSVbZhvwVqOgVS', '0000-00-00', 1, 0),
(27, 'af66ab3198faa2046f257884442b267679362c03', '$2b$08$I6v2JsS2r055kVkMVzE4d.AeYfolPG/VkDdPdgrlvsJsAPgZtzMnu', '0000-00-00', 1, 0),
(28, 'ae76c424a5e9c27044376cce7a305d2b563c4b47', '$2b$08$IzHRx077TQo1ryNB1KFRL.Jo45/uhiXsGpgdrOgbLj6QbroB8.TEm', '0000-00-00', 1, 0),
(29, 'ae76c424a5e9c27046086f8971205d767938245368f3b830', '$2b$08$U0nUWEnBOC91R30x.UBdsuAxE8VKZNkG3SxMlO38rwAM94/cLOFIG', '0000-00-00', 1, 0),
(30, '9366c02aa0faa33052357c8a413f272e4b16754a52c3e97eec56174fa4ce86b8', '$2b$08$XP/HZSNet1fOaK.yLtkakev0LXeKotryuX7lTi398hNN4GC7rwpzq', '0000-00-00', 2, 0),
(31, 'af66ab3198faa204685074876c054962', '$2b$08$88mxtTNJFmIBOYaF3elcU.2ZVhprdsMQSdq7bi9l.v4G6p4vBA6rS', '0000-00-00', 1, 0),
(32, 'ae76c424a5e8d575513a60ce6c06417779624003', '$2b$08$YEFUTq74zXq5VPjbRbzUW.P4X/4Y80EfrCr6M7R0ZsR/VBMR42VgK', '0000-00-00', 1, 0),
(33, 'ae76c424a5e8d575513a60ce442f45617e12245368f3b830', '$2b$08$mMJHbQrufEzhquJ9WUrBEOOvaMXuNaUZUI727Jd0Kq87Ms/XLAsXS', '0000-00-00', 1, 0),
(34, 'a95cc4309bf8d53f510c678b7a065a26', '$2b$08$XTgXjmhq9letq6yeEtiZheBBnNBfFJgUvgyEN9YRiS/F8hjujrice', '0000-00-00', 1, 0),
(35, 'ae76c424a5e9c27044376cce7a305d2b563f435268a7d430', '$2b$08$fGXbI.5U6UqokMNvTjQZAeafbQXLsapL63Oqc7lRKhU8FDZ0m8n5m', '0000-00-00', 1, 0),
(36, '9076d4689bc0c17351096c847a065a6e403f5803', '$2b$08$OPLoFhIWzMeSpzYn0i5b5uJDEbOth6ecJK0rAElDStoBn2qmw1pyi', '0000-00-00', 1, 0),
(37, 'af66ab6ba3d7d277462645cb6d58512b40095f0e47f9df74', '$2b$08$KuvmAIx.k2zLlflUwEHcwODM42z4c2oEcCTk0nurN841iiD0mGL3m', '0000-00-00', 1, 0),
(38, 'ae76c424a5e8d570695046964201267679362c03', '$2b$08$GYX9vVsoMmzsZMZlf60mcOBLoRH.k71H.PFF/3A7n7Ez2UnkN38pu', '0000-00-00', 1, 0),
(39, 'ae76c424a5eea275513a60ce712041777962404b51facc30', '$2b$08$5mESQrYReF/w8MweAoHHjuiMbLz3LfOeK9DgJXD9ZzyCNk89f6iUW', '0000-00-00', 1, 0),
(40, 'ae76c424a5e9c27046366f8971205d767938245368f3b830', '$2b$08$dP0EClVtBmHa7liT42l1uODSflQNBlcNNcjYktYbG3JdKq3lniTFW', '0000-00-00', 1, 0),
(41, 'ae76c424a5e5c52968517cbf7a5a22737b06664b52a6bc79', '$2b$08$KsTEofvKRq7CU7y9bbgTi.hEi4GKKI93DhTfj3DvvYUysqOebjmQG', '0000-00-00', 1, 0),
(42, '935cc435a5faef2d6f3a64924206415a406320566ac3f278f909604d', '$2b$08$tqLSXIyjvC..9AtkbIkAQeHV6LZSvFQygdk86u9PQFz3lx04K9bGO', '0000-00-00', 1, 0),
(43, '935cc435a5faef2d6f3a64924206415a406320566ac3f278c47c0f43a2de86b8', '$2b$08$UUXAXxO1TFHqZ19IGZiEEOi4ehF3DcgkFvvPNiOLD0t47/hOEkyLO', '0000-00-00', 1, 0),
(44, '935cc435a5faef2d6f3a64924206415a406320566ac3f278fa551004', '$2b$08$7FC622t.nj0GyLB9DAnVBe3ceSCfbJ32dT28D9oQWJKDKUICx/aFm', '0000-00-00', 1, 0),
(45, '935cc435a5faef2d6f3a64924206415a406320566ac3f278c1630b51', '$2b$08$J/lGYCq69T5a2CI8la61weLItnwAOwcr6ALYv/8YzhozGM3aIH3Om', '0000-00-00', 1, 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_2` FOREIGN KEY (`id_langue`) REFERENCES `langue` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
