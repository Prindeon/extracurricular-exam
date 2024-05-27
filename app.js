"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  const teachers = await getTeachers()
  console.log(teachers)
  displayTeachers(teachers)
  displayTeacherGrid(teachers)
}

async function getTeachers() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json")
  const data = await response.json()
      return data
}

    const teachersList = document.querySelector("#teachers-list");

function displayTeachers(teachers) {
    for (const teacher of teachers) {
    teachersList.insertAdjacentHTML(
      "beforeend",
      ` 
      <li>
        ${teacher.name} --- ${teacher.mail}
      </li>
      `
    )
  }  
}

function displayTeacherGrid(teachers) {
  const teachersGrid = document.querySelector("#teachers-grid")
  for (const teacher of teachers) {
    teachersGrid.insertAdjacentHTML(
      "beforeend",
      /*html*/
      `
        <article class="grid-item">
          <img src="${teacher.image}" alt="${teacher.name}" />
          <h2>${teacher.name}</h2>
          <p>${teacher.title}</p>
        </article>
      `
      )
  }
}

