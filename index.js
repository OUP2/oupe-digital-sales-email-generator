const {
  generateEmailOnlyInvoice,
  generateEmailReturn,
  generateEmailWithLicenses,
} = require("./src/generateEmails");

exports.generationSettings = (
  receivesInvoice,
  receivesLicenses,
  platformType,
  isReturn
) => {
  let email;

  if (isReturn) {
    email = generateEmailReturn();
    return email;
  }

  if (receivesInvoice && !receivesLicenses) {
    email = generateEmailOnlyInvoice();
    return email;
  }

  if (receivesLicenses) {
    email = generateEmailWithLicenses(receivesInvoice, platformType);
  }

  return email;
};