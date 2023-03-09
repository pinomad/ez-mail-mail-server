const { sendMail } = require("../../nodeMailer");

exports.sendMail = async function (req, res, next) {
  const {
    sender,
    emailTitle,
    emailContent,
    recipients,
  } = req.body;

  try {
    const sendResults = await Promise.allSettled(recipients.map(recipient => sendMail(emailTitle, emailContent, sender, recipient)));

    const totalSendCount = sendResults.length;
    const successSendCount = sendResults.filter(sendResult => sendResult.status === 'fulfilled').length;

    res.json({
      totalSendCount,
      successSendCount
    });
  } catch (error) {
    next(error);
  }
};
