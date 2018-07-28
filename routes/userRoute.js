
const userService = require('../services/userService.js')
const USER_URL = '/user';


module.exports = (app) => {

    app.post(`${USER_URL}/signUp`, (req, res) => {
        const user = req.body;
        userService.addUser(user)
            .then(addeduser => {
                req.session.user = addeduser;
                return res.json(addeduser);
            })
            .catch(err => {
                res.status(500).send('Could not add USER')
            })
    })
    app.post(`${USER_URL}/checkLogin`, (req, res) => {
        const nickName = req.body
        userService.checkLogin(nickName)
            .then(user => {
                req.session.user = user;
                return res.json(user)
            })
            .catch(err => res.status(401).send('Wrong user/pass'))
    })

    app.get(`${USER_URL}`, (req, res) => {
        userService.query()
            .then(users => res.json(users))
    })

    app.get(`${USER_URL}/:userId`, (req, res) => {
        const user = req.params.userId;
        userService.getUserById(user)
            .then(user => res.json(user))
    })
    
}
