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
            descricao: "Celular Galaxy S25 Ultra 5G 256GB Galaxy AI Titânio Azul 6,9 12GB RAM",
            emEstoque: true
        }
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

        <p><strong>Preço:</strong>R$ ${produto.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>

        <p><strong>Descrição:</strong> ${produto.descricao}</p>

        <p><strong>Estoque:</strong>
            ${produto.emEstoque ? "Disponível" : "Indisponível"}
        </p>
    `;
}
else {

    detalhes.innerHTML = `
        <h2>Produto não encontrado</h2>
    `;
}