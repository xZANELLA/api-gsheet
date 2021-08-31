const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credenciais.json');

const getDoc = async () => {
    const doc = new GoogleSpreadsheet('1EOx10mMHKiMFjLIRYe42BMRrZ5ZeoyWThr_FWHIiNF0');
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

    export default function handler(req, res){
      const docc = getDoc().then(doc => {doc})
      res.status(200).json(docc)
  };