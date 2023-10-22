console.log(document);

document.write("<h1>Ivan Paniagua Maldonado</h1>");


let $foto=document.createElement("img");
$foto.src = "https://cdn.discordapp.com/attachments/845383920458924034/1011653416466006067/IMG_20220823_100825.jpg?ex=6537de2a&is=6525692a&hm=ac191cc738377cfcdc1c2d67918ebdb43f165e0feb6c1c6ae8e7c5848bbad5a7&";
$foto.style.maxWidth="30%";

document.body.appendChild($foto);

document.write("<p>Nací en la Ciudad de México el 5 de Febrero de 2003,siempre alguien muy sociable pero reservado y que nunca he dejado de amar los videojuegos que al día de hoy seguiré estudiando programación hasta un día ser un Senior Developer de Videojuegos y un gran amigo.")


const hobbies = ["Jugar Videojuegos", "Sacar a mi perro y jugar con él", "Ver series y vídeos", "Leer","Caminar"],
  $ol = document.createElement("ol");

document.write("<h3>Mis pasatiempos</h3>");
document.body.appendChild($ol);

hobbies.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ol.appendChild($li);
});

const contactos = ["Numero Tel: 5580335774", "Correo: ipaniaguamaldonado@gmail.com"],
  $ul2 = document.createElement("ul");

document.write("<h3>Contactos</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
contactos.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

function saludar(e) {
  alert("Hola Mundo");
  console.log(e);
  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
  e.target.innerText = " Me has presionado 😎👍🏻";
}

$btnTheme = document.querySelector("#btn-theme");

$btnTheme.addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    e.target.innerText = "🌙";
  } else {
    document.body.classList.add("dark-mode");
    e.target.innerText = "🤏";
  }
});


let $radioThemes = document.querySelectorAll("input[name='theme']");
console.log($radioThemes);


document.addEventListener("click", (e) => {
  if (!e.target.matches(`input[name = "theme"]`)) {
    return false;
  }

  $themeCSS = document.querySelector("#theme");
  $themeCSS.href = e.target.dataset.theme;
});