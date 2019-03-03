import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();
router.get('/', (req, res, next) => {
  if(!req.query.data) return res.render('index', {
     url: 'https://www.climate.gov/sites/default/files/styles/featured-image/public/NCA4EnergyExpenditureProjections_620.png?itok=hvN4IgFJ',
  });
  res.render('index', {
    data: JSON.stringify({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
    })
  });
});
router.post('/search', async (req, res, next) => {
  try {
    var resp = await fetch(`http://68.183.153.30:3000?${req.query}`, <any> { 
      method: 'GET',
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