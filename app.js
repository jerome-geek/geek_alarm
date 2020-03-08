const Slack = require("slack-node");
const schedule = require("node-schedule");

const WEBHOOK_URI =
  "https://hooks.slack.com/services/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";
const CS_SPREADSHEET =
  "https://docs.google.com/spreadsheets/d/1sDlVdQQvlYo_bV9g6THGh57XQF_zyNZOX704R8o9aNk/edit#gid=539556731";

const slack = new Slack();
slack.setWebhook(WEBHOOK_URI);

const send = async message => {
  slack.webhook(
    {
      text: message,
      attachments: [
        {
          fallback: "링크주소: " + CS_SPREADSHEET,
          pretext: "링크주소: " + CS_SPREADSHEET,
          color: "#00FFFF",
          fields: [
            {
              title: "알림",
              value: message,
              short: false
            }
          ]
        }
      ]
    },
    function(err, response) {
      console.log(response);
    }
  );
};

// send("CS문의 처리하셨나요?");
schedule.scheduleJob("0 0/1 * * * *", function() {
  send("CS문의 처리하셨나요?");
});
