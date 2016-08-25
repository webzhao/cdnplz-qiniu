const provider = require('..');
const config = require('./conf.js');
const file = 'test/sample-image.png';

provider.upload(file, config).then(console.log).catch(console.error);
