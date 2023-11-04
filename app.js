var settings=document.querySelector('.more');
const lastCild=document.querySelector('.lastChild h1');

function show(){
    document.querySelector('.box1').style.display='flex';
};

function settingsMenuToggle(){
    settings.classList.toggle('more-height');
    const toggled=settings.classList.contains('more-height');
    lastCild.classList=toggled ? lastCild.innerHTML='x':lastCild.innerHTML='&equiv;';
};
document.querySelector("#solutions").addEventListener("click", function() {
    var section = document.getElementById("solutions-section");
    section.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#pricing").addEventListener("click", function() {
    var section = document.getElementById("pricing-section");
    section.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#portfolio").addEventListener("click", function() {
    var section = document.getElementById("portfolio-section");
    section.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#solutionsmobile").addEventListener("click", function() {
    var section = document.getElementById("solutions-section");
    section.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#pricingmobile").addEventListener("click", function() {
    var section = document.getElementById("pricing-section");
    section.scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#portfoliomobile").addEventListener("click", function() {
    var section = document.getElementById("portfolio-section");
    section.scrollIntoView({ behavior: "smooth" });
});

