const roulette = document.querySelector("#roulette");

const uno = {
    nombre: "uno",
  prob: 20,
};

const dos = {
  nombre: "dos",
  prob: 20,
};

const tres = {
  nombre: "tres",
  prob: 20,
};

conceptos = [uno, dos, tres];

const adjustRoulette = () => {
    const optionsContainer = document.createElement("div");
    optionsContainer.id = "optionsContainer";
    roulette.appendChild(optionsContainer);
};

adjustRoulette();
