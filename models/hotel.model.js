const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery('select * from hoteles');
}

const create = ({ nombre, direccion, ciudad, num_estrellas, descripcion, tarifa }) => {
  return executeQuery('insert into hoteles (nombre, direccion, ciudad, num_estrellas, descripcion, tarifa) values (?, ?, ?, ?, ?, ?)',
    [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa]);
}

const getById = (pHotelId) => {
  return executeQueryOne('select * from hoteles where id = ?', [pHotelId]);
}


const update = (pHotelId, { nombre, direccion, ciudad, num_estrellas, descripcion, tarifa }) => {
  return executeQuery(
    "update hoteles set  nombre = ?, direccion = ?, ciudad = ?, num_estrellas = ?, descripcion = ?, tarifa = ?  where id = ?",
    [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa, pHotelId]);
};

const deleteById = (pHotelId) => {
  return executeQuery('delete from hoteles where id = ?',
    [pHotelId]);
}


module.exports = {
  getAll, create, getById, update, deleteById
}