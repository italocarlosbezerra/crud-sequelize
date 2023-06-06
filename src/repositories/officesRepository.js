const officesModel = require("../models/officesModel");

const getAllOffices = async () => {
   const offices = await officesModel.findAll();
   return offices;
};

const getOfficeByOfficeCode = async (officeCode) => {
   const office = await officesModel.findByPk(officeCode);
   return office;
};

const createOffice = async (office) => {
   const newOffice = await officesModel.create(office);
   return newOffice;
};

const updateOffice = async (officeCode, office) => {
   const updateOffice = await officesModel.update(office, {
      where: { officeCode },
   });
   return updateOffice;
};

const deleteOffice = async (officeCode) => {
   await officesModel.destroy({
      where: { officeCode },
   });
};

module.exports = {
   getAllOffices,
   getOfficeByOfficeCode,
   createOffice,
   updateOffice,
   deleteOffice,
};
