const dev = {
    username: 'postgres',
    password: '123456',
    database: 'learning',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    logging: msg => {console.log(msg)}
}

module.exports = {development: dev, test: null, production: null}