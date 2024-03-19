/*1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს ,
 თუ რიცხვები ტოლია დააბრუნებს 0 -ს*/

function numbers(m, n) {
  if (m > n) {
    return m;
  } else if ((m = n)) {
    return 0;
  }
}
console.log(numbers(60, 25));

/*2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი  */

function variable(c, d) {
  return c + d;
}
console.log(variable(37, 14));

/*3 დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)  */

function person() {
  console.log("ცირა ჯანელიძე");
}
person();

/*4 დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი
   და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)*/

function student(firstname, lastname) {
  let student = firstname + lastname;
  return student;
}
console.log(student("ცირა", "ჯანელიძე"));

/* 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს
   1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა 
    დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით
  რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი)*/

function calculatenamravli(n) {
  let namravli = 1;
  for (let i = 1; i <= n; i++) {
       namravli *= i;
   }
    return namravli;
}
   let result = calculatenamravli(4);
   console.log(result);

/*6. Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი 
   properties: firstname, lastname, age, marks (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) 
   და მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად 
    არ უნდა დაწეროთ ) 
  დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი)*/

let student = {
  firstName: "cira",
  lastName: "janelidze",
  age: 37,
  marks: [4, 7, 5, 3, 2],
  fullname() {
    console.log(this.firstName, this.lastName);
  },
};
student.fullname();

/*7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულება ( scores) და 
   ფუნქცია დააბრუნებს  ქულების ჯამს*/

let student = {
  firstName: "cira",
  lastName: "janelidze",
  age: 37,
  marks: [4, 7, 5, 3, 2],
};

function score(student) {
  let sum = 0;
  for (let i = 0; i < student.marks.length; i++) {
    sum += student.marks[i];
  }
  return sum;
}
console.log(score(student));

/* 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი*/

console.log(student.firstName, student.age);