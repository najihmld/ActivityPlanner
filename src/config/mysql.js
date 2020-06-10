const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'activity_planner'
})

connection.connect(err => {
  if(err) throw err
  console.log("You're now connected...")
})