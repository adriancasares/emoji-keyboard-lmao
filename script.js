document.querySelector("#abc").addEventListener("input", function(e) {
  const len = e.target.value.length / 2;
  const letter = String.fromCharCode(len + 65);

  if(len > 25) {
    document.querySelector("#abcLabel").innerHTML = "Alphabet"
  } else {
    
  document.querySelector("#abcLabel").innerText = `Type ${letter}`
  }
})

document.querySelector("#submit").addEventListener("click", function(e) {
  e.preventDefault();
  const text = document.querySelector("#input").value.toUpperCase();
  const dict = [...(document.querySelector("#abc").value)];

  const result = text.split("").map(char => {
    const code = char.charCodeAt(0);
    const index = code - 65;

    if(index < 0 || index > 25) {
      return char;
    }
    
    const letter = dict[index];

    return letter;
    
  }).join("");

  document.querySelector("#input").value = result;
})
