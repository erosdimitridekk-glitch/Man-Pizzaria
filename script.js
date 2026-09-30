/* ============================================
   PIZZARIA MANÁ - JavaScript
   Configurações fáceis de editar no topo
   ============================================ */

// ========== CONFIGURAÇÕES EDITÁVEIS ==========
const CONFIG = {
  // WhatsApp (somente números, com código do país)
  whatsappNumber: '5593991480564', // (93) 99148-0564

  // Instagram
  instagramUrl: 'https://instagram.com/pizzariamana', // Altere para o perfil real

  // Endereço e horário
  address: 'Santarém - Pará (endereço a definir)',
  hours: 'Seg a Dom: 18h às 23h',

  // Nome da pizzaria
  businessName: 'Pizzaria Maná'
};

// ========== PRODUTOS DEMONSTRATIVOS ==========
// Edite livremente: nome, descrição, preço, imagem e categoria
const PRODUCTS = [
  // Tradicionais
  {
    id: 1,
    name: 'Calabresa',
    description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
    price: 42.90,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80',
    category: 'tradicionais'
  },
  {
    id: 2,
    name: 'Mussarela',
    description: 'Molho de tomate e generosa camada de mussarela.',
    price: 38.90,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
    category: 'tradicionais'
  },
  {
    id: 3,
    name: 'Margherita',
    description: 'Molho de tomate, mussarela, tomate fresco e manjericão.',
    price: 44.90,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b6eb37927?w=500&q=80',
    category: 'tradicionais'
  },
  {
    id: 4,
    name: 'Portuguesa',
    description: 'Presunto, ovos, cebola, azeitona, mussarela e orégano.',
    price: 48.90,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
    category: 'tradicionais'
  },
  {
    id: 5,
    name: 'Frango com Catupiry',
    description: 'Frango desfiado, catupiry cremoso e mussarela.',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80',
    category: 'tradicionais'
  },
  {
    id: 6,
    name: 'Quatro Queijos',
    description: 'Mussarela, provolone, parmesão e gorgonzola.',
    price: 52.90,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    category: 'tradicionais'
  },

  // Especiais
  {
    id: 7,
    name: 'Maná Especial',
    description: 'Pepperoni, bacon, champignon, cebola e mussarela.',
    price: 58.90,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&q=80',
    category: 'especiais'
  },
  {
    id: 8,
    name: 'Carne Seca com Cream Cheese',
    description: 'Carne seca desfiada, cream cheese e cebola roxa.',
    price: 62.90,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d5b?w=500&q=80',
    category: 'especiais'
  },
  {
    id: 9,
    name: 'Bacon Supremo',
    description: 'Bacon crocante, mussarela, cheddar e molho barbecue.',
    price: 56.90,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb3a906a0?w=500&q=80',
    category: 'especiais'
  },
  {
    id: 10,
    name: 'Vegetariana Premium',
    description: 'Abobrinha, berinjela, pimentão, tomate e rúcula.',
    price: 54.90,
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&q=80',
    category: 'especiais'
  },

  // Doces
  {
    id: 11,
    name: 'Chocolate com Morango',
    description: 'Chocolate ao leite derretido e morangos frescos.',
    price: 48.90,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
    category: 'doces'
  },
  {
    id: 12,
    name: 'Romeu e Julieta',
    description: 'Goiabada cremosa e queijo minas.',
    price: 46.90,
    image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d2?w=500&q=80',
    category: 'doces'
  },
  {
    id: 13,
    name: 'Banana com Canela',
    description: 'Banana caramelizada, canela e leite condensado.',
    price: 44.90,
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f3a?w=500&q=80',
    category: 'doces'
  },

  // Bebidas
  {
    id: 14,
    name: 'Refrigerante 2L',
    description: 'Coca-Cola, Guaraná ou Fanta. Consulte disponibilidade.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80',
    category: 'bebidas'
  },
  {
    id: 15,
    name: 'Suco Natural 500ml',
    description: 'Laranja, acerola ou maracujá. Feito na hora.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&q=80',
    category: 'bebidas'
  },
  {
    id: 16,
    name: 'Água Mineral 500ml',
    description: 'Água sem gás.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&q=80',
    category: 'bebidas'
  }
];

// ========== ESTADO DO CARRINHO ==========
let cart = [];
let currentCategory = 'tradicionais';

// ========== ELEMENTOS DOM ==========
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const toast = document.getElementById('toast');
const header = document.getElementById('header');

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  renderProducts();
  setupEventListeners();
  updateCartUI();
  document.getElementById('year').textContent = new Date().getFullYear();
});

function applyConfig() {
  // WhatsApp links
  const waLink = `https://wa.me/${CONFIG.whatsappNumber}`;
  document.getElementById('heroWhatsapp')?.setAttribute('href', waLink);
  document.getElementById('contactWhatsapp')?.setAttribute('href', waLink);
  document.getElementById('footerWhatsapp')?.setAttribute('href', waLink);

  // Instagram
  const ig = CONFIG.instagramUrl;
  document.getElementById('contactInstagram')?.setAttribute('href', ig);
  document.getElementById('footerInstagram')?.setAttribute('href', ig);

  // Endereço e horário
  const addr = document.getElementById('addressText');
  if (addr) addr.textContent = CONFIG.address;
  const hrs = document.getElementById('hoursText');
  if (hrs) hrs.textContent = CONFIG.hours;
}

function setupEventListeners() {
  // Menu tabs
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Cart
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  checkoutBtn.addEventListener('click', checkout);

  // Mobile menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    });
  });

  // Header scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Close cart on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
}

// ========== RENDER PRODUTOS ==========
function renderProducts() {
  const filtered = PRODUCTS.filter(p => p.category === currentCategory);

  menuGrid.innerHTML = filtered.map(product => `
    <article class="menu-card" data-id="${product.id}">
      <div class="menu-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="menu-card-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="menu-card-footer">
          <span class="menu-price">${formatPrice(product.price)}</span>
          <button class="btn-add" onclick="addToCart(${product.id})">
            <i class="fas fa-plus"></i> Adicionar
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// ========== CARRINHO ==========
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`${product.name} adicionado!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartFooter.style.display = 'none';
    // Clear items except empty state
    const items = cartItems.querySelectorAll('.cart-item');
    items.forEach(el => el.remove());
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Diminuir">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Aumentar">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remover">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  cartSubtotal.textContent = formatPrice(subtotal);
  cartTotal.textContent = formatPrice(subtotal);
}

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function checkout() {
  if (cart.length === 0) return;

  let message = `*Pedido - ${CONFIG.businessName}*\n\n`;
  cart.forEach(item => {
    message += `• ${item.qty}x ${item.name} — ${formatPrice(item.price * item.qty)}\n`;
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  message += `\n*Total: ${formatPrice(total)}*\n\n`;
  message += `Olá! Gostaria de fazer este pedido.`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ========== UTILITÁRIOS ==========
function formatPrice(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Expor funções para onclick no HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;
