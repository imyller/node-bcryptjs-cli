"use strict";

var path = require('path'),
	expect = require('chai').expect;

describe('bcrypt', function () {

	var bcrypt = require(path.join(__dirname, '..', 'index.js'));

	it('module should load', function (done) {
		expect(bcrypt).to.exist;
		expect(bcrypt).not.to.be.undefined;
		expect(bcrypt).not.to.be.null;
		done();
	});

	it('instance should be a function', function (done) {
		expect(bcrypt).to.be.a('function');
		done();
	});

});