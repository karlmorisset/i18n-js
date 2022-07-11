CREATE TABLE `traductions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `reference` varchar(255) NOT NULL,
  `description` text NOT NULL
);

CREATE TABLE `traductions_content` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `traduction_id` int NOT NULL,
  `body` text NOT NULL,
  `lang` varchar(255) NOT NULL
);

ALTER TABLE `traductions_content` ADD FOREIGN KEY (`traduction_id`) REFERENCES `traductions` (`id`);