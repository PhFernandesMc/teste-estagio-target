
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const containsA = (str) => {
  const letters = removeAccents(str).trim().toUpperCase().split("").filter(letter => letter === "A")
  return {
    result: letters.length > 0,
    quantity: letters.length,
  }
}

console.log(containsA("Olá, como você está?"))