import ProductCard from "../ProductCard";
// const products = [
//   {
//     title: "Apple iPhone 14",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Apple iPhone 13",
//     price: "Rs. 70,000"
//   },
//   {
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//   },
//   {
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//   },
//   {
//     title: "Samsung Galaxy S24",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//   }
// ]
function Products() {
  let products = [];
  fetch('https://run.mocky.io/v3/db424fb4-4cc4-4d2a-8f70-7036ed206663').then((response) => {
  return response.json();
}).then((res) => {
  console.log(res);
  products = res;
})
  return (
    <div>
      Products
      {
        products.map(function(product) {
          return (<ProductCard name={product.title} price={product.price} />)
        })
      }
    </div>
  )
}

export default Products;