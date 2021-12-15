"use strict";
exports.__esModule = true;
var express_1 = require("express");
var persons_1 = require("../controllers/persons");
var router = (0, express_1.Router)();
router.get("/persons", persons_1.getPersons);
exports["default"] = router;
//# sourceMappingURL=persons.js.map