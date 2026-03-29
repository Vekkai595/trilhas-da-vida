# Trilhas da Vida — Estruturas Invisíveis

Trilhas da Vida é um jogo educativo de tabuleiro construído em React para simular desigualdade social, escolhas de vida e o impacto de recursos disponíveis ao longo de uma trajetória.

O projeto foi refatorado para funcionar como um projeto de portfólio mais profissional, com arquitetura mais clara, estado centralizado, persistência, lógica de eventos mais rica e testes básicos.

## Objetivo do projeto

O jogo busca mostrar que as pessoas não começam do mesmo ponto. Cada personagem inicia com recursos e condições diferentes, e as escolhas ao longo do caminho alteram saúde, educação, dinheiro, estresse e apoio social.

A proposta é transformar um trabalho escolar em um produto digital jogável, com foco em:

- simulação social
- UX e interface visual
- organização de estado em React
- arquitetura escalável para novas regras do jogo

## Principais melhorias da refatoração

- **Arquitetura unificada**: `App.jsx` agora apenas renderiza o fluxo principal do jogo.
- **Estado centralizado**: a lógica principal foi movida para um `useReducer` com ações explícitas.
- **Sistema de recursos**: o jogo agora acompanha saúde, educação, dinheiro, estresse e apoio social.
- **Eventos condicionais**: eventos consideram personagem, turno e escolhas anteriores.
- **Persistência**: progresso salvo em `localStorage`.
- **Acessibilidade**: rótulos de botões, foco visível e headings semânticos.
- **Testes básicos**: lógica principal coberta com Vitest e Testing Library.
- **Repositório limpo**: sem `node_modules`, `dist` ou arquivos desnecessários.

## Arquitetura

```text
src/
  components/
    game/
    screens/
  data/
  pages/
  state/
  tests/
  utils/
  App.jsx
  main.jsx
```

### Organização interna

- `components/screens/`: telas principais do fluxo do jogo
- `components/game/`: componentes reutilizáveis da interface do tabuleiro
- `state/`: reducer, estado inicial e contexto do jogo
- `data/`: personagens, eventos e regras centrais
- `utils/`: funções auxiliares como dado e persistência
- `tests/`: testes básicos do fluxo lógico

## Gerenciamento de estado

O jogo utiliza `useReducer` para controlar um estado central com os campos:

- `character`
- `position`
- `turn`
- `health`
- `education`
- `money`
- `stress`
- `communitySupport`
- `eventHistory`
- `choicesHistory`
- `currentEvent`
- `gameEnded`

### Ações principais

- `START_GAME`
- `DRAW_CHARACTER`
- `ROLL_DICE`
- `CHOOSE_OPTION`
- `CONTINUE_FROM_STORAGE`
- `RESTART_GAME`

## Tecnologias usadas

- React
- Vite
- TailwindCSS
- Framer Motion
- Vitest
- React Testing Library

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como rodar os testes

```bash
npm run test
```

## Build de produção

```bash
npm run build
```

## Screenshots

Sugestão para o repositório GitHub:

- `docs/welcome-screen.png`
- `docs/character-draw.png`
- `docs/board-screen.png`
- `docs/end-screen.png`

## Roadmap

- múltiplos finais com mais nuance
- painel completo de histórico de decisões
- gráfico da evolução dos recursos da partida
- versão em inglês
- comparação entre personagens ao final
- deploy em Vercel

## O que este projeto demonstra em portfólio

Este projeto mostra capacidade de:

- estruturar uma aplicação React além do básico
- organizar lógica de jogo com reducer e estado central
- transformar um conceito social em uma experiência interativa
- pensar em manutenção, escalabilidade e UX

## Créditos

Projeto inspirado no trabalho escolar **Estruturas Invisíveis**, da Firjan SESI Caxias.
