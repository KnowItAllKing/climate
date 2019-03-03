import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();
import { handle } from '../DataHandler';
import file1 = require('../examples/data1.json');
router.get('/', (req, res) => {
  res.render('index', {
    data: JSON.stringify(handle(<[[],[],[],[],[],[],[],[],[],[],[],[]]>file1, true))
  });
});
router.post('/search', async (req, res) => {
  var [state, division]: string[] = req.body.search.split(':');
  if(!state || !division) return res.redirect('/');
  if(state.length !== 2 || division.length !== 2 || isNaN(parseInt(division)))
    return res.redirect('/');
  state = state.toUpperCase();
  if(!/^[A-Z]{2}/gi.test(state)) return res.redirect('/');
  try {
    var resp: any = await fetch(`http://localhost:3001/?state=${state}&division=${division}`, { 
      method: 'GET' 
    })
    .then(r => r.json());
  } catch(e) { console.log(e); };
  if(!resp) return res.redirect('/');
  console.log(resp.prediction.length)
  res.render('index', {
    data: JSON.stringify(handle(resp.avgtmp, true)),
    prediction: JSON.stringify(handle(resp.prediction, false)) 
  });
});



module.exports = router;