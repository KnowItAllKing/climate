import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();
router.post('/search', async (req, res, next) => {
  console.log(req.body);
  /*
  try {
  // var resp = await fetch(`http://68.183.153.30:3000?${req.query}`).then(r => r.json());
  } catch(e) {
    console.log(e);
  }
  */
  res.render('search', {
    url: 'https://www.climate.gov/sites/default/files/styles/featured-image/public/NCA4EnergyExpenditureProjections_620.png?itok=hvN4IgFJ' 
  });
});

module.exports = router;