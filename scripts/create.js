document.querySelector("#time").textContent = time;

export const add = document.querySelector("#add");
export const form = document.querySelector("form");
export const close = document.querySelector("#closeform");
export const notewrap = document.querySelector("#note-wrap");
export const notew = document.querySelectorAll(".note");
export const title = document.querySelector("#notetitle");
export const work = document.querySelector("#work");
export const project = document.querySelector("#project");
export const daily = document.querySelector("#daily");

add.addEventListener("click", () => {
  form.classList.replace("hidden", "flex");
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.replace("flex", "hidden");
});

form.addEventListener("submit", (e) => {
  // e.preventDefault();
  form.classList.replace("flex", "hidden");
  const nama = title.value;
  let key = `${new Date().getTime()}`;
  let kategori = '';
  let before = ''
  work.checked ? kategori = "type : work" : ''
  project.checked ? kategori = "type : project" : ''
  daily.checked ? kategori = "type : daily" : ''

  let value = { id: key, name: nama,kategory : kategori,befores:before };
  localStorage.setItem(key, JSON.stringify(value));
  document.querySelector("#empty").classList.replace("grid", "hidden");

  form.reset();
});

for (let i = 0; i < localStorage.length; i++) {
  let userkey = localStorage.key(i);

  let store = JSON.parse(localStorage.getItem(userkey));
  const nama = title.value;
  if (store) {
    document.querySelector("#empty").classList.replace("grid", "hidden");
    console.log(store.name);
    const notediv = document.createElement("div");
    notediv.classList = `note ${store.befores} `;
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = `<i class="fa-solid fa-trash text-3xl    text-red-600"></i>`;


    notediv.innerHTML = `<div data-id="${store.id}"  class="flex flex-col ">
                <h1 class="judul-note"> ${store.name} </h1>
                <p id="date" class="ml-2 text-lg font-inter font-[500] capitalize">
                ${store.kategory}
                </p>
              </div>`;

    notediv.appendChild(deletebutton);

    deletebutton.addEventListener("click", () => {
      console.log("mdakwjdlhdlwd");
      localStorage.removeItem(userkey);
      location.reload();
    });
    notewrap.appendChild(notediv);
    // const currentDate = moment().format("YYYY MMMM DD hh:mm");
  }
}
