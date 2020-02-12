const connection = require('./config');

// drop tables
connection.query('DROP TABLE result', (err) => {
  if (err) console.log(err);
  console.log('query complete');
  connection.query('DROP TABLE answer', (error) => {
    if (error) console.log(err);
    console.log('query complete');
    connection.query('DROP TABLE question', (error) => {
      if (error) console.log(err);
      console.log('query complete');
      connection.query('DROP TABLE quiz', (error) => {
        if (error) console.log(err);
        console.log('query complete');
        connection.query('DROP TABLE product', (error) => {
          if (error) console.log(err);
          console.log('query complete');
          connection.query('DROP TABLE language', (error) => {
            if (error) console.log(err);
            console.log('query complete');
            connection.query('DROP TABLE restaurant', (error) => {
              if (error) console.log(err);
              console.log('query complete');
              connection.query('DROP TABLE user', (error) => {
                if (error) console.log(err);
                console.log('query complete');
                connection.query('DROP TABLE region', (error) => {
                  if (error) console.log(err);
                  console.log('query complete');
                  connection.query('DROP TABLE user_type', (error) => {
                    if (error) console.log(err);
                    console.log('query complete');
                    connection.query('DROP TABLE documentation', (error) => {
                      if (error) console.log(err);
                      console.log('query complete');
                      connection.query('DROP TABLE contact', (error) => {
                        if (error) console.log(err);
                        console.log('query complete');
                        connection.query('DROP TABLE faq', (error) => {
                          if (error) console.log(err);
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
