module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost/vehiculo',
    SECRET_TOKEN: 'miclavedetokens'
}