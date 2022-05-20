const router = require('express').Router();
const { getAll, create, getById, update, deleteById } = require('../../models/viaje.model')



router.get('/', async (req, res) => {

  try {
    const result = await getAll();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }

});

router.post('/', async (req, res) => {
  try {
    const result = await create(req.body);

    const newViaje = await getById(result.insertId);

    res.json(newViaje);

  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put('/:viajeId', async (req, res) => {
  try {
    const result = await update(req.params.viajeId, req.body)

    const viajeUpdate = await getById(req.params.viajeId);

    res.json(viajeUpdate);

  } catch (err) {
    res.json({ err: err.message });
  }
});

router.delete('/:viajeId', (req, res) => {
  deleteById(req.params.viajeId)
    .then(result => res.json(result))
    .catch(err => res.json({ err: err.message }))

});

module.exports = router;