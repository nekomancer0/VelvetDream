// Serve the React app
const express = require("express");
const path = require("path");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const { MailtrapClient } = require("mailtrap");

const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/mail", async (req, res) => {
  const formData = req.body;

  console.log(req.body);

  const sender = {
    email: formData.email,
    name: formData.name,
  };
  const recipients = [
    {
      email: "contact.velvetdream@gmail.com",
    },
  ];

  await client.send({
    from: sender,
    to: recipients,
    subject: `Message from ${formData.name}`,
    text: `Name: ${formData.name} \nEmail: ${formData.email} \nMessage: ${formData.message}`,
  });

  res.send("success");
});

app.use(express.static(path.join(__dirname, "..", "build")));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
