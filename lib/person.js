
const Person = function (name, age) {

    this.name = name;
    this.age = age || 18;
};

Person.prototype.toString = function () {

    return this.name + ' ' + this.age;
};

module.exports = Person;
