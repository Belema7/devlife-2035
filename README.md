# Developer Future Simulator

Developer Future Simulator is a terminal-style diagnostic tool designed to analyze developer behavior and predict their career trajectory through a series of high-signal questions. It provides blunt, deterministic feedback based on calculated archetypes.

## Features

- **12-Question Diagnostic Engine**: Sharp, psychologically revealing questions designed to extract behavioral signals.
- **Deterministic Scoring Logic**: A weighted scoring system that evaluates dimensions such as Chaos, AI Dependency, Burnout, Clean Code Obsession, and Ego.
- **Multiple Developer Archetypes**: Categorizes users into distinct personas ranging from the Burned-Out Senior to the AI Overlord Dependent.
- **Dual Roast Variants**: Each archetype includes a primary hard roast and a secondary brutal variation for maximum impact.
- **Instant Response**: Fully client-side logic ensures zero network latency and no dependency on external AI APIs.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Library**: React
- **Styling**: Tailwind CSS
- **State Management**: React Hooks and Local Storage

## How It Works

### Scoring System
As the user answers each question, the system applies weighted modifiers to five core metrics. Each answer choice correlates with specific behavioral traits, allowing the engine to build a multidimensional profile of the developer.

### Archetype Selection
Upon completion of the diagnostic, the system runs a comparison algorithm across all defined archetypes. The archetype with the highest weighted score relative to the user's metrics is selected as the final verdict.

### Roast Mechanism
The system utilizes a hard-coded repository of personality-specific roasts. Instead of relying on dynamic AI generation, the engine retrieves two pre-defined, high-intensity roasts mapped specifically to the user's identified archetype.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Belema7/devlife-2035
cd devlife-2035
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## Project Structure Overview

- `/app`: Contains the application routes and layout logic.
- `/components`: Reusable UI components including terminal layouts and metric bars.
- `/lib`: Core business logic containing archetype definitions, diagnostic questions, and scoring algorithms.
- `/types`: TypeScript interfaces and type definitions for quiz data and results.
- `/public`: Static assets and icons.

## Future Improvements

- Additional diagnostic archetypes.
- Expanded question pool with Randomized selection.
- Enhanced terminal animations and visual effects.


