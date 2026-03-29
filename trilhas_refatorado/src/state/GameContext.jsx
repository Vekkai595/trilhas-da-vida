import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { gameReducer } from './gameReducer';
import { initialState } from './initialState';
import { clearGameState, loadGameState, saveGameState } from '../utils/storage';
const GameContext = createContext(null);
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  useEffect(() => { const saved = loadGameState(); if (saved?.phase) dispatch({ type: 'CONTINUE_FROM_STORAGE', payload: saved }); }, []);
  useEffect(() => { if (state.phase === 'welcome') { clearGameState(); return; } saveGameState(state); }, [state]);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
export function useGame() { const context = useContext(GameContext); if (!context) throw new Error('useGame must be used within GameProvider'); return context; }