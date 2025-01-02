// Serve the React app
const express = require("express");
const path = require("path");
const app = express();

import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MAILTRAP_TOKEN);
import { MailtrapClient } from "mailtrap";

let client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  testInboxId: 3370670,
  accountId: 2085654,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "build")));

app.post("/mail", async (req, res) => {
  const formData = req.body;
  console.log(formData);
  await client.testing.send({
    from: {
      name: formData.name,
      email: formData.email,
    },
    to: [
      {
        email: "contact.velvetdream@gmail.com",
        name: "VelvetDream",
      },
    ],
    subject: `Message from ${formData.name}`,
    text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
  });
  console.log(req.body);
  res.send("success");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
