const connection = require('./config');

connection.query("INSERT INTO user_type(id, user_type) VALUES (1, 'restauranteur'), (2, 'employee'), (3, 'admin')",
 (err) => {
  console.log(err)
  console.log("user_type table seeded")
 });

 connection.query("INSERT INTO region(id, name) VALUES (1, 'Lisbon'), (2, 'Porto'), (3, 'Algarve')",
 (err) => {
  console.log(err)
  console.log("region table seeded")
 });

connection.query("INSERT INTO user (id, first_name, last_name, email, passwordHash, phone_number) VALUES (1, 'Edward', 'Watson', 'e@edwardwatson.com', 'password1', '00447478236403'), (2, 'Victoria', 'Zimmermann', 'tzimms7@gmail.com', 'password2', '0031653702130'), (3, 'Angelina', 'Riet', 'angelina.riet@yahoo.com', 'password3', '0033762850707')), (4, 'Alexandra', 'Santos', 'alexandraps17@gmail.com', 'password4, '00351919772881'), (5, 'Elena', 'Ortega', 'elenabaura56@gmail.com', 'password5, '0034622223767)",
 (err) => {
  console.log(err)
  console.log("user table seeded")
 });

 connection.query("INSERT INTO restaurant(id, name) VALUES (1, 'restaurant 1'), (2, 'restaurant 2'), (3, 'restaurant 3')",
 (err) => {
  console.log(err)
  console.log("restaurant table seeded")
 });

 connection.query("INSERT INTO language(id, name) VALUES (1, 'English'), (2, 'Portuguese')",
 (err) => {
  console.log(err)
  console.log("language table seeded")
 });


 connection.query("INSERT INTO question(id, question) VALUES (1, 'Question 1'), (2, 'Question 2'), (3, 'Question 3'), (4, 'Question 4'), (5, 'Question 5'), (6, 'Question 6'), (7, 'Question 7'), (8, 'Question 8'), (9, 'Question 9'), (10, 'Question 10') ",
 (err) => {
  console.log(err)
  console.log("question table seeded")
 });

 connection.query("INSERT INTO language(id, name) VALUES (1, 'English'), (2, 'Portuguese')",
 (err) => {
  console.log(err)
  console.log("language table seeded")
 });

 connection.query("INSERT INTO answer(id, answer_option) VALUES (1, 'option 1'), (2, 'option 2'), (3, 'option 3'), (4, 'option 4')",
 (err) => {
  console.log(err)
  console.log("answer table seeded")
 });


