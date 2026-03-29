import { TOTAL_SPACES, chooseWeightedEvent } from '../data/gameData';
import { initialState } from './initialState';
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
export function applyChoiceToState(state, choice) {
  const effect = choice.effect;
  const position = clamp(state.position + (effect.position ?? 0), 0, TOTAL_SPACES - 1);
  const next = {
    ...state,
    position,
    health: clamp(state.health + (effect.health ?? 0), 0, 10),
    education: clamp(state.education + (effect.education ?? 0), 0, 10),
    money: clamp(state.money + (effect.money ?? 0), 0, 10),
    stress: clamp(state.stress + (effect.stress ?? 0), 0, 10),
    communitySupport: clamp(state.communitySupport + (effect.communitySupport ?? 0), 0, 10),
    currentEvent: null,
    statusMessage: choice.feedback,
    choicesHistory: [...state.choicesHistory, { id: choice.id, eventId: state.currentEvent.id, label: choice.label }],
  };
  if (next.position >= TOTAL_SPACES - 1) return { ...next, phase: 'end', gameEnded: true };
  return next;
}
export function gameReducer(state, action) {
  switch (action.type) {
    case 'START_GAME': return { ...state, phase: 'character', statusMessage: 'Sorteie seu personagem.' };
    case 'DRAW_CHARACTER': return { ...state, character: action.payload, phase: 'board', position: action.payload.startPosition, health: action.payload.stats.health, education: action.payload.stats.education, money: action.payload.stats.money, stress: action.payload.stats.stress, communitySupport: action.payload.stats.communitySupport, statusMessage: `${action.payload.name} entrou no tabuleiro com condições iniciais diferentes.` };
    case 'ROLL_DICE': {
      const position = clamp(state.position + action.payload, 0, TOTAL_SPACES - 1);
      const nextState = { ...state, position, turn: state.turn + 1, lastDiceRoll: action.payload, statusMessage: `Você tirou ${action.payload} no dado e avançou ${action.payload} casa${action.payload > 1 ? 's' : ''}.` };
      if (position >= TOTAL_SPACES - 1) return { ...nextState, phase: 'end', gameEnded: true };
      const event = chooseWeightedEvent(nextState);
      return { ...nextState, currentEvent: event, eventHistory: [...state.eventHistory, { id: event.id, category: event.category, turn: nextState.turn }] };
    }
    case 'CHOOSE_OPTION': return applyChoiceToState(state, action.payload);
    case 'CONTINUE_FROM_STORAGE': return { ...action.payload };
    case 'RESTART_GAME': return { ...initialState };
    default: return state;
  }
}