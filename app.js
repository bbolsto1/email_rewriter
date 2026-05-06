import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Add this function ABOVE the route
function rewriteEmail(email, tone) {
  if (tone === "professional") {
    return "Dear Team,\n\n" +
      email.charAt(0).toUpperCase() + email.slice(1) +
      "\n\nBest regards,\n[Your Name]";
  }

  if (tone === "friendly") {
    return "Hey there!\n\n" + email + "\n\nThanks! 😊";
  }

  if (tone === "direct") {
    return email.replace(/hey|just|checking/gi, "").trim() + ".";
  }

  if (tone === "polite") {
    return "Hi,\n\nWould you mind taking a look at this?\n\n" +
      email +
      "\n\nThank you very much.";
  }

  if (tone === "passive-aggressive") {
    return "Hi,\n\nJust following up again since I haven't heard back.\n\n" +
      email +
      "\n\nThanks.";
  }

  return email;
}

// 👇 THIS is the rewrite route
app.post("/rewrite", (req, res) => {
  const { email, tone } = req.body;
  const output = rewriteEmail(email, tone);
  res.json({ output });
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
