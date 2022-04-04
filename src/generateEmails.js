const { EMAILS } = require("./readEmailFiles");

exports.generateEmailOnlyInvoice = () => {
  const header = EMAILS.header_only_invoice;
  const closing = EMAILS.email_closing;
  return `${header}\n${closing}`;
};

exports.generateEmailWithLicenses = (receivesInvoice, platformType) => {
  let header;
  let warningMultiplePlatforms;
  let body = "";
  let email;

  if (receivesInvoice) {
    header = EMAILS.header_with_licenses_with_invoice;
  } else {
    header = EMAILS.header_with_licenses_no_invoice;
  }

  warningMultiplePlatforms = EMAILS.warning_multiple_platforms;

  platformType.forEach((platform) => {
    switch (platform) {
      case "blinkUses":
        body += EMAILS.body_blink_uses;
        break;
      case "blinkIndividual":
        body += EMAILS.body_blink_individual;
        break;
      case "blinkAcademy":
        body += EMAILS.body_blink_academy;
        break;
      case "marsupial":
        body += EMAILS.body_marsupial;
        break;
      case "OLB":
        body += EMAILS.body_OLB;
        break;
      case "onlinePractice":
        body += EMAILS.body_online_practice;
        break;
      case "OOSP":
        body += EMAILS.body_OOSP;
        break;
      case "ORC":
        body += EMAILS.body_ORC;
        break;
      default:
        throw new Error(
          "You set a wrong platform type, please use the following: blinkUses, blinkIndividual, blinkAcademy, marsupial, OLB, onlinePractice, OOSP, or ORC."
        );
    }
  });

  const closing = EMAILS.email_closing;

  email =
    platformType.length > 1
      ? `${header}\n${warningMultiplePlatforms}\n${body}\n${closing}`
      : `${header}\n${body}\n${closing}`;

  return email;
};

exports.generateEmailReturn = () => {
  return EMAILS.email_return;
};
