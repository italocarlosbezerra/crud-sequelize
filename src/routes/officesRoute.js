const express = require("express");
const router = express.Router();

const officesControler = require("../controllers/officesController");

router.get("/", officesControler.getAllOffices);
router.get("/:officeCode", officesControler.getOfficeByOfficeCode);
router.post("/", officesControler.createOffice);
router.put("/:officeCode", officesControler.updateOffice);
router.delete("/:officeCode", officesControler.deleteOffice);

module.exports = router;
