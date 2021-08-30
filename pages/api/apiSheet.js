
  const { GoogleSpreadsheet } = require('google-spreadsheet');
  const credenciais = require('./credenciais.json');

   function apiSheet(request, reponse){
      const doc = new GoogleSpreadsheet('1EOx10mMHKiMFjLIRYe42BMRrZ5ZeoyWThr_FWHIiNF0');
      
      await doc.useServiceAccountAuth({
          client_email: credenciais.client_email,
          private_key: credenciais.private_key.replace(/\\n/g, '\n')
      })
      await doc.loadInfo();
      return reponse.doc;
  }

export default apiSheet;