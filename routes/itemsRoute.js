const TOY_URL = '/toy';
const toyService = require('../services/toy-service')

module.exports = (app) => {

    app.get(`${TOY_URL}`, (req, res) => {
        const filterBy = req.query.filterBy
        if (filterBy === '') {
            toyService.query()
                .then(toys => res.json(toys))
        } else {
            toyService.toysFiltered(filterBy)
                .then(toys => res.json(toys))
        }
    })

    app.get(`${TOY_URL}/:toyId`, (req, res) => {

        const toyId = req.params.toyId;
        toyService.getById(toyId)
            .then(toy => res.json(toy))
    })

    app.delete(`${TOY_URL}/:toyId`, (req, res) => {
        const toyId = req.params.toyId;
        toyService.remove(toyId)
            .then(() => res.end(`Toy ${toyId} Deleted `))

    })

    app.post(TOY_URL, (req, res) => {
        const toy = req.body;
        toyService.add(toy)
            .then(toy => {
                res.json(toy)
            })
            .catch(err => res.status(500).send('Could not add toy'))
    })

    app.put(`${TOY_URL}/:toyId`, (req, res) => {
        const toy = req.body;
        toyService.update(toy)
            .then(toy => res.json(toy))
            .catch(err => res.status(500).send('Could not update toy'))
    })
}
