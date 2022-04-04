const {
  generateEmailOnlyInvoice,
  generateEmailReturn,
  generateEmailWithLicenses,
} = require("./src/generateEmails");

const generationSettings = (
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

// Possible values ["blinkUses", "blinkIndividual", "blinkAcademy", "marsupial", "OLB", "onlinePractice", "OOSP", "ORC"]

console.log(generationSettings(true, false, [], false));
