"use strict";
exports.__esModule = true;
exports.getPersons = void 0;
var person = {
    "email": "info@example.com",
    "image": "janedoe.jpg",
    "jobTitle": "Research Assistant",
    "name": "Jane Doe",
    "alumniOf": "Dartmouth",
    "birthPlace": "Philadelphia, PA",
    "birthDate": "1979-10-12",
    "height": "72 inches",
    "gender": "female",
    "memberOf": "Republican Party",
    "nationality": "Albanian",
    "telephone": "(123) 456-6789"
};
var getPersons = function (req, res) {
    res.send(person);
};
exports.getPersons = getPersons;
//# sourceMappingURL=persons.js.map