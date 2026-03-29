export const initialState = {
  phase: 'welcome', character: null, position: 0, turn: 1,
  health: 0, education: 0, money: 0, stress: 0, communitySupport: 0,
  currentEvent: null, eventHistory: [], choicesHistory: [], lastDiceRoll: null,
  statusMessage: 'Bem-vindo ao jogo.', gameEnded: false,
};