import { NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/next-server/server/api-utils";

const sgMail = require("@sendgrid/mail");

export default (req: NextApiRequestQuery, res: NextApiResponse) => {
  console.log(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "matt.chapman@firstaml.co.nz", // Change to your recipient
    from: "matt@mattchapman.io", // Change to your verified sender
    subject: "Ola compadre",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).json({ hello: "world" });
    })
    .catch((error) => {
      console.error(error);
    });
};
