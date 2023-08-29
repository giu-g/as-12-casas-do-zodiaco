function MudaDesenho() {
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const descricao = document.querySelector(".descricao");

    if (valor == "aries" || valor == "áries") {
        texto.innerHTML = "Áries";
        imagem.setAttribute("src", "./img/aries.webp");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Mu é o Cavaleiro de Ouro que protege a primeira Casa do Zodíaco, a de Áries. Ele tem o poder de restaurar as armaduras sagradas e usar a telecinese. Ele foi discípulo de Shion, o antigo Cavaleiro de Áries e Grande Mestre. Ele se rebelou contra o falso Grande Mestre Saga e ajudou os Cavaleiros de Bronze na batalha das Doze Casas. Ele também lutou contra os Titãs no Episódio G e contra Hades na Guerra Santa. Mu é descrito como um guerreiro calmo e sábio, sempre ponderando suas ações antes de agir. Ele é um dos mais experientes Cavaleiros de Ouro e frequentemente é visto como um mentor para os outros personagens. Além disso, Mu também é o responsável pela manutenção e reparação das armaduras dos Cavaleiros nos primeiros arcos do anime.";
    }
    else if (valor == "touro") {
        texto.innerHTML = "Touro";
        imagem.setAttribute("src", "./img/touro.jpg");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Com uma magnitude, Aldebaran é retratado como um homem alto e musculoso, com cabelos castanhos e uma cicatriz na testa. Ele veste uma armadura dourada com chifres de touro, que simbolizam a sua constelação. Ele tem uma grande força física e um golpe chamado Grande Chifre. Aldebaran é brasileiro e nasceu em 8 de maio. Ele se sacrificou no Muro das Lamentações para abrir uma passagem para os Campos Elísios e depois renasceu em Asgard com uma nova armadura dourada. Seu nome vem da estrela mais brilhante da constelação de Touro, que significa “o seguidor” em árabe.";
    }
    else if (valor == "gemeos" || valor == "gêmeos") {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src", "./img/gemeos.jpg");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Saga é o Cavaleiro de Ouro de Gêmeos do século XX, que tinha uma personalidade dividida entre o bem e o mal. Ele matou o antigo Grande Mestre Shion e se disfarçou dele para tentar dominar o mundo. No entanto, viu seu plano ir por terra abaixo ao ser derrotado por Seiya com a ajuda de Atena e se arrependeu de seus crimes. Saga pode manipular a energia cósmica para criar explosões devastadoras ou abrir portais para outras dimensões. Ele também pode usar telecinese, telepatia e ilusão para controlar objetos e mentes, além de ser capaz de se mover e atacar na velocidade da luz ou até mais rápido qu ela.";
    }
    else if (valor == "cancer" || valor == "câncer") {
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src", "./img/cancer.jpg");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Máscara da Morte é um dos Doze Cavaleiros de Ouro, cuja armadura representa a constelação de Câncer. Ele é conhecido por sua aparência assustadora e pela máscara que cobre a maior parte de seu rosto. Sua personalidade é sádica e cruel, e ele gosta de brincar com seus inimigos antes de eliminá-los. Máscara da Morte pode criar um campo de força ao seu redor para protegê-lo de ataques, além de manipular o reino da morte para causar danos aos seus oponentes.";
    }
    else if (valor == "leao" || valor == "leão") {
        texto.innerHTML = "Leão";
        imagem.setAttribute("src", "./img/leao.jpg");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Aiolia de Leão é o Cavaleiro de Leão, um dos mais poderosos guerreiros da deusa Atena, e o irmão mais novo de Aiolos, o Cavaleiro de Ouro de Sagitário. Aiolia é conhecido por sua personalidade corajosa e justa, bem como por sua grande força física e habilidades em combate, como a velocidade. Inicialmente, Aiolia é retratado como um personagem desconfiado e cético em relação a Atena e aos Cavaleiros de Bronze, mas logo se torna um aliado leal e forte defensor da deusa e seus ideais. Ele também é muito apegado a seu irmão mais velho Aiolos, e fica profundamente abalado quando descobre a verdade sobre a morte dele. Aiolia foi afetado pelo Satã Imperial quando enfrentou Seiya na Casa de Leão. Esse é um golpe de ilusão que faz o alvo obedecer ao Saga sem questionar. Ficando sob o controle de Saga, ele atacou Seiya com toda a sua força e só se libertou do golpe quando Cassius se sacrificou para salvar Seiya.";
    }
    else if (valor == "virgem") {
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src", "./img/virgem.webp");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Shaka é o Cavaleiro de Ouro de Virgem que protege a sexta casa do zodíaco. Ele é considerado a reencarnação de Buda e tem um grande poder espiritual. Ele pode usar técnicas como o Tesouro do Céu, que elimina os cinco sentidos do adversário, e o Tenbu Hōrin, que sela os seis sentidos e leva à iluminação ou à morte. Ele é um dos cavaleiros mais próximos de Deus e tem uma personalidade calma e sábia.";
    }
    else if (valor == "libra") {
        texto.innerHTML = "Libra";
        imagem.setAttribute("src", "./img/libra.jpg");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "<Dohko é um dos Cavaleiros de Ouro que protegem o Santuário de Atena e que possui as 12 armas sagradas de Libra. As 12 armas sagradas de Libra são um conjunto de armas que fazem parte da armadura de ouro de Libra. Elas são proibidas por Atena e só podem ser usadas em situações extremas, como para destruir obstáculos poderosos ou enfrentar inimigos muito fortes. Elas são 6 pares de armas: uma espada, uma lança, um tridente, uma nunchaku, um escudo e uma tonfa. Dohko teve grande participação da Guerra Santa contra Hades no século XVIII e foi um dos únicos sobreviventes, junto com seu amigo Shion de Áries. Ele também é o mestre de Shiryu, um dos Cavaleiros de Bronze protagonistas da história.";
    }
    else if (valor == "escorpiao" || valor == "escorpião") {
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src", "./img/escorpiao.webp");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Milo de Escorpião é um dos Cavaleiros de Ouro mais poderosos e velozes do Santuário. Ele possui uma habilidade suprema chamada Agulha Escarlate, que pode atingir 14 pontos vitais do corpo humano e causar uma dor insuportável. Ele também pode bloquear e evitar qualquer técnica ao vê-la uma vez, além de lançar rajadas de energia e manipular átomos. Ele é um guerreiro orgulhoso e corajoso, que não teme enfrentar inimigos mais fortes ou traidores. Apesar de perigoso, Milo é leal à Atena e aos seus ideais de justiça.";
    }
    else if (valor == "sagitario" || valor == "sagitário") {
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src", "./img/sagitario.webp");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Aiolos de Sagitário é um dos personagens mais importantes da franquia “Cavaleiros do Zodíaco”. Ele é o irmão mais velho de Aiolia de Leão. Ele é o responsável por salvar a vida de Saori Kido, a reencarnação de Athena, quando ela ainda era um bebê. Aiolos, vendo o perigo que a vida da criança corria, desobedeceu as ordens do Santuário e a levou consigo para protegê-la.Infelizmente, Aiolos acabou sendo acusado de traição e condenado à morte nas mãos de Shura. Antes de morrer, ele entregou a Saori uma mensagem importante e a proteção de sua armadura de Sagitário, tornando-se assim um importante símbolo de esperança e resistência para os Cavaleiros de Bronze. A morte de Aiolos é mencionada logo no início da série, no primeiro episódio, quando a jovem Saori Kido é atacada por assassinos enviados pelo Santuário. Aiolos é mencionado como sendo o Cavaleiro de Ouro que a protegeu e entregou sua mensagem de esperança antes de morrer injustamente.";
    }
    else if (valor == "capricornio" || valor == "capricórnio") {
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src", "./img/capricornio.png");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Shura de Capricórnio é outro Cavaleiro de Ouro que protege a Casa de Capricórnio no Santuário. Ele se considera o cavaleiro mais fiel a Atena, mas sua lealdade ao Santuário o levou a cometer erros. Shura possui uma técnica chamada Excalibur, que é uma espada invisível capaz de cortar qualquer coisa. Ele foi o responsável por matar Aioros de Sagitário, que tentava salvar a bebê Atena do Grande Mestre. Seu oponente nas Doze Casas foi Shiryu, que acabou tendo que se sacrificar para encerrar o combate entre os dois.";
    }
    else if (valor == "aquario" || valor == "aquário") {
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src", "./img/aquario.png");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Kamus é o guardião da Casa de Aquário no Santuário e é o responsável por impedir a invasão de qualquer inimigo que tente passar por ela. Ele é considerado um dos mais habilidosos em manipulação do elemento do gelo, sendo capaz de congelar tudo o que está ao seu redor. Durante a Batalha das Doze Casas, os Cavaleiros de Bronze enfrentam Kamus na Casa de Aquário. No entanto, Hyoga de Cisne, discípulo de Kamus, surge para enfrentá-lo. Kamus tenta convencer Hyoga a se juntar a ele, mas Hyoga recusa, acreditando que deve seguir seu próprio caminho. A batalha entre os dois é intensa, mas no final, Hyoga consegue derrotar Kamus com sua técnica “Execução Aurora”.";
    }
    else if (valor == "peixes") {
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src", "./img/peixes.jpg");
        imagem.setAttribute("width", "480px");
        descricao.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro que protege a última Casa do Zodíaco, a de Peixes12. Ele usa golpes com rosas, que podem ser venenosas, explosivas ou cortantes. Ele se aliou ao Grande Mestre Saga, que se passava por Atena, pois acreditava que só um poder supremo poderia manter a paz no mundo. No seu combate, Afrodite usa rosas como armas em seus combates. Ele pode gerar e manipula-lás com seu cosmo e usá-las para atacar ou defender, além de possuir várias técnicas com as rosas, como a Rosa Sangrenta, que suga o sangue do oponente até a morte; a Rosa Piranha, que devora o corpo do inimigo; a Rosa Demoníaca Real, que libera um perfume mortal; e a Rosa Branca Albardeira, que perfura o coração do adversário. Ele também pode sentir a pulsação das plantas e se comunicar com ela, ler mentes e é imune às toxinas delas. Na sua batalha, ele enfrentou Shun de Andrômeda e foi derrotado pelo seu golpe Tempestade Nebulosa. Ele também participou da Guerra Santa contra Hades no século XVIII e na era atual em que é revivido.";
    }
    else {
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src", "./img/x.webp");
        imagem.setAttribute("width", "250px");
    }
}