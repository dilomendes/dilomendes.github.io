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
      { titulo: 'Kosky — "Luka Modrić"', tags: ["storytelling", "consistência de personagem", "3 registros visuais", "corte na batida"], video: null, capa: null },
      { titulo: "Vila Fitness", tags: ["criação de personagem", "consistência", "storytelling", "vozes"], video: null, capa: null },
      { titulo: "Exército de Clones", tags: ["multiplicação de personagem", "comédia", "formato telejornal"], video: null, capa: null },
      { titulo: "Mashup GTA × Racionais", tags: ["estética de jogo", "recriação de referência", "HUD"], video: null, capa: null },
      { titulo: "MC Romântico", tags: ["clipe musical", "feito na mão"], video: null, capa: null },
      { titulo: "Barbeiro — GTA San Andreas", tags: ["estética de jogo", "interface de game", "comércio local"], video: null, capa: null },
      { titulo: '"Tá olhando o quê?"', tags: ["meme", "timing", "3,7 mi de views"], video: null, capa: null },
      { titulo: "Murphis", tags: ["meme", "atualidade", "476 mil de views"], video: null, capa: null }
    ]
  },
  {
    id: "personagens",
    nome: "Personagens",
    sub: "Manter o mesmo rosto de uma cena pra outra é onde quase todo mundo desiste.",
    pecas: [
      { titulo: "Leon Nayabing", tags: ["vitiligo consistente", "100% IA", "design de personagem"], video: null, capa: null },
      { titulo: "Vitália", tags: ["criação de personagem", "sotaque e voz", "storytelling"], video: null, capa: null },
      { titulo: "Cleitin", tags: ["personagem próprio", "série de 3", "consistência"], video: null, capa: null },
      { titulo: "Vitório — o jogador", tags: ["animação", "pessoa real", "freela fechado"], video: null, capa: null }
    ]
  },
  {
    id: "negocio",
    nome: "Vídeo pra negócio",
    sub: "Você manda a referência, recebe pronto. Sem gravar nada.",
    pecas: [
      { titulo: "Lafayette Studio", tags: ["humanização de projeto", "arquitetura", "antes e depois"], video: null, capa: null },
      { titulo: "DJ Dubit", tags: ["recriação de ambiente", "evento", "30 segundos"], video: null, capa: null },
      { titulo: "Prédio se construindo", tags: ["animação de obra", "tempo comprimido"], video: null, capa: null },
      { titulo: "Corretora de imóveis", tags: ["avatar", "apresentadora IA", "360 de obra"], video: null, capa: null },
      { titulo: "Telão do Sanches", tags: ["peça de evento", "formato telão"], video: null, capa: null },
      { titulo: "Anúncio — cliente espanhol", tags: ["outro idioma", "anúncio"], video: null, capa: null }
    ]
  },
  {
    id: "curso",
    nome: "Curso e infoproduto",
    sub: "Aula gravada virando produto pronto pra vender.",
    pecas: [
      { titulo: "Projeto 100K", tags: ["montagem de curso", "8 aulas", "R$5.297 no 1º mês"], video: null, capa: null }
    ]
  },
  {
    id: "criador",
    nome: "Conteúdo pra criador",
    sub: "Canal que precisa publicar toda semana.",
    pecas: [
      { titulo: "Universidade do Intercâmbio", tags: ["vídeo diário", "react", "2 anos de canal"], video: null, capa: null },
      { titulo: "Romariz — vídeo longo", tags: ["YouTube longo", "CTR 10,4%", "retenção"], video: null, capa: null },
      { titulo: "Laura", tags: ["reels recorrente", "humor", "fitness"], video: null, capa: null },
      { titulo: "Cami", tags: ["YouTube", "IA dentro do corte real"], video: null, capa: null },
      { titulo: "Thamires", tags: ["BookTok", "decupagem", "lote"], video: null, capa: null },
      { titulo: "Pedro Medici", tags: ["nutrição", "trend", "storytelling"], video: null, capa: null },
      { titulo: "Rulquinho", tags: ["canal novo", "fitness"], video: null, capa: null }
    ]
  },
  {
    id: "ugc",
    nome: "UGC de produto",
    sub: "Vídeo de produto sem rosto e sem estúdio.",
    pecas: [
      { titulo: "FEB Express — catálogo", tags: ["produto sem rosto", "e-commerce", "catálogo inteiro"], video: null, capa: null },
      { titulo: "FEB Express — nova leva", tags: ["escala", "19 vídeos", "8h → 3min"], video: null, capa: null },
      { titulo: "TikTok Shop", tags: ["anúncio", "6 produtos", "3 ângulos cada"], video: null, capa: null }
    ]
  }
];
