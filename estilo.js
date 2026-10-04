const data = {
produtos: [
{
    id: 1,
    nome: "iPhone 14",
    preco: 4999,
    categoria: "Celulares",
    imagem: "https://picsum.photos/300/200?1",
    descricao: "Smartphone Apple 128GB.",
    emEstoque: true
},

{
    id: 2,
    nome: "Samsung Galaxy S23",
    preco: 3999,
    categoria: "Celulares",
    imagem: "https://picsum.photos/300/200?2",
    descricao: "Celular Samsung linha premium.",
    emEstoque: true
},

{
    id: 3,
    nome: "Notebook Dell",
    preco: 5500,
    categoria: "Notebooks",
    imagem: "https://picsum.photos/300/200?3",
    descricao: "Notebook para trabalho.",
    emEstoque: true
},

{
    id: 4,
    nome: "Notebook Lenovo",
    preco: 4200,
    categoria: "Notebooks",
    imagem: "https://picsum.photos/300/200?4",
    descricao: "Notebook intermediário.",
    emEstoque: false
},

{
    id: 5,
    nome: "Mouse Gamer",
    preco: 199,
    categoria: "Acessórios",
    imagem: "https://picsum.photos/300/200?5",
    descricao: "Mouse RGB gamer.",
    emEstoque: true
},

{
    id: 6,
    nome: "Teclado Mecânico",
    preco: 299,
    categoria: "Acessórios",
    imagem: "https://picsum.photos/300/200?6",
    descricao: "Teclado mecânico RGB.",
    emEstoque: true
},

{
    id: 7,
    nome: "PlayStation 5",
    preco: 4500,
    categoria: "Games",
    imagem: "https://picsum.photos/300/200?7",
    descricao: "Console Sony PS5.",
    emEstoque: true
},

{
    id: 8,
    nome: "Xbox Series X",
    preco: 4300,
    categoria: "Games",
    imagem: "https://picsum.photos/300/200?8",
    descricao: "Console Microsoft Xbox.",
    emEstoque: false
}
]

};

const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.querySelector("#btnRender");

function formatPrice(preco) {
    return `R$ ${preco.toFixed(2)}`;
}

function createProductCard(produto) {
    const card = document.createElement("div");

    card.classList.add("card");

    card.setAttribute("data-id", produto.id);

    card.style.transition = "0.3s";

const img = document.createElement("img");
    img.src = produto.imagem;

const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = produto.nome;

const price = document.createElement("p");
    price.textContent = formatPrice(produto.preco);

const category = document.createElement("p");
    category.textContent = produto.categoria;

const btnDetails = document.createElement("button");
    btnDetails.textContent = "Ver detalhes";

    btnDetails.addEventListener("click", () => {
    showProductDetails(produto);
});

const btnHighlight = document.createElement("button");
    btnHighlight.textContent = "Destacar";

    btnHighlight.addEventListener("click", () => {
    card.classList.toggle("highlight");
});

card.appendChild(img);
card.appendChild(title);
card.appendChild(price);
card.appendChild(category);
card.appendChild(btnDetails);
card.appendChild(btnHighlight);

return card;
}

function renderProducts(produtos) {
    productList.innerHTML = "";

    produtos.forEach(produto => {

const card = createProductCard(produto);
    productList.appendChild(card);
});

const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
    console.log("Card ID:", card.dataset.id);
});
}

function renderCategories() {
    categorySelect.innerHTML = "";

const optionAll = document.createElement("option");
    optionAll.value = "Todas";
    optionAll.textContent = "Todas";

    categorySelect.appendChild(optionAll);

const categorias = [
    ...new Set(data.produtos.map(produto => produto.categoria))
];

    categorias.forEach(categoria => {

const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;

    categorySelect.appendChild(option);
});
}

function showProductDetails(produto) {
    productDetails.innerHTML = `
        <h3>${produto.nome}</h3>
        <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p><strong>Estoque:</strong> ${
    produto.emEstoque ? "Disponível" : "Indisponível"
}</p>
<p><strong>Descrição:</strong> ${produto.descricao}</p>
`;
}

function filterProducts() {
    const texto = searchInput.value.toLowerCase();
    const categoria = categorySelect.value;

    return data.produtos.filter(produto => {

const nomeValido =
    produto.nome.toLowerCase().includes(texto);

const categoriaValida =
    categoria === "Todas" ||
    produto.categoria === categoria;

    return nomeValido && categoriaValida;
});
}

    searchInput.addEventListener("input", () => {
    renderProducts(filterProducts());
});

    categorySelect.addEventListener("change", () => {
    renderProducts(filterProducts());
});

    btnRender.addEventListener("click", () => {
    renderProducts(filterProducts());
});

renderCategories();
renderProducts(data.produtos);