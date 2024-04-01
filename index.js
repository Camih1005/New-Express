// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req,res)=>{
// const read = fs.createReadStream("./view/index.html")
// read.pipe(res)
// })

// const express = require("express")
// const app = express()

// app.get("/",(req,res)=>{
//     res.sendFile("./view/index.html",{
//         root: __dirname
//     })
// })
// app.get("/",(req,res)=>{
//    res.send("hello cacas")
// })

// app.get("/about",(req,res)=>{
//     res.send("About")
//  })

//  app.get("/cacas",(req,res)=>{
//     res.send("mamalo")
//  })

// app.use((req,res)=>{
//     res.send("no se encontro tu paginga") /*esto es para
//     manejar las*/
// })

// const express = require("express")
// const app = express()

// app.get("/products",(req,res)=>{
//     res.send("lista de productos")
// })

// app.post("/products",(req,res)=>{
//     res.send("creando de productos")
// })

// app.put("/products",(req,res)=>{
//     res.send("actualizando productos")
// })

// app.delete("/products",(req,res)=>{
//     res.send("eliminando productos")
// })

// app.patch("/products",(req,res)=>{
//     res.send("update one part of products")
// })
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./descuento.gif", {
//     root: __dirname,
//   });
// });

// app.get("/users", (req, res) => {
//   res.json({
//     personas: [
//       {
//         nombre: "Juan",
//         edad: 25,
//         ciudad: "Ciudad de México",
//         ocupacion: "Ingeniero",
//       },
//       {
//         nombre: "María",
//         edad: 30,
//         ciudad: "Buenos Aires",
//         ocupacion: "Doctora",
//       },
//       {
//         nombre: "Carlos",
//         edad: 22,
//         ciudad: "Madrid",
//         ocupacion: "Estudiante",
//       },
//       {
//         nombre: "Ana",
//         edad: 40,
//         ciudad: "Sao Paulo",
//         ocupacion: "Abogada",
//       },
//     ],
//   });
// }); /**asi se podria usar json pero se puede
/*validar un usuario para usarlo en la interfaz */

// const express = require("express");
// const app = express();
//ESTOOO QES PARA LOS FORM, LAS PETICIONES EN JSON O TEXTO
// app.use(express.text())/**esto siempre va antes de la peticion */
// app.use(express.json()) /**esto lo que hace es que las peticiones, o
// lo que el usuario ingrese, pueda ingrtesar como texto con el console */
// app.use(express.urlencoded({extended:false})) /*esto es para los formularios*/

// app.post("/user",(req,res)=>{
//   console.log(req.body)
//   res.send("nuevo usuario creado")
// })

const express = require("express");
const app = express();

app.get("/search",(req,res)=>{
  console.log(req.query)
  if(req.query.q === "javascript libros"){

    res.send("lista de libros de javascript")
  }else{
    res.send("Pagina normal")
  }
  })

/**QUERY Y ?=?=?=?=X_"9 */
app.get("/hello/:user", (req, res) => {
  console.log(req.query);
  console.log(req.query.NAME);//Esto es lo que aparece en el http
  console.log(req.query.EDAD);//Esto es lo que aparece en el http
  res.send(`hello ${req.params.user.toLocaleUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);

  const resultado = parseInt(req.params.x) + parseInt(req.params.y);
  res.send(`result ${resultado}`);
});
/* other posibility ^\~*/

app.get("/agg/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const resultado = parseInt(x) + parseInt(y);
  res.send(`result ${resultado}`);
});
/**other posibility */
app.get("/users/:username/:photo", (req, res) => {
  if (req.params.username === "camilo") {
    return res.sendFile(`./descuento.gif`, {
      /**CASI SIEMPRE SE PONE EL RETURN*/ root: __dirname,
    });
  }

  res.send("el usuario no tiene acceso a la imagen");
});

app.get("/nombre/:nombre/age/:age", (req, res) => {
  console.log(req.params);

  if (req.params.age >= 18) return res.send("Si puede ingresar");
  else {
    res.send("no tiene acceso a la discoteca");
  }
});

app.listen(3000);
console.log(`puerto en ${3000}`);



