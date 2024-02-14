const header = document.getElementsByTagName("header")
const nav = document.createElement("nav")
const logo = document.createElement("div")
const menu = document.createElement("ul")
const logo2 = document.createElement("h2")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const link1 = document.createElement("a")
const link2 = document.createElement("a")
const link3 = document.createElement("a")
const link4 = document.createElement("a")
const link5 = document.createElement("a")

logo2.textContent = "StartBootstrap"
link1.textContent = "Service"
link2.textContent = "Portfolio"
link3.textContent = "About"
link4.textContent = "Team"
link5.textContent = "Contact"


header[0].append(nav);
nav.append(logo, menu);
logo.append(logo2);
menu.classList.add("menu");
menu.append(link1, link2, link3, link4, link5);

nav.style.display = "flex";
nav.style.flexDirection = "row"
nav.style.justifyContent = "space-around";
nav.style.background = "gray";
nav.style.color = "gold";
menu.style.textDecorationLine = "none";
menu.style.listStyleType = "none";
menu.style.fontSize = "25px"
menu.style.display = "flex";
menu.style.gap = "60px";
logo2.style.fontSize = "28px";


// header[0].append(nav);
//  nav.innerHTML = `
//     <div class="logo">
//        <h1 class="logo1">Startbootsrap</h1>
//     </div>
//     <ul class="menu">
//       <li><a href="#">service</a></li>
//       <li><a href="#">portfolio</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Team</a></li>
//       <li><a href="#">contact</a></li>
//     </ul>
//   </nav>
// `
