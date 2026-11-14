# SkellX

**A customizable skeleton loading component library for React Native.**

SkellX provides reusable skeleton components with shimmer, pulse, and static animation modes. Build loading placeholders for common mobile UI patterns with customizable shapes, layouts, and themes.

## Features

- **Multiple animations:** Shimmer, pulse, and static modes.
- **Reusable components:** Ready-made skeletons for common UI layouts.
- **Customizable appearance:** Adjust dimensions, colors, border radius, and spacing.
- **Theme support:** Built-in light and dark themes, with custom themes.
- **Composition:** Combine skeleton elements to create custom loading layouts.
- **React Native:** Designed for React Native applications.

## Installation

Once published to npm:

```bash
npm install skellx
```

For local development, clone the repository:

```bash
git clone https://github.com/Himanshubansal-2008/SkellX.git
cd SkellX
npm install
```

## Quick Start

```jsx
import React from 'react';
import { View } from 'react-native';

import {
  BoxSkeleton,
  CircleSkeleton,
  TextSkeleton,
} from 'skellx';

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <CircleSkeleton size={60} />

      <BoxSkeleton
        width="100%"
        height={150}
        borderRadius={12}
      />

      <TextSkeleton lines={3} />
    </View>
  );
};

export default App;
```

## Components

SkellX includes 18 reusable components:

| Component | Description |
|---|---|
| `BoxSkeleton` | Basic rectangular skeleton |
| `CircleSkeleton` | Circular skeleton |
| `TextSkeleton` | Text-line placeholder |
| `CardSkeleton` | Card loading layout |
| `SkeletonGroup` | Groups skeleton elements |
| `ProfileSkeleton` | Profile loading layout |
| `ListSkeleton` | List item placeholders |
| `ArticleSkeleton` | Article loading layout |
| `ProductSkeleton` | Product loading layout |
| `GridSkeleton` | Grid loading layout |
| `TableSkeleton` | Table loading layout |
| `ButtonSkeleton` | Button placeholder |
| `FormSkeleton` | Form loading layout |
| `NotificationSkeleton` | Notification placeholder |
| `CommentSkeleton` | Comment loading layout |
| `DashboardSkeleton` | Dashboard loading layout |
| `SearchSkeleton` | Search results loading layout |
| `EmptyStateSkeleton` | Empty state placeholder |

## Animation Modes

SkellX supports three animation modes:

### Shimmer

A moving highlight effect across the skeleton.

```jsx
<BoxSkeleton
  width="100%"
  height={100}
  animation="shimmer"
  duration={1200}
/>
```

### Pulse

A smooth opacity transition.

```jsx
<BoxSkeleton
  width="100%"
  height={100}
  animation="pulse"
  duration={1000}
/>
```

### Static

A non-animated placeholder.

```jsx
<BoxSkeleton
  width="100%"
  height={100}
  animation="static"
/>
```

## Theme Support

SkellX provides built-in light and dark themes through `SkeletonThemeProvider`.

```jsx
import React from 'react';

import {
  SkeletonThemeProvider,
  CardSkeleton,
} from 'skellx';

const App = () => {
  return (
    <SkeletonThemeProvider theme="dark">
      <CardSkeleton />
    </SkeletonThemeProvider>
  );
};

export default App;
```

### Custom Theme

You can also create your own theme.

```jsx
import {
  SkeletonThemeProvider,
  createTheme,
} from 'skellx';

const customTheme = createTheme({
  backgroundColor: '#222222',
  highlightColor: '#444444',
});

const App = () => {
  return (
    <SkeletonThemeProvider theme={customTheme}>
      {/* Your components */}
    </SkeletonThemeProvider>
  );
};
```

## Advanced Customization

Most skeleton components support customization options such as:

- `width` and `height`
- `color` and `highlightColor`
- `borderRadius`
- `animation`
- `duration`
- `style`

Individual components may provide additional layout-specific props.

## Project Structure

```text
SkellX/
├── src/
│   ├── animations/
│   │   ├── Pulse.js
│   │   └── Shimmer.js
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── themes/
│   ├── utils/
│   └── index.js
├── package.json
└── Readme.md
```

## Tech Stack

- React
- React Native
- JavaScript
- React Native Animated API

## License

This project is licensed under the MIT License.