let total = 0;

function addToCart(name, price) {
    const cart = document.getElementById("cartItems");

    // Thêm item vào danh sách
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
        <span>${name}</span>
        <span>${price.toLocaleString()} đ</span>
    `;
    cart.appendChild(item);

    // Tính tổng tiền
    total += price;
    document.getElementById("total").innerText = total.toLocaleString();
}
