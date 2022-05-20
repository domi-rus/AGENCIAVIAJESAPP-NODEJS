const router = require('express').Router();

const apiClientesRouter = require('./clientes');
const apiHotelesRouter = require('./hoteles');
const apiViajesRouter = require('./viajes');


router.use('/clientes', apiClientesRouter);
router.use('/hoteles', apiHotelesRouter);
router.use('/viajes', apiViajesRouter);



module.exports = router;