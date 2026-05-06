import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_API_KEY_HERE";

app.post("/rewrite", async (req, res) => {
  const { email, tone } = req.body;

  const prompt = `Rewrite the following email in a ${tone} tone:\n\n${email}`;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: prompt
      })
    });

    const data = await response.json();
    res.json({ output: data.output[0].content[0].text });
  } catch (err) {
    res.status(500).send("Error");
  }
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
