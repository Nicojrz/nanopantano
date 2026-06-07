const express = require("express");
const app = express();
const puerto = 8080;
const url = require("url");
const mysql = require("mysql");

app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get("/Pregunta", (request, response) => {
  let cadenajsonfinal;
  const q = url.parse(request.url, true).query;
  //response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Cache-control', 'no-cache');
  response.writeHead(200, { 'Content-Type': 'application/json' });
  console.log("METODO GET Y PREGUNTA");
  const id = q.id;
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "crudjson"
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("CONECTADO TABLAJSON!");

    con.query("SELECT * FROM tablajson WHERE idEjercicio=" + id + "", function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        cadenajsonfinal = "[";
        cadenajsonfinal += result[0].columnajson + "]";
        response.end(cadenajsonfinal);
      }
    });
  });
});

app.get("/Preguntas", (request, response) => {
  let cadenajson;
  let cadenajsonfinal;
  const q = url.parse(request.url, true).query;
  //response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Cache-control', 'no-cache');
  response.writeHead(200, { 'Content-Type': 'application/json' });
  console.log("METODO GET Y PREGUNTAs");
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "crudjson"
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("CONECTADO TABLAJSON!");
    con.query("SELECT * FROM tablajson", function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        cadenajson = "[";
        for (let i = 0; i < result.length; i++) {
          cadenajson += result[i].columnajson + ",";
        }
        let indice = cadenajson.lastIndexOf(",");
        cadenajsonfinal = cadenajson.slice(0, indice);
        cadenajsonfinal += "]";
        response.end(cadenajsonfinal);
      }
    });
  });
});

app.get("/Login", (request, response) => {
  let tipousuario;
  let respuesta;

  const q = url.parse(request.url, true).query;
  response.setHeader('Cache-control', 'no-cache');
  response.writeHead(200, { 'Content-Type': 'application/json' });

  const user = q.user;
  const password = q.password;
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "usuarios"
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("CONECTADO LOGIN!");
    con.query("SELECT * FROM login WHERE USERNAME='" + user + "' AND PASSWORD='" + password + "'", function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        tipousuario = result[0].TIPOUSUARIO;
        if (user == result[0].USERNAME && password == result[0].PASSWORD) {
          respuesta = { status: "yes", tipo: tipousuario };
          console.log(JSON.stringify(respuesta));
          response.end(JSON.stringify(respuesta));
        }
      }
      else {
        respuesta = { status: "no", tipo: "nodefinido" };
        console.log(JSON.stringify(respuesta));
        response.end(JSON.stringify(respuesta));
      }
    });
  });
});

app.listen(puerto, () => {
  console.log(puerto);
});