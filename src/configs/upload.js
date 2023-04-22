const path = require('path');
const multer = require('multer');
const crypto = require('crypto');

const TMP_FOLDER = path.resolve(__dirname, '..', "..", "tmp"); //onde chega
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads'); //onde vai ficar

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename: (req, file, callbback) => {
      const fileHash = crypto.randomBytes(10).toString("hex"); //hash para dar identidade unica na img
      const fileName = `${fileHash}-${file.originalname}`; //hash + name para não ter duplicidade de image

      return callbback(null, fileName);
    }
  })
};

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
};