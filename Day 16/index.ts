  //🚀 Day 16 Challenge: Start Coding! 🚀
//Question 1
let laptop = {
    make: "HP",
    model: "Spectre x360",
    year: 2024,
    describe: function () {
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model}`);
    },
  };
  laptop.describe();
  //Question 2
  let Laptop = [
    { make: "HP", model: "Spectre x360", year: 2024 },
    { make: "DEll", model: "Dell XPS", year: 2024 },
    { make: "Apple", model: "Mac book 3", year: 2024 },
  ];
  let [laptop1, Laptop2] = Laptop;
  console.log(laptop1);
  console.log(Laptop2);
  //Question 3
  let priceSet1 = [1200, 1500, 1100];
  let priceSet2 = [1000, 1300, 1600];
  let combindPrice = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
  console.log(combindPrice);