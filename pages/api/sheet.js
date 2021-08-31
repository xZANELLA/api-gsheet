const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credenciais.json');

const getDoc = async () => {
    const doc = new GoogleSpreadsheet('1EOx10mMHKiMFjLIRYe42BMRrZ5ZeoyWThr_FWHIiNF0');
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    let auxdoc = await doc.loadInfo();
    return auxdoc;
}

    export default async function handler(req, res){
      
      let doccc = await getDoc();

      res.docc;
  };