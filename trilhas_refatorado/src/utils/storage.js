const STORAGE_KEY = 'trilhas-da-vida-state';
export function saveGameState(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
export function loadGameState() { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return null; try { return JSON.parse(raw); } catch { return null; } }
export function clearGameState() { localStorage.removeItem(STORAGE_KEY); }