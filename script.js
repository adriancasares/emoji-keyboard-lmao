function visibleLength(str) {
  let count = 0;
  let arr = [...str];

  for (c = 0; c < arr.length; c++) {
      if (
          arr[c] != '\u{200D}' &&
          arr[c + 1] != '\u{200D}' &&
          arr[c + 1] != '\u{fe0f}' &&
          arr[c + 1] != '\u{20e3}'
      ) {
          count++;
      }
  }
  return count;
}

for(let i = 0; i < 26; i++) {
const myI = i;
  const input = document.createElement("input");
input.id = `abc${myI}`;
input.placeholder = `Type ${String.fromCharCode(65 + myI)}`;
input.addEventListener("input", (e) => {
  const nextInput = document.getElementById(`abc${myI + 1}`);

  if (nextInput) {
    nextInput.focus();
  }
})

document.querySelector("#abcInputs").appendChild(input)

}

document.querySelector("#submit").addEventListener("click", function(e) {
e.preventDefault();
const text = document.querySelector("#input").value.toUpperCase();
const abc = Array.from(document.querySelectorAll("#abcInputs input")).map((a) => a.value);
console.log(abc);

const result = text.split("").map(char => {
  const code = char.charCodeAt(0);
  const index = code - 65;

  if(index < 0 || index > 25) {
    return char;
  }
  
  const letter = abc[index];

  return letter;
  
}).join("");

document.querySelector("#input").value = result;
})