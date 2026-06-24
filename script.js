// =============================
// FOODIE RESTAURANT JS - IMPROVED
// =============================

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Navbar scroll effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "rgba(255,255,255,0.75)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    }
});


// Simple gallery hover effect (videos autoplay enhancement)
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
    });
});


// Shopping Cart System
const cart = [];
const cartIcon = document.createElement('div');
cartIcon.id = 'cart-icon';
cartIcon.innerHTML = `
    <div class="cart-badge">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">0</span>
    </div>
`;
cartIcon.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
    cursor: pointer;
`;

document.body.appendChild(cartIcon);

// Add to Cart functionality
document.querySelectorAll('.price a').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const card = this.closest('.card');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent.split('$')[1].trim();
        
        const product = {
            name: productName,
            price: parseFloat(productPrice),
            id: Date.now()
        };
        
        cart.push(product);
        updateCartCount();
        showNotification(`✅ تمت إضافة ${productName} إلى السلة`);
    });
});

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

cartIcon.addEventListener('click', showCart);

function showCart() {
    if (cart.length === 0) {
        showNotification('🛒 السلة فارغة');
        return;
    }
    
    let cartHTML = '<h3>🛒 سلتك</h3>';
    let total = 0;
    
    cart.forEach((item, index) => {
        cartHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button onclick="removeFromCart(${index})" class="remove-btn">✕</button>
            </div>
        `;
        total += item.price;
    });
    
    cartHTML += `<div class="cart-total"><strong>المجموع: $${total.toFixed(2)}</strong></div>`;
    cartHTML += `<button onclick="checkout()" class="checkout-btn">متابعة الشراء</button>`;
    cartHTML += `<button onclick="clearCart()" class="clear-cart-btn">تفريغ السلة</button>`;
    
    showModal(cartHTML);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCart();
    showNotification('✅ تم حذف المنتج من السلة');
}

function clearCart() {
    cart.length = 0;
    updateCartCount();
    showNotification('✅ تم تفريغ السلة');
    closeModal();
}

function checkout() {
    if (cart.length === 0) {
        showNotification('⚠️ السلة فارغة');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    showNotification(`✅ شكراً لطلبك! المجموع: $${total.toFixed(2)}\n\nسيتم التواصل معك قريباً`);
    clearCart();
}


// Reservation form validation and submission
const form = document.querySelector(".reservation form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const date = form.querySelector('input[type="date"]').value;
        const time = form.querySelector('input[type="time"]').value;

        // Clear previous errors
        clearFormErrors();

        // Validation
        let hasError = false;

        if (!name) {
            showFormError('input[type="text"]', 'الرجاء إدخال الاسم');
            hasError = true;
        }
        if (!email) {
            showFormError('input[type="email"]', 'الرجاء إدخال البريد الإلكتروني');
            hasError = true;
        }
        if (!date) {
            showFormError('input[type="date"]', 'الرجاء اختيار التاريخ');
            hasError = true;
        }
        if (!time) {
            showFormError('input[type="time"]', 'الرجاء اختيار الوقت');
            hasError = true;
        }

        if (hasError) return;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormError('input[type="email"]', '❌ البريد الإلكتروني غير صحيح');
            return;
        }

        // Check if date is in the future
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            showFormError('input[type="date"]', '❌ الرجاء اختيار تاريخ مستقبلي');
            return;
        }

        // Success message
        showNotification(`✅ تم تأكيد الحجز!\n\nالاسم: ${name}\nالبريد: ${email}\nالتاريخ: ${date}\nالوقت: ${time}\n\nسنتواصل معك قريباً!`);

        // Reset form
        form.reset();
    });
}


// Form error handling
function showFormError(selector, message) {
    const input = form.querySelector(selector);
    input.style.borderColor = '#FF6B35';
    input.style.boxShadow = '0 0 10px rgba(255, 107, 53, 0.3)';
    
    const errorMsg = document.createElement('small');
    errorMsg.textContent = message;
    errorMsg.style.cssText = `
        color: #FF6B35;
        display: block;
        margin-top: 5px;
        font-weight: 600;
    `;
    input.parentNode.insertBefore(errorMsg, input.nextSibling);
}

function clearFormErrors() {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.borderColor = 'var(--light-bg)';
        input.style.boxShadow = 'none';
        
        const errorMsg = input.nextElementSibling;
        if (errorMsg && errorMsg.tagName === 'SMALL') {
            errorMsg.remove();
        }
    });
}


// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #FF6B35, #FF5520);
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 350px;
        line-height: 1.5;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}


// Modal system
function showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            ${content}
            <button onclick="closeModal()" class="close-btn">✕</button>
        </div>
    `;
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) modal.remove();
}


// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, .feature, .media-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});


// Add active class to current navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});


// Add active link styling and animations
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #FF6B35;
        border-bottom: 2px solid #FF6B35;
        padding-bottom: 5px;
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .cart-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #FF6B35, #FF5520);
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        font-size: 1.5rem;
        box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
        transition: all 0.3s ease;
        position: relative;
    }

    .cart-badge:hover {
        transform: scale(1.1);
        box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
    }

    .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #004E89;
        color: white;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
    }

    .modal-content {
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        width: 90%;
        position: relative;
        animation: slideIn 0.3s ease;
    }

    .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        background: #F8F9FA;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .close-btn:hover {
        background: #FF6B35;
        color: white;
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid #F8F9FA;
        margin: 8px 0;
    }

    .remove-btn {
        background: #FF6B35;
        color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .remove-btn:hover {
        background: #004E89;
        transform: scale(1.1);
    }

    .cart-total {
        padding: 15px;
        background: #F8F9FA;
        border-radius: 8px;
        margin: 15px 0;
        text-align: center;
        color: #FF6B35;
    }

    .checkout-btn, .clear-cart-btn {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        margin: 8px 0;
        transition: all 0.3s ease;
    }

    .checkout-btn {
        background: #FF6B35;
        color: white;
    }

    .checkout-btn:hover {
        background: #FF5520;
        transform: translateY(-2px);
    }

    .clear-cart-btn {
        background: #F8F9FA;
        color: #666;
    }

    .clear-cart-btn:hover {
        background: #E0E0E0;
    }
`;
document.head.appendChild(style);
