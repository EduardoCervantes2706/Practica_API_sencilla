import express from "express"
import fetch from "node-fetch"

const router = express.Router()

router.get("/inicio", (req, res) => {
    res.render("infoapi/inicio.pug", {
        title: "Inicio"
    })
})

router.get("/consulta", async (req, res) => {
    try {
        const apiUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
        }

        const data = await response.json();

        res.render("infoapi/consulta.pug", {
            title: "Consulta",
            earthquakes: data.features // Pasamos los datos a la vista
        });
    } catch (error) {
        res.status(500).send(`Error al obtener los datos: ${error.message}`);
    }
})

export default router