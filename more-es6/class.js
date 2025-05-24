class Product {
  constructor(name, price, brand, malik) {
    this.name = name;
    this.price = price;
    this.brandName = brand;
    this.malik = malik;
  }

  details() {
    console.log(`I want to know details of the product: ${this.name}.`);
  }
}

const iphone = new Product("iphone", "1234", "apple", "jobs");
iphone.details();

const xiaomi = new Product("redmi", 1000, "xiaomi", "idk");
xiaomi.details();
