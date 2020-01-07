const User = {}

const cleanUser = (user) => {
    return user ?
        {
            ...user, 
            passwordHash :'hidden'
        } : 
        undefined;
};

User.create = (userInfo, callback) => {
    connection.query(
        `INSERT INTO user (email, passwordHash)
            VALUES (
                ?,
                SHA2(?)
            )`,
        [userInfo.email, userInfo.password], 
        (err, results, fields) => callback(err, results, fields)
    );
}

User.findbyEmailandPassword = (email, password, callback) => {
    connection.query(
        `SELECT * FROM user WHERE email = ? AND passwordHash = SHA2(?)`,
        [email, password],
        (err, results, fields) => callback(err, cleanUser(results[0]), fields)
    ); 
}

module.exports = User;

//THIS NEED TO BE CHANGED once the database is created 

