const  {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('learning', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
})

const usersTable = sequelize.define('user', {
    caption: {field: 'caption', type: DataTypes.STRING}
})

const userData = {caption: 'Hello from me'}

const auth = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connect to db done')
        await usersTable.sync()
        console.log('Sync users Table')
        // [{index: 1}, {index: 2}, {index: 3}].forEach((item, index, arr) => {
        //      usersTable.create()
        // })
        // const user = await usersTable.create(userData)
        // console.log(user)
        // const users = await usersTable.findAll()
        // console.log(users.map((item) => {console.log(item.id, item.caption, item.createdAt)} ))

        // console.log(users[1].id, users[1].caption) 
    } catch (error) {
        console.log(error)
    }
}

auth()