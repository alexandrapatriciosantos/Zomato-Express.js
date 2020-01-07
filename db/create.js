
const connection = require('./config'); 


const UserType = `
  CREATE TABLE IF NOT EXISTS user_type (
    id INT NOT NULL AUTO_INCREMENT,
    user_type INT NOT NULL,
    PRIMARY KEY (id)
  );
`

const Region = `
  CREATE TABLE IF NOT EXISTS region (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
`
const User = `
  CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(225) NOT NULL,
    last_name VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL,
    passwordHash CHAR(64) NOT NULL,
    phone_number VARCHAR(225) NULL,
    user_type_id INT NOT NULL,
    region_id INT NOT NULL,
    PRIMARY KEY (id, region_id),
      FOREIGN KEY (user_type_id)
      REFERENCES mydb.user_type (id),
      FOREIGN KEY (region_id)
      REFERENCES mydb.region (id)
    );
`
const Result = `
  CREATE TABLE IF NOT EXISTS result (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    time_to_complete TIME, 
    time_of_day DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
    REFERENCES mydb.user (id)
  );
`
const Restaurant = `
  CREATE TABLE IF NOT EXISTS restaurant (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    region_id INT NOT NULL,
    PRIMARY KEY (id, region_id),
    FOREIGN KEY (region_id)
    REFERENCES mydb.region (id)
  );
`
const Language = `
  CREATE TABLE IF NOT EXISTS language (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
`
const Question = `
  CREATE TABLE IF NOT EXISTS question (
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR(255) NOT NULL,
    correct_answer_id INT NOT NULL,
    language_id INT NOT NULL,
    PRIMARY KEY (id, language_id),
    FOREIGN KEY (language_id)
    REFERENCES mydb.language (id)
  );
`
const QuestionResult = `
  CREATE TABLE IF NOT EXISTS question_result (
    result_id INT NOT NULL,
    question_id INT NOT NULL,
    question_language_id INT NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    user_answer_id INT NOT NULL,
    PRIMARY KEY (id, result_id, question_id, question_language_id),
    FOREIGN KEY (result_id)
    REFERENCES mydb.result (id),
    FOREIGN KEY (question_id , question_language_id)
    REFERENCES mydb.question (id , language_id)
  );
`
const UserRestaurant = `
  CREATE TABLE IF NOT EXISTS user_restaurant (
    restaurant_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (restaurant_id, user_id),
    FOREIGN KEY (restaurant_id)
    REFERENCES mydb.restaurant (id),
    FOREIGN KEY (user_id)
    REFERENCES mydb.user (id)
  );
`

const Answer = `
  CREATE TABLE IF NOT EXISTS answer (
    id INT NOT NULL AUTO_INCREMENT,
    answer_option VARCHAR(255) NOT NULL,
    question_id INT NOT NULL,
    question_language_id INT NOT NULL,
    PRIMARY KEY (id, question_id, question_language_id),
    FOREIGN KEY (question_id , question_language_id)
    REFERENCES mydb.question (id , language_id)
  );
`


connection.query(UserType, (err) =>{
  if (err) {
    console.log(err)
    connection.end();
  } else {
    console.log("user_type created")
    connection.query(Region, (err) =>{
      if (err) {
        console.log(err)
        connection.end();
      } else {
        console.log("region created")
        connection.query(User, (err) =>{
          if (err) {
            console.log(err)
            connection.end();
          } else {
            console.log("user created")
            connection.query(Result, (err) =>{
              if (err) {
                console.log(err)
                connection.end();
              } else {
                console.log("result created")
                connection.query(Restaurant, (err) =>{
                  if (err) {
                    console.log(err)
                    connection.end();
                  } else {
                    console.log("restaurant created")
                    connection.query(Language, (err) =>{
                      if (err) {
                        console.log(err)
                        connection.end();
                      } else {
                        console.log("language created")
                        connection.query(Question, (err) =>{
                          if (err) {
                            console.log(err)
                            connection.end();
                          } else {
                            console.log("question created")
                            connection.query(QuestionResult, (err) =>{
                              if (err) {
                                console.log(err)
                                connection.end();
                              } else {
                                console.log("question_result created")
                                connection.query(UserRestaurant, (err) =>{
                                  if (err) {
                                    console.log(err)
                                    connection.end();
                                  } else {
                                    console.log("use_restaurant created")
                                    connection.query(Answer, (err) =>{
                                      if (err) {
                                        console.log(err)
                                        connection.end();
                                      } else {
                                        console.log("answer created")
                                        connection.end();
                                      }
                                    });
                                  }
                                }); 
                              }
                            }); 
                          }
                        }); 
                      }
                    }); 
                  }
                }); 
              }
            }); 
          }
        }); 
      }
    }); 
  }
  
}); 