let hour = parseInt(readLine(), 10);

const esAM = hour >= 0 && hour <= 11;

console.log(esAM ? "am" : "pm");