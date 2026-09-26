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
      { titulo: "Murphis", tags: ["meme", "atualidade", "476 mil de views"], video: "videos/cinema-diniz.mp4", preview: "videos/cinema-diniz-prev.mp4", capa: "capas/cinema-diniz.jpg" }
    ]
  },
  {
    id: "personagens",
    nome: "Personagens",
    sub: "Manter o mesmo rosto de uma cena pra outra é onde quase todo mundo desiste.",
    nichos: [
      { id: "propria",   nome: "Criação própria" },
      { id: "comercial", nome: "Comercial" },
      { id: "musical",   nome: "Musical" },
      { id: "real",      nome: "Personagem real" }
    ],
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
      { id: "anuncio",     nome: "Anúncios" }
    ],
    pecas: [
      { titulo: "Lafayette Studio", nicho: "arquitetura", tags: ["humanização de projeto", "antes e depois"], video: "videos/negocio-lafayette.mp4", preview: "videos/negocio-lafayette-prev.mp4", capa: "capas/negocio-lafayette.jpg" },
      { titulo: "Prédio se construindo", nicho: "arquitetura", tags: ["animação de obra", "tempo comprimido"], video: null, capa: null },
      { titulo: "DJ Dubit", nicho: "dj", tags: ["recriação de ambiente", "30 segundos"], video: "videos/negocio-dubit.mp4", preview: "videos/negocio-dubit-prev.mp4", capa: "capas/negocio-dubit.jpg" },
      { titulo: "Vinheta MENE", nicho: "dj", tags: ["motion", "logotipo animado", "loop de 5s"], video: "videos/negocio-mene.mp4", preview: "videos/negocio-mene-prev.mp4", capa: "capas/negocio-mene.jpg" },
      { titulo: "Telão do Sanches", nicho: "dj", tags: ["peça de evento", "formato telão"], video: null, capa: null },
      { titulo: "Corretora de imóveis", nicho: "imoveis", tags: ["avatar", "apresentadora IA", "360 de obra"], video: null, capa: null },
      { titulo: "Anúncio — cliente espanhol", nicho: "anuncio", tags: ["outro idioma", "anúncio"], video: null, capa: null }
    ]
  },
  {
    id: "curso",
    nome: "Curso e infoproduto",
    sub: "Aula gravada virando produto pronto pra vender.",
    pecas: [
      { titulo: "Projeto 100K", formato: "16:9", tags: ["montagem de curso", "8 aulas", "R$5.297 no 1º mês"], video: null, capa: null }
    ]
  },
  {
    id: "criador",
    nome: "Conteúdo pra criador",
    sub: "Canal que precisa publicar toda semana.",
    nichos: [
      { id: "youtube",    nome: "YouTube" },
      { id: "instagram",  nome: "Instagram" },
      { id: "consultoria", nome: "Consultoria" }
    ],
    pecas: [
      { titulo: "Pedro Medici — consultoria", nicho: "consultoria", tags: ["diagnóstico de perfil", "linha editorial", "posicionamento"], video: null, capa: null },
      { titulo: "Universidade do Intercâmbio", nicho: "youtube", formato: "16:9", tags: ["vídeo diário", "react", "2 anos de canal"], video: null, capa: null },
      { titulo: "Romariz — vídeo longo", nicho: "youtube", formato: "16:9", tags: ["YouTube longo", "CTR 10,4%", "retenção"], video: null, capa: null },
      { titulo: "Laura", nicho: "instagram", tags: ["reels recorrente", "humor", "fitness"], video: null, capa: null },
      { titulo: "Cami", nicho: "youtube", formato: "16:9", tags: ["YouTube", "IA dentro do corte real"], video: null, capa: null },
      { titulo: "Thamires", nicho: "instagram", tags: ["BookTok", "decupagem", "lote"], video: null, capa: null },
      { titulo: "Pedro Medici", nicho: "instagram", tags: ["nutrição", "trend", "storytelling"], video: null, capa: null },
      { titulo: "Rulquinho", nicho: "instagram", tags: ["canal novo", "fitness"], video: null, capa: null }
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
