/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


/* ================= SEARCH CARS ================= */

function searchCars() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const cars =
        document.querySelectorAll(".car-card");


    cars.forEach(function(car) {

        const name =
            car.dataset.name.toLowerCase();

        const category =
            car.dataset.category.toLowerCase();


        if (
            name.includes(input) ||
            category.includes(input)
        ) {

            car.style.display = "block";

        } else {

            car.style.display = "none";

        }

    });

}


/* ================= CATEGORY FILTER ================= */

function filterCategory(category) {

    const cars =
        document.querySelectorAll(".car-card");

    cars.forEach(function(car) {

        if (car.dataset.category === category) {

            car.style.display = "block";

        } else {

            car.style.display = "none";

        }

    });


    document.getElementById("cars")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= CAR DETAILS ================= */

function showDetails(
    name,
    price,
    power,
    transmission,
    engine,
    description
) {

    document.getElementById("modalName")
        .textContent = name;

    document.getElementById("modalPrice")
        .textContent = price;

    document.getElementById("modalPower")
        .textContent = power;

    document.getElementById("modalTransmission")
        .textContent = transmission;

    document.getElementById("modalEngine")
        .textContent = engine;

    document.getElementById("modalDescription")
        .textContent = description;


    document.getElementById("carModal")
        .classList.add("active");

}


/* ================= CLOSE MODAL ================= */

function closeModal() {

    document.getElementById("carModal")
        .classList.remove("active");

}


/* ================= CLOSE MODAL OUTSIDE ================= */

window.onclick = function(event) {

    const modal =
        document.getElementById("carModal");

    if (event.target === modal) {

        closeModal();

    }

};


/* ================= CONTACT FORM ================= */

function submitForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted."
    );


    document.getElementById("contactForm")
        .reset();

}