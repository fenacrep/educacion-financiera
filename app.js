(()=>{
const data=window.COOPACS||{};
const grid=document.getElementById("coopacGrid");
const select=document.getElementById("coopacSelect");
const button=document.getElementById("registerCTA");
const selector=document.getElementById("coopacSelector");
const destination=document.getElementById("destinationNote");
const bottomName=document.getElementById("coopacNameBottom");

const participants=Object.entries(data)
  .filter(([,c])=>c.participa)
  .sort((a,b)=>a[1].nombre.localeCompare(b[1].nombre,"es"));

function registrationUrl(c){
  return `https://${c.subdominio}.escuelacooperativa.net/curso/formacion-en-educacion-financiera-coopac-062022/registro`;
}

participants.forEach(([key,c])=>{
  const el=document.createElement("div");
  el.className="logo-slot";
  if(c.logo){
    const im=document.createElement("img");
    im.src=c.logo; im.alt=c.nombre; el.appendChild(im);
  } else {
    const s=document.createElement("span");
    s.textContent=c.nombre; el.appendChild(s);
  }
  grid.appendChild(el);

  const opt=document.createElement("option");
  opt.value=key; opt.textContent=c.nombre;
  select.appendChild(opt);
});

function setDisabled(){
  button.href="#";
  button.classList.add("btn-disabled");
  button.setAttribute("aria-disabled","true");
  destination.hidden=true;
  bottomName.textContent="";
}

function setSelected(key){
  const c=data[key];
  if(!c||!c.participa){ setDisabled(); return; }
  button.href=registrationUrl(c);
  button.classList.remove("btn-disabled");
  button.removeAttribute("aria-disabled");
  bottomName.textContent=c.nombre;
  destination.hidden=false;
}

select.addEventListener("change",()=>setSelected(select.value));

button.addEventListener("click",(e)=>{
  if(button.getAttribute("aria-disabled")==="true") e.preventDefault();
});

const params=new URLSearchParams(location.search);
const key=(params.get("coopac")||"").toLowerCase().trim();
const c=data[key];

if(c&&c.participa){
  document.getElementById("coopacContext").hidden=false;
  document.getElementById("coopacNameHero").textContent=c.nombre;
  document.getElementById("accessEyebrow").textContent="TU COOPERATIVA TE ACERCA ESTA OPORTUNIDAD";
  document.getElementById("accessTitle").textContent=`${c.nombre} te invita a participar`;
  document.getElementById("accessCopy").textContent="Solicita tu inscripción al curso de Educación Financiera desde el Aula Virtual de tu cooperativa.";
  selector.hidden=true;
  button.textContent="Solicitar inscripción";
  setSelected(key);
} else {
  setDisabled();
}
})();