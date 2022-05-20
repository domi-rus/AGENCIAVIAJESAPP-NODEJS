const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery('select * from viajes');
}

const create = ({ fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id }) => {
  return executeQuery('insert into viajes (fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id) values (?, ?, ?, ?, ?)',
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id]);
}

const getById = (pViajeId) => {
  return executeQueryOne('select * from viajes where id = ?', [pViajeId]);
}


const update = (pViajeId, { fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id }) => {
  return executeQuery(
    "update viajes set  fecha_salida = ?, fecha_vuelta = ?, id_vuelo_ida = ?, id_vuelo_vuelta = ?, hotel_id = ?  where id = ?",
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id, pViajeId]);
};

const deleteById = (pViajeId) => {
  return executeQuery('delete from viajes where id = ?',
    [pViajeId]);
}


module.exports = {
  getAll, create, getById, update, deleteById
}