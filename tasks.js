const openButton = document.querySelectorAll(".arrow-wrapper");
const messageModul = document.querySelectorAll(".messenger-container");
const buttonSvg = document.querySelectorAll(".arrow-svg");
const footerContainer = document.querySelectorAll(".footer-container");
const toWhoWrapper = document.querySelectorAll(".to-who-wrapper");

// Open task larger view, show task-footer component and rotate button
for (let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener("click", () => {
    if (footerContainer[i].style.display === "flex") {
      messageModul[i].style.display = "none";
      footerContainer[i].style.display = "none";
      buttonSvg[i].classList.remove("rotated");
    } else {
      messageModul[i].style.display = "grid";
      footerContainer[i].style.display = "flex";
      buttonSvg[i].classList.add("rotated");
    }

    // Get To Who container and change all person views
    const personCard = toWhoWrapper[i].querySelectorAll(".person-wrapper");
    for (card of personCard) {
      card.classList.toggle("opened-grid-container");
    }

    // Get all the Set Task as Complete buttons as change card style
    const personCardCompleted = toWhoWrapper[i].querySelectorAll(".opened-grid-container");
    for (card of personCardCompleted) {
      const markAsCompleteButton = card.querySelectorAll(".action-button");
      for (let i = 0; i < markAsCompleteButton.length; i++) {
        markAsCompleteButton[i].addEventListener("click", () => {
          markAsCompleteButton[i].parentElement.classList.remove("opened-grid-container");
          markAsCompleteButton[i].parentElement.classList.add("person-completed");
        });
      }
    }
  });
}

// FILTERING

const openFiltering = document.querySelector(".open-filter-container");
const filterOptions = document.querySelector(".filter-options");

openFiltering.addEventListener("click", () => {
  filterOptions.classList.toggle("open-filtering");
});
