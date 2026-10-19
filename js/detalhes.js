const data = {
    produtos: [
{
    id: 1,
    nome: "iPhone 17",
    preco: 18900,
    categoria: "Celulares",
    fabricante: "Apple",
    garantia: "12 meses",
    avaliacao: 4.9,
    armazenamento: "1 TB",
    cor: "Roxo",
    imagem: "./imagens/iPhone-17.jpg",
    descricao: "Apple iPhone Air 1TB Roxo 5G Tela 6,5 Câmera Traseira 48MP Frontal 18MP",
    emEstoque: true
},

{
    id: 2,
    nome: "Samsung Galaxy S26",
    preco: 7020,
    categoria: "Celulares",
    fabricante: "Samsung",
    garantia: "12 meses",
    avaliacao: 4.8,
    armazenamento: "256 GB",
    cor: "Titânio Azul",
    imagem: "./imagens/Samsung.jpg",
    descricao: "Celular Galaxy S25 Ultra 5G 256GB Galaxy AI Titânio Azul 6,9 12GB RAM Câm. Quádrupla 200+50+10+50MP Bateria 5000mAh Dual Chip",
    emEstoque: true
},

{
    id: 3,
    nome: "Notebook Dell",
    preco: 6198,
    categoria: "Notebooks",
    fabricante: "Dell",
    garantia: "12 meses",
    avaliacao: 4.7,
    processador: "Intel Core i5 13ª Geração",
    memoria: "16GB",
    armazenamento: "512GB SSD",
    imagem: "./imagens/Dell.png",
    descricao: "Notebook Dell 15 Dc15-i51334u-u70 15.6 Full Hd 13ª Gen Intel Core i5 16gb 512gb SSD Linux Preto Carbono",
    emEstoque: true
},

{
    id: 4,
    nome: "Notebook Lenovo",
    preco: 5499,
    categoria: "Notebooks",
    fabricante: "Lenovo",
    garantia: "12 meses",
    avaliacao: 4.6,
    processador: "Intel Core i5",
    memoria: "8GB",
    imagem: "./imagens/Lenovo.jpg",
    descricao: "Notebook Lenovo Ideapad Slim 3i Core i5-13420H 8GB RAM",
    emEstoque: false
},
    ]
};

// Captura o id da URL
const parametros = new URLSearchParams(window.location.search);

const id = parseInt(parametros.get("id"));

// Procura o produto
const produto = data.produtos.find(
    p => p.id === id
);

console.log("ID recebido:", id);
console.log("Produto encontrado:", produto);

// Local onde vamos mostrar os detalhes
const detalhes = document.getElementById("product-details");

if (produto) {

    detalhes.innerHTML = `
        <img
            src="${produto.imagem}"
            class="detail-image">

            <h2>${produto.nome}</h2>

        <p class="price">R$ ${produto.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>

        <p><strong>Descrição:</strong> ${produto.descricao}</p>

        <p><strong>Status:</strong>🟢 Disponível</p>
        <p><strong>Fabricante:</strong> ${produto.fabricante}</p>
        <p><strong>Garantia:</strong> ${produto.garantia}</p>
        <p><strong>Avaliação:</strong> ⭐ ${produto.avaliacao}</p>
    
    `;
}
else {

    detalhes.innerHTML = `
        <h2>Produto não encontrado</h2>
    `;
}