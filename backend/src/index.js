
import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
// import { config } from 'dotenv';
import cors from 'cors'



// const env = config();
dotenv.config();  
const app = express();

// app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173', // Dirección del frontend en desarrollo
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true, // Necesario si envías cookies o encabezados de autenticación
}));


const PORT = process.env.PORT || 3001;

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  database: process.env.MYSQLDATABASE,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port:process.env.MYSQLPORT,
  connectionLimit: 10,
});

// Middleware para parsear JSON
// app.use(express.json());

 

app.get('/api/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, results)=>{
    if(err) {
        return res.status(500).json(`Error obteniendo datos: ${err}`);

      // console.log(` datos no obtenidos ${err}`)
      } else {
        res.json(results)
        // console.log(results)
       }
  })
})


// Servidor en ejecución
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});








