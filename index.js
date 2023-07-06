import express from "express"
import mysql from "mysql2"
import dotenv from "dotenv"
import cors from "cors"

const app = express()

dotenv.config()
app.use(cors({ origin: "*" }))
app.use(express.json())

const PORT = process.env.PORT || 3000

const db = mysql.createConnection(process.env.DATABASE_URL)

app.get("/usuarios", (req, res) => {

  db.query("SELECT * FROM usuarios", (error, datos) => {
    if (error) return res.status(500).json(error)

    res.status(200).json(datos)
  })

})

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT} 🚀`)
})