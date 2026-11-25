const vehicles = [
  { id: 1, brand: "Mercedes-Benz", model: "E-Class", year: 2021, price: 42000000, mileage: "18,400 km", transmission: "Automatic", fuel: "Petrol", condition: "Foreign Used", engine: "2.0L Turbo", status: "Available", featured: true, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85", gallery: { interior: "https://images.unsplash.com/photo-1776966892405-84252c273e7e?auto=format&fit=crop&w=1000&q=85" }, description: "A refined executive saloon with exceptional comfort, elegant styling, and confident performance. Fully inspected and ready for its next owner." },
  { id: 2, brand: "Lexus", model: "RX 350", year: 2022, price: 68500000, mileage: "12,700 km", transmission: "Automatic", fuel: "Petrol", condition: "Foreign Used", engine: "3.5L V6", status: "Available", featured: true, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85", gallery: { interior: "https://images.unsplash.com/photo-1744866095030-0a8806393b53?auto=format&fit=crop&w=1000&q=85" }, description: "A sophisticated luxury SUV combining quiet comfort, generous space, and dependable all-round capability for every journey." },
  { id: 3, brand: "Toyota", model: "Land Cruiser", year: 2020, price: 75000000, mileage: "31,200 km", transmission: "Automatic", fuel: "Petrol", condition: "Foreign Used", engine: "4.6L V8", status: "Available", featured: false, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85", gallery: { interior: "https://images.unsplash.com/photo-1762171696586-e03dabfa81cd?auto=format&fit=crop&w=1000&q=85" }, description: "Legendary durability meets premium comfort in this carefully maintained Land Cruiser, equally capable on city roads and beyond." },
  { id: 4, brand: "BMW", model: "X5", year: 2021, price: 58000000, mileage: "21,900 km", transmission: "Automatic", fuel: "Petrol", condition: "Foreign Used", engine: "3.0L TwinPower", status: "Available", featured: true, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85", gallery: { interior: "https://images.unsplash.com/photo-1598551292109-bf7c475e2be8?auto=format&fit=crop&w=1000&q=85" }, description: "An athletic premium SUV with modern technology, strong performance, and a composed luxury cabin for everyday excellence." },
  { id: 5, brand: "Range Rover", model: "Sport", year: 2022, price: 89000000, mileage: "15,600 km", transmission: "Automatic", fuel: "Petrol", condition: "Foreign Used", engine: "3.0L P400", status: "Available", featured: true, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85", gallery: { interior: "https://images.unsplash.com/photo-1633080413628-455cad8b6547?auto=format&fit=crop&w=1000&q=85" }, description: "Dynamic, distinctive, and luxurious, the Range Rover Sport delivers commanding presence with advanced capability and refinement." },
  { id: 6, brand: "Toyota", model: "Camry", year: 2023, price: 28500000, mileage: "8,400 km", transmission: "Automatic", fuel: "Hybrid", condition: "Locally Used", engine: "2.5L Hybrid", status: "Available", featured: false, image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=85", gallery: { interior: "https://images.unsplash.com/photo-1777452483383-aac463d54a0f?auto=format&fit=crop&w=1000&q=85" }, description: "Efficient, comfortable, and polished, this modern Camry Hybrid offers excellent practicality with a refined driving experience." }
];

const services = [
  { name: "Exterior detailing", price: "From ₦45,000", description: "A meticulous exterior wash, decontamination, and finish.", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=85" },
  { name: "Interior deep cleaning", price: "From ₦55,000", description: "Comprehensive cleaning for seats, carpets, trim, and panels.", image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85" },
  { name: "Paint correction", price: "From ₦180,000", description: "Restore gloss by removing swirl marks and surface defects.", image: "https://images.unsplash.com/photo-1597766353938-6d8d5b3e47e3?auto=format&fit=crop&w=900&q=85" },
  { name: "Ceramic coating", price: "From ₦350,000", description: "Advanced paint protection with lasting depth and durability.", image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=85" },
  { name: "Paint protection", price: "From ₦250,000", description: "Clear protection for high-impact and vulnerable surfaces.", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=85" },
  { name: "Engine bay cleaning", price: "From ₦35,000", description: "Careful degreasing and dressing for a clean engine bay.", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=85" },
  { name: "Upholstery restoration", price: "From ₦90,000", description: "Revitalize leather, fabric, and interior upholstery.", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=85" },
  { name: "Premium polishing", price: "From ₦120,000", description: "Machine polishing for a crisp, mirror-like finish.", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=85" }
];

const formatPrice = value => "₦" + value.toLocaleString("en-NG");
const whatsappNumber = "2348000000000";
const grid = document.getElementById("vehicleGrid");

function vehicleCard(vehicle) {
  const message = encodeURIComponent(`Hello Karsten Automobile, I am interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model}.`);
  return `<article class="vehicle-card reveal visible">
    <div class="vehicle-image">
      <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}" loading="lazy">
      <span class="vehicle-badge ${vehicle.featured ? "featured" : ""}">${vehicle.featured ? "Featured" : vehicle.condition}</span>
    </div>
    <div class="vehicle-info">
      <div class="vehicle-name-row"><h3>${vehicle.brand} ${vehicle.model}</h3><strong>${formatPrice(vehicle.price)}</strong></div>
      <p class="vehicle-year">${vehicle.year} · ${vehicle.condition}</p>
      <div class="vehicle-specs">
        <div><span>Mileage</span><strong>${vehicle.mileage}</strong></div>
        <div><span>Gear</span><strong>${vehicle.transmission}</strong></div>
        <div><span>Fuel</span><strong>${vehicle.fuel}</strong></div>
      </div>
      <div class="vehicle-actions">
        <button class="button button-dark" data-view="${vehicle.id}">View Details</button>
        <a class="wa-card" href="https://wa.me/${whatsappNumber}?text=${message}" target="_blank" rel="noopener" aria-label="Inquire on WhatsApp">WA</a>
      </div>
    </div>
  </article>`;
}

function renderVehicles(list) {
  grid.innerHTML = list.map(vehicleCard).join("");
  document.getElementById("vehicleCount").textContent = list.length;
  document.getElementById("emptyState").hidden = list.length !== 0;
  grid.hidden = list.length === 0;
}

function populateFilters() {
  const brands = [...new Set(vehicles.map(v => v.brand))].sort();
  document.getElementById("brandFilter").insertAdjacentHTML("beforeend", brands.map(b => `<option>${b}</option>`).join(""));
}

function getFilteredVehicles() {
  const brand = document.getElementById("brandFilter").value;
  const model = document.getElementById("modelFilter").value.trim().toLowerCase();
  const price = document.getElementById("priceFilter").value;
  const year = document.getElementById("yearFilter").value;
  const condition = document.getElementById("conditionFilter").value;
  const transmission = document.getElementById("transmissionFilter").value;
  const fuel = document.getElementById("fuelFilter").value;
  return vehicles.filter(v =>
    (!brand || v.brand === brand) &&
    (!model || `${v.brand} ${v.model}`.toLowerCase().includes(model)) &&
    (!year || String(v.year) === year) &&
    (!condition || v.condition === condition) &&
    (!transmission || v.transmission === transmission) &&
    (!fuel || v.fuel === fuel) &&
    (!price || (v.price >= Number(price.split("-")[0]) && v.price <= Number(price.split("-")[1])))
  );
}

function applyFilters() {
  renderVehicles(getFilteredVehicles());
}

function clearFilters() {
  document.querySelectorAll("#filterPanel select").forEach(select => select.value = "");
  document.getElementById("modelFilter").value = "";
  document.getElementById("yearFilter").value = "";
  document.getElementById("sortButton").textContent = "Recommended⌄";
  sortNewest = false;
  renderVehicles(vehicles);
}

populateFilters();
renderVehicles(vehicles);
document.getElementById("filterPanel").addEventListener("submit", event => {
  event.preventDefault();
  applyFilters();
});
document.getElementById("clearFilters").addEventListener("click", clearFilters);
document.getElementById("emptyClear").addEventListener("click", clearFilters);

let sortNewest = false;
document.getElementById("sortButton").addEventListener("click", event => {
  sortNewest = !sortNewest;
  event.currentTarget.textContent = sortNewest ? "Newest first⌄" : "Recommended⌄";
  const sorted = [...getFilteredVehicles()].sort((a,b) => sortNewest ? b.year - a.year : b.featured - a.featured);
  renderVehicles(sorted);
});

function renderServices() {
  const grid = document.getElementById("serviceGrid");
  grid.innerHTML = services.map((service, index) =>
    `<article class="service-card reveal visible">
      <img src="${service.image}" alt="${service.name}" loading="lazy">
      <div class="service-overlay">
        <span>0${index + 1} / Service</span><h3>${service.name}</h3><p>${service.description}</p>
        <div class="service-bottom"><strong>${service.price}</strong><button data-service="${service.name}">Book Service →</button></div>
      </div>
    </article>`
  ).join("");
}
renderServices();

const vehicleModal = document.getElementById("vehicleModal");
const vehicleModalBody = document.getElementById("vehicleModalBody");

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  const vehicle = vehicles.find(v => v.id === Number(button.dataset.view));
  openVehicleModal(vehicle);
});

function openVehicleModal(vehicle) {
  const message = encodeURIComponent(`Hello Karsten Automobile, I would like to inquire about the ${vehicle.year} ${vehicle.brand} ${vehicle.model}.`);
  const gallery = [
    { image: vehicle.image, label: "Exterior" },
    { image: vehicle.gallery.interior, label: "Interior" },
    { image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=85", label: "Rear" }
  ];
  vehicleModalBody.innerHTML = `<div class="detail-layout">
    <div class="detail-gallery">
      <div class="detail-gallery-main"><img id="detailMainImage" src="${gallery[0].image}" alt="${vehicle.brand} ${vehicle.model} exterior"></div>
      <div class="detail-thumbs">${gallery.map((view, i) => `<button data-detail-image="${i}" aria-label="${view.label} view of ${vehicle.brand} ${vehicle.model}"><img src="${view.image}" alt="${view.label} view"><span>${view.label}</span></button>`).join("")}</div>
    </div>
    <div class="detail-copy">
      <p class="eyebrow dark"><span></span>${vehicle.status}</p>
      <h2 id="vehicleModalTitle">${vehicle.brand} ${vehicle.model}</h2>
      <strong class="detail-price">${formatPrice(vehicle.price)}</strong>
      <p>${vehicle.description}</p>
      <div class="detail-spec-grid">
        <div><span>Year</span><strong>${vehicle.year}</strong></div><div><span>Condition</span><strong>${vehicle.condition}</strong></div>
        <div><span>Mileage</span><strong>${vehicle.mileage}</strong></div><div><span>Transmission</span><strong>${vehicle.transmission}</strong></div>
        <div><span>Fuel type</span><strong>${vehicle.fuel}</strong></div><div><span>Engine</span><strong>${vehicle.engine}</strong></div>
      </div>
      <div class="detail-actions">
        <a class="button button-dark" href="mailto:hello@karstenautomobile.com?subject=${encodeURIComponent("Vehicle inspection: " + vehicle.brand + " " + vehicle.model)}">Book Inspection</a>
        <a class="wa-card" href="https://wa.me/${whatsappNumber}?text=${message}" target="_blank" rel="noopener" aria-label="Inquire on WhatsApp">WA</a>
      </div>
    </div>
  </div>`;
  vehicleModal.classList.add("open");
  vehicleModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  vehicleModalBody.querySelectorAll("[data-detail-image]").forEach(button => button.addEventListener("click", () => {
    const index = Number(button.dataset.detailImage);
    const mainImage = document.getElementById("detailMainImage");
    mainImage.src = gallery[index].image;
    mainImage.alt = `${vehicle.brand} ${vehicle.model} ${gallery[index].label.toLowerCase()}`;
  }));
}

function closeVehicleModal() {
  vehicleModal.classList.remove("open");
  vehicleModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeVehicleModal));

const bookingModal = document.getElementById("bookingModal");
function openBooking(service = "") {
  if (service) document.getElementById("bookingService").value = service;
  bookingModal.classList.add("open");
  bookingModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeBooking() {
  bookingModal.classList.remove("open");
  bookingModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
document.querySelectorAll("[data-booking]").forEach(button => button.addEventListener("click", () => openBooking()));
document.querySelectorAll("[data-service]").forEach(button => button.addEventListener("click", () => openBooking(button.dataset.service)));
document.querySelectorAll("[data-close-booking]").forEach(el => el.addEventListener("click", closeBooking));

const dateInput = document.querySelector('#bookingForm input[name="date"]');
dateInput.min = new Date().toISOString().split("T")[0];

function validateForm(form) {
  let valid = true;
  form.querySelectorAll("[required]").forEach(field => {
    const invalid = !field.value.trim() || !field.checkValidity();
    field.classList.toggle("invalid", invalid);
    if (invalid) valid = false;
  });
  return valid;
}

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!validateForm(form)) {
    document.getElementById("bookingSuccess").textContent = "Please complete all required fields.";
    return;
  }
  const data = new FormData(form);
  const message = encodeURIComponent(
    `Hello Karsten Automobile, I would like to book ${data.get("service")} for my ${data.get("vehicleType")}: ${data.get("vehicleDetails")} on ${data.get("date")} at ${data.get("time")}. Name: ${data.get("name")}, Phone: ${data.get("phone")}. Notes: ${data.get("notes") || "None"}`
  );
  document.getElementById("bookingSuccess").textContent = "Booking request ready. Continue on WhatsApp.";
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
  form.reset();
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!validateForm(form)) {
    document.getElementById("contactSuccess").textContent = "Please complete all required fields.";
    return;
  }
  const data = new FormData(form);
  const message = encodeURIComponent(
    `Hello Karsten Automobile, I am making a ${data.get("type")} inquiry.\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`
  );
  document.getElementById("contactSuccess").textContent = "Thank you. Your inquiry is ready to send.";
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
  form.reset();
});

document.querySelectorAll("input, select, textarea").forEach(field => {
  field.addEventListener("input", () => field.classList.remove("invalid"));
  field.addEventListener("change", () => field.classList.remove("invalid"));
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.classList.toggle("open");
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuToggle.classList.remove("open");
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...navLinks.querySelectorAll("a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navItems.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
  });
}, { rootMargin: "-45% 0px -45%", threshold: 0 });
sections.forEach(section => observer.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => {
  if (!element.classList.contains("visible")) revealObserver.observe(element);
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  closeVehicleModal();
  closeBooking();
});

