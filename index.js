import express from 'express'
import routes from './routes/generalroutes.js'

const app = express()

// Habilitando Pug
app.set("view engine", "pug")
app.set("views", "./views")

// Carpeta public 
app.use(express.static("public"))

app.use("/", routes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/inicio`)
})