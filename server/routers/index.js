const fs = require ('fs')
const path = require ('path')
const { compareString, compareStringInArray } = require('../utils/compare')
const {Router} =  require('express')

const showErrorLoadingModule = (fileName, errorMessage) => {
    console.log(`not load route: ${fileName} because:  ${errorMessage}`)
}

const def = (server) => {
    let notProcessing = ['index.js', 'temp.js']

    let data = fs.readdirSync(__dirname).filter((file) => {
        return compareString(path.extname(file), '.js') && !compareStringInArray(file, notProcessing)
    })

    data.forEach(file => {
        const fileRoute = require(`./${file}`)
        const fileName = path.basename(file, '.js').toLowerCase()
        if(typeof fileRoute === 'function') {
            try {
                let route = Router()
                fileRoute(route)
                server.use(`/${fileName}`, route)

                console.log(`route: ${fileName}`)
            } catch(err) {
                showErrorLoadingModule(file, err.message)
            }
        } else {
            showErrorLoadingModule(file, 'not module.exports function')
        }
})
}

module.exports = def