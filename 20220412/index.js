const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "67fd92f824d4ed",
      pass: "dbca2d3b24bb08"
    }
  });

  var mailOptions = {
      from: 'felipe.perez@unigran.br',
      to: 'contatogilbertogaspar@gmail.com',
      subject: 'Enviando e-mail usando o Node.js',
      text: 'Exemplo de envio de e-mail utilizando o módulo nodemailer'
  };

  transport.sendMail(mailOptions,(erro,info)=>{
    if(erro){
        console.log(error);
    }else{
        console.log('Email enviado com sucesso!');
    }
  });