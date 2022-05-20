
const executeQuery = (sql, data = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, data, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const executeQueryOne = (sql, data = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, data, (err, result) => {
      if (err) reject(err);
      if (result.length === 0) resolve(null);
      resolve(result[0]);
    });
  });
}

module.exports = {
  executeQuery, executeQueryOne
}