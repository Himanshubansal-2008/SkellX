# SkellX

**A customizable, production-ready skeleton loading component library for React Native.**

SkellX provides reusable, high-performance skeleton loading components with shimmer, pulse, and static animation modes. Build elegant loading placeholders for common mobile UI patterns with customizable shapes, layouts, light/dark themes, and zero external native dependencies.

---

## Features

- **Multiple Animation Modes:** Smooth shimmer, pulse, and static modes driven by React Native's native animated driver.
- **18 Reusable Components:** Ready-made skeletons for common mobile UI patterns plus primitive building blocks.
- **Theme Support:** Built-in light and dark themes with full support for custom color themes.
- **Card & Container Theming:** Seamless background and highlight color adaptation across dark and light modes.
- **Robust Dimension Validation:** Full support for numeric dimensions, percentage strings, and responsive layouts.
- **Zero Native Dependencies:** Pure React Native implementation that works seamlessly with Expo and React Native CLI.

---

## Installation

```bash
npm install skellx
```

### Peer Dependencies

Ensure `react` and `react-native` are installed in your project:

```bash
npm install react react-native
```

*(React >= 18.0.0 and React Native >= 0.73.0 are supported)*

---

## Quick Start

```jsx
import React from 'react';
import { View } from 'react-native';
import {
  BoxSkeleton,
  CircleSkeleton,
  TextSkeleton,
  CardSkeleton,
} from 'skellx';

const LoadingScreen = () => {
  return (
    <View style={{ padding: 16 }}>
      {/* Basic shapes */}
      <CircleSkeleton size={60} />
      <BoxSkeleton width="100%" height={24} borderRadius={6} style={{ marginVertical: 12 }} />
      <TextSkeleton lines={3} />

      {/* Preset layout */}
      <CardSkeleton style={{ marginTop: 20 }} />
    </View>
  );
};

export default LoadingScreen;
```

---

## Components

SkellX includes 18 pre-built skeleton components and primitives:

| Component | Description | Key Props |
|---|---|---|
| `BoxSkeleton` | Rectangular skeleton with rectangle, rounded, or pill variants | `width`, `height`, `variant`, `borderRadius` |
| `CircleSkeleton` | Circular skeleton (avatar, icon) | `size`, `color` |
| `TextSkeleton` | Multi-line text placeholder with natural line wrapping | `lines`, `lineHeight`, `spacing`, `width` |
| `CardSkeleton` | Card layout with media, avatar, and text lines | `imageHeight`, `avatarSize`, `lines`, `spacing` |
| `SkeletonGroup` | Container for grouping skeletons with flex direction and gap | `direction`, `spacing`, `align` |
| `ProfileSkeleton` | User profile row (avatar + name + subtitle) | `avatarSize`, `nameWidth`, `subtitleWidth`, `spacing` |
| `ListSkeleton` | Vertical list of item placeholders | `count`, `avatarSize`, `lines`, `itemSpacing` |
| `ArticleSkeleton` | Article layout with hero image, title, and body | `imageHeight`, `titleLines`, `contentLines`, `spacing` |
| `ProductSkeleton` | E-commerce product card with image, title, and price | `imageHeight`, `titleLines`, `priceWidth`, `spacing` |
| `GridSkeleton` | Responsive multi-column grid layout | `count`, `columns`, `itemHeight`, `showText`, `spacing` |
| `TableSkeleton` | Data table rows and columns placeholder | `rows`, `columns`, `rowHeight`, `spacing` |
| `ButtonSkeleton` | Button placeholder | `width`, `height`, `borderRadius` |
| `FormSkeleton` | Form placeholder with input fields and optional labels | `fields`, `inputHeight`, `showLabels`, `labelWidth` |
| `NotificationSkeleton` | Notification item with avatar, title, and timestamp | `avatarSize`, `showTimestamp`, `showDescription` |
| `CommentSkeleton` | Comment item with avatar, author, timestamp, and text | `avatarSize`, `lines`, `showAvatar`, `showTimestamp` |
| `DashboardSkeleton` | Dashboard view with metrics, chart, and activity list | `stats`, `activities`, `showChart` |
| `SearchSkeleton` | Search interface with search bar, filters, and results | `results`, `showFilters`, `showThumbnail`, `thumbnailSize` |
| `EmptyStateSkeleton` | Centered illustration, heading, text, and action button | `illustrationSize`, `showAction`, `descriptionLines` |
| `SkeletonItem` | Core base primitive component powering all skeleton variants | `width`, `height`, `borderRadius`, `animation`, `color` |

---

## Animation Modes

All components support three animation modes via the `animation` prop:

### 1. Shimmer (Default)

A smooth moving highlight sweep across the skeleton:

```jsx
<BoxSkeleton
  width="100%"
  height={100}
  animation="shimmer"
  duration={1200}
  direction="left"
/>
```

### 2. Pulse

A smooth opacity fade loop:

```jsx
<BoxSkeleton
  width="100%"
  height={100}
  animation="pulse"
  duration={1000}
  minOpacity={0.4}
  maxOpacity={1}
/>
```

### 3. Static

A solid, non-animated placeholder:

```jsx
<BoxSkeleton
  width="100%"
  height={100}
  animation="static"
/>
```

---

## Theme Support

SkellX features built-in theme management via `SkeletonThemeProvider`.

### Built-in Light and Dark Themes

```jsx
import React from 'react';
import { SkeletonThemeProvider, CardSkeleton } from 'skellx';

export const LightExample = () => (
  <SkeletonThemeProvider theme="light">
    <CardSkeleton />
  </SkeletonThemeProvider>
);

export const DarkExample = () => (
  <SkeletonThemeProvider theme="dark">
    <CardSkeleton />
  </SkeletonThemeProvider>
);
```

### Custom Themes

Create customized color themes using `createTheme`:

```jsx
import React from 'react';
import { SkeletonThemeProvider, createTheme, ProfileSkeleton } from 'skellx';

const customTheme = createTheme({
  backgroundColor: '#1E293B',
  highlightColor: '#334155',
  cardBackground: '#0F172A',
});

const ThemedApp = () => (
  <SkeletonThemeProvider theme={customTheme}>
    <ProfileSkeleton />
  </SkeletonThemeProvider>
);
```

---

## Common Customization Props

Most components accept the following customization props:

- `color`: Background color of the skeleton elements.
- `highlightColor`: Color of the shimmer highlight.
- `animation`: `'shimmer'` | `'pulse'` | `'static'`.
- `duration`: Animation duration in milliseconds.
- `direction`: Shimmer movement direction (`'left'` or `'right'`).
- `opacity`: Opacity of the shimmer highlight.
- `style`: Custom React Native `ViewStyle` passed to the component container.

---

## Project Structure

```text
SkellX/
├── src/
│   ├── animations/
│   │   ├── Pulse.js
│   │   └── Shimmer.js
│   ├── components/
│   │   ├── BoxSkeleton.js
│   │   ├── CircleSkeleton.js
│   │   ├── TextSkeleton.js
│   │   ├── CardSkeleton.js
│   │   ├── SkeletonItem.js
│   │   ├── SkeletonGroup.js
│   │   └── ... (presets)
│   ├── constants/
│   │   ├── animations.js
│   │   └── defaults.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── themes/
│   │   ├── ThemeContext.js
│   │   └── themes.js
│   ├── utils/
│   │   └── validateProps.js
│   └── index.js
├── LICENSE
├── package.json
└── Readme.md
```

---

## License

This project is licensed under the [MIT License](LICENSE).
