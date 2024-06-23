document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.querySelector('.navbar-right button');
    const cartItemCount = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.cart-total-price');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const card = event.target.closest('.card');
            const productName = card.querySelector('.card-title').textContent;
            const productPriceText = card.querySelector('.card-text').textContent;
            const productPrice = parseFloat(productPriceText.replace('Fiyat: ', '').replace('tl', ''));

            cartItems.push({ name: productName, price: productPrice });
            updateCart();
            showNotification('Ürün sepete eklendi!', 'green');
        });
    });

    cartIcon.addEventListener('click', function() {
        showCartItems();
    });

    function updateCart() {
        const itemCount = cartItems.length;
        let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

        cartItemCount.textContent = itemCount;
        totalPriceElement.textContent = `Toplam Fiyat: ${totalPrice.toFixed(2)} TL`;
    }

    function showNotification(message, color) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.backgroundColor = color;
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '9999';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    function showCartItems() {
        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');

        if (cartItems.length === 0) {
            modalBody.textContent = 'Sepetiniz boş.';
        } else {
            cartItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');

                const infoElement = document.createElement('div');
                infoElement.classList.add('cart-item-info');
                infoElement.innerHTML = `
                    <p><strong>${item.name}</strong></p>
                    <p>Fiyat: ${item.price.toFixed(2)} TL</p>
                `;
                itemElement.appendChild(infoElement);
                modalBody.appendChild(itemElement);
            });

            const totalPriceElement = document.createElement('div');
            totalPriceElement.classList.add('cart-total');
            totalPriceElement.innerHTML = `<p><strong>Toplam Fiyat:</strong> ${getTotalPrice().toFixed(2)} TL</p>`;
            modalBody.appendChild(totalPriceElement);
        }

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.appendChild(modalBody);

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog');
        modalDialog.appendChild(modalContent);

        const modal = document.createElement('div');
        modal.classList.add('modal', 'fade');
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('role', 'dialog');
        modal.appendChild(modalDialog);

        const existingModal = document.querySelector('.modal');
        if (existingModal) {
            existingModal.parentNode.removeChild(existingModal);
        }
        document.body.appendChild(modal);

        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
    }

    function getTotalPrice() {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }
});
