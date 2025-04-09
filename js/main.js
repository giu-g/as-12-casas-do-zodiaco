function MudaDesenho() {
  const title = document.querySelector("h1");
  const image = document.querySelector("#signo-img");
  const input = document.querySelector('#valor').value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  const descricao = document.querySelector(".descricao");

  const signos = {
    aries: ["aries", "áries", "ares"],
    touro: ["touro", "taurus", "torro", "toro"],
    gemeos: ["gemeos", "gêmeos", "gemini", "gemmini", "gêmeas", "gémeos", "gemos"],
    cancer: ["cancer", "câncer", "canceriano", "cânçer"],
    leao: ["leao", "leão", "leo", "leonino", "leon"],
    virgem: ["virgem", "virgo", "virgemm", "virguem"],
    libra: ["libra", "libbras", "libre", "libras"],
    escorpiao: ["escorpiao", "escorpião", "scorpio", "scorpiao", "escorpion"],
    sagitario: ["sagitario", "sagitário", "sagittarius", "sagitarius", "sagit"],
    capricornio: ["capricornio", "capricórnio", "capricorn", "capriconio", "capricon"],
    aquario: ["aquario", "aquário", "aquarius", "aquarious", "aquárius"],
    peixes: ["peixes", "pisces", "peichis", "pexe"]
  };

  let signoEncontrado = null;
  for (const signo in signos) {
    if (signos[signo].includes(input)) {
      signoEncontrado = signo;
      break;
    }
  }

  const imagens = {
  aries: "./img/aries.webp",
  touro: "./img/touro.jpg",
  gemeos: "./img/gemeos.jpg",
  cancer: "./img/cancer.jpg",
  leao: "./img/leao.jpg",
  virgem: "./img/virgem.webp",
  libra: "./img/libra.jpg",
  escorpiao: "./img/escorpiao.webp",
  sagitario: "./img/sagitario.webp",
  capricornio: "./img/capricornio.png",
  aquario: "./img/aquario.png",
  peixes: "./img/peixes.jpg"
};

  const descricoes = {
    aries: "Mu é o Cavaleiro de Ouro que protege o Templo de Áries. Mestre da telecinese e da reconstrução de armaduras.",
    touro: "Aldebaran é o Cavaleiro de Touro, vindo do Brasil. Sua força bruta é incomparável.",
    gemeos: "Saga e Kanon são os Cavaleiros de Gêmeos. Um representa a luz, o outro as trevas.",
    cancer: "Máscara da Morte, o Cavaleiro de Câncer, tem poderes ligados ao mundo dos mortos.",
    leao: "Aiolia é o Cavaleiro de Leão. Corajoso, leal e irmão de Aiolos de Sagitário.",
    virgem: "Shaka, o homem mais próximo de Deus, é o Cavaleiro de Virgem. Mestre do Cosmo e da meditação.",
    libra: "Dohko é o Cavaleiro de Libra. Guardião das armas sagradas e mestre de Shiryu.",
    escorpiao: "Milo é o Cavaleiro de Escorpião. Usa o golpe Agulha Escarlate com precisão letal.",
    sagitario: "Aiolos, o herói de Sagitário, protegeu Atena quando bebê e entregou sua armadura a Seiya.",
    capricornio: "Shura é o Cavaleiro de Capricórnio. Mestre da espada Excalibur em seus braços.",
    aquario: "Camus é o Cavaleiro de Aquário. Domina o gelo absoluto e treinou Hyoga.",
    peixes: "Afrodite é o Cavaleiro de Peixes. Beleza mortal e rosas venenosas são sua marca."
  };

  if (signoEncontrado) {
    title.innerHTML = signoEncontrado.charAt(0).toUpperCase() + signoEncontrado.slice(1);
    image.setAttribute("src", imagens[signoEncontrado]);
    descricao.innerHTML = descricoes[signoEncontrado];
  } else {
    title.innerHTML = "Signo não encontrado";
    image.setAttribute("src", "./img/x.webp");
    descricao.innerHTML = "Digite um signo válido para descobrir o Cavaleiro de Ouro correspondente.";
  }
}
