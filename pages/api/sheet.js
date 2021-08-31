  const { GoogleSpreadsheet } = require('google-spreadsheet');
  const credenciais = require('./credenciais.json');

  const getDoc = async (req, res) => {
      const doc = new GoogleSpreadsheet('1EOx10mMHKiMFjLIRYe42BMRrZ5ZeoyWThr_FWHIiNF0');
      
      try{
        await doc.useServiceAccountAuth({
          client_email: credenciais.client_email,
          private_key: credenciais.private_key.replace(/\\n/g, '\n')
      })
      await doc.loadInfo();
      res.status(200).json({doc.tittle})

      } catch(err){
        res.status(500).json({statusCode: 500, message: err.message})
      }
      
  }

export default getDoc;