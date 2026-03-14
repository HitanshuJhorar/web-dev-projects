function generateHex() {
  const chars = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}

function palettegenerator() {
  let colors = "";

  for (let i = 0; i < 5; i++) {
    let hex = generateHex();
    colors += `
    <div class="card">
        <div class="color" style="background:${hex}" ></div>
        <div class="color-info">
            <span class="hexvalue">${hex}</span>
            <i class="fi fi-rr-copy-alt click-to-copy"></i>
        </div>
    </div>
    `;
  }
  return colors;
}



const generatepalette = document.getElementById("random");
const palettebox = document.querySelector(".palette-box");
generatepalette.addEventListener("click", () => {
  palettebox.innerHTML = palettegenerator();
});
palettebox.innerHTML = palettegenerator();
const copymsg=document.getElementById("copy-msg");

palettebox.addEventListener("click", (e) => {

  const card = e.target.closest(".card");

  if(!card) return;

  const hex = card.querySelector(".hexvalue").textContent;
  const icon = card.querySelector(".click-to-copy");

  navigator.clipboard.writeText(hex);
  
  icon.classList.replace("fi-rr-copy-alt","fi-br-check");

    setTimeout(()=>{
      icon.classList.replace("fi-br-check","fi-rr-copy-alt");
    },1500);
    
  copymsg.textContent="copied"+hex;
  copymsg.style.opacity="1";

  setTimeout(() => {
    copymsg.style.opacity="0";
  }, 1500);

});
