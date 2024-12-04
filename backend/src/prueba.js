// import express from 'express'
// import pool from './db'

// const app = express()


// const PORT = process.env.PORT || 3001

// pool.query('SELECT * FROM users', (err, results)=>{
//   if(err) {
//     console.log(` datos no obtenidos ${err}`)
//     } else {
//       console.log(results)
//      }
// })

// app.listen(PORT, ()=>{
//   console.log(`server on port http://localhost:${PORT}`)
// })

// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_DATABASE:', process.env.DB_DATABASE);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('Dotenv cargado:', env.parsed); // Imprime las variables cargadas

// app.get('/users', (req, res) => {
//   pool.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       return res.status(500).send(`Error obteniendo datos: ${err}`);
//     }
//     let html = '<h1>Lista de Usuarios</h1><ul>';
//     results.forEach(user => {
//       html += `<h2>Nombre: ${user.username},<br/> Correo: ${user.email}</h2>`;
//     });
//     // html += '</ul>';
//     res.send(html); // Aquí enviamos HTML
//   });
// });