console.table({
  name: "Simba",
  class: "ESNext from Scratch",
  year: 2019,
});

console.time("Start Timer");

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "is an even number");
  }
  else {
    console.warn(i, "is an odd number");
  }
}
console.timeEnd("Start Timer")