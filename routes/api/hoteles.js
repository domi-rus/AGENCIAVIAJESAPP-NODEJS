const router = require('express').Router();
const { getAll, create, getById, update, deleteById } = require('../../models/hotel.model')


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

    const newHotel = await getById(result.insertId);

    res.json(newHotel);

  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put('/:hotelId', async (req, res) => {
  try {
    const result = await update(req.params.hotelId, req.body)

    const hotelUpdate = await getById(req.params.hotelId);

    res.json(hotelUpdate);

  } catch (err) {
    res.json({ err: err.message });
  }
});

router.delete('/:hotelId', (req, res) => {
  deleteById(req.params.hotelId)
    .then(result => res.json(result))
    .catch(err => res.json({ err: err.message }))

});

module.exports = router;