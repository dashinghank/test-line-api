import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as line from "@line/bot-sdk";
const config = {
  channelAccessToken: "37nq0gcLXN1aV/159qmuXxjqRR0nDx3nAbfYsDlxlOHvTnKS0ERtA+wFfX7FVQfe8XrS/f4TETyR6szRDZA95xsYFrM1iGMle5riPJz+ul6iBokN7s6+CxtiwR2TJHuSqIqkz5RcvWBtw//beGKTXQdB04t89/1O/w1cDnyilFU=",
  channelSecret: "c912a81ed58c085cdd4b5794ead81b25",
};

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    await handleEvent(request.body.events[0]);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }

  // console.log(request);

  /* request 範例
  {
    destination: "U17b18a19a489476822697f1ad9e99dd6",
    events: [
      {
        type: "message",
        message: { type: "text", id: "16135080271826", text: "我" },
        webhookEventId: "01G3QY996M13KEFBVC31YEJ9MG",
        deliveryContext: { isRedelivery: false },
        timestamp: 1653292180445,
        source: { type: "user", userId: "U4a753e22048f8e07be32962f1a96b642" },
        replyToken: "2b0f7757ce55435db1a071cbd4d0298e",
        mode: "active",
      },
    ],
  };
*/

  console.log(JSON.stringify(request.body));

  response.status(200).send("Hello World!");
};

const client = new line.Client(config);

function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }
  ///這是群組ID回副
  // return  client.pushMessage("C2be5c6f9b655c9b133d6174dc1f49bf3", {
  //   text: "這是我的回覆:群組測試",
  //   type: "text",
  // }

  //群組推播
  return client.multicast(["U4a753e22048f8e07be32962f1a96b642"], {
    text: "這是我的回覆:multicast 測試",
    type: "text",
  });

  // return client.replyMessage(event.replyToken, {
  //   type: "text",
  //   text: "這是我的回覆:" + event.message.text,
  // });
}
