# SkellX

**A customizable skeleton loading component library for React Native.**

SkellX helps React Native developers create reusable loading placeholders for content such as images, text, cards, and profile sections.

It provides lightweight skeleton components, standalone animations, reusable layouts, and basic light/dark theme support.

## Features

- Reusable box, circle, text, and card skeletons
- Flexible skeleton composition
- Standalone shimmer and pulse animations
- Light and dark theme support
- Customizable dimensions, colors, and spacing
- JavaScript-based React Native components

## Installation

Once SkellX is published to npm:

```bash
npm install skellx
```

React and React Native are peer dependencies. SkellX is designed to be used inside an existing React Native project.

**Note:** SkellX is currently under development and has not yet been verified as a published npm package.

## Quick Start

```jsx
import React from 'react';
import { View } from 'react-native';
import {
  BoxSkeleton,
  CircleSkeleton,
  TextSkeleton,
} from 'skellx';

export default function LoadingScreen() {
  return (
    <View style={{ padding: 20, gap: 16 }}>
      <CircleSkeleton size={60} />

      <TextSkeleton
        lines={3}
        lineHeight={14}
        spacing={10}
      />

      <BoxSkeleton
        width="100%"
        height={150}
        borderRadius={12}
      />
    </View>
  );
}
```

## Components

### 1. BoxSkeleton

A rectangular loading placeholder.

```jsx
<BoxSkeleton
  width={200}
  height={100}
  color="#D1D5DB"
  borderRadius={12}
/>
```

| Prop | Default | Description |
|---|---|---|
| `width` | `'100%'` | Width of the skeleton |
| `height` | `100` | Height of the skeleton |
| `color` | Theme background color | Background color |
| `borderRadius` | `8` | Corner radius |
| `style` | — | Additional React Native styles |

### 2. CircleSkeleton

A circular loading placeholder suitable for avatars and profile pictures.

```jsx
<CircleSkeleton
  size={60}
  color="#D1D5DB"
/>
```

| Prop | Default | Description |
|---|---|---|
| `size` | `50` | Diameter of the circle |
| `color` | Theme background color | Background color |
| `style` | — | Additional styles |

### 3. TextSkeleton

Creates multiple placeholder lines.

```jsx
<TextSkeleton
  width="100%"
  lines={3}
  lineHeight={14}
  spacing={8}
/>
```

| Prop | Default | Description |
|---|---|---|
| `width` | `'100%'` | Width of lines except the last |
| `lines` | `2` | Number of placeholder lines |
| `lineHeight` | `12` | Height of each line |
| `spacing` | `8` | Spacing between lines |
| `color` | Theme background color | Placeholder color |
| `borderRadius` | `8` | Corner radius |
| `style` | — | Container styles |

The final line is rendered at 75% width in the current implementation.

### 4. CardSkeleton

A prebuilt loading card containing an image placeholder, avatar, and text placeholders.

```jsx
<CardSkeleton
  width="100%"
  imageHeight={180}
  avatarSize={45}
  lines={3}
  spacing={10}
/>
```

| Prop | Default | Description |
|---|---|---|
| `width` | `'100%'` | Card width |
| `imageHeight` | `150` | Image placeholder height |
| `avatarSize` | `40` | Avatar diameter |
| `lines` | `2` | Number of body text lines |
| `spacing` | `12` | Body text line spacing |
| `style` | — | Additional card styles |

The card currently uses a white background.

### 5. SkeletonGroup

Combines multiple skeleton components into a reusable layout.

```jsx
<SkeletonGroup
  direction="row"
  spacing={16}
  align="center"
>
  <CircleSkeleton size={50} />

  <TextSkeleton
    lines={2}
    style={{ flex: 1 }}
  />
</SkeletonGroup>
```

| Prop | Default | Description |
|---|---|---|
| `children` | — | Skeleton components to render |
| `direction` | `'column'` | `'row'` or `'column'` |
| `spacing` | `12` | Gap between children |
| `align` | `'stretch'` | React Native `alignItems` value |
| `style` | — | Additional container styles |

## Animations

SkellX currently provides two standalone animation components.

### Shimmer

Displays a moving highlight across a rectangular placeholder.

```jsx
import { Shimmer } from 'skellx';

<Shimmer
  width={250}
  height={100}
  duration={1200}
  color="#FFFFFF"
  opacity={0.5}
  borderRadius={8}
/>
```

| Prop | Default |
|---|---|
| `width` | `200` |
| `height` | `100` |
| `duration` | `1200` |
| `color` | `'#FFFFFF'` |
| `opacity` | `0.5` |
| `borderRadius` | `8` |

### Pulse

Wraps content in a repeating opacity animation.

```jsx
import { Pulse, BoxSkeleton } from 'skellx';

<Pulse
  duration={1000}
  minOpacity={0.4}
  maxOpacity={1}
>
  <BoxSkeleton width={200} height={80} />
</Pulse>
```

| Prop | Default |
|---|---|
| `children` | — |
| `duration` | `1000` |
| `minOpacity` | `0.4` |
| `maxOpacity` | `1` |
| `style` | — |

**Current limitation:** Shimmer and Pulse are standalone components. Animation selection is not yet integrated into every skeleton component.

## Theme Support

SkellX supports two built-in themes:

- **Light:** Background `#E1E1E1`, highlight `#FFFFFF`
- **Dark:** Background `#374151`, highlight `#6B7280`

### Dark Theme Example

```jsx
import React from 'react';
import {
  SkeletonThemeProvider,
  BoxSkeleton,
  TextSkeleton,
} from 'skellx';

export default function LoadingScreen() {
  return (
    <SkeletonThemeProvider theme="dark">
      <BoxSkeleton width={250} height={100} />
      <TextSkeleton lines={3} />
    </SkeletonThemeProvider>
  );
}
```

Without a provider, skeleton components use the light theme.

The current `SkeletonThemeProvider` accepts `'light'` or `'dark'`. Custom theme objects are not yet supported.

## Complete Example

```jsx
import React from 'react';
import { View } from 'react-native';

import {
  SkeletonThemeProvider,
  SkeletonGroup,
  CircleSkeleton,
  TextSkeleton,
  BoxSkeleton,
  Pulse,
} from 'skellx';

export default function ProfileLoading() {
  return (
    <SkeletonThemeProvider theme="light">
      <View style={{ padding: 20 }}>
        <Pulse>
          <SkeletonGroup
            direction="row"
            spacing={16}
            align="center"
          >
            <CircleSkeleton size={70} />

            <TextSkeleton
              lines={2}
              style={{ flex: 1 }}
            />
          </SkeletonGroup>
        </Pulse>

        <View style={{ marginTop: 20 }}>
          <BoxSkeleton
            width="100%"
            height={180}
            borderRadius={12}
          />
        </View>
      </View>
    </SkeletonThemeProvider>
  );
}
```

## Project Structure

```text
SkellX/
├── src/
│   ├── animations/
│   │   ├── Pulse.js
│   │   └── Shimmer.js
│   ├── components/
│   │   ├── BoxSkeleton.js
│   │   ├── CardSkeleton.js
│   │   ├── CircleSkeleton.js
│   │   ├── SkeletonGroup.js
│   │   └── TextSkeleton.js
│   ├── constants/
│   ├── hooks/
│   ├── themes/
│   ├── utils/
│   └── index.js
├── example/
├── package.json
└── Readme.md
```

## Planned Improvements

- Integrated animation modes for skeleton components
- Additional prebuilt skeleton layouts
- Advanced theme customization
- Global configuration
- Accessibility and performance improvements
- Interactive component playground

## Contributing

Contributions, suggestions, and bug reports are welcome through GitHub issues and pull requests.

## Repository

[SkellX on GitHub](https://github.com/Himanshubansal-2008/SkellX)

## License

MIT