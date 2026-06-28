console.log("lets begin");

// -----------------ARRA FUCNTION USAGE--------------------

const fun = () => {
    console.log("arra function() implementiation");
}

fun();

// --------------------------------------------------------

function funTest(func) {
    func();
    return func;
}

funTest(() => {
    console.log("another usage of ARF");
});

// --------------------------------------------------------

const sum = (a, b) => a + b;
console.log("another wa " + sum(9, 34));

// -----------------DESTRUCTURING----------------------

const users = ["Keshav", "CHethan", "AASHISH"];
console.log(users);

const [name1, name2, name3] = users;
console.log(name1, " , ", name2, " , ", name3);

const product = {
    prodId: 1,
    prodName: "Laptop",
    price: 550000
};

console.log(product.prodId, product.prodName, product.price);

const { prodId, prodName, price } = product;
console.log(prodId, prodName, price);


// -------------------Template Literals-----------------------

let productId = 2;
let productName = "Mouse";
let para = `Product id is ${productId}, and the product is ${productName} `;
console.log(para);

const baseUrl = "https://localhost:9092";
console.log(baseUrl + "/api/home");


// variable declaratiom

person = "Keshava";
var contr;
console.log(typeof (person));
console.log(contr);
var contr = null;
console.log(contr);
if (contr == null) {
    console.log("Contr not found")
}

