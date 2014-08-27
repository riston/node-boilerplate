var assert = require('assert'),
    Person = require('../lib/person.js');

describe('Person tests', function () {

    beforeEach(function () {
        this.person = new Person('Mikk', 32);
    });

    it('should have name set', function () {
        assert.equal(this.person.name, 'Mikk');
    });

    it('should have also age set', function () {
        assert.equal(this.person.age, 32);
    });
});
