const connection = require('./config');

// drop tables
connection.query('DROP TABLE faq', (err) => {
  if (err) console.log(err);
  console.log('faq deleted');
  connection.query('DROP TABLE documentation', (err) => {
    if (err) console.log(err);
    console.log('documentation deleted');
    connection.query('DROP TABLE result', (err) => {
      if (err) console.log(err);
      console.log('result deleted');
      connection.query('DROP TABLE answer', (err) => {
        if (err) console.log(err);
        console.log('answer deleted');
        connection.query('DROP TABLE question', (err) => {
          if (err) console.log(err);
          console.log('question deleted');
          connection.query('DROP TABLE quiz', (err) => {
            if (err) console.log(err);
            console.log('quiz deleted');
            connection.query('DROP TABLE product', (err) => {
              if (err) console.log(err);
              console.log('product deleted');
              connection.query('DROP TABLE language', (err) => {
                if (err) console.log(err);
                console.log('language deleted');
                connection.query('DROP TABLE user', (err) => {
                  if (err) console.log(err);
                  console.log('user deleted');
                  connection.query('DROP TABLE restaurant', (err) => {
                    if (err) console.log(err);
                    console.log('restaurant deleted');
                    connection.query('DROP TABLE region', (err) => {
                      if (err) console.log(err);
                      console.log('region deleted');
                      connection.query('DROP TABLE user_type', (err) => {
                        if (err) console.log(err);
                        console.log('user_type deleted');
                        connection.end();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
