
const userService = require('../services/userService.js')
const USER_URL = '/user';


module.exports = (app) => {

    app.post(`${USER_URL}/signup`, (req, res) => {
        const user = req.body;        
        var newUser = {
            "name": user.name,
            "password":user.password,
            "email": user.email,
            "address": user.address,
            "image": '',
            "itemsForRent": [],
            "favoriteItems": []
        }
        console.log(newUser);
        
        userService.addUser(newUser)
            .then(addeduser => {
                req.session.user = addeduser;
                return res.json(addeduser);
            })
            .catch(err => {
                res.status(500).send('Could not add USER')
            })
    })
    app.post(`${USER_URL}/checkLogin`, (req, res) => {
        const user = req.body                
        userService.checkLogin(user.user)
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
        // console.log('user id req params is', req.params)
        const user = req.params.userId;
        // console.log('Id from Route', user);
        userService.getUserById(user)
            .then(user => res.json(user))
    })
    
}
