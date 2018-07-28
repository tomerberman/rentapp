const ITEM_URL = '/item';
const itemService = require('../services/itemService')

module.exports = (app) => {

    app.get(`${ITEM_URL}`, (req, res) => {
        // console.log('*** itemsRoute app.get ***');
        // const filterBy = req.query.filterBy
        // if (filterBy === '') {
            itemService.query()
                .then(items => {
                    // console.log('*** itemService.query.then returned items ***',items);
                    res.json(items)
                })
        // } else {
            // itemService.itemsFiltered(filterBy)
                // .then(items => res.json(items))
        // }
    })

    app.get(`${ITEM_URL}/:itemId`, (req, res) => {
        const itemId = req.params.itemId;
        itemService.getById(itemId)
            .then(item => res.json(item))
    })

    app.get(`${ITEM_URL}/query/:ownerId`, (req, res) => {
        const ownerId = req.params.ownerId;
        itemService.getByOwnerId(ownerId)
            .then(item => res.json(item))
    })


    app.delete(`${ITEM_URL}/:itemId`, (req, res) => {
        const itemId = req.params.itemId;
        itemService.remove(itemId)
            .then(() => res.end(`Item ${itemId} Deleted `))
    })

    app.post(ITEM_URL, (req, res) => {
        const item = req.body;
        itemService.add(item)
            .then(item => {
                res.json(item)
            })
            .catch(err => res.status(500).send('Could not add item'))
    })

    app.put(`${ITEM_URL}/:itemId`, (req, res) => {
        const item = req.body;
        itemService.update(item)
            .then(item => res.json(item))
            .catch(err => res.status(500).send('Could not update item'))
    })
}
