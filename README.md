# cdnplz-qiniu

[Qiniu](https://qiniu.com/) CDN service provider for [cdnplz.js](https://github.com/zhouweicsu/cdnplz).

## Usage

```javascript
new cdnplz({
  cdn_provider: 'qiniu',
  cdn_options: {
    ACCESS_KEY: 'yourAccessKey',
    SECRET_KEY: 'yourSecretKey',
    bucket: 'yourBucket',
    origin: 'originOfYourBucket'
  }
}).start();
```
`ACCESS_KEY` and `SECRET_KEY` can be found in https://portal.qiniu.com/user/key .

