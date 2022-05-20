const router = require('express').Router();
const { getAll, create, getById, update, deleteById } = require('../../models/cliente.model')

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

    const newClient = await getById(result.insertId);

    res.json(newClient);

  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put('/:clienteId', async (req, res) => {
  try {
    const result = await update(req.params.clienteId, req.body)

    const clienteUpdate = await getById(req.params.clienteId);

    res.json(clienteUpdate);

  } catch (err) {
    res.json({ err: err.message });
  }
});

router.delete('/:clienteId', (req, res) => {
  deleteById(req.params.clienteId)
    .then(result => res.json(result))
    .catch(err => res.json({ err: err.message }))

});

module.exports = router;