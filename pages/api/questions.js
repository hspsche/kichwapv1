const fs = require('fs')
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Parse the url
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (req.method === 'POST' && pathname === '/api/questions') {
            // handle the post request
            let body = ''
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', () => {
                const question = JSON.parse(body)
                fs.readFile('../../dataBase/questions.json', (err, data) => {
                    if (err) {
                        res.statusCode = 500
                        res.end(JSON.stringify({ message: 'Error al leer el archivo' }))
                    } else {
                        let questions = JSON.parse(data)
                        questions.push(question)
                        fs.writeFile('../../dataBase/questions.json', JSON.stringify(questions), (err) => {
                            if (err) {
                                res.statusCode = 500
                                res.end(JSON.stringify({ message: 'Error al escribir en el archivo' }))
                            } else {
                                res.statusCode = 200
                                res.end(JSON.stringify({ message: 'Pregunta guardada correctamente' }))
                            }
                        })
                    }
                })
            })
        } else {
            // handle all other requests with next.js
            handle(req, res, parsedUrl)
        }
    }).listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000/admin')
    })
})
