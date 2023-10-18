const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  // Aquí debes proporcionar la dirección IP o el nombre de host de tu servidor MySQL, no el número de puerto.
  user: 'root',
  password: '@12Aresop23#',
  database: 'gamme_schema'
});

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// // Ejemplo de consulta SELECT
// connection.query('SELECT * FROM usuarios', (err, results) => {
//   if (err) {
//     console.error('Error al realizar la consulta: ' + err.stack);
//     return;
//   }
//   console.log('Resultados de la consulta:', results);
// });

// Ejemplo de inserción de datos
const nuevoRegistro = { nombre: 'Ejemplo', edad: 25 };
connection.query('INSERT INTO usuarios SET ?', nuevoRegistro, (err, result) => {
  if (err) {
    console.error('Error al insertar datos: ' + err.stack);
    return;
  }
  console.log('Registro insertado con éxito. ID:', result.insertId);
});

// Ejemplo de actualización de datos
const id = 1; // Reemplaza 1 con el ID del registro que deseas actualizar.
const registroActualizado = { nombre: 'NuevoNombre' };
connection.query('UPDATE usuarios SET ? WHERE id = ?', [registroActualizado, id], (err, result) => {
  if (err) {
    console.error('Error al actualizar datos: ' + err.stack);
    return;
  }
  console.log('Registro actualizado con éxito');
});

// // Ejemplo de eliminación de datos
// const idAEliminar = 1; // Reemplaza 1 con el ID del registro que deseas eliminar.
// connection.query('DELETE FROM usuarios WHERE id = ?', idAEliminar, (err, result) => {
//   if (err) {
//     console.error('Error al eliminar datos: ' + err.stack);
//     return;
//   }
//   console.log('Registro eliminado con éxito');
// });

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos');

  // Realizar una consulta SELECT
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta: ' + err.stack);
      return;
    }

    // Manipular los resultados de la consulta
    results.forEach(row => {
      console.log(`ID: ${row.id}, Nombre: ${row.nombre}, Edad: ${row.edad}`);
    });

    // Cerrar la conexión a la base de datos
    connection.end();
  });
});