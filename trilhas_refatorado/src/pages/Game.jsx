import { GameProvider, useGame } from '../state/GameContext';
import WelcomeScreen from '../components/screens/WelcomeScreen';
import CharacterScreen from '../components/screens/CharacterScreen';
import BoardScreen from '../components/screens/BoardScreen';
import EndScreen from '../components/screens/EndScreen';
import { loadGameState } from '../utils/storage';
function GameFlow() {
  const { state, dispatch } = useGame();
  const handleContinue = () => {
    const saved = loadGameState();
    if (saved?.phase && saved.phase !== 'welcome') { dispatch({ type: 'CONTINUE_FROM_STORAGE', payload: saved }); return; }
    dispatch({ type: 'START_GAME' });
  };
  if (state.phase === 'welcome') return <WelcomeScreen onStart={() => dispatch({ type: 'START_GAME' })} onContinue={handleContinue} />;
  if (state.phase === 'character') return <CharacterScreen onSelect={(character) => dispatch({ type: 'DRAW_CHARACTER', payload: character })} />;
  if (state.phase === 'end') return <EndScreen state={state} onRestart={() => dispatch({ type: 'RESTART_GAME' })} />;
  return <BoardScreen state={state} onRoll={(value) => dispatch({ type: 'ROLL_DICE', payload: value })} onChoose={(choice) => dispatch({ type: 'CHOOSE_OPTION', payload: choice })} onRestart={() => dispatch({ type: 'RESTART_GAME' })} />;
}
export default function Game() { return <GameProvider><GameFlow /></GameProvider>; }