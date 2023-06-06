const officesRepository = require("../repositories/officesRepository");

const getAllOffices = async (req, res) => {
   const offices = await officesRepository.getAllOffices();
   res.json(offices);
};

const getOfficeByOfficeCode = async (req, res) => {
   const office = await officesRepository.getOfficeByOfficeCode(req.params.officeCode);
   res.json(office);
};

const createOffice = async (req, res) => {
   const office = await officesRepository.createOffice(req.body);
   res.json(office);
};

const updateOffice = async (req, res) => {
   await officesRepository.updateOffice(req.params.officeCode, req.body);
   res.json({ success: true });
};

const deleteOffice = async (req, res) => {
   await officesRepository.deleteOffice(req.params.officeCode);
   res.json({ success: true });
};

module.exports = {
   getAllOffices,
   getOfficeByOfficeCode,
   createOffice,
   updateOffice,
   deleteOffice,
};
