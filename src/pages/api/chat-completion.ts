import {  NextApiResponse } from "next"

export const config = {
  runtime: 'edge'
}

const handler = async (req: Request, res: NextApiResponse) => {
  try {

    const serverUrl = process.env.SERVER_URL;

    const jsonData = await req.json();
    const { messages } = jsonData
    let query = "";

    if (messages.length > 0) {
      query = messages[messages.length - 1]["content"];
    } else {
      query = messages[0]["content"];
    }
    
    const response = await fetch(`${serverUrl}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "query": query
      }
      )
    });

    const data = await response.json();

    return new Response(`<div>${data["answer"]}</div><h3 class="source-header">Izvor</h3><div class="source-article">${data["context"]}</div>`)
  } catch (error) {
    console.log("Error: ", error);
    return new Response(`<div><h4 class="error-header">Došlo je do pogreške prilikom obrade upita. Molim Vas pokušajte ponovno.</h4><div class="error-message">${error}</div></div>`)
  }
}

export default handler