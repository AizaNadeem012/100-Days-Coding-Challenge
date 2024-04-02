//🚀 Day 13 Challenge: Start Coding! 🚀
//Question 1
const tShirt = (
    Size: string = "Small",
    text: string = "You Are SomeBody Reason To Smile"
  ) => {
    console.log(`${Size} ${text}`);
  };
  tShirt();
  tShirt("Medium");
  tShirt("Large", "Run Faster");
  //Question 2
  let cities = (city: string = "Karachi") => {
    if (city === "Karachi") {
      console.log(`${city} :is Defult Parameter Value`);
    } else if (city !== "Karachi") {
      console.log(`${city} :is Argument Value `);
    }
  };
  cities();
  cities("lahoure");
  //Question 3
  const pairCountry = (country: string, city: string) => {
    console.log(`Country:${country}, city:${city}`);
  };
  pairCountry("Pakistan", "karachi");
  pairCountry("Saudi Arabia", "Riyadh");
  pairCountry("India", "New Delhi");