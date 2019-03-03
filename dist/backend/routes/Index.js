"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const node_fetch_1 = require("node-fetch");
const router = express_1.Router();
const DataHandler_1 = require("../DataHandler");
router.get('/', (req, res) => {
    res.render('home');
});
router.post('/search', async (req, res) => {
    var [state, division] = req.body.search.split(':');
    if (!state || !division)
        return res.redirect('/');
    if (state.length !== 2 || division.length !== 2 || isNaN(parseInt(division)))
        return res.redirect('/');
    state = state.toUpperCase();
    if (!/^[A-Z]{2}/gi.test(state))
        return res.redirect('/');
    try {
        var resp = await node_fetch_1.default(`http://localhost:3001/?state=${state}&division=${division}`, {
            method: 'GET'
        })
            .then(r => r.json());
    }
    catch (e) {
        console.log(e);
    }
    ;
    if (!resp)
        return res.redirect('/');
    res.render('index', {
        data: JSON.stringify(DataHandler_1.handle(resp.avgtmp, true)),
        prediction: JSON.stringify(DataHandler_1.handle(resp.prediction, false))
    });
});
module.exports = router;
