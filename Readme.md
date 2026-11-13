# SkellX

**A customizable skeleton loading component library for React Native.**

SkellX helps React Native developers create reusable, customizable loading placeholders for images, text, cards, profiles, lists, grids, tables, and other UI layouts.

It provides reusable skeleton components, built-in shimmer and pulse animations, prebuilt layout presets, and light/dark theme support.

## Features

- Reusable Box, Circle, Text, and Card skeletons
- Built-in Shimmer, Pulse, and Static animation modes
- Customizable animation duration and intensity
- Shimmer direction and highlight color customization
- Light and dark theme support
- Custom theme objects
- Reusable skeleton composition with SkeletonGroup
- Prebuilt Profile, List, Article, and Product layouts
- Grid and Table skeleton layouts
- Customizable dimensions, colors, border radius, and spacing
- JavaScript-based React Native components

## Installation

Once SkellX is published to npm:

```bash
npm install skellx
```

React and React Native are peer dependencies. SkellX is designed to be used inside an existing React Native project.

**Note:** SkellX is currently under development. Check the npm registry for publication availability before installing it as a published package.

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

      <CardSkeleton
        imageHeight={160}
        lines={3}
      />
    </View>
  );
}
```

## Components

### 1. BoxSkeleton

A rectangular loading placeholder suitable for images, banners, containers, and other rectangular UI elements.

```jsx
<BoxSkeleton
  width="100%"
  height={120}
  color="#D1D5DB"
  borderRadius={12}
  animation="shimmer"
/>
```

| Prop | Default | Description |
|---|---|---|
| `width` | `'100%'` | Width of the skeleton |
| `height` | `100` | Height of the skeleton |
| `color` | Theme background color | Background color |
| `borderRadius` | `8` | Corner radius |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration in milliseconds |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight color |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Additional React Native styles |

### 2. CircleSkeleton

A circular loading placeholder suitable for avatars and profile pictures.

```jsx
<CircleSkeleton
  size={60}
  color="#D1D5DB"
  animation="pulse"
/>
```

| Prop | Default | Description |
|---|---|---|
| `size` | `50` | Diameter of the circle |
| `color` | Theme background color | Background color |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Additional styles |

### 3. TextSkeleton

Creates multiple placeholder lines for text content.

```jsx
<TextSkeleton
  width="100%"
  lines={3}
  lineHeight={14}
  spacing={8}
  animation="shimmer"
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
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Container styles |

The final line is rendered at 75% width.

### 4. CardSkeleton

A prebuilt loading card containing an image placeholder, avatar, and text placeholders.

```jsx
<CardSkeleton
  width="100%"
  imageHeight={180}
  avatarSize={45}
  lines={3}
  spacing={10}
  animation="shimmer"
/>
```

| Prop | Default | Description |
|---|---|---|
| `width` | `'100%'` | Card width |
| `imageHeight` | `150` | Image placeholder height |
| `avatarSize` | `40` | Avatar diameter |
| `lines` | `2` | Number of body text lines |
| `spacing` | `12` | Body text line spacing |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Additional card styles |

The card currently uses a white background.

### 5. SkeletonGroup

Combines multiple skeleton components into a reusable layout.

```jsx
import {
  SkeletonGroup,
  CircleSkeleton,
  TextSkeleton,
} from 'skellx';

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

## Prebuilt Skeleton Layouts

SkellX includes ready-to-use skeleton layouts for common application interfaces.

### 6. ProfileSkeleton

A profile loading layout containing an avatar, name placeholder, and subtitle placeholder.

```jsx
import { ProfileSkeleton } from 'skellx';

<ProfileSkeleton
  avatarSize={60}
  nameWidth="60%"
  subtitleWidth="40%"
  animation="shimmer"
/>
```

| Prop | Default | Description |
|---|---|---|
| `avatarSize` | `48` | Avatar diameter |
| `nameWidth` | `'60%'` | Name placeholder width |
| `subtitleWidth` | `'40%'` | Subtitle placeholder width |
| `spacing` | `8` | Vertical spacing between text lines |
| `color` | Theme background color | Skeleton color |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Container styles |

### 7. ListSkeleton

Creates multiple loading list items containing an avatar and text placeholders.

```jsx
import { ListSkeleton } from 'skellx';

<ListSkeleton
  count={5}
  avatarSize={45}
  lines={2}
  itemSpacing={16}
  animation="shimmer"
/>
```

| Prop | Default | Description |
|---|---|---|
| `count` | `4` | Number of list items |
| `avatarSize` | `44` | Avatar diameter |
| `lines` | `2` | Text lines per item |
| `spacing` | `8` | Spacing between text lines |
| `itemSpacing` | `16` | Spacing between list items |
| `color` | Theme background color | Skeleton color |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Container styles |

### 8. ArticleSkeleton

A loading layout for article pages containing an image, title, and content placeholders.

```jsx
import { ArticleSkeleton } from 'skellx';

<ArticleSkeleton
  imageHeight={220}
  titleLines={2}
  contentLines={5}
  spacing={12}
  animation="shimmer"
/>
```

| Prop | Default | Description |
|---|---|---|
| `imageHeight` | `200` | Image placeholder height |
| `titleLines` | `2` | Number of title lines |
| `contentLines` | `4` | Number of content lines |
| `spacing` | `12` | Spacing between sections |
| `color` | Theme background color | Skeleton color |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Container styles |

### 9. ProductSkeleton

A product loading layout containing an image, title, and price placeholder.

```jsx
import { ProductSkeleton } from 'skellx';

<ProductSkeleton
  width="100%"
  imageHeight={200}
  titleLines={2}
  priceWidth="35%"
  spacing={12}
  animation="shimmer"
/>
```

| Prop | Default | Description |
|---|---|---|
| `width` | `'100%'` | Product skeleton width |
| `imageHeight` | `180` | Product image height |
| `titleLines` | `2` | Number of title lines |
| `priceWidth` | `'35%'` | Price placeholder width |
| `spacing` | `10` | Spacing between sections |
| `color` | Theme background color | Skeleton color |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Container styles |

### 10. GridSkeleton

Creates a grid of loading placeholders. Useful for product grids, image galleries, and dashboard cards.

```jsx
import { GridSkeleton } from 'skellx';

<GridSkeleton
  count={8}
  columns={2}
  itemHeight={140}
  spacing={12}
  showText={true}
  animation="shimmer"
/>
```

| Prop | Default | Description |
|---|---|---|
| `count` | `6` | Number of grid items |
| `columns` | `2` | Number of columns |
| `itemHeight` | `120` | Height of each item |
| `spacing` | `12` | Horizontal padding and vertical spacing |
| `showText` | `true` | Whether to display text placeholders |
| `color` | Theme background color | Skeleton color |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Container styles |

### 11. TableSkeleton

Creates loading placeholders arranged in rows and columns. Useful for reports, tables, and dashboards.

```jsx
import { TableSkeleton } from 'skellx';

<TableSkeleton
  rows={6}
  columns={4}
  rowHeight={16}
  spacing={16}
  animation="pulse"
/>
```

| Prop | Default | Description |
|---|---|---|
| `rows` | `5` | Number of rows |
| `columns` | `4` | Number of columns |
| `rowHeight` | `16` | Height of each cell placeholder |
| `spacing` | `16` | Spacing between rows |
| `color` | Theme background color | Skeleton color |
| `animation` | `'shimmer'` | Animation mode |
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | Shimmer direction |
| `highlightColor` | Theme highlight color | Shimmer highlight |
| `opacity` | `0.5` | Shimmer opacity |
| `minOpacity` | `0.4` | Minimum pulse opacity |
| `maxOpacity` | `1` | Maximum pulse opacity |
| `style` | — | Container styles |

## Animations

SkellX supports three animation modes across its skeleton components.

### 1. Shimmer

Displays a moving highlight across the skeleton placeholder.

```jsx
<BoxSkeleton
  width={250}
  height={100}
  animation="shimmer"
  duration={1500}
  direction="right"
  highlightColor="#FFFFFF"
  opacity={0.6}
/>
```

Shimmer properties:

| Prop | Default | Description |
|---|---|---|
| `duration` | `1200` | Animation duration |
| `direction` | `'left'` | `'left'` or `'right'` |
| `highlightColor` | Theme highlight color | Highlight color |
| `opacity` | `0.5` | Highlight opacity |

### 2. Pulse

Creates a repeating opacity animation.

```jsx
<BoxSkeleton
  width={200}
  height={80}
  animation="pulse"
  duration={1000}
  minOpacity={0.2}
  maxOpacity={0.9}
/>
```

Pulse properties:

| Prop | Default | Description |
|---|---|---|
| `duration` | `1200` | Animation duration through SkeletonItem |
| `minOpacity` | `0.4` | Minimum opacity |
| `maxOpacity` | `1` | Maximum opacity |

### 3. Static

Displays a skeleton without animation.

```jsx
<BoxSkeleton
  width={200}
  height={80}
  animation="static"
/>
```

### Standalone Animation Components

Shimmer and Pulse are also exported for independent use.

**Shimmer:**

```jsx
import { Shimmer } from 'skellx';

<Shimmer
  width={250}
  height={100}
  duration={1200}
  color="#FFFFFF"
  backgroundColor="#E1E1E1"
  opacity={0.5}
  direction="left"
  borderRadius={8}
/>
```

**Pulse:**

```jsx
import { Pulse, BoxSkeleton } from 'skellx';

<Pulse
  duration={1000}
  minOpacity={0.4}
  maxOpacity={1}
>
  <BoxSkeleton
    width={200}
    height={80}
    animation="static"
  />
</Pulse>
```

## Theme Support

SkellX provides built-in light and dark themes.

### Built-in Themes

| Theme | Background Color | Highlight Color |
|---|---|---|
| Light | `#E1E1E1` | `#FFFFFF` |
| Dark | `#374151` | `#6B7280` |

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

### Custom Theme Example

Custom theme objects can also be supplied.

```jsx
import {
  SkeletonThemeProvider,
  BoxSkeleton,
} from 'skellx';

const oceanTheme = {
  name: 'ocean',
  backgroundColor: '#164E63',
  highlightColor: '#67E8F9',
};

export default function LoadingScreen() {
  return (
    <SkeletonThemeProvider theme={oceanTheme}>
      <BoxSkeleton
        width="100%"
        height={120}
      />
    </SkeletonThemeProvider>
  );
}
```

### Creating a Theme

```jsx
import { createTheme } from 'skellx';

const customTheme = createTheme({
  name: 'ocean',
  backgroundColor: '#164E63',
  highlightColor: '#67E8F9',
});
```

SkellX also exports `lightTheme`, `darkTheme`, `getTheme`, and `createTheme`.

Without a provider, skeleton components use the light theme.

## Complete Example

```jsx
import React from 'react';
import { View } from 'react-native';

import {
  SkeletonThemeProvider,
  ProfileSkeleton,
  ArticleSkeleton,
  GridSkeleton,
} from 'skellx';

export default function LoadingScreen() {
  return (
    <SkeletonThemeProvider theme="light">
      <View style={{ padding: 20, gap: 24 }}>
        <ProfileSkeleton
          avatarSize={60}
          animation="shimmer"
        />

        <ArticleSkeleton
          imageHeight={180}
          titleLines={2}
          contentLines={4}
          animation="shimmer"
        />

        <GridSkeleton
          count={4}
          columns={2}
          itemHeight={120}
          animation="pulse"
        />
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
│   │
│   ├── components/
│   │   ├── ArticleSkeleton.js
│   │   ├── BoxSkeleton.js
│   │   ├── CardSkeleton.js
│   │   ├── CircleSkeleton.js
│   │   ├── GridSkeleton.js
│   │   ├── ListSkeleton.js
│   │   ├── ProductSkeleton.js
│   │   ├── ProfileSkeleton.js
│   │   ├── SkeletonGroup.js
│   │   ├── SkeletonItem.js
│   │   ├── TableSkeleton.js
│   │   └── TextSkeleton.js
│   │
│   ├── constants/
│   │   ├── animations.js
│   │   └── defaults.js
│   │
│   ├── hooks/
│   │   └── useTheme.js
│   │
│   ├── themes/
│   │   ├── ThemeContext.js
│   │   └── themes.js
│   │
│   ├── utils/
│   │   └── validateProps.js
│   │
│   └── index.js
│
├── package.json
└── Readme.md
```

## Contributing

Contributions, suggestions, feature requests, and bug reports are welcome.

You can contribute by:
- Reporting bugs through GitHub Issues.
- Suggesting new skeleton layouts and animation features.
- Improving documentation.
- Submitting pull requests.

## Repository

[SkellX on GitHub](https://github.com/Himanshubansal-2008/SkellX)

## License

MIT License.