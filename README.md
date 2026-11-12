<h1 align="center">React Native Template — Expo 58</h1>

<p align="center">
  Fork of the <a href="https://github.com/obytes/react-native-template-obytes">Obytes React Native Template</a>, upgraded to <strong>Expo SDK 58</strong> and <strong>React Native 0.88</strong> — ready for <strong>Xcode 27</strong>.
</p>

<p align="center">
  <img alt="Expo SDK 58" src="https://img.shields.io/badge/Expo-SDK%2058-000020?logo=expo" />
  <img alt="React Native 0.88" src="https://img.shields.io/badge/React%20Native-0.88-61DAFB?logo=react" />
  <img alt="React 19.3" src="https://img.shields.io/badge/React-19.3-61DAFB?logo=react" />
  <img alt="Xcode 27" src="https://img.shields.io/badge/Xcode-27-147EFB?logo=xcode" />
  <img alt="TypeScript 6" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript" />
</p>

## 🍴 About this fork

This repository is a fork of the [Obytes React Native Template](https://github.com/obytes/react-native-template-obytes) with the toolchain upgraded to **Expo SDK 58 / React Native 0.88.1 / React 19.3**, verified end-to-end on **Xcode 27** (clean prebuild + iOS simulator build & run).

The original Obytes starter is a production-ready Expo template focused on developer experience: TypeScript, TailwindCSS (Uniwind), expo-router, TanStack Query & Form, Zustand + MMKV auth flow, i18next, multi-environment EAS builds, Jest / Testing Library, Maestro E2E and GitHub Actions CI. This fork keeps all of it.

👉 For the full feature list, philosophy and guides, see the [original README](https://github.com/obytes/react-native-template-obytes#readme) and the [Obytes starter documentation](https://starter.obytes.com).

### What changed in this fork

- **Expo SDK 54 → 58**, React Native 0.81 → **0.88.1**, React 19.1 → **19.3**
- **TypeScript 6**, **Jest 30** + **Testing Library v14** (async render API)
- Reanimated **4.7** / Worklets **0.13**, Gesture Handler **3.3**, Screens **4.30**, MMKV **4.3**
- App code migrated to expo-router 58 APIs (navigation themes & focus hooks now come from `expo-router`)
- Verified: `pnpm check-all` (lint, types, i18n, 40 tests) ✅ · `expo-doctor` **20/20** ✅ · clean iOS build on Xcode 27 ✅

## ⚡️ Quick install

### Requirements

- [Node.js LTS](https://nodejs.org/en/) and [pnpm](https://pnpm.io/installation) (v10)
- [Watchman](https://facebook.github.io/watchman/docs/install) (macOS / Linux)
- **iOS:** Xcode 27 with an iOS simulator — see the [React Native environment setup](https://reactnative.dev/docs/environment-setup)
- **Android:** Android Studio with an emulator or device

### Run it

```sh
git clone https://github.com/nayatr1/react-native-template-obytes.git
cd react-native-template-obytes

pnpm install
pnpm prebuild    # generate the native ios/ and android/ projects
pnpm ios         # build & run on the iOS simulator
# pnpm android   # or run on Android
```

Environment variables ship in `.env` (development defaults); see `env.ts` for the schema and the `*:preview` / `*:production` script variants.

### Useful commands

| Command | Description |
| --- | --- |
| `pnpm start` | Start the Metro dev server |
| `pnpm ios` / `pnpm android` | Build & run the native app |
| `pnpm test` | Run the Jest test suite |
| `pnpm check-all` | Lint + type-check + translations + tests |
| `pnpm doctor` | Validate dependencies against the Expo SDK |

## 🔖 License & credits

MIT — see [LICENSE](./LICENSE). All credit for the original template goes to the [Obytes mobile tribe team](https://www.obytes.com/team); this fork only carries the Expo 58 / Xcode 27 upgrade.
