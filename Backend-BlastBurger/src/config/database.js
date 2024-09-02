module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'blastburger',
    port: 5432,
    define: {
        timestamps: true, //  auto add createdAt and updatedAt fields
        underscored: true, //  use underscore notation in the table name
        underscoredAll: true  //  make all field names to be underscored e.g. user_name not UserName
    },
};
