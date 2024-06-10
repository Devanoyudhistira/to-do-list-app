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
  let i = 1;
  let judulnote = title.value;
  localStorage.setItem(`note`, judulnote);
  const notediv = document.createElement("div");
  notediv.classList = "note before:bg-yellow-500";

  console.log(judulnote);

  notediv.innerHTML = `<div  class="flex flex-col">
            <h1 class="judul-note"> ${judulnote} </h1>
            <p id="date" class="ml-2 text-xl font-poppins font-[500]">
                ${moment().format("YYYY MMMM DD hh:mm")}
            </p>
          </div>
          <button class=""> <i class="fa-solid fa-trash  text-3xl text-red-600"></i> </button>`;

  notewrap.appendChild(notediv);
  // console.log(notew.length);
  document.querySelector("#date").textContent = moment().format(
    "YYYY MMMM DD   hh:mm"
  );

  form.reset;
});
let notestore = localStorage.getItem("note");
if (notestore) {
  document.querySelector("#empty").classList.replace("grid", "hidden");
  const notediv = document.createElement("div");
  notediv.classList = "note before:bg-yellow-500";

  notediv.innerHTML = `<div  class="flex flex-col">
            <h1 class="judul-note"> ${notestore} </h1>
            <p id="date" class="ml-2 text-xl font-poppins font-[500]">
                ${moment().format("YYYY MMMM DD hh:mm")}
            </p>
          </div>
          <button class=""> <i class="fa-solid fa-trash  text-3xl text-red-600"></i> </button>`;

  notewrap.appendChild(notediv);
  document.querySelector("#date").textContent =
    moment().format("YYYY MMMM DD HH:mm");
}
 