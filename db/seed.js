const connection = require("./config");

connection.query(
  `
  INSERT INTO user_type(user_type) 
  VALUES (1), (2), (3)`,
  err => {
    console.log(err);
    console.log("user_type table seeded");
  }
);

connection.query(
  `
  INSERT INTO region(name) 
  VALUES ('Lisbon'), ('Porto'), ('Algarve')`,
  err => {
    console.log(err);
    console.log("region table seeded");
  }
);

connection.query(
  `
  INSERT INTO restaurant
  (name, region_id) 
  VALUES 
  ('restaurant 1', 2), 
  ('restaurant 2', 1), 
  ('restaurant 3', 3)
`,
  err => {
    console.log(err);
    console.log("restaurant table seeded");
  }
);

// User type id 2 is e

connection.query(
  `
  INSERT INTO user 
  (first_name, last_name, email, passwordHash, phone_number, user_type_id, restaurant_id, isadmin) 
  VALUES 
  ('Edward', 'Watson', 'e@edwardwatson.com', SHA2('password1', 256), '00447478236403', 2, 1, 0), 
  ('Victoria', 'Zimmermann', 'tzimms7@gmail.com', SHA2('password2', 256), '0031653702130', 2, 1, 0),
  ('Angelina', 'Riet', 'angelina.riet@yahoo.com', SHA2('password3', 256), '0033762850707', 2, 2, 0),
  ('Alexandra', 'Santos', 'alexandraps17@gmail.com', SHA2('password4', 256), '00351919772881', 2, 2, 0),
  ('Elena', 'Ortega', 'elenabaura56@gmail.com', SHA2('password5', 256), '0034622223767', 2, 2, 1),
  ('Sara', 'Fonseca', 'sara.fonseca@zomato.com', SHA2('sf2020.', 256), '0034622223767', 2, 2, 1),
  ('Vladyslav', 'Chernyshov', 'vlad@zomato.com', SHA2('cv2020.', 256), '0034622223767', 2, 2, 1)


`,
  err => {
    console.log(err);
    console.log("user table seeded");
  }
);

connection.query(
  `
  INSERT INTO language(name) 
  VALUES ('English'), ('Portuguese')`,
  err => {
    console.log(err);
    console.log("language table seeded");
  }
);

connection.query(
  `
  INSERT INTO product(name, description, language_id) 
  VALUES ('Gold', 'amazing', 1), ('Book', 'revolutionary', 2), ('product 3', 'outstanding', 1)`,
  err => {
    console.log(err);
    console.log("product table seeded");
  }
);

connection.query(
  `
  INSERT INTO documentation 
  (title, content, product_id)
  VALUES 
  ('Test title', 'Test content: Lorem ipsum dolor sit amet, consectetur ad', 1)`,
  err => {
    console.log(err);
    console.log("documentation table seeded");
  }
);

connection.query(
  `
  INSERT INTO quiz 
  (name, user_type_id, language_id, product_id) 
  VALUES
  ('Zomato Gold', 3, 1, 1),
  ('Zomato Gold - PT', 3, 2, 1),
  ('Zomato Services', 3, 1, 1),
  ('Zomato - Serviços - PT', 3, 2, 1),
  ('Zomato - Foundations', 3, 1, 1),
  ('Zomato - Fundações da Zomato - PT', 3, 2, 1),
  ('Zomato - Employee Quiz', 2, 1, 1),
  ('Zomato - Questionário Para Funcionários - PT', 2, 2, 1)`,
  err => {
    console.log(err);
    console.log("quiz table seeded");
  }
);

connection.query(
  `
  INSERT INTO question (question, quiz_id, correct_answer_id) 
  VALUES 
  ('What is Zomato Gold?', 1, 1),
('What is a Visits Pack?', 1, 2),
('Can I get the benefits on food and drinks at the same restaurant? ', 1, 3),
('What does the benefits on drinks mean? ', 1, 4),
('Can I apply more than one discount on my subscription purchase? ', 1, 1),
('Can I combine Zomato Gold with other offers?', 1, 2),
('When should customers activate their Gold subscription? ', 1, 3),
('Is Zomato Gold valid on deliveries or takeaway? ', 1, 4),
('Can the restaurant partners change after I purchase the membership? ', 1, 1),
('What does the benefits on food mean?', 1, 2),
('O que é o Zomato Gold?', 2, 1),
('O que é um pacote de visitas?', 2, 2),
('Posso obter os benefícios de alimentos e bebidas no mesmo restaurante?', 2, 3),
('O que significam os benefícios das bebidas?', 2, 4),
('Posso aplicar mais de um desconto na minha compra de assinatura?', 2, 1),
('Posso combinar o Zomato Gold com outras ofertas?', 2, 2),
('Quando os clientes devem ativa sua assinatura Gold?', 2, 3),
('O Zomato Gold é válido em entregas ou entrega?', 2, 4),
('Os parceiros do restaurante podem mudar depois que eu compro a assinatura?', 2, 1),
('O que significam os benefícios em alimentos?', 2, 2),
  ('Question 1', 3, 1), 
  ('Question 2', 3, 2), 
  ('Question 3', 3, 3), 
  ('Question 4', 3, 4), 
  ('Question 5', 3, 1), 
  ('Question 6', 3, 2), 
  ('Question 7', 3, 3), 
  ('Question 8', 3, 4), 
  ('Question 9', 3, 1), 
  ('Question 10', 3, 2),
  ('Question 1', 4, 1), 
  ('Question 2', 4, 2), 
  ('Question 3', 4, 3), 
  ('Question 4', 4, 4), 
  ('Question 5', 4, 1), 
  ('Question 6', 4, 2), 
  ('Question 7', 4, 3), 
  ('Question 8', 4, 4), 
  ('Question 9', 4, 1), 
  ('Question 10', 4, 2),
  ('Question 1', 5, 1), 
  ('Question 2', 5, 2), 
  ('Question 3', 5, 3), 
  ('Question 4', 5, 4), 
  ('Question 5', 5, 1), 
  ('Question 6', 5, 2), 
  ('Question 7', 5, 3), 
  ('Question 8', 5, 4), 
  ('Question 9', 5, 1), 
  ('Question 10', 5, 2),
  ('Question 1', 6, 1), 
  ('Question 2', 6, 2), 
  ('Question 3', 6, 3), 
  ('Question 4', 6, 4), 
  ('Question 5', 6, 1), 
  ('Question 6', 6, 2), 
  ('Question 7', 6, 3), 
  ('Question 8', 6, 4), 
  ('Question 9', 6, 1), 
  ('Question 10', 6, 2),
  ('Question 1', 7, 1), 
  ('Question 2', 7, 2), 
  ('Question 3', 7, 3), 
  ('Question 4', 7, 4), 
  ('Question 5', 7, 1), 
  ('Question 6', 7, 2), 
  ('Question 7', 7, 3), 
  ('Question 8', 7, 4), 
  ('Question 9', 7, 1), 
  ('Question 10', 7, 2),
  ('Question 1', 8, 1), 
  ('Question 2', 8, 2), 
  ('Question 3', 8, 3), 
  ('Question 4', 8, 4), 
  ('Question 5', 8, 1), 
  ('Question 6', 8, 2), 
  ('Question 7', 8, 3), 
  ('Question 8', 8, 4), 
  ('Question 9', 8, 1), 
  ('Question 10', 8, 2)
  `,
  err => {
    console.log(err);
    console.log("question table seeded");
  }
);

connection.query(
  `
  INSERT INTO answer
  (answer_option, question_id) 
  VALUES 
  ('An exclusive dine out social drinking membership program that extends special perks like free dishes and drinks.', 1), 
  ('An app.', 1), 
  ('A restaurant booking tool.', 1), 
  ('A colour.', 1),
  ('The Visits Pack lets you look around restaurant kichens for free.', 2), 
  ('The Visits Pack gives you 3 Gold Visits that you can use at any of over 1200 partner restaurants any time you want.', 2), 
  ('The Visits Pack lets a chef visit your house.', 2), 
  ('Not sure.', 2),
  ('Food partners offer 8 dishes.', 3), 
  ('Drink partners give complimentary drinks.', 3),
  ('Each partner restaurant offers only one of these benefits, IE our food partners offer 1 complimentary dish as a part of the meal, and our drinks partners offer upto 2 complimentary drinks per visit.', 3), 
  ('Food partners will deliver food to your house.', 3),
  ('Each Gold member gets free drinks all night.', 4), 
  ('Gold Members get one drink for every meal they order.', 4), 
  ('Gold members get 2 jars of sangria for free.', 4), 
  ('Each Gold member gets one complimentary drink for every drink they order upto a maximum of 2 complimentary drinks.', 4),
  ('You can only use one promo code when purchasing Zomato Gold unless otherwise stated.', 5), 
  ('You can use as many promo codes as you want.', 5), 
  ('I am not sure.', 5), 
  ('You can use up to 2 extra promo codes.', 5),
  ('I am not sure.', 6), 
  ('No Zomato Gold cannot be combined other promotions including Happy Hours, Loyalty Discounts, Bank offers or other special limited period offers.', 6), 
  ('Yes.', 6), 
  ('Maybe, except for Christmas.', 6),
  ('You must wear a Zomato Gold sticker at all times when in the restaurant to show you are a member.', 7), 
  ('As soon as you get to the restaurant, let a staff member know that you are a Gold member and unlock your Gold Visit. Show the confirmation screen to the staff and then proceed with placing your food or drinks order.', 7), 
  ('Zomato Gold members must pay with a Zomato Gold credit card.', 7), 
  ('I am not sure.', 7),
  ('Yes - you can takeaway with Zomato Gold.', 8), 
  ('Only at participating restaurants.', 8), 
  ('Zomato Gold is valid at all restaurants and bars.', 8), 
  ('No. Zomato Gold is valid only for dining out at our partner restaurants and bars.', 8),
  ('Yes. Our restaurant partners may change over time. We keep adding new partners to the list, to expand the choices available to you.', 9), 
  ('Restaurant partners are static and do not change.', 9), 
  ('I am not sure.', 9), 
  ('Yes apart from McDonalds and Burger King, which will never be on Zomato Gold.', 9),
  ('Each Gold member gets complimentary drinks.', 10), 
  ('Each Gold member gets one complimentary drink for every drink they order, upto a maximum of 2 complimentary drinks.', 10), 
  ('Only pitchers, buckets and non individual bottles are included.', 10), 
  ('I am not sure.', 10),
  ('option 1', 11), 
  ('option 2', 11), 
  ('option 3', 11), 
  ('option 4', 11),
  ('option 1', 12), 
  ('option 2', 12), 
  ('option 3', 12), 
  ('option 4', 12),
  ('option 1', 13), 
  ('option 2', 13), 
  ('option 3', 13), 
  ('option 4', 13),
  ('option 1', 14), 
  ('option 2', 14), 
  ('option 3', 14), 
  ('option 4', 14),
  ('option 1', 15), 
  ('option 2', 15), 
  ('option 3', 15), 
  ('option 4', 15),
  ('option 1', 16), 
  ('option 2', 16), 
  ('option 3', 16), 
  ('option 4', 16),
  ('option 1', 17), 
  ('option 2', 17), 
  ('option 3', 17), 
  ('option 4', 17),
  ('option 1', 18), 
  ('option 2', 18), 
  ('option 3', 18), 
  ('option 4', 18),
  ('option 1', 19), 
  ('option 2', 19), 
  ('option 3', 19), 
  ('option 4', 19),
  ('option 1', 20), 
  ('option 2', 20), 
  ('option 3', 20), 
  ('option 4', 20),
  ('option 1', 21), 
  ('option 2', 21), 
  ('option 3', 21), 
  ('option 4', 21),
  ('option 1', 22), 
  ('option 2', 22), 
  ('option 3', 22), 
  ('option 4', 22),
  ('option 1', 23), 
  ('option 2', 23), 
  ('option 3', 23), 
  ('option 4', 23),
  ('option 1', 24), 
  ('option 2', 24), 
  ('option 3', 24), 
  ('option 4', 24),
  ('option 1', 25), 
  ('option 2', 25), 
  ('option 3', 25), 
  ('option 4', 25),
  ('option 1', 26), 
  ('option 2', 26), 
  ('option 3', 26), 
  ('option 4', 26),
  ('option 1', 27), 
  ('option 2', 27), 
  ('option 3', 27), 
  ('option 4', 27),
  ('option 1', 28), 
  ('option 2', 28), 
  ('option 3', 28), 
  ('option 4', 28),
  ('option 1', 29), 
  ('option 2', 29), 
  ('option 3', 29), 
  ('option 4', 29),
  ('option 1', 30), 
  ('option 2', 30), 
  ('option 3', 30), 
  ('option 4', 30),
  ('option 1', 31), 
  ('option 2', 31), 
  ('option 3', 31), 
  ('option 4', 31),
  ('option 1', 32), 
  ('option 2', 32), 
  ('option 3', 32), 
  ('option 4', 32),
  ('option 1', 33), 
  ('option 2', 33), 
  ('option 3', 33), 
  ('option 4', 33),
  ('option 1', 34), 
  ('option 2', 34), 
  ('option 3', 34), 
  ('option 4', 34),
  ('option 1', 35), 
  ('option 2', 35), 
  ('option 3', 35), 
  ('option 4', 35),
  ('option 1', 36), 
  ('option 2', 36), 
  ('option 3', 36), 
  ('option 4', 36),
  ('option 1', 37), 
  ('option 2', 37), 
  ('option 3', 37), 
  ('option 4', 37),
  ('option 1', 38), 
  ('option 2', 38), 
  ('option 3', 38), 
  ('option 4', 38),
  ('option 1', 39), 
  ('option 2', 39), 
  ('option 3', 39), 
  ('option 4', 39),
  ('option 1', 40), 
  ('option 2', 40), 
  ('option 3', 40), 
  ('option 4', 40),
  ('option 1', 41), 
  ('option 2', 41), 
  ('option 3', 41), 
  ('option 4', 41),
  ('option 1', 42), 
  ('option 2', 42), 
  ('option 3', 42), 
  ('option 4', 42),
  ('option 1', 43), 
  ('option 2', 43), 
  ('option 3', 43), 
  ('option 4', 43),
  ('option 1', 44), 
  ('option 2', 44), 
  ('option 3', 44), 
  ('option 4', 44),
  ('option 1', 45), 
  ('option 2', 45), 
  ('option 3', 45), 
  ('option 4', 45),
  ('option 1', 46), 
  ('option 2', 46), 
  ('option 3', 46), 
  ('option 4', 46),
  ('option 1', 47), 
  ('option 2', 47), 
  ('option 3', 47), 
  ('option 4', 47),
  ('option 1', 48), 
  ('option 2', 48), 
  ('option 3', 48), 
  ('option 4', 48),
  ('option 1', 49), 
  ('option 2', 49), 
  ('option 3', 49), 
  ('option 4', 49),
  ('option 1', 50), 
  ('option 2', 50), 
  ('option 3', 50), 
  ('option 4', 50),
  ('option 1', 51), 
  ('option 2', 51), 
  ('option 3', 51), 
  ('option 4', 51),
  ('option 1', 52), 
  ('option 2', 52), 
  ('option 3', 52), 
  ('option 4', 52),
  ('option 1', 53), 
  ('option 2', 53), 
  ('option 3', 53), 
  ('option 4', 53),
  ('option 1', 54), 
  ('option 2', 54), 
  ('option 3', 54), 
  ('option 4', 54),
  ('option 1', 55), 
  ('option 2', 55), 
  ('option 3', 55), 
  ('option 4', 55),
  ('option 1', 56), 
  ('option 2', 56), 
  ('option 3', 56), 
  ('option 4', 56),
  ('option 1', 57), 
  ('option 2', 57), 
  ('option 3', 57), 
  ('option 4', 57),
  ('option 1', 58), 
  ('option 2', 58), 
  ('option 3', 58), 
  ('option 4', 58),
  ('option 1', 59), 
  ('option 2', 59), 
  ('option 3', 59), 
  ('option 4', 59),
  ('option 1', 60), 
  ('option 2', 60), 
  ('option 3', 60), 
  ('option 4', 60),
   ('option 1', 61), 
  ('option 2', 61), 
  ('option 3', 61), 
  ('option 4', 61),
  ('option 1', 62), 
  ('option 2', 62), 
  ('option 3', 62), 
  ('option 4', 62),
  ('option 1', 63), 
  ('option 2', 63), 
  ('option 3', 63), 
  ('option 4', 63),
  ('option 1', 64), 
  ('option 2', 64), 
  ('option 3', 64), 
  ('option 4', 64),
  ('option 1', 65), 
  ('option 2', 65), 
  ('option 3', 65), 
  ('option 4', 65),
  ('option 1', 66), 
  ('option 2', 66), 
  ('option 3', 66), 
  ('option 4', 66),
  ('option 1', 67), 
  ('option 2', 67), 
  ('option 3', 67), 
  ('option 4', 67),
  ('option 1', 68), 
  ('option 2', 68), 
  ('option 3', 68), 
  ('option 4', 68),
  ('option 1', 69), 
  ('option 2', 69), 
  ('option 3', 69), 
  ('option 4', 69),
  ('option 1', 70), 
  ('option 2', 70), 
  ('option 3', 70), 
  ('option 4', 70),
  ('option 1', 71), 
  ('option 2', 71), 
  ('option 3', 71), 
  ('option 4', 71),
  ('option 1', 72), 
  ('option 2', 72), 
  ('option 3', 72), 
  ('option 4', 72),
  ('option 1', 73), 
  ('option 2', 73), 
  ('option 3', 73), 
  ('option 4', 73),
  ('option 1', 74), 
  ('option 2', 74), 
  ('option 3', 74), 
  ('option 4', 74),
  ('option 1', 75), 
  ('option 2', 75), 
  ('option 3', 75), 
  ('option 4', 75),
  ('option 1', 76), 
  ('option 2', 76), 
  ('option 3', 76), 
  ('option 4', 76),
  ('option 1', 77), 
  ('option 2', 77), 
  ('option 3', 77), 
  ('option 4', 77),
  ('option 1', 78), 
  ('option 2', 78), 
  ('option 3', 78), 
  ('option 4', 78),
  ('option 1', 79), 
  ('option 2', 79), 
  ('option 3', 79), 
  ('option 4', 79),
  ('option 1', 80), 
  ('option 2', 80), 
  ('option 3', 80), 
  ('option 4', 80),
  ('option 1', 70), 
  ('option 2', 70), 
  ('option 3', 70), 
  ('option 4', 70),
  ('option 1', 71), 
  ('option 2', 71), 
  ('option 3', 71), 
  ('option 4', 71),
  ('option 1', 72), 
  ('option 2', 72), 
  ('option 3', 72), 
  ('option 4', 72),
  ('option 1', 73), 
  ('option 2', 73), 
  ('option 3', 73), 
  ('option 4', 73),
  ('option 1', 74), 
  ('option 2', 74), 
  ('option 3', 74), 
  ('option 4', 74),
  ('option 1', 75), 
  ('option 2', 75), 
  ('option 3', 75), 
  ('option 4', 75),
  ('option 1', 76), 
  ('option 2', 76), 
  ('option 3', 76), 
  ('option 4', 76),
  ('option 1', 77), 
  ('option 2', 77), 
  ('option 3', 77), 
  ('option 4', 77),
  ('option 1', 78), 
  ('option 2', 78), 
  ('option 3', 78), 
  ('option 4', 78),
  ('option 1', 79), 
  ('option 2', 79), 
  ('option 3', 79), 
  ('option 4', 79),
  ('option 1', 80), 
  ('option 2', 80), 
  ('option 3', 80), 
  ('option 4', 80)
  `,
  err => {
    console.log(err);
    console.log("answer table seeded");
  }
);

connection.query(
  `
  INSERT INTO contact
  (phone_number, email, description, language_id) 
  VALUES 
  ('308 809 304', 'GOLD@ZOMATO.COM', 'DESCRIPTION1', 1),
  ('308 000 304', 'TEST@ZOMATO.COM', 'DESCRIPTION2', 2) 
  `,
  err => {
    console.log(err);
    console.log("contact table seeded");
  }
);

connection.query(
  `
  INSERT INTO faq (faq_question, content, language_id) 
  VALUES 
  ('Question 1A', 'Test content: Lorem ipsum dolor sit amet', 1), 
  ('Question 1B', 'Test content: Lorem ipsum dolor sit amet', 2), 
  ('Question 2A', 'Test content: Lorem ipsum dolor sit amet', 1), 
  ('Question 2B', 'Test content: Lorem ipsum dolor sit amet', 2), 
  ('Question 3A', 'Test content: Lorem ipsum dolor sit amet', 1), 
  ('Question 3B', 'Test content: Lorem ipsum dolor sit amet', 2), 
  ('Question 4A', 'Test content: Lorem ipsum dolor sit amet', 1), 
  ('Question 4B', 'Test content: Lorem ipsum dolor sit amet', 2) 
`,
  err => {
    console.log(err);
    console.log("FAQ table seeded");
  }
);

connection.query(
  `
  INSERT INTO contact
  (phone_number, email, description, language_id) 
  VALUES 
  ('308 809 304', 'GOLD@ZOMATO.COM', 'DESCRIPTION1', 1),
  ('308 000 304', 'TEST@ZOMATO.COM', 'DESCRIPTION2', 2) 
  `,
  err => {
    console.log(err);
    console.log("contact table seeded");
  }
);

connection.query(
  `
  INSERT INTO contact
  (phone_number, email, description, language_id) 
  VALUES 
  ('308 809 304', 'GOLD@ZOMATO.COM', 'DESCRIPTION1', 1),
  ('308 000 304', 'TEST@ZOMATO.COM', 'DESCRIPTION2', 2) 
  `,
  err => {
    console.log(err);
    console.log("contact table seeded");
  }
);

connection.query(
  `
  INSERT INTO result
  (user_id, quiz_id, quiz_name, quiz_language_id, time_to_complete_seconds, time_of_day, score_out_of_10)
  VALUES 
  (1,1,'Zomato Gold','en','00:00:32','2020-02-10 17:11:01',4),
   (1,1,'Zomato Gold','en','00:00:54','2020-02-12 14:12:21',8),
    (1,1,'Zomato Gold','en','00:00:20','2020-02-13 13:12:43',1),
     (1,1,'Zomato Gold','en','00:01:40','2020-02-14 10:43:41',10),
      (1,1,'Zomato Gold','en','00:01:02','2020-02-15 09:20:42',9),
       (1,1,'Zomato Gold','en','00:01:42','2020-02-16 15:35:31',8),
        (1,1,'Zomato Gold','en','00:00:15','2020-02-17 09:40:41',2)
  `,
  err => {
    console.log(err);
    console.log("results table seeded");
  }
);
