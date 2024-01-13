const characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()-=_+[]{}|;':,.<>?/";
const signSet = "~`";

const allCharacters = characterSet + numberSet + symbolSet + signSet;

const button = document.querySelector("button");
const input = document.querySelector("input");

function generatePassord() {
  const input = document.querySelector("input");
  const length = input.value;
  let password = "";
  input.readOnly = false;
  input.value = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[index];
  }

  if (password.length > 0) {
    input.value = password;
    input.readOnly = true;
    input.select();
    document.execCommand("copy");
  }
}

button.addEventListener("click", generatePassord);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") generatePassord();
});
