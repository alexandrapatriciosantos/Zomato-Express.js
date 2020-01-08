const connection = require('./config');


connection.query('INSERT INTO user_type(user_type) VALUES (1), (2), (3)',
  (err) => {
    console.log(err);
    console.log('user_type table seeded');
  });

connection.query("INSERT INTO region(name) VALUES ('Lisbon'), ('Porto'), ('Algarve')",
  (err) => {
    console.log(err)
    console.log("region table seeded")
  });

connection.query(`
    INSERT INTO user (first_name, last_name, email, passwordHash, phone_number, user_type_id, region_id) 
    VALUES 
    ('Edward', 'Watson', 'e@edwardwatson.com', SHA2('password1', 256), '00447478236403', 2, 1), 
    ('Victoria', 'Zimmermann', 'tzimms7@gmail.com', SHA2('password2', 256), '0031653702130',3, 1),
    ('Angelina', 'Riet', 'angelina.riet@yahoo.com', SHA2('password3', 256), '0033762850707', 2, 2),
    ('Alexandra', 'Santos', 'alexandraps17@gmail.com', SHA2('password4', 256), '00351919772881', 3, 2),
    ('Elena', 'Ortega', 'elenabaura56@gmail.com', SHA2('password5', 256), '0034622223767', 3, 2)
    `,
 (err) => {
  console.log(err)
  console.log("user table seeded")
 });

 connection.query("INSERT INTO restaurant(name, user_id, region_id) VALUES ('restaurant 1', 1, 2), ('restaurant 2', 2, 1), ('restaurant 3', 4, 3)",
 (err) => {
  console.log(err)
  console.log("restaurant table seeded")
 });

 connection.query("INSERT INTO language(name) VALUES ('English'), ('Portuguese')",
 (err) => {
  console.log(err)
  console.log("language table seeded")
 });

 connection.query("INSERT INTO quiz (name, language_id) VALUES ('gold', 1)",
 (err) => {
  console.log(err)
  console.log("quiz table seeded")
 });


 connection.query("INSERT INTO question (question, correct_answer_id, language_id, quiz_id) VALUES ('Question 1', 1, 1, 1), ('Question 2', 1, 1, 1), ('Question 3', 1, 1, 1), ('Question 4', 1, 1, 1), ('Question 5', 1, 1, 1), ('Question 6', 1, 1, 1), ('Question 7', 1, 1, 1), ('Question 8', 1, 1, 1), ('Question 9', 1, 1, 1), ('Question 10', 1, 1, 1) ",
 (err) => {
  console.log(err)
  console.log("question table seeded")
 });

 connection.query("INSERT INTO language(name) VALUES ('English'), ('Portuguese')",
 (err) => {
  console.log(err)
  console.log("language table seeded")
 });

 connection.query("INSERT INTO answer(answer_option, question_id, question_language_id) VALUES ('option 1', 1, 1), ('option 2', 1, 1), ('option 3', 1, 1), ('option 4', 1, 1)",
 (err) => {
  console.log(err)
  console.log("answer table seeded")
  connection.end();
 });


