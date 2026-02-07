const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

function updateActiveCard() {
  const center = slider.scrollLeft + slider.offsetWidth / 2;

  cards.forEach(card => {
    const cardCenter =
      card.offsetLeft + card.offsetWidth / 2;

    card.classList.toggle(
      "active",
      Math.abs(center - cardCenter) < card.offsetWidth / 2
    );
  });
}

slider.addEventListener("scroll", updateActiveCard);
updateActiveCard();
