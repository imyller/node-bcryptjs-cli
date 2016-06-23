node-bcryptjs-cli
=================
[![Build Status](https://travis-ci.org/imyller/node-bcryptjs-cli.svg)](https://travis-ci.org/imyller/node-bcryptjs-cli)
[![npm version](https://badge.fury.io/js/bcryptjs-cli.svg)](http://badge.fury.io/js/bcryptjs-cli)

[![NPM](https://nodei.co/npm/bcryptjs-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bcryptjs-cli/)
[![NPM](https://nodei.co/npm-dl/bcryptjs-cli.png?months=6&height=3)](https://nodei.co/npm-dl/bcryptjs-cli/)

> The [`bcryptjs`](https://github.com/dcodeIO/bcrypt.js) command line interface.

Install this globally and you'll have access to the `bcryptjs` command anywhere on your system.

```
npm install -g bcryptjs-cli
```

## Usage

```
$ bcryptjs
usage: bcryptjs <string> [salt rounds]
```

```
$ bcryptjs mypassword
$2a$10$ckDge4zC6brAIMtM9x47zeG56MxG7UuaVzboIP0jkHuJP7d6jIEti
```

```
$ bcryptjs mypassword 12
$2a$12$1L/qFa8UKvJ9uNFoELuiDOh0rDc5ren1QnymTtD7QYpVfp4TVzFum
```

## Security considerations

Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the
iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with
increasing computation power. ([see](http://en.wikipedia.org/wiki/Bcrypt))

The maximum input length is 72 bytes (note that UTF8 encoded characters use up to 4 bytes) and the length of generated
hashes is 60 characters.

## Testing

```sh
$ npm test
```

## Contributing

You can find the repository at:
https://github.com/imyller/node-bcryptjs-cli

Issues/Feature Requests can be submitted at:
https://github.com/imyller/node-bcryptjs-cli/issues

I'd really like to hear your feedback, and I'd love to receive your pull-requests!

## Copyright

Copyright 2016 Ilkka Myller. This software is licensed under the MIT License, see `LICENSE` for details.
