// document.addEventListener("DOMContentLoaded", function () {
//     const bgImageDiv = document.getElementById('bgImage');
    
//     // Carrega a imagem do localStorage
//     const base64Image = localStorage.getItem('img_principal');
    
//     if (base64Image) {
//         // Prefixo 'data:image/jpeg;base64,' adicionado antes da string base64
//         bgImageDiv.style.backgroundImage = `${base64Image})`;
//     } else {
//         console.error('Imagem não encontrada no localStorage.');
//     }
//   });
  
//   // Função para converter imagem em Base64
// function convertToBase64(file, callback) {
//     const reader = new FileReader();
//     reader.onloadend = function () {
//       callback(reader.result);
//     };
//     reader.readAsDataURL(file);
//   }
  
//   // Carregar imagem e salvar no localStorage
//   const imageFile = '/hemera/public/principal.jpg'; // Caminho do arquivo de imagem
//   fetch(imageFile)
//     .then(res => res.blob())
//     .then(blob => {
//       convertToBase64(blob, function (base64Image) {
//         localStorage.setItem('img_principal', base64Image);
//       });
//     });

// Função para adicionar 1 dia à data atual
function addOneDay() {
    const now = new Date();
    now.setDate(now.getDate() + 1); // Adiciona 1 dia
    return now;
}

// Função para formatar a data em DD/MM/YYYY HH:MM
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam de 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Atualiza o texto de expiração
const expirationDate = addOneDay();
const expirationText = document.getElementById('expiration-text');
expirationText.textContent = `Código QR expira em: ${formatDate(expirationDate)}`;

// Função para alternar entre QR code e Barcode
const toggleIcon = document.getElementById('toggle-icon');
const codeImage = document.getElementById('code-image');

toggleIcon.addEventListener('click', () => {
    // Se o ícone atual for barcode, muda para qr_code e a imagem para o barcode
    if (toggleIcon.textContent === 'barcode') {
        toggleIcon.textContent = 'qr_code'; // Troca o ícone para QR Code
        codeImage.src = '/hemera/public/bar.jpg'; // Troca a imagem para o código de barras
        codeImage.alt = 'Barcode';
        codeImage.style.marginBottom = '60px'; // Define a margem para 70px para a imagem de barcode
    } 
    // Se o ícone for qr_code, volta para barcode e a imagem para o QR code
    else {
        toggleIcon.textContent = 'barcode'; // Troca o ícone para Barcode
        codeImage.src = '/hemera/public/qr.jpg'; // Troca a imagem para o QR Code
        codeImage.alt = 'QR Code';
        codeImage.style.marginBottom = '30px'; // Define a margem para 30px para a imagem de QR code
    }
});

// Função para mostrar/ocultar o popover de mais opções
const moreOptionsButton = document.getElementById('more-options');
const popover = document.getElementById('popover');

moreOptionsButton.addEventListener('click', () => {
    if (popover.style.display === 'none' || popover.style.display === '') {
        popover.style.display = 'block'; // Mostra o popover
    } else {
        popover.style.display = 'none'; // Esconde o popover
    }
});

// Decodifica o texto Base64 e substitui a letra "X"
const base64Text = "VW5pdmVyc2lkYWRlIGRlIFPjbyBQYXVsbyAyMDI0IK4="; // Texto base64: "Universidade de São Paulo 2024"
const decodedText = atob(base64Text); // Decodifica de Base64 para texto
document.getElementById('replace-text').textContent = decodedText; // Substitui "X ®" pelo texto decodificado