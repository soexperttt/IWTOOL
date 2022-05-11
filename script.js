let discord = document.querySelector(".disc");
discord.style.color = "#ffffff";
discord.style.transition = "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
discord.style.visibility = "hidden";
discord.style.opacity = "0%";

function mover() {
  discord.style.visibility = "visible";
  discord.style.color = "#00f2ff";
  discord.style.opacity = "100%";
}
function mleave() {
  discord.style.visibility = "hidden";
  discord.style.color = "#ffffff";
  discord.style.opacity = "0%";
}

const boxes = document.querySelectorAll(".txt");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 3;

  boxes.forEach((txt) => {
    console.log(txt);
    const top = txt.getBoundingClientRect().top;

    if (trigger > top) {
      txt.classList.add("txt_show");
    } else {
      txt.classList.remove("txt_show");
    }
  });
}
