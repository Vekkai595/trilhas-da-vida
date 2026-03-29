import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WelcomeScreen from '../components/screens/WelcomeScreen';
import { characters, chooseWeightedEvent } from '../data/gameData';
import { applyChoiceToState, gameReducer } from '../state/gameReducer';
import { initialState } from '../state/initialState';
import { rollDice } from '../utils/dice';

describe('game logic', () => {
  it('draws a character into state', () => {
    const state = gameReducer(initialState, { type: 'DRAW_CHARACTER', payload: characters[0] });
    expect(state.character.name).toBe('João Pedro');
    expect(state.position).toBe(characters[0].startPosition);
  });
  it('rollDice returns value between 1 and 6', () => {
    for (let i = 0; i < 50; i += 1) { const value = rollDice(); expect(value).toBeGreaterThanOrEqual(1); expect(value).toBeLessThanOrEqual(6); }
  });
  it('applies event effects correctly', () => {
    const baseState = { ...initialState, phase: 'board', position: 5, health: 5, education: 2, money: 2, stress: 3, communitySupport: 1, currentEvent: { id: 'demo' }, choicesHistory: [] };
    const next = applyChoiceToState(baseState, { id: 'choice', label: 'Escolha teste', feedback: 'Funcionou.', effect: { health: 2, money: -1, education: 1, position: 2 } });
    expect(next.health).toBe(7); expect(next.money).toBe(1); expect(next.education).toBe(3); expect(next.position).toBe(7);
  });
  it('ends the game when player reaches final tile', () => {
    const state = gameReducer({ ...initialState, phase: 'board', position: 29, turn: 3, character: characters[0] }, { type: 'ROLL_DICE', payload: 2 });
    expect(state.phase).toBe('end'); expect(state.gameEnded).toBe(true);
  });
  it('selects available events for current character and history', () => {
    const event = chooseWeightedEvent({ ...initialState, character: characters[2], turn: 4, eventHistory: [], choicesHistory: [] });
    expect(event).toBeTruthy(); expect(event.choices.length).toBeGreaterThan(1);
  });
});

describe('screen rendering', () => {
  it('renders welcome screen buttons', async () => {
    const user = userEvent.setup(); const onStart = vi.fn();
    render(<WelcomeScreen onStart={onStart} onContinue={() => {}} />);
    const button = screen.getByRole('button', { name: /começar um novo jogo/i });
    await user.click(button); expect(onStart).toHaveBeenCalledTimes(1);
  });
});