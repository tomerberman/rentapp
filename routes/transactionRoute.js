const TRANSACTION_URL = '/transaction';
const transactionService = require('../services/transactionService')

module.exports = (app) => {

    app.post(TRANSACTION_URL, (req, res) => {       
        const transaction = req.body;
        transactionService.addTransaction(transaction)
            .then(transaction => res.json(transaction))
            .catch(err => res.status(500).send('Could not confim transaction'))
    })

    app.get(`${TRANSACTION_URL}/:ownerId`, (req, res) => {
        const ownerId = req.params.ownerId;       
        transactionService.getOwnerTransactions(ownerId)
            .then(transactions => res.json(transactions))
    })

}

