import type { VercelRequest, VercelResponse } from "@vercel/node";
export default async (request: VercelRequest, response: VercelResponse) => {
  // console.log(request);

  /* request 範例
  {
    destination: 'U17b18a19a489476822697f1ad9e99dd6',
    events: [
      {
        type: 'message',
        message: [Object],
        webhookEventId: '01G3QY1NBDK7KF418W83417Q2D',
        deliveryContext: [Object],
        timestamp: 1653291930631,
        source: [Object],
        replyToken: '4bf840e5dbb84854bed05d81cacb9758',
        mode: 'active'
      }
    ]
  }
*/
  console.log(JSON.stringify(request.body));

  response.status(200).send("Hello World!");
};
