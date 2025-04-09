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
    aries: "https://upload.wikimedia.org/wikipedia/pt/0/04/Mu_de_Aries.jpg",
    touro: "https://upload.wikimedia.org/wikipedia/pt/5/5a/Aldebaran_de_Touro.jpg",
    gemeos: "https://upload.wikimedia.org/wikipedia/pt/2/25/Saga_e_Kanon_de_Gemeos.jpg",
    cancer: "https://upload.wikimedia.org/wikipedia/pt/b/b9/Mascara_da_Morte_de_Cancer.jpg",
    leao: "https://upload.wikimedia.org/wikipedia/pt/d/d3/Aiolia_de_Leao.jpg",
    virgem: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Shaka_de_Virgem.jpg",
    libra: "https://upload.wikimedia.org/wikipedia/pt/1/1f/Dohko_de_Libra.jpg",
    escorpiao: "https://upload.wikimedia.org/wikipedia/pt/c/c4/Milo_de_Escorpiao.jpg",
    sagitario: "https://upload.wikimedia.org/wikipedia/pt/b/be/Aiolos_de_Sagitario.jpg",
    capricornio: "https://upload.wikimedia.org/wikipedia/pt/8/8d/Shura_de_Capricornio.jpg",
    aquario: "https://upload.wikimedia.org/wikipedia/pt/4/41/Camus_de_Aquario.jpg",
    peixes: "https://upload.wikimedia.org/wikipedia/pt/d/d2/Afrodite_de_Peixes.jpg"
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
    image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Zodiac_signs_Constellation_Art.png/800px-Zodiac_signs_Constellation_Art.png");
    descricao.innerHTML = "Digite um signo válido para descobrir o Cavaleiro de Ouro correspondente.";
  }
}
