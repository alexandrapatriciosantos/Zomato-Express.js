const connection = require('../db/config');

const Faq = {};

Faq.getAll = (callback) => {
  connection.query(
    'SELECT * FROM faq;',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


Faq.getAllByLanguageId = (languageId, callback) => {
  connection.query(
    'SELECT * FROM faq WHERE language_id = ?',
    [languageId],
    (err, results, fields) => callback(err, results, fields),
  );
};


Faq.create = (faqInfo, callback) => {
  connection.query(
    `INSERT INTO faq (faq_question, content, language_id)
              VALUES (
                  ?,
                  ?,
                  ?
              )`,
    [
      faqInfo.faq_question,
      faqInfo.content,
      +faqInfo.language_id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


Faq.edit = (faqInfo, callback) => {
  connection.query(
    `UPDATE faq
      SET 
        faq_question = ?, 
        content = ?,
        language_id = ? 
      WHERE
        id = ?`,
    [
      faqInfo.faq_question,
      faqInfo.content,
      +faqInfo.language_id,
      +faqInfo.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


Faq.delete = (faqInfo, callback) => {
  connection.query(
    'DELETE FROM faq WHERE id=?',
    [+faqInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


module.exports = Faq;
