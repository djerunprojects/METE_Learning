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
  - `diagrams.ts`: regions for pick-the-region questions; drawings in `src/ui/diagramArt.tsx` (same region ids).
  - `formulas.ts`: formula library (name, expression with `{symbol}` markers, symbol names and units).
    Questions reference formulas by id; every symbol must be described.
  - `glossary.ts`: acronym → full name. Acronyms in any content text get a hover/tap tooltip automatically;
    tests fail if an all-caps acronym is missing from the glossary.
  - `types.ts`: the data formats.
- Game logic lives in `src/game/` (pure, tested): `lesson.ts` (build/grade), `scoring.ts` (XP, ranks),
  `unlock.ts` (node status), `levels.ts` (player level curve), `progress.ts` (saved state, streak, import/export),
  `proficiency.ts` (weighted accuracy over the last 20 answers).
- Questions are calculation-free: formulas may be shown, but questions ask about trends and
  reasoning, never arithmetic. Every question needs an explanation.
- Content is based on standard textbooks (Callister & Rethwisch, Askeland, Porter & Easterling, Dieter, Cullity);
  each question file names its sources. Every skill with content needs at least 10 questions.
  Content is written layer by layer; the Core and Discipline layers are done, Applications is next.
- Content language: English. Style: clean and friendly, accurate to the source material.
- Run `npm test` after content changes (integrity checks in `src/content/content.test.ts`).
