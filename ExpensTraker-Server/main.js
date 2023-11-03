function getData(e){
    e.preventDefault();
    const price = e.target.price.value;
    const product = e.target.product.value;
    const option = e.target.options.value;


    const products = {
       price,
       product,
       option
    };
    
    axios
    .post('http://localhost:3000/expense', products)
    .then(res => {
        displayProduct(products);
        console.log(res);
    }) .catch(err => {
        console.log(err);
    });
    
}
addEventListener('DOMContentLoaded', () => {
    axios
    .get('http://localhost:3000/expense')
    .then((res) => {
        for(let i=0;i<res.data.length;i++){
            displayProduct(res.data[i]);
        }
        console.log(res);
    }) .catch(err => {
        console.log(err);
    })
});


function displayProduct(products){
    

    const pn = document.getElementById('items');
    const cn = `<li id="${products.id}">${products.price}---${products.product}---${products.option}
                <button onclick="deleteProduct('${products.id}')">Delete</button>
                <button onclick="editProduct('${products.id}','${products.price}','${products.product}','${products.option}')">Edit</button>`

    pn.innerHTML = pn.innerHTML+cn;
};


function editProduct(id,price,product,option){
    document.getElementById('price').value =price;
    document.getElementById('product').value =product;
    document.getElementById('options').value = option;

    deleteProduct(id);
}

function deleteProduct(productID){
    axios
    .delete(`http://localhost:3000/expense/${productID}`)
    .then(res => {
        console.log(res);
        removeProduct(productID);
    }) .catch(err => {
        console.log(err);
    })
};

function removeProduct(productID){
    const pn = document.getElementById('items');
    const cn = document.getElementById(productID);

    pn.removeChild(cn);
}
