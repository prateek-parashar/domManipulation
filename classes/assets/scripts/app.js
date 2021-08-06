class Product {
    title = "Maxim Magazine";
    description;
    price = 100;
    imageURL;

    constructor(description, imageURL) {
        this.description = description;
        this.imageURL = imageURL;
    }
}

const productList = {
    productArray: [
        new Product(
            "Priyanka",
            "https://im.indiatimes.in/content/itimes/photo/2016/Jun/17/1466166295-priyanka-sizzles-on-maxim-cover.jpg?w=1094&h=1500&cc=1"
        ),
        new Product("Shay Mitchell", "https://i.pinimg.com/originals/69/c5/9f/69c59fe4e963a6cb74829834cd6e8c51.jpg"),
        new Product(
            "Eva Langoria",
            "https://hollywoodlife.com/wp-content/uploads/2014/01/eva-longoria-cleavage-maxim-cover-2014-ftr.jpg?w=599"
        ),
    ],

    renderProductList() {
        const productListing = document.getElementById("product-listing");
        productListing.classList.add("product-list");

        this.productArray.forEach((product) => {
            const listElm = document.createElement("li");
            listElm.className = "product-item";

            listElm.innerHTML = `
                <div>
                    <img src=${product.imageURL}>
                        <div class = "product-item__content">
                            <h2> ${product.title}<h2>
                            <h3> ${product.price}<h3>

                            <p> ${product.description} </p>

                            <button> Add to Cart </button>
                        </div>
                </div>

            `;
            productListing.append(listElm);
        });
    },
};

productList.renderProductList();
