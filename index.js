const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "contatoleonardoflores@gmail.com",
    pass: "123456"
  }  
});

transporter.sendMail({
  from: "Leonardo Flores <contatoleonardoflores@gmail.com>",
  to: "tuxeww6@gmail.com",
  subject: "Trabalhando com Nodemailer",
  text: "NodeJS é muito bom",
  html: "Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente para os servidores, acesse aqui o site oficial do <a href='https://nodejs.org/en/'>NodeJS</a>"
}).then(message => {
 console.log(message);
}).catch(err => {
  console.log(err);
});