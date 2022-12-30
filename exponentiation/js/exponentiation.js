function exponentiate(num, pow) {
   return (pow === 1) ? num : num * exponentiate(num, pow - 1)
}
console.log(exponentiate(5,3))
