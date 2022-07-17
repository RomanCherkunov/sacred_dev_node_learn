const express = require ('express')
const dynRouters = require('./routers/index')

const app = express()

const PORT = 3001

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.use((req, res, next) => {
//     console.log(req.body)
//     res.status(265).json('Helloshe4ki')
//     next()
// })


if(typeof dynRouters === 'function') {
    dynRouters(app)
} else {
    console.log('Error load module routers: ', typeof dynRouters)
}

app.listen(PORT, () => console.log(`server started at port: ${PORT}`))