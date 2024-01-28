const express = require('express')
const next = require('next')
const fs = require('fs')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))

  server.post('/api/questions', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { question, options } = req.body

    // Leer el archivo questions.json
    fs.readFile('questions.json', 'utf8', (err, data) => {
      if (err) throw err
      // Parsear el contenido del archivo a un objeto JavaScript
      let questions = JSON.parse(data)
      // Agregar la nueva pregunta al objeto
      questions.push({ question, options })
      // Convertir el objeto a formato JSON
      let json = JSON.stringify(questions)
      // Escribir el contenido en el archivo
      fs.writeFile('questions.json', json, 'utf8', (err) => {
        if (err) throw err
        console.log('Pregunta guardada con éxito')
        res.json({ message: 'Pregunta guardada con éxito' })
      })
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})