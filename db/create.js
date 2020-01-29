
const connection = require('./config');


const UserType = `
  CREATE TABLE IF NOT EXISTS user_type (
    id INT NOT NULL AUTO_INCREMENT,
    user_type INT NOT NULL,
    PRIMARY KEY (id)
  );
`;

const Region = `
  CREATE TABLE IF NOT EXISTS region (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
`;

const Restaurant = `
  CREATE TABLE IF NOT EXISTS restaurant (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    region_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (region_id) REFERENCES mydb.region (id) ON DELETE CASCADE ON UPDATE RESTRICT
    ) ENGINE = INNODB;
`;

const User = `
  CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(225) NOT NULL,
    last_name VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL,
    passwordHash CHAR(64) NOT NULL,
    phone_number VARCHAR(225) NULL,
    user_type_id INT NOT NULL,
    restaurant_id INT NULL, 
    PRIMARY KEY (id),
    FOREIGN KEY (user_type_id)
    REFERENCES mydb.user_type (id),
    FOREIGN KEY (restaurant_id) REFERENCES mydb.restaurant(id) ON DELETE CASCADE ON UPDATE RESTRICT
    ) ENGINE = INNODB;
`;

const Language = `
  CREATE TABLE IF NOT EXISTS language (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
`;

const Product = `
  CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    language_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (language_id)
    REFERENCES mydb.language (id) 
);
`;

const Quiz = `
  CREATE TABLE IF NOT EXISTS quiz (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    user_type_id INT NOT NULL,
    language_id INT NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_type_id)
    REFERENCES mydb.user_type (id),
    FOREIGN KEY (language_id)
    REFERENCES mydb.language (id), 
    FOREIGN KEY (product_id) REFERENCES mydb.product (id) ON DELETE CASCADE ON UPDATE RESTRICT
    ) ENGINE = INNODB; 
`;


const Question = `
  CREATE TABLE IF NOT EXISTS question (
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR(255) NOT NULL,
    correct_answer_id INT,
    quiz_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (quiz_id)
    REFERENCES mydb.quiz (id) ON DELETE CASCADE ON UPDATE RESTRICT
    ) ENGINE = INNODB; 
`;


const Answer = `
  CREATE TABLE IF NOT EXISTS answer (
  id INT NOT NULL AUTO_INCREMENT,
  answer_option VARCHAR(255) NOT NULL,
  question_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (question_id ) REFERENCES mydb.question (id) ON DELETE CASCADE ON UPDATE RESTRICT
  ) ENGINE = INNODB; 
`;


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
`;

const Documentation = `
  CREATE TABLE IF NOT EXISTS documentation (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content LONGTEXT NOT NULL,
    language_id INT NOT NULL,
    product_id INT NOT NULL,  
    PRIMARY KEY (id),
    FOREIGN KEY (product_id)
    REFERENCES mydb.product (id),
    FOREIGN KEY (language_id)
    REFERENCES mydb.language (id)
  ); 
`;

const Contact = `
  CREATE TABLE IF NOT EXISTS contact (
    id INT NOT NULL AUTO_INCREMENT,
    phone_number VARCHAR(225) NULL,
    email VARCHAR(225) NOT NULL,
    description VARCHAR(255),
    language_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (language_id)
    REFERENCES mydb.language (id)
  ); 
`;

const FAQ = `
  CREATE TABLE IF NOT EXISTS faq (
    id INT NOT NULL AUTO_INCREMENT,
    faq VARCHAR(255) NOT NULL,
    language_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (language_id)
    REFERENCES mydb.language (id)
    );
  `;
const Faq_Answer = `
  CREATE TABLE IF NOT EXISTS faq_answer (
  id INT NOT NULL AUTO_INCREMENT,
  faq_answer VARCHAR(255) NOT NULL,
  faq_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (faq_id ) REFERENCES mydb.faq (id) ON DELETE CASCADE ON UPDATE RESTRICT
  ) ENGINE = INNODB; 
`;

connection.query(UserType, (err) => {
  if (err) {
    console.log(err);
    connection.end();
  } else {
    console.log('user_type created');
    connection.query(Region, (err) => {
      if (err) {
        console.log(err);
        connection.end();
      } else {
        console.log('region created');
        connection.query(Restaurant, (err) => {
          if (err) {
            console.log(err);
            connection.end();
          } else {
            console.log('restaurant created');
            connection.query(User, (err) => {
              if (err) {
                console.log(err);
                connection.end();
              } else {
                console.log('user created');
                connection.query(Language, (err) => {
                  if (err) {
                    console.log(err);
                    connection.end();
                  } else {
                    console.log('language created');
                    connection.query(Product, (err) => {
                      if (err) {
                        console.log(err);
                        connection.end();
                      } else {
                        console.log('product created');
                        connection.query(Quiz, (err) => {
                          if (err) {
                            console.log(err);
                            connection.end();
                          } else {
                            console.log('quiz created');
                            connection.query(Question, (err) => {
                              if (err) {
                                console.log(err);
                                connection.end();
                              } else {
                                console.log('question created');
                                connection.query(Answer, (err) => {
                                  if (err) {
                                    console.log(err);
                                    connection.end();
                                  } else {
                                    console.log('answer created');
                                    connection.query(Result, (err) => {
                                      if (err) {
                                        console.log(err);
                                        connection.end();
                                      } else {
                                        console.log('result created');
                                        connection.query(Documentation, (err) => {
                                          if (err) {
                                            console.log(err);
                                            connection.end();
                                          } else {
                                            console.log('documentation created');
                                            connection.query(Contact, (err) => {
                                              if (err) {
                                                console.log(err);
                                                connection.end();
                                              } else {
                                                console.log('contact created');
                                                connection.query(FAQ, (err) => {
                                                  if (err) {
                                                    console.log(err);
                                                    connection.end();
                                                  } else {
                                                    console.log('FAQ created');
                                                    connection.query(Faq_Answer, (err) => {
                                                      if (err) {
                                                        console.log(err);
                                                        connection.end();
                                                      } else {
                                                        console.log('FAQ answer created');
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
              }
            });
          }
        });
      }
    });
  }
});
