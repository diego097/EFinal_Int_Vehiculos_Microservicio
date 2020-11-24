const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../../config')


function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN)

            if(payload.exp < moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }

            resolve(payload.sub)
        } catch (error) {
            reject({
                status: 500,
                message: 'invalid Token'
            })
        }
    })

    return decoded
}

module.exports = {
    decodeToken
}