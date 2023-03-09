const express = require('express')

const crypto = require('crypto');



const app = express()
const log = console.log

 // permite conectar con servidores distintas
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.listen(3015, () => {
  log('start server port:', 3015)
})

app.get('*', (req, res) => {
    res.send("<h1>"+JSON.stringify(req.query) +"<h1/>")
    let valor=req.query.valor;
    console.log("valor: "+valor);
    let decode =desencriptar(valor);
    console.log("decode: "+decode);
  })

  function desencriptar(valor){

    const encryptedInput = valor; 
    const secretKey = 'javax.crypto.spec.SecretKeySpec@17565'
    const ivParameterSpec = 'javax.crypto.spec.IvParameterSpec@24986a4c'; 

    let decipher = crypto.createDecipheriv('aes-192-cbc', secretKey, ivParameterSpec);
    console.log();
    let decryptedInput = decipher.update(Buffer.from(encryptedInput, 'base64'));
    console.log();
    decryptedInput = Buffer.concat([decryptedInput, decipher.final()]);

    console.log('encryptedInput', encryptedInput);
    console.log('decrypted input:', decryptedInput.toString('utf-8'));
    return decryptedInput.toString('utf-8');
  }