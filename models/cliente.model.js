const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery('select * from clientes');
}

const create = ({ nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email }) => {
  return executeQuery('insert into clientes (nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email) values (?, ?, ?, ?, ?, ?, ?)',
    [nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email]);
}

const getById = (pClienteId) => {
  return executeQueryOne('select * from clientes where id = ?', [pClienteId]);
}


const update = (pClienteId, { nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }) => {
  return executeQuery(
    "update clientes set  nombre = ?, apellidos = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, email = ?, dni = ?  where id = ?",
    [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni, pClienteId]);
};

const deleteById = (pClienteId) => {
  return executeQuery('delete from clientes where id = ?',
    [pClienteId]);
}

const createClienteViaje = (pClienteId, pviajeId) => {
  return executeQuery("insert into clientes_viajes (cliente_id, viaje_id) values(?, ?)", [pClienteId, pviajeId])
}


module.exports = {
  getAll, create, getById, update, deleteById, createClienteViaje
}