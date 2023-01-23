const sideMenu = document.querySelector("aside");
const themeToggle = document.querySelector(".theme-toggle");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", ()=> {
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-var");
    themeToggle.querySelector("span").classList.toggle("active");
})

Orders.forEach(order => {
    const tr = document.createElement("tr");
    const trContent = `<td>${order.productName}</td><td>${order.productNumber}</td><td>${order.paymentStatus}</td><td class="
    ${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td><td class="primary">Details</td>`;

    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
    
    
})