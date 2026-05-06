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

function rewrite() {
  const email = document.getElementById("email").value;
  const tone = document.getElementById("tone").value;

  const output = rewriteEmail(email, tone);
  document.getElementById("result").innerText = output;
}
