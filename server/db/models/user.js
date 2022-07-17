const def = (db, DataTypes) => {
    const model = db.define(`user`, {caption: DataTypes.TEXT, desc: DataTypes.TEXT}, {paranoid: true})
    return model
}

module.exports = def