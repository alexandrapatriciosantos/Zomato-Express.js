const connection = require('./config');

//drop tables
connection.query(`DROP TABLE answer`, (err) => {
    if(err) console.log(err);
    console.log('query complete');
    connection.query(`DROP TABLE user_restaurant`, (error) => {
        if(error) console.log(err);
        console.log('query complete');
        connection.query(`DROP TABLE question_result`, (error) => {
            if(error) console.log(err);
            console.log('query complete');
            connection.query(`DROP TABLE question`, (error) => {
                if(error) console.log(err);
                console.log('query complete');
                connection.query(`DROP TABLE language`, (error) => {
                    if(error) console.log(err);
                    console.log('query complete');
                    connection.query(`DROP TABLE restaurant`, (error) => {
                        if(error) console.log(err);
                        console.log('query complete');
                        connection.query(`DROP TABLE result`, (error) => {
                            if(error) console.log(err);
                            console.log('query complete');
                            connection.query(`DROP TABLE user`, (error) => {
                                if(error) console.log(err);
                                console.log('query complete');
                                connection.query(`DROP TABLE region`, (error) => {
                                    if(error) console.log(err);
                                    console.log('query complete');
                                    connection.query(`DROP TABLE user_type`, (error) => {
                                        if(error) console.log(err);
                                        console.log('query complete');
                                        connection.end();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})