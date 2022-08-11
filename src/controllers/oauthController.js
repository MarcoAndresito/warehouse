const jwt = require('jsonwebtoken')
const key = 'shhhhh'

function generateToken(req, res) {
    try {
        const { username, password } = req.body
        if (username == 'jperez', password == '12345') {
            const token = jwt.sign({
                'sub': username,
                'algo': 'mas info'
            }, key, { expiresIn: "5m" })
            res.status(200).json({
                'status': 'ok',
                'access_token': token
            })
        }
        else {
            res.status(400).json({
                'status': 'error',
                'messaje': 'usario y/o contraseña invalido'
            })
        }
    } catch (error) {
        res.status(500).json({
            'state': 'error',
            'error': error
        })
    }
}

function verifyToken(req, res, next) {
    try {
        const { authorization } = req.headers
        const token = authorization.split(' ')[1]
        const payload = jwt.verify(token, key)
        console.log(`token verificado del usuario ${payload.sub} que exprira en ${payload.exp}`)
        next()
    } catch (error) {
        res.status(401).json({
            'error': 'no ahutorizado!'
        })
    }
}

module.exports = {
    generateToken,
    verifyToken
}
