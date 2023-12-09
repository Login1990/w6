"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let vehicle_list = {};
router.get("/hello", (req, res, next) => {
    res.send("Hello world");
});
router.get("/", (req, res, next) => {
    res.send("Hello from TS!");
});
router.post("/vehicle/add", (req, res, next) => {
    let vehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power,
        bodyType: req.body.bodyType ? req.body.bodyType : undefined,
        wheelCount: req.body.wheelCount ? req.body.wheelCount : undefined,
        draft: req.body.draft ? req.body.draft : undefined,
        wingspan: req.body.wingspan ? req.body.wingspan : undefined
    };
    vehicle_list[req.body.model] = vehicle;
    res.status(201).send("Vehicle added");
});
exports.default = router;
