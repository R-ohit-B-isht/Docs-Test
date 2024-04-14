// Function to send mail.

// Import the required modules.
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require('path');
/**
 * This function sends an Email.
 * It is sent from the email stored in the environment variable EMAIL_ADDRESS.
 * @author Paras Thapar
 */

const generateEmail = async (
{  to,
  subject,
  data,
  cc,
  bcc,
  from,
  salutation,
  messageOne,
  messageTwo,
  attachments}
) => {
  /**
   * Setup the Email Transporter.
   * We use the Gmail service to send emails.
   * We use the environment variables EMAIL_ADDRESS and EMAIL_PASSWORD to authenticate the email.
   * @author Paras Thapar
   */
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: from["email"] === "" ? process.env.EMAIL_ADDRESS : from["email"],
      pass:
        from["password"] === "" ? process.env.EMAIL_PASSWORD : from["password"],
    },
  });

  try {
    const templatePath = path.join(__dirname, '../../', 'templates', 'welcome_email.ejs');
    const template = await ejs.renderFile(templatePath,
      {
        data: data,
        salutation: salutation,
        messageOne: messageOne,
        messageTwo: messageTwo,
        images: {
          logo: "http://drive.google.com/uc?export=view&id=16YTtq8Kndoufcfntixm32kaEVNsMNAyd",
          illustration:
            "http://drive.google.com/uc?export=view&id=1C2rTPNo3di124XrupPchaPdu_zsVnVak",
          rightArrow:
            "http://drive.google.com/uc?export=view&id=1QkBvXOEw-EixQWF9YtCI3fyW_NQ3boVW",
          linkedin:
            "http://drive.google.com/uc?export=view&id=1G2XgCsiEgeRldPshFzUsPfpUQDn6Yxik",
          help: "http://drive.google.com/uc?export=view&id=1GLPHx0Ut-em8rafh-XJyxPmkLFhMrdZi",
        },
      },
      { async: true }
    );

    const mailOptions = {
      to: to,
      subject: subject,
      html: template,
      cc: cc,
      bcc: bcc,
      attachments: [...attachments],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateEmail;

/**
 * The email parameters are sent in the request body as JSON.
 * {
 *    "to": [],
 *    "from": {
 *        "email": "",
 *        "password": ""
 *    },
 *    "subject": "",
 *    "salutation": "",
 *    "messageOne": "",
 *    "messageTwo": "",
 *    "data": [
 *        {
 *            "headertitle": "",
 *            "content":[
 *                {
 *                "title": "",
 *                "subtitle": "",
 *                "url": ""
 *                },
 *                {
 *                "title": "",
 *                "subtitle": "",
 *                "url": ""
 *                }
 *            ]
 *        },
 *        {
 *            "headertitle": "",
 *            "content":[
 *                {
 *                "title": "",
 *                "subtitle": "",
 *                "url": ""
 *                }
 *            ]
 *        }
 *        ],
 *    "attachments": [
 *        {
 *            "filename": "",
 *            "path": ""
 *        }
 *   ],
 *    "cc": [],
 *    "bcc": []
 * }
 */
