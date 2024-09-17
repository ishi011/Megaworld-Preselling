document.addEventListener("DOMContentLoaded", function () {
  const elementIds = [
    "ParkMckinleyWest",
    "UptownArtsResidence",
    "UptownModern",
    "_9CentralPark" // Changed from 9CentralPark to CentralPark9
  ];

  elementIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      // Call the function corresponding to the ID
      const functionName = id.charAt(0).toUpperCase() + id.slice(1);
      if (typeof window[functionName] === "function") {
        window[functionName]();
      }
    }
  });
});

//=========================== ParkMckinleyWest
function ParkMckinleyWest() {
  const ParkMckinleyWestfacadeImagePaths = Array.from({ length: 9 }, (_, i) => `./img/ParkMckinleyWest/Facade/${i + 1}.webp`);
  generateSlides("Facade1", ParkMckinleyWestfacadeImagePaths);
  const ParkMckinleyWestactualImagePaths = Array.from({ length: 11 }, (_, i) => `./img/ParkMckinleyWest/1BedroomUnit/${i + 1}.webp`);
  generateSlides("Actual1", ParkMckinleyWestactualImagePaths);
  const ParkMckinleyWestactualImagePaths2 = Array.from({ length: 8 }, (_, i) => `./img/ParkMckinleyWest/2BedroomUnit/${i + 1}.webp`);
  generateSlides("Actual2", ParkMckinleyWestactualImagePaths2);
  const ParkMckinleyWestFloorplanImagePaths = Array.from({ length: 6 }, (_, i) => `./img/ParkMckinleyWest/Floorplan/${i + 1}.webp`);
  generateSlides("Floorplan", ParkMckinleyWestFloorplanImagePaths);
  const ParkMckinleyWestgridItemsData = [
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/1.webp",
      title: "1 Bedroom Unit with Balcony",
      subtitle: "",
      area: 35,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/2.webp",
      title: "1 Bedroom Unit with Balcony",
      subtitle: "",
      area: 48,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/3.webp",
      title: "2 Bedroom Unit with Balcony",
      subtitle: "",
      area: 110,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/4.webp",
      title: "2 Bedroom Unit with Balcony",
      subtitle: "",
      area: 106,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/5.webp",
      title: "2 Bedroom Unit with Balcony",
      subtitle: "",
      area: 106,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/6.webp",
      title: "3 Bedroom Unit with Balcony",
      subtitle: "",
      area: 118.5,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/7.webp",
      title: "3 Bedroom PH with Balcony",
      subtitle: "",
      area: 212,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/8.webp",
      title: "5 Bedroom Unit with Balcony",
      subtitle: "",
      area: 339.5,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/9.webp",
      title: "Executive 1 Bedroom PH with Balcony",
      subtitle: "",
      area: 70.5,
    },
    // Add more objects for each grid item...
];
  generateGridItems("CardsUnitLayout", ParkMckinleyWestgridItemsData);
}
//=========================== UptownArtsResidence
function UptownArtsResidence() {
const UptownArtsResidence_FacadeimagePaths = Array.from({ length: 9 }, (_, i) => `./img/UptownArtsResidence/Facade/${i + 1}.webp`);
generateSlides("Facade1", UptownArtsResidence_FacadeimagePaths);
const UptownArtsResidence_FloorplanimagePaths = Array.from({ length: 6 }, (_, i) => `./img/UptownArtsResidence/Floorplan/${i + 1}.webp`);
generateSlides("Floorplan", UptownArtsResidence_FloorplanimagePaths);
const UptownArtsResidence_gridItemsData = [
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/1.webp",
    title: "3 Bedroom with Balcony",
    subtitle: "UNIT A",
    area: 128.5,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/2.webp",
    title: "1 Bedroom Unit with Balcony",
    subtitle: "UNIT B, C, D, E & H",
    area: 41.5,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/3.webp",
    title: "Executive 2 Bedroom with Balcony",
    subtitle: "UNIT F",
    area: 96,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/4.webp",
    title: "2 Bedroom with Balcony",
    subtitle: "UNIT I",
    area: 84,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/5.webp",
    title: "1 Bedroom with Balcony",
    subtitle: "UNIT J",
    area: 57,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/6.webp",
    title: "Executive 1 Bedroom with Balcony",
    subtitle: "UNIT K",
    area: 58.5,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/7.webp",
    title: "3 Bedroom with Balcony",
    subtitle: "UNIT A",
    area: 125.5,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/8.webp",
    title: "Executive 2 Bedroom with Balcony",
    subtitle: "UNIT F",
    area: 96.5,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/9.webp",
    title: "2 Bedroom with Balcony",
    subtitle: "UNIT I",
    area: 84,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/10.webp",
    title: "Executive 1 Bedroom with Balcony",
    subtitle: "UNIT K",
    area: 60,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/11.webp",
    title: "Executive 2 Bedroom with Balcony",
    subtitle: "UNIT F",
    area: 97,
  },
  {
    imageSrc: "./img/UptownArtsResidence/UnitLayouts/12.webp",
    title: "Executive 1 Bedroom with Balcony",
    subtitle: "UNIT K",
    area: 60.5,
  },
  // Add more objects for each grid item...
];
  generateGridItems("CardsUnitLayout", UptownArtsResidence_gridItemsData);
}
//=========================== UptownModern
function UptownModern() {
const UptownModern_FacadeimagePaths = Array.from({ length: 7 }, (_, i) => `./img/UptownModern/Facade/${i + 1}.webp`);
generateSlides("Facade1", UptownModern_FacadeimagePaths);
const UptownModern_AmenitiesimagePaths = Array.from({ length: 21 }, (_, i) => `./img/UptownModern/Amenities/${i + 1}.webp`);
generateSlides("Amenities", UptownModern_AmenitiesimagePaths);
const UptownModern_FloorplanimagePaths = Array.from({ length: 5 }, (_, i) => `./img/UptownModern/Floorplan/${i + 1}.webp`);
generateSlides("Floorplan", UptownModern_FloorplanimagePaths);
const UptownModern_UnitRenderimagePaths = Array.from({ length: 11 }, (_, i) => `./img/UptownModern/UnitRenders/${i + 1}.webp`);
generateSlides("UnitRender", UptownModern_UnitRenderimagePaths);
const UptownModern_gridItemsData = [
  {
    imageSrc: "./img/UptownModern/UnitLayouts/1.webp",
    title: "Studio",
    subtitle: "UNIT A",
    area: 40,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/2.webp",
    title: "2 Bedroom with Balcony",
    subtitle: "UNIT A",
    area: 92,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/3.webp",
    title: "Studio with Balcony",
    subtitle: "UNIT B",
    area: 44.5,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/4.webp",
    title: "2 Bedroom with Balcony",
    subtitle: "UNIT P",
    area: 86,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/5.webp",
    title: "3 Bedroom with Balcony",
    subtitle: "UNIT A",
    area: 125.5,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/6.webp",
    title: "3 Bedroom with Balcony",
    subtitle: "UNIT A",
    area: 127,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/7.webp",
    title: "1 Bedroom with Balcony",
    subtitle: "UNIT E",
    area: 58.5,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/8.webp",
    title: "1 Bedroom with Balcony",
    subtitle: "UNIT H",
    area: 51,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/9.webp",
    title: "Studio with Balcony",
    subtitle: "UNIT AA",
    area: 48.5,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/10.webp",
    title: "3 Bedroom with Balcony",
    subtitle: "UNIT C",
    area: 134.5,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/11.webp",
    title: "1 Bedroom with Balcony",
    subtitle: "UNIT B",
    area: 64.5,
  },
  {
    imageSrc: "./img/UptownModern/UnitLayouts/12.webp",
    title: "2 Bedroom with Balcony",
    subtitle: "UNIT E",
    area: 97,
  },
];

  generateGridItems("CardsUnitLayout", UptownModern_gridItemsData);
}
//=========================== 9CentralPark
function _9CentralPark() {
  const UptownModern_FacadeimagePaths = Array.from({ length: 22 }, (_, i) => `./img/_9CentralPark/Facade/${i + 1}.webp`);
  generateSlides("Facade", UptownModern_FacadeimagePaths);
  const UnitRenderimagePaths = Array.from({ length: 32 }, (_, i) => `./img/_9CentralPark/UnitRenders/${i + 1}.webp`);
  generateSlides("UnitRender", UnitRenderimagePaths);
  const UptownModern_FloorplanimagePaths = Array.from({ length: 7 }, (_, i) => `./img/_9CentralPark/Floorplan/${i + 1}.webp`);
  generateSlides("Floorplan", UptownModern_FloorplanimagePaths);
  const gridItemsData = [
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/1.webp",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 55.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/2.webp",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT C",
      area: 59,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/3.webp",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT C",
      area: 35.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/4.webp",
      title: "Studio with Balcony",
      subtitle: "UNIT B",
      area: 36.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/5.webp",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 100,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/6.webp",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT E",
      area: 66,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/7.webp",
      title: "Studio with Balcony",
      subtitle: "UNIT N",
      area: 36.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/8.webp",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT D",
      area: 54,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/9.webp",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 93,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/10.webp",
      title: "Studio with Balcony",
      subtitle: "UNIT H",
      area: 35.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/11.webp",
      title: "Studio with Balcony",
      subtitle: "UNIT E",
      area: 36.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/12.webp",
      title: "Studio with Balcony",
      subtitle: "UNIT F",
      area: 35.5,
    },
  ];

  generateGridItems("CardsUnitLayout", gridItemsData);
}
//============================================================
function generateSlides(containerId, imagePaths) {
  const container = document.getElementById(containerId);
  const content = container.querySelector(".slider");
  const dotsContainer = container.querySelector(".dots-container");
  const blurBackground = container.querySelector(".blurred-bg");

  let slideIndex = 0;

  if (!content || !dotsContainer || !blurBackground) {
    console.error(`Container elements for "${containerId}" are missing.`);
    return;
  }

  if (imagePaths.length === 0) {
    console.error("No images provided for the slider.");
    return;
  }

  // Create slides and dots
  imagePaths.forEach((path, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    // Create responsive image element
    const imgSrc = path;
    slide.innerHTML = `
      <img 
        src="${imgSrc}" 
        alt="Slide ${index + 1}" 
        loading="lazy" 
        decoding="async"
        srcset="${imgSrc.replace('default', 'small')} 600w, 
                ${imgSrc.replace('default', 'medium')} 1200w, 
                ${imgSrc.replace('default', 'large')} 1800w" 
        sizes="(max-width: 600px) 600px, 
               (max-width: 1200px) 1200px, 
               1800px" 
      />
    `;

    content.appendChild(slide);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      showSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const slides = content.querySelectorAll(".slide");
  const dots = dotsContainer.querySelectorAll(".dot");

  const showSlide = (index) => {
    slides.forEach((slide) => slide.style.display = "none");
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].style.display = "block";
    dots[index].classList.add("active");

    // Update blurred background with the current slide image
    blurBackground.style.backgroundImage = `url(${imagePaths[index].replace('default', 'large')})`;

    slideIndex = index;
  };

  const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  };

  const prevSlide = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  };

  container.querySelector(".prev").addEventListener("click", prevSlide);
  container.querySelector(".next").addEventListener("click", nextSlide);

  // Show first slide initially
  showSlide(slideIndex);

  // Auto slide every 5 seconds
  let slideshowInterval = setInterval(nextSlide, 5000);

  // Pause slideshow on hover
  container.addEventListener("mouseenter", () => {
    clearInterval(slideshowInterval);
  });

  container.addEventListener("mouseleave", () => {
    slideshowInterval = setInterval(nextSlide, 5000);
  });
}

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//============================================================
function generateGridItems(containerId, gridItemsData) {
  const container = document.getElementById(containerId);

  gridItemsData.forEach((itemData) => {
    // Create grid item container
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Create image element
    const image = document.createElement("img");
    image.src = itemData.imageSrc;
    image.loading = "lazy";
    image.alt = itemData.title;

    // Create title element
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = itemData.title;

    const subtitle = document.createElement("div");
    subtitle.classList.add("subtitle");
    subtitle.textContent = itemData.subtitle;

    // Create details element
    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML = `<i class="fas fa-maximize"></i> ${parseFloat(
      itemData.area
    ).toFixed(2)} SQM`;

    // Create "GET QUOTE" button
    const quoteBtn = document.createElement("a");
    quoteBtn.href = "./Contact.html";
    quoteBtn.classList.add("btn");
    quoteBtn.textContent = "GET QUOTE";

    // Append elements to grid item container
    gridItem.appendChild(image);
    gridItem.appendChild(title);
    gridItem.appendChild(subtitle);
    gridItem.appendChild(details);
    gridItem.appendChild(quoteBtn);

    // Append grid item to container
    container.appendChild(gridItem);
  });
}
