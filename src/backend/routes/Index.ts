import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();
import * as qs from 'querystring';
import { handle, DataInput } from '../DataHandler';
router.get('/', (req, res) => {
  res.render('index', {
    data: JSON.stringify({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
      }]
    })
  });
});
router.post('/search', async (req, res) => {
  var [state, division]: string[] = req.body.search.split(':');
  if(!state || !division) return res.redirect('/');
  if(state.length > 2 || state.length < 2 || division.length > 2 || division.length < 2 || Number.isInteger(Number(division)))
    return res.redirect('/');
  state = state.toUpperCase();
  if(!/^[A-Z]{2}/gi.test(state)) return res.redirect('/');
  try {
    var resp: DataInput = await fetch(`http://localhost:3001?state=${state}&division=${division}`, { 
      method: 'GET' 
    }).then(r => r.json());
  } catch(e) { console.log(e); };
  if(!resp) return res.render('index');
  res.render('index', {
    data: JSON.stringify(handle(resp)) 
  });
});

module.exports = router;