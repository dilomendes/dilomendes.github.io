/* ===========================================================
   PEÇAS DO PORTFÓLIO
   -----------------------------------------------------------
   Pra adicionar um vídeo novo:
   1. joga o .mp4 comprimido em  videos/
   2. joga a capa .jpg em        capas/
   3. preenche "video" e "capa" na peça
   Peça nova entra no TOPO da lista da faixa.

   "tags" = as habilidades que aquela peça prova. É o que mostra
   o repertório sem precisar de texto explicando.
   =========================================================== */

const PERFIL = {
  nome: "Dilo",
  foto: "capas/dilo.jpg",          // ← trocar pela foto real
  bio: "Edito vídeo desde 2020. Hoje faço com IA o que antes dependia de equipe: personagem que não muda de rosto, história do roteiro ao corte final, e peça pronta sem o cliente precisar gravar nada.",
  instagram: "https://instagram.com/diloomendes",
  arroba: "@diloomendes",
  email: "rodrigo.digobmx@gmail.com"
};

const FAIXAS = [
  {
    id: "cinema",
    nome: "Cinema com IA",
    destaque: true,
    sub: "Clipe, paródia e peça narrativa.",
    pecas: [
      { titulo: 'Kosky — "Luka Modrić"', tags: ["storytelling", "consistência de personagem", "3 registros visuais", "corte na batida"], video: "videos/cinema-kosky.mp4", preview: "videos/cinema-kosky-prev.mp4", capa: "capas/cinema-kosky.jpg" },
      { titulo: "Vila Fitness", tags: ["criação de personagem", "consistência", "storytelling", "vozes"], video: "videos/cinema-vila-fitness.mp4", preview: "videos/cinema-vila-fitness-prev.mp4", capa: "capas/cinema-vila-fitness.jpg" },
      { titulo: "Exército de Clones", tags: ["multiplicação de personagem", "comédia", "formato telejornal"], video: "videos/cinema-exercito-clones.mp4", preview: "videos/cinema-exercito-clones-prev.mp4", capa: "capas/cinema-exercito-clones.jpg" },
      { titulo: "Mashup GTA × Racionais", tags: ["estética de jogo", "recriação de referência", "HUD"], video: "videos/cinema-navas-gta.mp4", preview: "videos/cinema-navas-gta-prev.mp4", capa: "capas/cinema-navas-gta.jpg" },
      { titulo: "MC Romântico", tags: ["clipe musical", "feito na mão"], video: "videos/cinema-mc-romantico.mp4", preview: "videos/cinema-mc-romantico-prev.mp4", capa: "capas/cinema-mc-romantico.jpg" },
      { titulo: "Barbeiro — GTA San Andreas", tags: ["estética de jogo", "interface de game", "comércio local"], video: "videos/cinema-barbeiro.mp4", preview: "videos/cinema-barbeiro-prev.mp4", capa: "capas/cinema-barbeiro.jpg" },
      { titulo: '"Tá gravando o quê?"', tags: ["meme", "timing", "3,7 mi de views"], video: "videos/cinema-trevor.mp4", preview: "videos/cinema-trevor-prev.mp4", capa: "capas/cinema-trevor.jpg" },
      { titulo: "Cami — o corte com IA", tags: ["IA dentro do corte real", "carro pegando fogo", "YouTube"], video: "videos/cinema-cami-ia.mp4", preview: "videos/cinema-cami-ia-prev.mp4", capa: "capas/cinema-cami-ia.jpg" },
      { titulo: "Murphis", tags: ["meme", "atualidade", "476 mil de views"], video: "videos/cinema-diniz.mp4", preview: "videos/cinema-diniz-prev.mp4", capa: "capas/cinema-diniz.jpg" }
    ]
  },
  {
    id: "personagens",
    nome: "Personagens",
    sub: "Manter o mesmo rosto de uma cena pra outra é onde quase todo mundo desiste.",
    pecas: [
      { titulo: "Leon Nayabing", nicho: "musical", tags: ["vitiligo consistente", "100% IA", "design de personagem"], video: "videos/person-leon.mp4", preview: "videos/person-leon-prev.mp4", capa: "capas/person-leon.jpg" },
      { titulo: "Vitália", nicho: "comercial", tags: ["criação de personagem", "sotaque e voz", "storytelling"], video: "videos/person-vitalia.mp4", preview: "videos/person-vitalia-prev.mp4", capa: "capas/person-vitalia.jpg" },
      { titulo: "Cleitin", nicho: "propria", tags: ["personagem próprio", "feito na mão"], video: "videos/person-cleitin-01.mp4", preview: "videos/person-cleitin-01-prev.mp4", capa: "capas/person-cleitin-01.jpg" },
      { titulo: "Cleitin — o Fusca", nicho: "propria", tags: ["mesmo personagem", "cenário novo", "episódio 2"], video: "videos/person-cleitin-fusca.mp4", preview: "videos/person-cleitin-fusca-prev.mp4", capa: "capas/person-cleitin-fusca.jpg" },
      { titulo: "Cleitin — Boiben", nicho: "propria", tags: ["consistência entre episódios", "série", "episódio 3"], video: "videos/person-cleitin-boiben.mp4", preview: "videos/person-cleitin-boiben-prev.mp4", capa: "capas/person-cleitin-boiben.jpg" },
      { titulo: "Vitório — o jogador", nicho: "real", tags: ["animação", "pessoa real", "freela fechado"], video: "videos/person-vitorio.mp4", preview: "videos/person-vitorio-prev.mp4", capa: "capas/person-vitorio.jpg" }
    ]
  },
  {
    id: "negocio",
    nome: "Vídeo pra negócio",
    sub: "Você manda a referência, recebe pronto. Sem gravar nada.",
    /* subnichos: a faixa ganha filtro quando esta lista existe.
       Peça nova só precisa do campo "nicho" batendo com um id daqui. */
    nichos: [
      { id: "arquitetura", nome: "Arquitetura" },
      { id: "dj",          nome: "DJ e evento" },
      { id: "imoveis",     nome: "Imóveis" },
      { id: "anuncio",     nome: "Anúncios" },
      { id: "local",       nome: "Comércio local" }
    ],
    pecas: [
      { titulo: "Lafayette Studio", nicho: "arquitetura", tags: ["humanização de projeto", "antes e depois"], video: "videos/negocio-lafayette.mp4", preview: "videos/negocio-lafayette-prev.mp4", capa: "capas/negocio-lafayette.jpg" },
      { titulo: "Lafayette — apartamento moderno", nicho: "arquitetura", youtube: "78q8cycmjNA", tags: ["filme de projeto", "interiores", "no canal"], video: null, capa: null },
      { titulo: "Alexandre — primeiro projeto", nicho: "arquitetura", formato: "16:9", tags: ["antes do Lafayette", "arquitetura", "primeiro teste"], video: "videos/negocio-alexandre.mp4", preview: "videos/negocio-alexandre-prev.mp4", capa: "capas/negocio-alexandre.jpg" },
      { titulo: "Prédio se construindo", nicho: "arquitetura", tags: ["animação de obra", "tempo comprimido"], video: "videos/negocio-predio.mp4", preview: "videos/negocio-predio-prev.mp4", capa: "capas/negocio-predio.jpg" },
      { titulo: "DJ Dubit", nicho: "dj", tags: ["recriação de ambiente", "30 segundos"], video: "videos/negocio-dubit.mp4", preview: "videos/negocio-dubit-prev.mp4", capa: "capas/negocio-dubit.jpg" },
      { titulo: "Vinheta MENE", nicho: "dj", tags: ["motion", "logotipo animado", "loop de 5s"], video: "videos/negocio-mene.mp4", preview: "videos/negocio-mene-prev.mp4", capa: "capas/negocio-mene.jpg" },
      { titulo: "Telão do Sanches", nicho: "dj", formato: "16:9", tags: ["peça de evento", "formato telão", "25 segundos"], video: "videos/negocio-sanches.mp4", preview: "videos/negocio-sanches-prev.mp4", capa: "capas/negocio-sanches.jpg" },
      { titulo: "Corretora de imóveis", nicho: "imoveis", tags: ["avatar", "apresentadora IA", "360 de obra"], video: null, capa: null },
      { titulo: "Anúncio — cliente espanhol", nicho: "anuncio", tags: ["outro idioma", "anúncio"], video: "videos/negocio-espanhol.mp4", preview: "videos/negocio-espanhol-prev.mp4", capa: "capas/negocio-espanhol.jpg" },
      { titulo: "Estúdio de tatuagem — 01", nicho: "local", tags: ["reel", "sem VFX", "corte e ritmo"], video: "videos/negocio-tatuador-01.mp4", preview: "videos/negocio-tatuador-01-prev.mp4", capa: "capas/negocio-tatuador-01.jpg" },
      { titulo: "Estúdio de tatuagem — 02", nicho: "local", tags: ["reel", "sem VFX"], video: "videos/negocio-tatuador-02.mp4", preview: "videos/negocio-tatuador-02-prev.mp4", capa: "capas/negocio-tatuador-02.jpg" },
      { titulo: "Estúdio de tatuagem — 03", nicho: "local", tags: ["reel", "sem VFX"], video: "videos/negocio-tatuador-03.mp4", preview: "videos/negocio-tatuador-03-prev.mp4", capa: "capas/negocio-tatuador-03.jpg" },
      { titulo: "Estúdio de tatuagem — 04", nicho: "local", tags: ["reel", "sem VFX"], video: "videos/negocio-tatuador-04.mp4", preview: "videos/negocio-tatuador-04-prev.mp4", capa: "capas/negocio-tatuador-04.jpg" },
      { titulo: "Estúdio de tatuagem — 05", nicho: "local", tags: ["reel", "sem VFX"], video: "videos/negocio-tatuador-05.mp4", preview: "videos/negocio-tatuador-05-prev.mp4", capa: "capas/negocio-tatuador-05.jpg" },
    ]
  },
  {
    id: "curso",
    nome: "Curso e infoproduto",
    sub: "Aula gravada virando produto pronto pra vender.",
    pecas: [
      { titulo: "Projeto 100K — introdução", formato: "16:9", tags: ["abertura do curso", "8 aulas", "R$5.297 no 1º mês"], video: "videos/curso-100k-intro.mp4", preview: "videos/curso-100k-intro-prev.mp4", capa: "capas/curso-100k-intro.jpg" },
      { titulo: "Projeto 100K — aula 1", formato: "16:9", tags: ["aula montada", "comportamento humano", "5 min"], video: "videos/curso-100k-aula1.mp4", preview: "videos/curso-100k-aula1-prev.mp4", capa: "capas/curso-100k-aula1.jpg" },
      { titulo: "Tree — abertura do curso", formato: "16:9", tags: ["vinheta", "identidade visual", "2022"], video: "videos/curso-tree-vinheta.mp4", preview: "videos/curso-tree-vinheta-prev.mp4", capa: "capas/curso-tree-vinheta.jpg" },
      { titulo: "Tree — aula curta", formato: "16:9", tags: ["EAD", "diversidade", "Camtasia"], video: "videos/curso-tree-aula1.mp4", preview: "videos/curso-tree-aula1-prev.mp4", capa: "capas/curso-tree-aula1.jpg" },
      { titulo: "Tree — aula completa", formato: "16:9", tags: ["EAD", "aula de 6 min"], video: "videos/curso-tree-aula2.mp4", preview: "videos/curso-tree-aula2-prev.mp4", capa: "capas/curso-tree-aula2.jpg" },
      { titulo: "Tree — aula longa", formato: "16:9", tags: ["EAD", "aula de 10 min", "curso inteiro"], video: "videos/curso-tree-aula3.mp4", preview: "videos/curso-tree-aula3-prev.mp4", capa: "capas/curso-tree-aula3.jpg" }
    ]
  },
  {
    id: "criador",
    nome: "Conteúdo pra criador",
    sub: "Canal que precisa publicar toda semana.",
    nichos: [
      { id: "tomoto",    nome: "Matheus Tomoto" },
      { id: "romariz",   nome: "Romariz" },
      { id: "cami",      nome: "Camila Zanoni" },
      { id: "laura",     nome: "Laura Erse" },
      { id: "pedro",     nome: "Pedro Medici" },
      { id: "joao",      nome: "João Bernardino" },
      { id: "thamires",  nome: "Thamires" },
      { id: "hulkinho",  nome: "Hulkinho" },
      { id: "testes",    nome: "Testes com IA" }
    ],
    pecas: [
      { titulo: "Pedro Medici — consultoria", nicho: "pedro", tags: ["diagnóstico de perfil", "linha editorial", "posicionamento"], video: null, capa: null },
      { titulo: "10 melhores países para estudar e trabalhar", nicho: "tomoto", youtube: "Mbm6aayT1bQ", tags: ["maior canal de intercâmbio do Brasil", "+1,1M inscritos", "formato lista"], video: null, capa: null },
      { titulo: "Técnicas para aprender inglês mais rápido", nicho: "tomoto", youtube: "SJ80MToEqVc", tags: ["alta retenção", "storytelling"], video: null, capa: null },
      { titulo: "7 sites para ganhar em dólar de casa", nicho: "tomoto", youtube: "4ffEafdg_5U", tags: ["formato viral", "teste de formato"], video: null, capa: null },
      { titulo: "Postando mais de 30 vídeos todo dia", nicho: "romariz", youtube: "jbpXyebS_8Y", tags: ["YouTube longo", "rotina de criador"], video: null, capa: null },
      { titulo: "O brasileiro trocou a amante pelo delivery", nicho: "romariz", youtube: "_k2lLGXh480", tags: ["comentário de internet", "corte seco"], video: null, capa: null },
      { titulo: "GTA VI: eu não esperava isso no trailer novo", nicho: "romariz", youtube: "L0rYQBz0LA4", tags: ["reação", "games"], video: null, capa: null },
      { titulo: "VSL — maior canal de intercâmbio", nicho: "tomoto", formato: "16:9", tags: ["VSL", "alta retenção", "+1,1M inscritos"], video: "videos/criador-vsl.mp4", preview: "videos/criador-vsl-prev.mp4", capa: "capas/criador-vsl.jpg" },
      { titulo: "Animação de IA em vídeo diário", nicho: "testes", formato: "16:9", tags: ["IA na edição", "conteúdo diário", "teste de formato"], video: "videos/criador-teste-ia.mp4", preview: "videos/criador-teste-ia-prev.mp4", capa: "capas/criador-teste-ia.jpg" },
      { titulo: "João Bernardino — Projeto Eupresa", nicho: "joao", youtube: "WaG-NyXhfM8", tags: ["negócio digital", "série"], video: null, capa: null },
      { titulo: "Laura Erse — conteúdo de comunidade", nicho: "laura", formato: "16:9", tags: ["área de membros", "vídeo longo", "público fechado"], video: "videos/criador-laura-01.mp4", preview: "videos/criador-laura-01-prev.mp4", capa: "capas/criador-laura-01.jpg" },
      { titulo: "Laura Erse — 02", nicho: "laura", tags: ["fitness", "humor"], video: "videos/criador-laura-02.mp4", preview: "videos/criador-laura-02-prev.mp4", capa: "capas/criador-laura-02.jpg" },
      { titulo: "Laura Erse — 03", nicho: "laura", tags: ["fitness", "humor"], video: "videos/criador-laura-03.mp4", preview: "videos/criador-laura-03-prev.mp4", capa: "capas/criador-laura-03.jpg" },
      { titulo: "Laura Erse — 04", nicho: "laura", tags: ["fitness", "humor"], video: "videos/criador-laura-04.mp4", preview: "videos/criador-laura-04-prev.mp4", capa: "capas/criador-laura-04.jpg" },
      { titulo: "Laura Erse — 05", nicho: "laura", tags: ["fitness", "humor"], video: "videos/criador-laura-05.mp4", preview: "videos/criador-laura-05-prev.mp4", capa: "capas/criador-laura-05.jpg" },
      { titulo: "Camila Zanoni — Detroit, ep. 1", nicho: "cami", youtube: "jlAlwUF0e_4", tags: ["gameplay narrativo", "YouTube longo"], video: null, capa: null },
      { titulo: "Camila Zanoni — vlog da F1", nicho: "cami", youtube: "B9kNNWrh_4Q", tags: ["vlog", "corte de ritmo"], video: null, capa: null },
      { titulo: "Camila Zanoni — final da Libertadores", nicho: "cami", youtube: "j2fJV6FEpyE", tags: ["vlog", "evento"], video: null, capa: null },
      { titulo: "Camila Zanoni — gameplay Valorant", nicho: "cami", youtube: "v0EZarGDWrE", tags: ["gameplay", "edição de reação"], video: null, capa: null },
      { titulo: "Thamires — trilogia, com spoilers", nicho: "thamires", tags: ["BookTok", "resenha", "com spoiler"], video: "videos/criador-thamires-01.mp4", preview: "videos/criador-thamires-01-prev.mp4", capa: "capas/criador-thamires-01.jpg" },
      { titulo: "Thamires — eu me verei, com spoilers", nicho: "thamires", tags: ["BookTok", "resenha", "com spoiler"], video: "videos/criador-thamires-02.mp4", preview: "videos/criador-thamires-02-prev.mp4", capa: "capas/criador-thamires-02.jpg" },
      { titulo: "Thamires — a boa sorte, sem spoiler", nicho: "thamires", tags: ["BookTok", "resenha", "sem spoiler"], video: "videos/criador-thamires-03.mp4", preview: "videos/criador-thamires-03-prev.mp4", capa: "capas/criador-thamires-03.jpg" },
      { titulo: "Thamires — Amy Galo", nicho: "thamires", tags: ["BookTok", "resenha"], video: "videos/criador-thamires-04.mp4", preview: "videos/criador-thamires-04-prev.mp4", capa: "capas/criador-thamires-04.jpg" },
      { titulo: "Pedro Medici", nicho: "pedro", tags: ["nutrição", "trend", "storytelling"], video: null, capa: null },
      { titulo: "Hulkinho — 01", nicho: "hulkinho", tags: ["formato viral", "canal novo"], video: "videos/criador-hulkinho-01.mp4", preview: "videos/criador-hulkinho-01-prev.mp4", capa: "capas/criador-hulkinho-01.jpg" },
      { titulo: "Hulkinho — 02", nicho: "hulkinho", tags: ["canal novo", "corte e ritmo"], video: "videos/criador-hulkinho-02.mp4", preview: "videos/criador-hulkinho-02-prev.mp4", capa: "capas/criador-hulkinho-02.jpg" },
      { titulo: "Hulkinho — 03", nicho: "hulkinho", tags: ["canal novo", "corte e ritmo"], video: "videos/criador-hulkinho-03.mp4", preview: "videos/criador-hulkinho-03-prev.mp4", capa: "capas/criador-hulkinho-03.jpg" }
    ]
  },
  {
    id: "ugc",
    nome: "UGC de produto",
    sub: "Sem estúdio, sem rosto, sem o produto na mão. Catálogo inteiro de e-commerce em vídeo — o processo caiu de 8 horas para 3 minutos por peça.",
    pecas: [
      { titulo: "Impressora 3D", tags: ["demonstração", "produto técnico"], video: "videos/ugc-impressora.mp4", preview: "videos/ugc-impressora-prev.mp4", capa: "capas/ugc-impressora.jpg" },
      { titulo: "Laser verde", tags: ["luz", "produto pequeno"], video: "videos/ugc-laser.mp4", preview: "videos/ugc-laser-prev.mp4", capa: "capas/ugc-laser.jpg" },
      { titulo: "Máquina de lavar", tags: ["eletrodoméstico", "produto grande"], video: "videos/ugc-maq-lavar.mp4", preview: "videos/ugc-maq-lavar-prev.mp4", capa: "capas/ugc-maq-lavar.jpg" },
      { titulo: "Modelador de cachos", tags: ["beleza", "produto em uso"], video: "videos/ugc-modelador.mp4", preview: "videos/ugc-modelador-prev.mp4", capa: "capas/ugc-modelador.jpg" },
      { titulo: "Console de game", tags: ["eletrônico", "presente"], video: "videos/ugc-game.mp4", preview: "videos/ugc-game-prev.mp4", capa: "capas/ugc-game.jpg" },
      { titulo: "Kit médico infantil", tags: ["infantil", "produto lúdico"], video: "videos/ugc-kit-medico.mp4", preview: "videos/ugc-kit-medico-prev.mp4", capa: "capas/ugc-kit-medico.jpg" },
      { titulo: "Galáxia", tags: ["luz ambiente", "3 cenas"], video: "videos/ugc-galaxia.mp4", preview: "videos/ugc-galaxia-prev.mp4", capa: "capas/ugc-galaxia.jpg" },
      { titulo: "Astronauta", tags: ["luminária", "presente"], video: "videos/ugc-astronauta.mp4", preview: "videos/ugc-astronauta-prev.mp4", capa: "capas/ugc-astronauta.jpg" },
      { titulo: "Difusor", tags: ["aroma", "casa"], video: "videos/ugc-difusor.mp4", preview: "videos/ugc-difusor-prev.mp4", capa: "capas/ugc-difusor.jpg" },
      { titulo: "Fita LED", tags: ["iluminação", "quarto"], video: "videos/ugc-fita-led.mp4", preview: "videos/ugc-fita-led-prev.mp4", capa: "capas/ugc-fita-led.jpg" },
      { titulo: "Moon Lamp", tags: ["luminária", "decoração"], video: "videos/ugc-moon-lamp.mp4", preview: "videos/ugc-moon-lamp-prev.mp4", capa: "capas/ugc-moon-lamp.jpg" },
      { titulo: "Sunset Lamp", tags: ["luz", "ambiente"], video: "videos/ugc-sunset-lamp.mp4", preview: "videos/ugc-sunset-lamp-prev.mp4", capa: "capas/ugc-sunset-lamp.jpg" },
      { titulo: "Afiador de facas", tags: ["cozinha", "utensílio"], video: "videos/ugc-afiador.mp4", preview: "videos/ugc-afiador-prev.mp4", capa: "capas/ugc-afiador.jpg" },
      { titulo: "Amassador de alho", tags: ["cozinha", "utensílio"], video: "videos/ugc-amassador-de-alho.mp4", preview: "videos/ugc-amassador-de-alho-prev.mp4", capa: "capas/ugc-amassador-de-alho.jpg" },
      { titulo: "Aparador de pelos", tags: ["cuidado pessoal"], video: "videos/ugc-aparador-de-pelos.mp4", preview: "videos/ugc-aparador-de-pelos-prev.mp4", capa: "capas/ugc-aparador-de-pelos.jpg" },
      { titulo: "Balança bluetooth", tags: ["fitness", "conectado"], video: "videos/ugc-balanca-bluetooth.mp4", preview: "videos/ugc-balanca-bluetooth-prev.mp4", capa: "capas/ugc-balanca-bluetooth.jpg" },
      { titulo: "Balança digital", tags: ["cozinha", "precisão"], video: "videos/ugc-balanca-digital.mp4", preview: "videos/ugc-balanca-digital-prev.mp4", capa: "capas/ugc-balanca-digital.jpg" },
      { titulo: "Barra magnética", tags: ["organização", "cozinha"], video: "videos/ugc-barra.mp4", preview: "videos/ugc-barra-prev.mp4", capa: "capas/ugc-barra.jpg" },
      { titulo: "Bate clara inox", tags: ["cozinha", "utensílio"], video: "videos/ugc-bate-clara.mp4", preview: "videos/ugc-bate-clara-prev.mp4", capa: "capas/ugc-bate-clara.jpg" },
      { titulo: "Jogo de talheres", tags: ["mesa", "kit"], video: "videos/ugc-talheres.mp4", preview: "videos/ugc-talheres-prev.mp4", capa: "capas/ugc-talheres.jpg" },
      { titulo: "Abridor de vinhos", tags: ["kit", "presente"], video: "videos/ugc-abridor-de-vinho.mp4", preview: "videos/ugc-abridor-de-vinho-prev.mp4", capa: "capas/ugc-abridor-de-vinho.jpg" },
      { titulo: "Kit corpo humano", tags: ["infantil", "educativo"], video: "videos/ugc-kit-corpo-humano.mp4", preview: "videos/ugc-kit-corpo-humano-prev.mp4", capa: "capas/ugc-kit-corpo-humano.jpg" },
      { titulo: "Lança bolhas", tags: ["infantil", "brinquedo"], video: "videos/ugc-lanca-bolhas.mp4", preview: "videos/ugc-lanca-bolhas-prev.mp4", capa: "capas/ugc-lanca-bolhas.jpg" },
      { titulo: "Mini mixer", tags: ["cozinha", "eletroportátil"], video: "videos/ugc-minimixer.mp4", preview: "videos/ugc-minimixer-prev.mp4", capa: "capas/ugc-minimixer.jpg" },
      { titulo: "Moedor de temperos", tags: ["cozinha", "elétrico"], video: "videos/ugc-moedor.mp4", preview: "videos/ugc-moedor-prev.mp4", capa: "capas/ugc-moedor.jpg" },
      { titulo: "Suporte inteligente", tags: ["acessório", "celular"], video: "videos/ugc-suporte.mp4", preview: "videos/ugc-suporte-prev.mp4", capa: "capas/ugc-suporte.jpg" },
      { titulo: "Termômetro", tags: ["saúde", "infantil"], video: "videos/ugc-termometro.mp4", preview: "videos/ugc-termometro-prev.mp4", capa: "capas/ugc-termometro.jpg" },
      { titulo: "Tesoura", tags: ["utensílio"], video: "videos/ugc-tesoura.mp4", preview: "videos/ugc-tesoura-prev.mp4", capa: "capas/ugc-tesoura.jpg" },
      { titulo: "Xilofone", tags: ["infantil", "brinquedo"], video: "videos/ugc-xilofone.mp4", preview: "videos/ugc-xilofone-prev.mp4", capa: "capas/ugc-xilofone.jpg" }
    ]
  }
];
