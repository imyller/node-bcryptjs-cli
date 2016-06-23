#!/usr/bin/env node
"use strict";

var util = require('util');
var path = require('path');
var bcryptjs = require('bcryptjs');

function bcrypt(argv, callback) {

	if (argv == null || argv == undefined || !(argv instanceof Array) || argv.length < 2) {
		callback(true);
		return;
	}

	if (argv.length < 3) {
		console.log(util.format('usage: %s <string> [salt rounds]', path.basename(argv[1])));
		callback(true);
		return;
	}

	var str = argv[2];

	var salt_rounds = 10;

	if (argv.length >= 2) {
		try {
			salt_rounds = parseInt(argv[3], 10);
		} catch (e) {
			console.err('error: invalid salt rounds value');
			callback(e);
			return;
		}
	}

	if (salt_rounds < 4) {
		salt_rounds = 4;
	}

	if (salt_rounds > 31) {
		salt_rounds = 31;
	}

	bcryptjs.genSalt(salt_rounds, function (err, salt) {
		if (err) {
			console.error('error: salt generation failed: ' + err);
			callback(err);
			return;
		}
		bcryptjs.hash(str, salt, function (err, hash) {
			if (err) {
				console.error('error: hash generation failed: ' + err);
				callback(err);
				return;
			}
			callback(null, hash);
		});
	});

}

module.exports = bcrypt;

if (require.main === module) {
	bcrypt(process.argv, function (err, hash) {
		if (err) {
			process.exit(1);
		}
		console.log(hash);
	});
}
	