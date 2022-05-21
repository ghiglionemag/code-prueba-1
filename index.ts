import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/hola", (req, res) => {
  res.json({ message: "hola soy el servidor" });
});

app.listen(3000, () => {
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
