// Selecione o botão do trailer
const trailerButton = document.getElementById("trailerButton");

// Adicione um ouvinte de eventos de clique no botão
trailerButton.addEventListener("click", function () {
  // Crie um elemento iframe para exibir o vídeo do YouTube
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/x5pZI-DmtrE"; // Substitua VIDEO_ID pelo ID do vídeo do YouTube desejado
  iframe.width = "800";
  iframe.height = "500";
  iframe.allowFullscreen = true;

  // Crie um elemento div para envolver o iframe e criar o modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.appendChild(iframe);

  // Adicione o modal ao corpo do documento
  document.body.appendChild(modal);

  // Adicione um ouvinte de eventos de clique no modal para fechá-lo quando clicado fora do vídeo
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.remove();
    }
  });
});

//Slide images

const imagesList = document.querySelector(".images__lista");
const imagesItems = document.querySelectorAll(".images__item");
const imagesCount = imagesItems.length;
const initialImageCount = 3;
const slideInterval = 6000;
let currentIndex = 0;

function showImages(startIndex) {
  const visibleImages = Array.from(imagesItems).slice(
    startIndex,
    startIndex + initialImageCount
  );
  imagesList.innerHTML = "";
  visibleImages.forEach((imageItem) => imagesList.appendChild(imageItem));

  // Atualizar os indicadores de slide
  const sliderIndicators = document.querySelector(".slider__indicators");
  sliderIndicators.innerHTML = "";
  for (let i = 0; i < Math.ceil(imagesCount / initialImageCount); i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("slider__indicator");
    if (i === Math.floor(startIndex / initialImageCount)) {
      indicator.classList.add("active");
    }
    indicator.addEventListener("click", () => {
      currentIndex = i * initialImageCount;
      showImages(currentIndex);
      updateSliderIndicators();
    });
    sliderIndicators.appendChild(indicator);
  }
}

function slideImages() {
  currentIndex = (currentIndex + initialImageCount) % imagesCount;
  showImages(currentIndex);
  updateSliderIndicators();
}

function updateSliderIndicators() {
  const sliderIndicators = document.querySelectorAll(".slider__indicator");
  sliderIndicators.forEach((indicator, index) => {
    if (index === Math.floor(currentIndex / initialImageCount)) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

showImages(0);
const slideIntervalId = setInterval(slideImages, slideInterval);

imagesList.addEventListener("mouseenter", () => {
  clearInterval(slideIntervalId);
});

imagesList.addEventListener("mouseleave", () => {
  slideIntervalId = setInterval(slideImages, slideInterval);
});
