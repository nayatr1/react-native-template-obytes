<h1 align="center">React Native Template — Expo 58 (Xcode 27 and the iPhone Duo support)</h1>

<p align="center">
  <strong>Day-one ready for Xcode 27 and the iPhone Duo — Apple's foldable iPhone. Done by qwen4-max-preview</strong>
</p>

<p align="center">
  A fork of the <a href="https://github.com/obytes/react-native-template-obytes">Obytes React Native Template</a> on <strong>Expo SDK 58</strong> / <strong>React Native 0.88</strong>, with foldable-aware native navigation, rail-safe layouts and free rotation — verified with a clean Xcode 27 build so you can target Apple's newest hardware without reworking your app.
</p>

<p align="center">
  <img alt="Expo SDK 58" src="https://img.shields.io/badge/Expo-SDK%2058-000020?logo=expo" />
  <img alt="React Native 0.88" src="https://img.shields.io/badge/React%20Native-0.88-61DAFB?logo=react" />
  <img alt="React 19.3" src="https://img.shields.io/badge/React-19.3-61DAFB?logo=react" />
  <img alt="Xcode 27" src="https://img.shields.io/badge/Xcode-27-147EFB?logo=xcode" />
  <img alt="iPhone Duo ready" src="https://img.shields.io/badge/iPhone%20Duo-ready-000020?logo=apple" />
  <img alt="TypeScript 6" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript" />
</p>

## ✨ Highlights

- 📱 **iPhone Duo ready** — native sidebar navigation, rail-aware safe areas and free rotation for every pose: folded, open, partially open and Split View. [See how ↓](#-iphone-duo-support)
- 🛠 **Xcode 27 verified** — clean prebuild plus iOS simulator build & run on Xcode 27, with `expo-doctor` passing **20/20**.
- ⚡ **Current-generation stack** — Expo SDK 58, React Native 0.88, React 19.3, TypeScript 6, Reanimated 4.7.
- ✅ **Green quality gates** — `pnpm check-all`: lint, types, i18n and **43 tests** passing.

## 🍴 About this fork

This repository is a fork of the [Obytes React Native Template](https://github.com/obytes/react-native-template-obytes), rebuilt for Apple's newest toolchain and hardware: **Expo SDK 58 / React Native 0.88.1 / React 19.3**, verified end-to-end on **Xcode 27** (clean prebuild + iOS simulator build & run), with first-class **iPhone Duo** support. Clone it, run `pnpm ios`, and your app is already foldable-aware.

> 🤖 All modifications in this fork — the Expo 58 / Xcode 27 upgrade and the subsequent fixes — were made by **qwen4-max-preview**.

The original Obytes starter is a production-ready Expo template focused on developer experience: TypeScript, TailwindCSS (Uniwind), expo-router, TanStack Query & Form, Zustand + MMKV auth flow, i18next, multi-environment EAS builds, Jest / Testing Library, Maestro E2E and GitHub Actions CI. This fork keeps all of it.

👉 For the full feature list, philosophy and guides, see the [original README](https://github.com/obytes/react-native-template-obytes#readme) and the [Obytes starter documentation](https://starter.obytes.com).

### What changed in this fork

- **iPhone Duo (foldable) support** following [Expo's official guidance](https://expo.dev/blog/supporting-iphone-duo): native tab navigation with sidebar placement, rail-aware safe areas on every screen, free rotation — see [below](#-iphone-duo-support)
- **Xcode 27 toolchain** — clean prebuild + iOS simulator build & run verified on Xcode 27; the iPhone Duo simulator in Device Hub needs Xcode 27.1+
- **Expo SDK 54 → 58**, React Native 0.81 → **0.88.1**, React 19.1 → **19.3**
- **TypeScript 6**, **Jest 30** + **Testing Library v14** (async render API)
- Reanimated **4.7** / Worklets **0.13**, Gesture Handler **3.3**, Screens **4.30**, MMKV **4.3**
- App code migrated to expo-router 58 APIs (navigation themes & focus hooks now come from `expo-router`)
- Verified: `pnpm check-all` (lint, types, i18n, 43 tests) ✅ · `expo-doctor` **20/20** ✅ · clean iOS build on Xcode 27 ✅

## ⚡️ Quick install

### Requirements

- [Node.js LTS](https://nodejs.org/en/) and [pnpm](https://pnpm.io/installation) (v10)
- [Watchman](https://facebook.github.io/watchman/docs/install) (macOS / Linux)
- **iOS:** Xcode 27 with an iOS simulator (**27.1+** for the iPhone Duo simulator) — see the [React Native environment setup](https://reactnative.dev/docs/environment-setup)
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

## 📱 iPhone Duo support

A foldable iPhone is not just a bigger screen — the hinge, the vertical rail and resizable windows change the rules. This template follows [Supporting iPhone Duo with Expo](https://expo.dev/blog/supporting-iphone-duo) so the app behaves correctly on Apple's foldable iPhone in every pose — folded, open, partially open, and in Split View — out of the box:

- **Native navigation** — the tab bar uses `NativeTabs` (`expo-router/native-tabs`) with `preferredPlacement="sidebar"`, so iOS can move it into the vertical rail and turn it into a sidebar on the open landscape display. Each tab nests a native `Stack` for headers; header actions (e.g. **Create**) participate in the rail automatically. Custom JS tab bars are not used — they can't follow Duo conventions.
- **Rail-aware safe areas** — iOS reserves an 84pt inset on one edge for the vertical rail. Every screen keeps interactive content clear of it: scroll-view content is wrapped in `SafeAreaView edges={['left', 'right']}`, the feed applies live `useSafeAreaInsets()` padding to the list content, and the modal close button positions itself from the live right inset. Both edges are handled (the rail can sit on the left in Split View, and it stays on the camera's physical edge in RTL).
- **Free rotation** — `orientation` is `default` in `app.config.ts` so the open display can be used in landscape; layouts widen instead of switching designs. Avoid caching `Dimensions` values — read `useWindowDimensions` at render time, since the window resizes when the device folds or enters Split View.

### Testing on the Duo simulator

No foldable hardware required — the iPhone Duo simulator ships with **Xcode 27.1+** in **Device Hub** (Xcode ▸ Open Developer Tool ▸ Device Hub), where you can adjust the hinge angle and try every pose:

```sh
pnpm prebuild
pnpm ios   # pick the iPhone Duo simulator
```

Check every pose: folded, open portrait/landscape, partially open (nothing readable or tappable in the fold), Split View in both windows, and folding mid-screen (scroll position and state must survive). On a standard iPhone nothing should change.

Optional next steps from the article, not included here: `@expo/ui` `<ArrangementView>` for two-pane layouts, expo-router `<SplitView>`, `expo-hinge` for hinge-aware UI, and `react-native-reserved-regions` for custom layouts that avoid the fold.

## 🔖 License & credits

MIT — see [LICENSE](./LICENSE). All credit for the original template goes to the [Obytes mobile tribe team](https://www.obytes.com/team). This fork carries the Expo 58 / Xcode 27 upgrade, iPhone Duo support, and related fixes, all made by **qwen4-max-preview**.
