const data = {
produtos: [
{
    id: 1,
    nome: "iPhone 17",
    preco: 18900,
    categoria: "Celulares",
    imagem: "./imagens/iPhone-17.jpg",
    descricao: "Apple iPhone Air 1TB Roxo 5G Tela 6,5 Câmera Traseira 48MP Frontal 18MP",
    emEstoque: true
},

{
    id: 2,
    nome: "Samsung Galaxy S26",
    preco: 7020,
    categoria: "Celulares",
    imagem: "./imagens/Samsung.jpg",
    descricao: "Celular Galaxy S25 Ultra 5G 256GB Galaxy AI Titânio Azul 6,9 12GB RAM Câm. Quádrupla 200+50+10+50MP Bateria 5000mAh Dual Chip",
    emEstoque: true
},

{
    id: 3,
    nome: "Notebook Dell",
    preco: 6198,
    categoria: "Notebooks",
    imagem: "./imagens/Dell.png",
    descricao: "Notebook Dell 15 Dc15-i51334u-u70 15.6 Full Hd 13ª Gen Intel Core i5 16gb 512gb SSD Linux Preto Carbono",
    emEstoque: true
},

{
    id: 4,
    nome: "Notebook Lenovo",
    preco: 5499,
    categoria: "Notebooks",
    imagem: "./imagens/Lenovo.jpg",
    descricao: "Notebook Lenovo Ideapad Slim 3i Core i5-13420H 8GB RAM",
    emEstoque: false
},

{
    id: 5,
    nome: "Mouse Gamer",
    preco: 119,
    categoria: "Acessórios",
    imagem: "./imagens/Mouse.png",
    descricao: "Mouse Gamer Redragon Cobra, Chroma RGB, 12400 DPI, 8 Botões, Preto - M711",
    emEstoque: true
},

{
    id: 6,
    nome: "Teclado Gamer",
    preco: 281,
    categoria: "Acessórios",
    imagem: "./imagens/Teclado.png",
    descricao: "Teclado Mecânico Gamer Rise Mode GM1 White, RGB, Switch Outemu Brown - RM-TCM-GM1-WBRO.",
    emEstoque: true
},

{
    id: 7,
    nome: "PlayStation 5",
    preco: 4549,
    categoria: "Games",
    imagem: "./imagens/play5.png",
    descricao: "Console Playstation 5 Slim Sony 1TB Mídia Física Cfi-2114a",
    emEstoque: true
},

{
    id: 8,
    nome: "Xbox Series X - Branco",
    preco: 4300,
    categoria: "Games",
    imagem: "./imagens/Xbox.png",
    descricao: "Console Xbox Series X, Microsoft, 1Tb, Controle Sem Fio - Branco",
    emEstoque: false
},

{
    id: 9,
    nome: "Kit Gamer",
    preco: 145,
    categoria: "Combo",
    imagem: "./imagens/Kit gamer.png",
    descricao: "Kit Gamer Teclado Mouse Headset Mouse Pad - OEX Game Combo Argos",
    emEstoque: false
},

{
    id: 10,
    nome: "TV 32 Polegadas",
    preco: 1999,
    categoria: "Games",
    imagem: "./imagens/Tv.png",
    descricao: "Smart TV 32 Polegadas Philco LED HD, Processador Quad Core",
    emEstoque: false
},
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