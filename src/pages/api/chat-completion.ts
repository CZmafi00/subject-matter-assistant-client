import { NextApiRequest, NextApiResponse } from "next"


export const config = {
  runtime: 'edge'
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return new Response("Response text")
}

export default handler