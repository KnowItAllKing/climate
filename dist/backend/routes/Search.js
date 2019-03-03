"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.post('/search', async (req, res, next) => {
    console.log(req.body);
    res.render('search', {
        url: 'https://www.climate.gov/sites/default/files/styles/featured-image/public/NCA4EnergyExpenditureProjections_620.png?itok=hvN4IgFJ'
    });
});
module.exports = router;
