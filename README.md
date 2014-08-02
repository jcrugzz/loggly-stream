# loggly-stream

Simple stream interface to write to loggly using [`node-loggly`][loggly].

Value in this is for piping json to it

## Install

```
npm install loggly-stream
```

## Example usage with [bunyan](https://github.com/trentm/node-bunyan):

```js
var bunyan = require('bunyan');
var LogglyStream = require('loggly-stream');

var log = bunyan.createLogger({
  name: 'my_app',
  streams: [{
    type: 'raw',
    level: 'debug',
    stream: new LogglyStream({
      token: '...',
      subdomain: '...',
      auth: { user: '...',  password: '...' },
      host: 'logs.loggly.com'
    })
  }]
});

log.info('hello world');
```

## License

MIT

[loggly]: https://github.com/nodejitsu/node-loggly
