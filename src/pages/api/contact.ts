import { NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/next-server/server/api-utils";

export default (req: NextApiRequestQuery, res: NextApiResponse) => {
  console.log(req.body);
  res.status(200).json({ hello: "world" });
};
