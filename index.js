// Basit bir Node.js uygulaması örneği

function greet(name) {
  return `Merhaba, ${name}!`;
}

function add(a, b) {
  return a + b;
}

// Örnek kullanım
console.log(greet('Dünya'));
console.log('2 + 3 =', add(2, 3));

module.exports = { greet, add };
