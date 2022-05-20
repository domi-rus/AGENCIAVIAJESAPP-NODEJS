const router = require('express').Router();
const { getAll, create, getById, update, deleteById, createClienteViaje } = require('../../models/cliente.model')

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

    const newCliente = await getById(result.insertId);

    res.json(newCliente);

  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/:clienteId/viajes/:viajeId", async (req, res) => {

  try {
    const clienteId = req.params.clienteId;
    const viajeId = req.params.viajeId;
    const clienteViaje = await createClienteViaje(clienteId, viajeId);
    res.json(clienteViaje);

  } catch (err) {
    res.json({ error: err.message })

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