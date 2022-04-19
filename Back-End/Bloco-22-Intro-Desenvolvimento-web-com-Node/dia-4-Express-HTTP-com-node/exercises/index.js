const express = require('express');
const bodyParser = require('body-parser');

const simpsonsUtil = require('./fs-utils');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await simpsonsUtil.getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const simpsons = await simpsonsUtil.getSimpsons();
    const filteredSimpsons = simpsons.find(r => r.id === id);

    if (!filteredSimpsons) return res.status(404).json({ message: 'simpson not found' });

    return res.status(200).json(filteredSimpsons);

  } 
  catch (error) {
    return res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  
  try {
    const simpsons = await simpsonsUtil.getSimpsons();

    if (simpsons.map(r => r.id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtil.setSimpsons(simpsons);

    return res.status(204).end();

  }
  catch(error) {
    return res.status(500).end();
  }
});

app.listen(3000);