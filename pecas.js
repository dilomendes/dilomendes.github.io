/* ===========================================================
   PEÇAS DO PORTFÓLIO
   -----------------------------------------------------------
   Pra adicionar um vídeo novo:
   1. joga o .mp4 comprimido em  videos/
   2. joga a capa .jpg em        capas/
   3. preenche "video" e "capa" na peça correspondente
   Peça nova entra no TOPO da lista da faixa (aparece primeiro).
   =========================================================== */

const FAIXAS = [
  {
    id: "cinema",
    nome: "Cinema com IA",
    destaque: true,
    sub: "Clipe, paródia e peça narrativa. Personagem consistente cena a cena — o asset vem antes da cena.",
    pecas: [
      { titulo: 'Kosky — "Luka Modrić"', spec: "clipe musical · 12 cenas", linha: "Três registros visuais — filmagem real, fotorrealismo e anime — alternando na batida, sem virar salada.", video: null, capa: null },
      { titulo: "Vila Fitness", spec: "paródia · 8 personagens · 21 clipes", linha: "Oito personagens criados do zero e mantidos idênticos do primeiro ao último quadro.", video: null, capa: null },
      { titulo: "Exército de Clones", spec: "curta cômico · collab", linha: "Uma piada só, esticada em formato de telejornal, com o mesmo sujeito multiplicado em cada cena.", video: null, capa: null },
      { titulo: "Mashup GTA × Racionais", spec: "reel · 16 cenas · estética PS2", linha: "Videogame reconstruído plano a plano, com HUD por cima.", video: null, capa: null },
      { titulo: "MC Romântico", spec: "clipe musical", linha: "Feito antes do sistema existir — na mão, do começo ao fim.", video: null, capa: null },
      { titulo: "Barbeiro — GTA San Andreas", spec: "peça local", linha: "Tela de carregamento, entrada na barbearia e o cabelo mudando conforme a escolha.", video: null, capa: null },
      { titulo: '"Tá olhando o quê?"', spec: "3,74 milhões de views", linha: "O que acontece quando a peça encontra o momento certo.", video: null, capa: null },
      { titulo: "Murphis", spec: "476 mil views", linha: "Atualidade virando peça no mesmo dia.", video: null, capa: null }
    ]
  },
  {
    id: "personagens",
    nome: "Personagens",
    sub: "Manter o mesmo rosto, a mesma pele e o mesmo corpo de uma cena pra outra é a parte mais difícil de vídeo com IA — é onde quase todo mundo desiste. Estes aqui atravessam o vídeo inteiro sem mudar.",
    pecas: [
      { titulo: "Leon Nayabing", spec: "100% IA · vitiligo no corpo inteiro", linha: "Vitiligo é o teste mais duro que existe: o padrão de manchas tem que repetir igual em todo plano.", video: null, capa: null },
      { titulo: "Vitália", spec: "narrativa · personagem próprio", linha: "Assessora de condomínio com sotaque, história e telefone — uma narrativa inteira sustentada por uma pessoa que não existe.", video: null, capa: null },
      { titulo: "Cleitin", spec: "3 episódios", linha: "Personagem construído na mão, antes de existir ferramenta que fizesse isso — e consistente nos três.", video: null, capa: null },
      { titulo: "Vitório — o jogador", spec: "animação · 19 frames · 6 takes", linha: "Freela de animação fechado, entregue e pago.", video: null, capa: null }
    ]
  },
  {
    id: "negocio",
    nome: "Vídeo pra negócio",
    sub: "Pra quem vende serviço e não tem tempo — nem vontade — de gravar. Você manda a referência, recebe pronto.",
    pecas: [
      { titulo: "Lafayette Studio", spec: "3 filmes de projeto", linha: "Projeto de arquitetura vira filme com gente ocupando o espaço. Foram esses três que fecharam o cliente.", video: null, capa: null },
      { titulo: "DJ Dubit", spec: "30 segundos", linha: "Ele mandou a referência e recebeu a festa pronta, sem precisar gravar nada.", video: null, capa: null },
      { titulo: "Prédio se construindo", spec: "animação de obra", linha: "A obra subindo em tempo comprimido: o projeto explicado sem uma palavra.", video: null, capa: null },
      { titulo: "Corretora de imóveis", spec: "avatar + 360 de obra", linha: "Apresentadora que não precisa de estúdio nem de agenda.", video: null, capa: null },
      { titulo: "Telão do Sanches", spec: "peça de evento", linha: "Vídeo feito pra rodar em telão, no tamanho e no ritmo da pista.", video: null, capa: null },
      { titulo: "Anúncio — cliente espanhol", spec: "peça em outro idioma", linha: "Roteiro e edição funcionando fora do português.", video: null, capa: null }
    ]
  },
  {
    id: "curso",
    nome: "Curso e infoproduto",
    sub: "Aula gravada virando produto pronto pra vender. É a coisa mais antiga que eu faço — desde 2020.",
    pecas: [
      { titulo: "Projeto 100K", spec: "8 aulas · evergreen", linha: "Curso entregue pronto pra vender. Fez R$5.297 no primeiro mês.", video: null, capa: null }
    ]
  },
  {
    id: "criador",
    nome: "Conteúdo pra criador",
    sub: "Canal que precisa publicar toda semana, com dia certo de entrega.",
    pecas: [
      { titulo: "Universidade do Intercâmbio", spec: "2023–2025 · vídeo diário", linha: "Dois anos de vídeo diário: react, lista e comparação, sem repetir fórmula.", video: null, capa: null },
      { titulo: "Romariz — vídeo longo", spec: "CTR 10,4% vs 4,8%", linha: "Primeiro vídeo longo do canal em anos. +60 inscritos em 24 horas.", video: null, capa: null },
      { titulo: "Laura", spec: "fitness / humor · recorrente", linha: "Edição semanal com dia certo de entrega.", video: null, capa: null },
      { titulo: "Cami", spec: "3 vídeos de YouTube", linha: "Longo editado com cena de IA integrada ao corte real.", video: null, capa: null },
      { titulo: "Thamires", spec: "literário / BookTok", linha: "Lotes de reels editados a partir de transcrição.", video: null, capa: null },
      { titulo: "Pedro Medici", spec: "nutrição", linha: "Da história pessoal ao formato de trend, no tom do nicho.", video: null, capa: null },
      { titulo: "Rulquinho", spec: "entrada no fitness", linha: "Edição pra quem está começando um canal do zero.", video: null, capa: null }
    ]
  },
  {
    id: "ugc",
    nome: "UGC de produto",
    sub: "Vídeo de produto sem rosto e sem estúdio, feito pra rodar em anúncio e vitrine.",
    pecas: [
      { titulo: "FEB Express — catálogo", spec: "loja de e-commerce", linha: "Catálogo inteiro em vídeo, sem estúdio e sem rosto.", video: null, capa: null },
      { titulo: "FEB Express — nova leva", spec: "19 vídeos de uma vez", linha: "Processo caiu de 8 horas para 3 minutos por peça.", video: null, capa: null },
      { titulo: "TikTok Shop", spec: "6 produtos · 3 ângulos cada", linha: "Feito pra rodar em anúncio, não pra ficar bonito no feed.", video: null, capa: null }
    ]
  }
];
