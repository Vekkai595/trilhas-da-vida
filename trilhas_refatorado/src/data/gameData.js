export const BOARD_IMAGE = 'https://media.base44.com/images/public/user_689e36d709f11b337086f7ea/6b9440a9f_tabuleiro.jpg';
export const PATH = [
  { x: 50, y: 92 }, { x: 38, y: 88 }, { x: 26, y: 84 }, { x: 16, y: 78 }, { x: 10, y: 68 },
  { x: 8, y: 56 }, { x: 10, y: 44 }, { x: 14, y: 33 }, { x: 22, y: 23 }, { x: 32, y: 16 },
  { x: 43, y: 12 }, { x: 54, y: 12 }, { x: 65, y: 16 }, { x: 74, y: 23 }, { x: 80, y: 33 },
  { x: 84, y: 44 }, { x: 84, y: 56 }, { x: 80, y: 68 }, { x: 72, y: 78 }, { x: 62, y: 84 },
  { x: 50, y: 88 }, { x: 40, y: 80 }, { x: 30, y: 72 }, { x: 25, y: 62 }, { x: 30, y: 52 },
  { x: 38, y: 44 }, { x: 48, y: 40 }, { x: 58, y: 44 }, { x: 64, y: 54 }, { x: 60, y: 64 },
  { x: 50, y: 50 },
];
export const TOTAL_SPACES = PATH.length;
export const characters = [
  { id: 'easy', name: 'João Pedro', emoji: '👦🏻', level: 'Fácil', levelColor: '#22c55e', description: 'Filho de família rica. Tem escola particular, plano de saúde e rede de apoio forte.', startPosition: 3, stats: { health: 7, education: 4, money: 6, stress: 1, communitySupport: 4 }, advantages: ['Escola particular', 'Plano de saúde', 'Aulas extras', 'Transporte próprio'] },
  { id: 'medium', name: 'Ana Clara', emoji: '👧🏽', level: 'Médio', levelColor: '#f59e0b', description: 'Filha de família de classe média. Tem acesso básico a serviços e oportunidades moderadas.', startPosition: 1, stats: { health: 6, education: 3, money: 3, stress: 2, communitySupport: 3 }, advantages: ['Escola pública boa', 'Posto de saúde', 'Biblioteca próxima'] },
  { id: 'hard', name: 'Maria das Dores', emoji: '👩🏿', level: 'Difícil', levelColor: '#ef4444', description: 'Filha de família em vulnerabilidade. Precisa trabalhar cedo e enfrenta barreiras estruturais.', startPosition: 0, stats: { health: 5, education: 1, money: 1, stress: 4, communitySupport: 2 }, advantages: ['Força de vontade', 'Criatividade'] },
];
export const events = [
  { id: 'scholarship-night', icon: '🎓', category: 'Educação', minTurn: 1, situation: 'Você recebeu a chance de estudar à noite, mas isso reduz o tempo disponível para trabalho e descanso.', weights: { easy: 1, medium: 2, hard: 3 }, choices: [ { id: 'study', label: 'Aceitar e estudar', effect: { position: 2, education: 2, money: -1, stress: 1 }, feedback: 'O esforço aumentou seu repertório e abriu novas portas.' }, { id: 'work', label: 'Priorizar o trabalho', effect: { position: -1, money: 2, education: -1, stress: 1 }, feedback: 'Você protegeu a renda imediata, mas perdeu uma oportunidade de longo prazo.' } ] },
  { id: 'health-clinic', icon: '🏥', category: 'Saúde', minTurn: 2, situation: 'Você está doente e precisa decidir entre esperar horas no posto ou continuar a rotina sem atendimento.', weights: { easy: 1, medium: 2, hard: 3 }, choices: [ { id: 'wait-care', label: 'Esperar atendimento', effect: { health: 2, money: -1, stress: 1 }, feedback: 'O cuidado atrasou seu dia, mas evitou um problema maior.' }, { id: 'ignore-care', label: 'Seguir sem tratar', effect: { health: -2, stress: 2, money: 1 }, feedback: 'A decisão pareceu prática no começo, mas cobrou seu preço.' } ] },
  { id: 'community-garden', icon: '🌱', category: 'Comunidade', minTurn: 1, situation: 'Sua comunidade quer criar um horto coletivo. Isso toma tempo, mas fortalece vínculos e melhora a alimentação.', weights: { easy: 1, medium: 2, hard: 2 }, choices: [ { id: 'join-garden', label: 'Participar do projeto', effect: { communitySupport: 2, health: 1, stress: -1 }, feedback: 'A participação coletiva fortaleceu a rede de apoio do bairro.' }, { id: 'skip-garden', label: 'Focar apenas na rotina', effect: { money: 1, communitySupport: -1 }, feedback: 'Você preservou tempo imediato, mas perdeu conexão comunitária.' } ] },
  { id: 'talent-program', icon: '🌟', category: 'Oportunidade', minTurn: 3, situation: 'Um professor indica você para um programa de jovens talentos que exige dedicação extra.', weights: { easy: 2, medium: 2, hard: 1 }, choices: [ { id: 'accept-program', label: 'Aceitar o desafio', effect: { education: 2, stress: 1, position: 2 }, feedback: 'Você ganhou visibilidade e ampliou as possibilidades de futuro.' }, { id: 'decline-program', label: 'Recusar por insegurança', effect: { stress: -1, education: -1 }, feedback: 'A escolha protegeu sua energia, mas fechou uma chance rara.' } ] },
  { id: 'job-transport', icon: '💼', category: 'Trabalho', minTurn: 3, situation: 'Você conseguiu um estágio distante. O custo do transporte pesa, mas a experiência pode valer a pena.', weights: { easy: 1, medium: 2, hard: 3 }, choices: [ { id: 'take-stage', label: 'Aceitar o estágio', effect: { money: -1, education: 1, position: 2, stress: 1 }, feedback: 'O caminho ficou mais puxado, mas você ganhou repertório e conexão profissional.' }, { id: 'decline-stage', label: 'Recusar por falta de recursos', effect: { money: 1, position: -1, communitySupport: -1 }, feedback: 'A necessidade imediata limitou uma possibilidade de crescimento.' } ] },
  { id: 'school-closing', icon: '📚', category: 'Mobilização', minTurn: 4, situation: 'Sua escola corre risco de fechar. Estudantes podem se mobilizar para pressionar o poder público.', weights: { easy: 1, medium: 2, hard: 2 }, choices: [ { id: 'organize-students', label: 'Organizar mobilização', effect: { communitySupport: 2, education: 1, stress: 1, position: 1 }, feedback: 'A ação coletiva mostrou que participação também transforma estruturas.' }, { id: 'accept-closure', label: 'Aceitar a situação', effect: { education: -2, position: -2, stress: 1 }, feedback: 'Sem organização, a perda recaiu mais forte sobre quem já tinha menos.' } ] },
  { id: 'support-after-organizing', icon: '🤝', category: 'Rede de apoio', minTurn: 5, requiresChoice: 'organize-students', situation: 'Depois de participar de uma mobilização, uma ONG local oferece mentoria e reforço escolar.', weights: { easy: 1, medium: 2, hard: 2 }, choices: [ { id: 'accept-mentoring', label: 'Aceitar mentoria', effect: { education: 2, communitySupport: 1, stress: -1 }, feedback: 'A rede criada pela sua escolha anterior gerou novas oportunidades.' }, { id: 'decline-mentoring', label: 'Recusar por cansaço', effect: { stress: -1, education: -1 }, feedback: 'Nem toda oportunidade cabe em uma rotina sobrecarregada.' } ] },
];
export const reflectionMessage = 'Este jogo mostra que as pessoas não começam no mesmo lugar. O objetivo não é culpar indivíduos, mas enxergar como acesso, apoio e recursos moldam trajetórias. Quando entendemos isso, podemos construir respostas mais justas.';
export const CREDITS = { school: 'Firjan SESI Caxias', subject: 'Trabalho de Artes', main: 'Produção principal: Samuel Borba Cordeiro' };
export function chooseWeightedEvent(state) {
  const available = events.filter((event) => {
    if (state.turn < event.minTurn) return false;
    if (event.requiresChoice && !state.choicesHistory.some((choice) => choice.id === event.requiresChoice)) return false;
    const seenRecently = state.eventHistory.slice(-3).some((item) => item.id === event.id);
    return !seenRecently;
  });
  const pool = available.length ? available : events;
  const weighted = pool.flatMap((event) => Array(event.weights[state.character?.id] ?? 1).fill(event));
  return weighted[Math.floor(Math.random() * weighted.length)];
}
export function getEndingSummary(state) {
  const score = state.education + state.money + state.health + state.communitySupport - state.stress;
  if (score >= 18) return { title: 'Caminho de expansão', summary: 'Você terminou com recursos, apoio e oportunidades para continuar crescendo.', tone: 'positive' };
  if (score >= 11) return { title: 'Equilíbrio construído com esforço', summary: 'Seu percurso teve obstáculos reais, mas você encerrou a jornada com bases para seguir.', tone: 'balanced' };
  return { title: 'Trajetória sob pressão', summary: 'As barreiras pesaram mais do que os apoios disponíveis. Isso ajuda a visualizar como desigualdade limita escolhas.', tone: 'warning' };
}