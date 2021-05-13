const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const connection = mysql.createConnection({
  host: 'freedb.tech',
  port: '3306',
  user: 'freedbtech_iroloa',
  password: '1234',
  database: 'freedbtech_gymdiwb'
})

connection.connect()

connection.query('SHOW TABLES;', function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows)
})

connection.end()