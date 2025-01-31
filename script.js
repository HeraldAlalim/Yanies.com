document.addEventListener("DOMContentLoaded", function () {
  const hitoButton = document.querySelector(".Product-info:nth-child(1)"); // Selecting the "Hito" button
  const menuDiv = document.querySelector(".Menu");

  hitoButton.addEventListener("click", function () {
      // Check if buttons already exist to avoid duplication
      if (!document.getElementById("extraButtonsContainer")) {
          // Create a new div container for the buttons
          const newButtonsContainer = document.createElement("div");
          newButtonsContainer.classList.add("extra-buttons");
          newButtonsContainer.id = "extraButtonsContainer";

          // Function to create a new button
          function createButton(text, id) {
              const button = document.createElement("button");
              button.textContent = text;
              button.classList.add("Product-info");
              button.id = id;
              return button;
          }

          // Create additional buttons
          const ginisaButton = createButton("Ginisa", "ginisaButton");
          const sugbaButton = createButton("Sugba", "sugbaButton");
          const pritoButton = createButton("Prito", "pritoButton"); // New button
          const adoboButton = createButton("Adobo", "adoboButton"); // Another new button

          // Append buttons to the new container
          newButtonsContainer.appendChild(ginisaButton);
          newButtonsContainer.appendChild(sugbaButton);
          newButtonsContainer.appendChild(pritoButton);
          newButtonsContainer.appendChild(adoboButton);

          // Insert the new container **after** the `.Menu` div
          menuDiv.parentNode.insertBefore(newButtonsContainer, menuDiv.nextSibling);
      }
  });
});
