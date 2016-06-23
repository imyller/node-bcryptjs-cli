"use strict";

var path = require('path'),
	expect = require('chai').expect;

require('string.prototype.startswith');

describe('bcrypt argv', function () {

	var bcrypt = require(path.join(__dirname, '..', 'index.js'));

	it('should handle null value', function (done) {

		bcrypt(null, function (err, hash) {

			expect(err).to.exist;
			expect(err).not.to.be.undefined;

			done();

		});
	});

	it('should handle undefined value', function (done) {

		bcrypt(undefined, function (err, hash) {

			expect(err).to.exist;
			expect(err).not.to.be.undefined;

			done();

		});
	});

	it('should handle invalid type', function (done) {

		bcrypt("this is a string", function (err, hash) {

			expect(err).to.exist;
			expect(err).not.to.be.undefined;

			done();

		});
	});

	it('should handle empty array', function (done) {

		bcrypt([], function (err, hash) {

			expect(err).to.exist;
			expect(err).not.to.be.undefined;

			done();

		});
	});

	it('should return usage/help with no arguments', function (done) {

		var stdout_write = global.process.stdout.write;
		var stderr_write = global.process.stderr.write;

		var strings = [];
		var errStrings = [];

		global.process.stdout.write = function (string) {
			strings.push(string);
		};
		global.process.stderr.write = function (string) {
			errStrings.push(string);
		};

		bcrypt(['node', 'bcrypt'], function (err, hash) {

			global.process.stdout.write = stdout_write;
			global.process.stderr.write = stderr_write;

			expect(err).to.exist;

			expect(strings.length).to.be.greaterThan(0);
			expect(strings[0].startsWith('usage')).to.be.true;

			done();

		});
	});


	it('should return a valid hash with only one argument', function (done) {

		bcrypt(['node', 'bcrypt', 'test_string'], function (err, hash) {

			expect(err).to.not.exist;
			expect(hash).to.exist;

			expect(hash).to.be.a('string');

			expect(hash.startsWith('$2a$')).to.be.true;

			done();

		});
	});

	it('should return a hash with two arguments', function (done) {

		bcrypt(['node', 'bcrypt', 'test_string_2', '4'], function (err, hash) {

			expect(err).to.not.exist;
			expect(hash).to.exist;

			expect(hash).to.be.a('string');

			expect(hash.startsWith('$2a$04$')).to.be.true;

			done();

		});
	});

	it('should replace hash salt rounds < 4 with 4', function (done) {

		bcrypt(['node', 'bcrypt', 'test_string_2', '1'], function (err, hash) {

			expect(err).to.not.exist;
			expect(hash).to.exist;

			expect(hash).to.be.a('string');

			expect(hash.startsWith('$2a$04$')).to.be.true;

			done();

		});
	});

	it('should change hash salt rounds', function (done) {

		bcrypt(['node', 'bcrypt', 'test_string_3', '7'], function (err, hash) {

			expect(err).to.not.exist;
			expect(hash).to.exist;

			expect(hash).to.be.a('string');

			expect(hash.startsWith('$2a$07$')).to.be.true;

			done();

		});
	});

});