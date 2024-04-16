// let a = [
//   { id: 1, name: "Swetha" },
//   { id: 2, name: "Jhon" },
//   { id: 3, name: "Swetha" },
// ];

// let b = [
//   { id: 4, name: "Jenny" },
//   { id: 5, name: "Shree" },
//   { id: 6, name: ["hari", "Nila"] },
// ];
// let basket = ["apple", "orange", "pineapple", "mango", "watermelon"];
// let furits = [];
// furits.push("banana");
// furits.push("peach");
// console.log(furits.length);
// console.log(basket.reverse());
// console.log(a.pop());
// console.log(a.shift());
// //console.log(a.join(b));
//findValue = (e) => e.id == 4;
// console.log(b.findIndex(findValue));
// console.log(b.flat(2));
// console.log(basket.every((f) => f == "apple"));
// console.log(basket.some((f) => f == "apple"));
// basket.forEach((furit) => console.log(furit));
// //Task2
// //parseFloat(b2.toFixed(2));
// let b1 = [4.3456, 33, 5.9865432123456787532, 7.876432, 88, 200];
// let b2 = b1.reduce((preve, curr) => preve + curr, 0);
// console.log(b2);
// console.log(+b2.toFixed(3));

// let stud = { id: 1, name: "Swetha", age: 16 };
// let stud2 = { id: 0, name: "Sweety", age: 15 };
// var ans = Object.assign(stud2, stud);
// console.log(stud2);
//Task3
const list = document.querySelector(".output ul");
list.innerHTML = "";
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];
for (const station of stations) {
  // write your code just below here
  const wordPart = station.slice(0, 3);
  const text = station.split(";")[1];
  const result = `${wordPart}:${text}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}

//Task4
const payments = [
  { amount: 1028, tax: "2.5%" },
  { amount: 246, tax: "9.5%" },
  { amount: 223, tax: "1.2%" },
  { amount: 764, tax: "2.5%" },
];

const taxValue = payments.map((payment) => ({
  ...payment,
  taxAmount: ((parseFloat(payment.tax) / 100) * payment.amount).toFixed(3),
  totalAmount:
    payment.amount + (parseFloat(payment.tax) / 100) * payment.amount,
}));

console.log(taxValue);

const totalValue = taxValue.map((tAmt) => tAmt.totalAmount);
// console.log(totalValue);
const totalPayment = totalValue.reduce((preve, curr) => preve + curr, 0);
// console.log(totalPayment);

// console.log(totalValue);
// const amt = payments.map((amtValue) => amtValue.amount);
// const taxAmount = amt.map((amts, index) => amts + taxValue[index]);
// console.log(taxAmount);
// console.log(Object.assign(payment, payments));
// console.log(payment, taxAmount);
//[{ amount: 1028, tax: "2.5%", totalAmount: amount + taxAmount }];
//const value = parseFloat(result);

// const listItem = document.createElement("li");
// listItem.textContent = result;
// list.appendChild(listItem);
