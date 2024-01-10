import { NextResponse } from "next/server";
import { sendMail } from "services/mailService";
const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
        `SKNAnalytics - ${req.body.subject} - ${req.body.email}`,
        `${req.body.email}`,
        `${req.body.message}`
        );
        // res.status(200).send("Success");
        res.status(200).json({
            msg: "Email Sent Successfully",
            success: true,
          });
        break;
      }
      case "GET": {
        //Do some thing
        // res.status(200).send(req.auth_data);
        res.status(200).json({
            msg: "Email Sent Successfully",
            success: true,
        });
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        // res.status(405).send(`Method ${method} Not Allowed`);
        res.status(405).json({
            msg: `Method ${method} Not Allowed`,
          });
        break;
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
      error_code: "api_four",
      msg: err.message,
    });
  }
};

export default handler;