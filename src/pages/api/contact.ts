import { NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/next-server/server/api-utils";
import IsEmail from "isemail";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequestQuery, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body as any);

  if (!name)
    return res
      .status(400)
      .json({ successful: false, message: "Name field cannot be blank" });
  if (!email)
    return res
      .status(400)
      .json({ successful: false, message: "Email field cannot be blank" });
  if (!message)
    return res
      .status(400)
      .json({ successful: false, message: "Message field cannot be blank" });
  if (!IsEmail.validate(email))
    return res
      .status(400)
      .json({
        successful: false,
        message: "Email is not a valid email address",
      });

  const msg = {
    to: process.env.CONTACT_EMAIL_ADDRESS,
    from: "contact@mattchapman.io", // Change to your verified sender
    subject: "New website contact message received",
    text: `Sender Name: ${name}\nSender Email: ${email}\nMessage:\n${message}`,
    html: `<p>Sender Name: ${name}</p><p>Sender Email: <a href="mailto: ${email}">${email}</a></p><div><p>Message:<p/>${message}</div>`,
  };

  try {
    await sgMail.send(msg);
    console.log("email sent");

    res
      .status(200)
      .json({ successful: true, message: "Email sent successfully" });
  } catch (error) {
    console.log("Failed to send email");

    res.status(500).json({ successful: false, message: error.message });
  }
};
