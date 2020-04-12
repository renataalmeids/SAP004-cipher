
const cipher = {
  encode: function(offset,string){
        if (offset =="" || string==""||typeof offset!=="number" ||typeof string!=="string"){
        throw new TypeError('Digite uma mensagem ou senha inválida.')
      }
  
    let menssagemCipher = "";
    
    for (let i=0; i<string.length; i++){

      let codAsc = string.charCodeAt(i);
      let forEncode = ((codAsc -65 + offset) % 26) + 65;
      menssagemCipher += String.fromCharCode(forEncode); 
      
    } return menssagemCipher;
  },

  decode: function(offset,string){
  
    let menssagemCipher = "";
    
    for (let i=0; i<string.length; i++){

      let codAsc = string.charCodeAt(i);
      let forEncode = ((codAsc -90 - offset) % 26) + 90;
      menssagemCipher += String.fromCharCode(forEncode); 
      
    } return menssagemCipher;
  }


}

export default cipher;
