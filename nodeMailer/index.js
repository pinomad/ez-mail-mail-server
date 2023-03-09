const nodemailer = require('nodemailer');

const {
  smtpPort,
  smtpId,
  smtpPassword,
  smtpHost,
  smtpDomain,
} = require('../config');

exports.sendMail = async function (
  emailTitle,
  emailContent,
  sender,
  recipientAddress,
) {
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === '465',
    auth: {
      user: smtpId,
      pass: smtpPassword,
    },
  });

  const info = await transporter.sendMail({
    from: `${sender} <${smtpId}@${smtpDomain}>`,
    to: recipientAddress,
    subject: emailTitle,
    html: emailContent,
  });

  transporter.close();

  return info;
};
