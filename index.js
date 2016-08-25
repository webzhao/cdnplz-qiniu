const qiniu = require('qiniu');
const path = require('path');

const upload = (file, options) => {

  // set key
  qiniu.conf.ACCESS_KEY = options.ACCESS_KEY;
  qiniu.conf.SECRET_KEY = options.SECRET_KEY;

  // upload setting
  const bucket = options.bucket;
  const key = file;
  const token = new qiniu.rs.PutPolicy(`${bucket}:${key}`).token();
  const extra = new qiniu.io.PutExtra();

  // return upload promise
  return new Promise((resolve, reject) => {
    qiniu.io.putFile(token, key, file, extra, (err, ret) => {
      if (err) return reject(err);
      const result = {};
      result[file] = `${options.origin}/${ret.key}`;
      resolve(result);
    });
  });
}

module.exports = { upload };
