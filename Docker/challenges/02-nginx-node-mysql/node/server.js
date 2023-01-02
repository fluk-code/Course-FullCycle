const express = require('express')
const mysql = require('mysql')

const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'mysql',
  port: '3306',
  user: 'mysql',
  password: 'mysql',
  database: 'challenge',
}

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const namesFake = ['Felipe', 'Julio', "Lincon"]

  namesFake.forEach((name) => {
    connection.query(`INSERT INTO people (nome) VALUES ('${name}')`)
  })


  const people = connection.query(`SELECT nome FROM people`);
  connection.query(`SELECT nome FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results && !!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, () => {
  console.log('Serve on:', port);
})