const connection = require("../db/config");

const Export = {};

Export.getAllQuizzes = callback => {
  connection.query(
    "SELECT * FROM quiz INNER JOIN question on quiz.id = question.quiz_id INNER JOIN answer on question.id = answer.question_id",
    (err, results, fields) => callback(err, results, fields)
  );
};

Export.getAllResults = callback => {
  connection.query("SELECT * FROM result", (err, results, fields) =>
    callback(err, results, fields)
  );
};

Export.getAllDocumentation = callback => {
  connection.query("SELECT * FROM result", (err, results, fields) =>
    callback(err, results, fields)
  );
};

// to do :refactor to exclude password hash
Export.getAllUsers = callback => {
  connection.query(
    "SELECT id, first_name, email, phone_number, user_type_id, restaurant_id, isadmin FROM user",
    (err, results, fields) => callback(err, results, fields)
  );
};

Export.getAllRestaurants = callback => {
  connection.query("SELECT * FROM restaurant", (err, results, fields) =>
    callback(err, results, fields)
  );
};

Export.getAllProducts = callback => {
  connection.query("SELECT * FROM product", (err, results, fields) =>
    callback(err, results, fields)
  );
};

Export.getAllFaqs = callback => {
  connection.query(
    `SELECT * FROM FAQ INNER JOIN faq_answer ON faq.id = faq_answer.faq_id`,
    (err, results, fields) => callback(err, results, fields)
  );
};
module.exports = Export;
