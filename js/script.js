function copyUsername() {
  const textAr = document.createElement("textarea");
  textAr.value = "@threepointsix";
  textAr.setAttribute("readonly", "");
  textAr.style.position = "absolute";
  textAr.style.left = "-9999px";
  document.body.appendChild(textAr);
  textAr.select();
  document.execCommand("copy");
  document.body.removeChild(textAr);
  copied();
}

function showTelegram() {
  let tgCopy = document.getElementById("tg-copy");
  tgCopy.style.display === "none"
    ? (tgCopy.style.display = "block")
    : (tgCopy.style.display = "none");
}

function hideCopied() {
  let tgCopied = document.getElementById("tg-copied");
  tgCopied.style.display = "none";
}

function copied() {
  let tgCopied = document.getElementById("tg-copied");
  tgCopied.style.display = "block";
}