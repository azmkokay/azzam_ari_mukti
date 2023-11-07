class Product {
    constructor(name, stock, category, color) {
      this.name = name;
      this.stock = stock;
      this.category = category;
      this.color = color;
    }
  }
  
  class Clothing extends Product {
    constructor(name, stock, category, color, size, brand) {
      super(name, stock, category, color);
      this.size = size;
      this.brand = brand;
    }
  }
  
  class Book extends Product {
    constructor(name, stock, category, color, author, totalPage) {
      super(name, stock, category, color);
      this.author = author;
      this.totalPage = totalPage;
    }
  }
  
  class Tokopedia {
    constructor() {
      this.products = [];
      this.cart = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    editProduct(productIndex, updatedProduct) {
      if (productIndex >= 0 && productIndex < this.products.length) {
        this.products[productIndex] = updatedProduct;
      }
    }
  
    deleteProduct(productIndex) {
      if (productIndex >= 0 && productIndex < this.products.length) {
        this.products.splice(productIndex, 1);
      }
    }
  
    addToCart(product, quantity) {
      const productIndex = this.products.findIndex((p) => p.name === product.name);
      if (productIndex !== -1) {
        if (this.products[productIndex].stock >= quantity) {
          this.cart.push({ product: this.products[productIndex], quantity });
          this.products[productIndex].stock -= quantity;
        } else {
          console.log("Stock tidak mencukupi.");
        }
      } else {
        console.log("Produk tidak ditemukan.");
      }
    }
  
    checkout() {
      if (this.cart.length === 0) {
        console.log("Keranjang kosong.");
        return;
      }
  
      for (const item of this.cart) {
        const productIndex = this.products.findIndex((p) => p.name === item.product.name);
        if (productIndex !== -1) {
          this.products[productIndex].stock -= item.quantity;
        }
      }
  
      this.cart = [];
      console.log("Checkout berhasil.");
    }
  }
  
  // Contoh penggunaan class Tokopedia
  const tokopedia = new Tokopedia();
  
  const tshirt = new Clothing("T-Shirt", 10, "Pakaian", "Merah", "XL", "Nike");
  const book = new Book("Panduan JavaScript", 20, "Buku", "Hitam", "John Doe", 300);
  
  tokopedia.addProduct(tshirt);
  tokopedia.addProduct(book);
  
  tokopedia.addToCart(tshirt, 2);
  tokopedia.addToCart(book, 1);
  
  tokopedia.checkout();
  
  console.log(tokopedia.products);
  console.log(tokopedia.cart);
  