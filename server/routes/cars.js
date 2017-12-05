var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    console.log("in the get function")
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM company JOIN "cars" ON "company"."id" = "cars"."company_id";', function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

module.exports = router;