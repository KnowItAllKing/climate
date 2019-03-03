import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();
router.get('/', (req, res, next) => {
  res.render('index', {
    url: 'https://www.climate.gov/sites/default/files/styles/featured-image/public/NCA4EnergyExpenditureProjections_620.png?itok=hvN4IgFJ'
  });
});
router.post('/search', async (req, res, next) => {
  try {
    var resp = await fetch(`http://68.183.153.30:3000?${req.query}`, <any>{ 
      method: 'POST',
      body: { query: req.body.search } 
    }).then(r => r.json());
  } catch(e) {
    console.log(e);
  }
  res.render('search', {
    url: resp 
  });
});

module.exports = router;