const product = {
    price: 1200, 
    inStock: "true",
 }
if (product.inStock == false || product.price > 1000){ 
    console.log("Out of stock")
    console.log("Expensive")   
} else {
    console.log("Affordable")
  }  
