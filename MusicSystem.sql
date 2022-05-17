CREATE DATABASE MusicSystem;

USE MusicSystem;

CREATE TABLE Songs (
	songId INT AUTO_INCREMENT,
    songName VARCHAR(255) NOT NULL,
    Rating INT NOT NULL,
	Duration VARCHAR(255) NOT NULL,
     PRIMARY KEY (songId)
);

CREATE TABLE Collections (
	CollectionId INT AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    NumberOfSongs INT NOT NULL,
     
     PRIMARY KEY (CollectionId)
);

CREATE TABLE Accounts (
    AccountId INT AUTO_INCREMENT,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
	IsActive INT NOT NULL,
     PRIMARY KEY (AccountId)
);

CREATE TABLE collectionSongs (
	collectionSongsId INT AUTO_INCREMENT,
    songId INT,
    CollectionId INT,
     PRIMARY KEY (collectionSongsId),
     FOREIGN KEY (songId) REFERENCES songs(songId),
     FOREIGN KEY (CollectionId) REFERENCES Collections(CollectionId)
);

CREATE TABLE AccountCollections (
	AccountCollectionsId INT AUTO_INCREMENT,
    AccountId INT,
    CollectionId INT,
     PRIMARY KEY (AccountCollectionsId),
     FOREIGN KEY (AccountId) REFERENCES Accounts(AccountId),
     FOREIGN KEY (CollectionId) REFERENCES Collections(CollectionId)
);

    INSERT INTO Songs (songName, Rating, Duration)
VALUES 
	('Wave','1','03:25'),
    ('Hello','2','03:47'),
    ('Good Bye','4','04:29'),
    ('Hear Me','3','02:55'),
    ('Love Afternoon','5','03:27'),
    ('Sunrise','2','03:33'),
    ('Dawn','1','04:01'),
    ('Friends','1','03:20'),
    ('Burning Wood','4','03:25'),
    ('Easy Story','3','03:12'),
    ('Im Here Now','5','04:25'),
    ('March','5','04:15'),
    ('Sparkling Stars','2','05:01'),
    ('Fireworks','3','03:00'),
    ('Walking Alone','2','03:13'),
    ('Jamie The Chef','2','03:17'),
    ('Gypsy','4','03:29'),
    ('Cuban Cigar','4','03:47'),
    ('Free Nights','5','03:25'),
    ('Crazy','5','02:59');
    
INSERT INTO Collections (Title, NumberOfSongs)
VALUES 
	('Love','15'),
    ('Driving','3'),
    ('Jazz','4'),
    ('Rock','11'),
    ('Hip-Hop','9'),
    ('Rap','0'),
    ('Blues','8');
    
INSERT INTO Accounts (AccountId, CollectionId, IsActive)
VALUES 
	('David','Newman'),
    ('Arik','Sherman','0'),
    ('Ben','Lopez','0'),
    ('Lisa','Luiz','1');
    
    

INSERT INTO AccountCollections (AccountId, CollectionId)
VALUES 
	('1','1'),
    ('1','7'),
    ('1','3'),
    ('2','1'),
    ('2','2'),
    ('2','3'),
    ('2','5'),
    ('3','5'),
    ('3','7'),
    ('4','1'),
    ('4','2'),
    ('4','3'),
    ('4','4'),
    ('4','7');
    
INSERT INTO collectionSongs (songId, CollectionId)
VALUES 
	('1','1'),
    ('1','2'),
    ('1','4'),
    ('2','1'),
    ('2','5'),
    ('3','1'),
    ('3','5'),
    ('3','7'),
    ('4','1'),
    ('4','5'),
    ('5','1'),
    ('5','4'),
    ('6','1'),
    ('6','5'),
    ('7','1'),
    ('7','4'),
    ('7','7'),
    ('8','1'),
    ('8','4'),
    ('8','5'),
    ('9','4'),
    ('9','7'),
    ('10','1'),
    ('10','5'),
    ('11','1'),
    ('11','5'),
    ('11','7'),
    ('12','2'),
    ('12','4'),
    ('12','7'),
    ('13','1'),
    ('13','4'),
    ('14','1'),
    ('14','3'),
    ('14','5'),
    ('15','1'),
    ('15','4'),
    ('16','1'),
    ('16','7'),
    ('17','2'),
    ('17','3'),
    ('17','4'),
    ('18','3'),
    ('18','4'),
    ('19','1'),
    ('19','5'),
    ('19','7'),
    ('20','3'),
    ('20','4'),
    ('20','7');

SELECT * FROM collections WHERE numberofsongs = 0;


SELECT * FROM AccountCollections WHERE accountId = 1;


SELECT * FROM AccountCollections;

select title,collections.numberofsongs, AccountCollections.accountId, AccountCollections.collectionId from collections
join AccountCollections on collections.collectionId = AccountCollections.collectionId
where AccountCollections.accountId = 1;



SELECT DISTINCT  songName, accountCollections.accountId FROM songs
JOIN  collectionSongs ON songs.songId = collectionSongs.songId
JOIN AccountCollections ON collectionSongs.collectionId = AccountCollections.accountId
WHERE AccountCollections.accountId = 1;


SELECT songName, collections.title FROM songs
join collectionSongs ON songs.songId = collectionSongs.songId
JOIN collections;

