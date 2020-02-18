const connection = require('./config');

// drop tables
connection.query('DROP TABLE result', (err) => {
  if (err) console.log(err);
  console.log('query complete');
  connection.query('DROP TABLE answer', (err) => {
    if (err) console.log(err);
    console.log('query complete');
    connection.query('DROP TABLE question', (err) => {
      if (err) console.log(err);
      console.log('query complete');
      connection.query('DROP TABLE quiz', (err) => {
        if (err) console.log(err);
        console.log('query complete');
        connection.query('DROP TABLE product', (err) => {
          if (err) console.log(err);
          console.log('query complete');
          connection.query('DROP TABLE language', (err) => {
            if (err) console.log(err);
            console.log('query complete');
            connection.query('DROP TABLE restaurant', (err) => {
              if (err) console.log(err);
              console.log('query complete');
              connection.query('DROP TABLE user', (err) => {
                if (err) console.log(err);
                console.log('query complete');
                connection.query('DROP TABLE region', (err) => {
                  if (err) console.log(err);
                  console.log('query complete');
                  connection.query('DROP TABLE user_type', (err) => {
                    if (err) console.log(err);
                    console.log('query complete');
                    connection.query('DROP TABLE documentation', (err) => {
                      if (err) console.log(err);
                      console.log('query complete');
                      connection.query('DROP TABLE contact', (err) => {
                        if (err) console.log(err);
                        console.log('query complete');
                        connection.query('DROP TABLE faq', (err) => {
                          if (err) console.log(err);
                          console.log('query complete');
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
});
