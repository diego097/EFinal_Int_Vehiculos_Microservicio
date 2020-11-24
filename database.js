const mongoose = require("mongoose");
const config = require('./config')

mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) =>
    console.log(
      "Conexión a la base de datos establecida... ",
      db.connection.host
    )
  )
  .catch((err) => console.error("Error al conectarse", err));
