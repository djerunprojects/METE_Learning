# CLAUDE.md

## Working rule
Always plan the project with the user and get explicit approval before writing any code.

## Project
METE Learning: a personal web app for learning metallurgical & materials engineering
through a skill tree with XP, player levels and two ranks per node (Learned, Mastered).

- Stack: React + TypeScript + Vite. Progress is stored in the browser (export/import planned).
- Content lives in `src/content/`:
  - `tree.ts`: branches and skill nodes with unlock rules (root → core → discipline → application).
  - `questions/*.ts`: questions per node, registered in `src/content/index.ts`.
  - `diagrams.ts`: regions for pick-the-region questions.
  - `types.ts`: the data formats.
- Questions are calculation-free: formulas may be shown, but questions ask about trends and
  reasoning, never arithmetic. Every question needs an explanation.
- Content language: English. Style: clean and friendly, accurate to the source material.
- Run `npm test` after content changes (integrity checks in `src/content/content.test.ts`).
