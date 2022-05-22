"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.get("/hola", function (req, res) {
    res.json({ message: "hola soy el servidor" });
});
app.listen(3000, function () {
    console.log("Hola soy express corriendo en " + port);
});
// class User {
//   nombre: string;
//   getNombre() {
//     return this.nombre;
//   }
// }
// const agustina = new User();
// agustina.nombre = "Agustina";
// console.log(agustina.getNombre());
