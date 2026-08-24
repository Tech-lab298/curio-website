# EduTok UI conventions

EduTok is a **dark-only** app — every screen sits on the Solarized Dark
background, never white. There is no light theme and no ThemeProvider to
wrap: colors are plain CSS custom properties, always active.

## Wrapping and setup

No provider or root wrapper is required — importing `@edutok/ui` and its
`styles.css` is enough. But **every screen's outermost container must set
`background: var(--edutok-color-bg)`** (or `--edutok-color-surface` for a
raised section). Components like `Text`, `VideoCard`, `Chip`, `Badge`, and
`Divider` have no surface of their own — their colors (e.g. cream `#eee8d5`
titles) are tuned for a dark backdrop and read as low-contrast or invisible
on white. `Button`, `Card`, and `Modal` carry their own opaque fill and are
safe on any background, but still belong on the dark canvas for a real
EduTok screen.

## Styling idiom: CSS custom properties, not utility classes

There are no Tailwind-style utility classes. Every token is a CSS custom
property, consumed via `var(--edutok-*)` in your own layout CSS:

| Purpose | Token |
|---|---|
| App background | `--edutok-color-bg` |
| Card / raised surface | `--edutok-color-surface`, `--edutok-color-surface-raised` |
| Primary text (headings) | `--edutok-color-text-inverse` |
| Body text | `--edutok-color-text-body` |
| Muted / caption text | `--edutok-color-text-secondary`, `--edutok-color-text-muted` |
| Brand actions | `--edutok-color-primary`, `--edutok-color-accent` |
| Semantic status | `--edutok-color-success`, `--edutok-color-warning`, `--edutok-color-danger` |
| Spacing scale | `--edutok-space-xs` (4px) → `--edutok-space-xl` (32px) |
| Corner radius | `--edutok-radius-sm/md/lg/pill` |

Components already apply these internally — you only need them for your own
layout glue (page padding, gaps between components, section backgrounds).
Never invent a new color; every hue in the app comes from this token set
(sourced from the Flutter app's actual Solarized Dark theme).

## Where the truth lives

- `styles.css` — the full token + component stylesheet closure.
- `components/<Group>/<Name>/<Name>.prompt.md` — per-component usage notes.

## A build snippet

```tsx
import { Text, VideoCard, Chip } from '@edutok/ui';

function TrendingFeed() {
  return (
    <div style={{ background: 'var(--edutok-color-bg)', padding: 'var(--edutok-space-lg)' }}>
      <Text as="h1">Trending in Science</Text>
      <div style={{ display: 'flex', gap: 'var(--edutok-space-sm)', margin: 'var(--edutok-space-md) 0' }}>
        <Chip selected>Science</Chip>
        <Chip>History</Chip>
      </div>
      <VideoCard
        thumbnailUrl="/thumb.jpg"
        title="The Physics of Rollercoasters"
        channel="EduTok Science"
        duration="4:12"
        meta="128K likes"
      />
    </div>
  );
}
```

# EduTokUI (@edutok/ui@0.1.0)

This design system is the published @edutok/ui React library, bundled as a single
browser global. All 14 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.EduTokUI`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.EduTokUI.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Avatar } = window.EduTokUI;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Avatar />);
```

## Tokens

37 CSS custom properties from @edutok/ui. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (20): `--edutok-color-bg`, `--edutok-color-surface`, `--edutok-color-surface-raised`, …
- **spacing** (5): `--edutok-space-xs`, `--edutok-space-sm`, `--edutok-space-md`, …
- **typography** (6): `--edutok-font-family`, `--edutok-font-size-xs`, `--edutok-font-size-sm`, …
- **radius** (4): `--edutok-radius-sm`, `--edutok-radius-md`, `--edutok-radius-lg`, …
- **shadow** (2): `--edutok-shadow-sm`, `--edutok-shadow-md`

## Components

### general
- `Avatar` — A circular user avatar with photo or initials fallback, used on profile
- `Badge` — A small status label  trivia difficulty, video subject tag, or streak status.
- `Button` — The primary call-to-action control across EduTok  used for auth actions,
- `Card` — A generic surface container used to group content  stat tiles, settings
- `Chip` — A selectable filter pill used for trivia topic keywords and feed category
- `Divider` — A thin separator line for splitting list items and sections.
- `IconButton` — A circular icon-only button used for feed actions like like, comment,
- `Input` — A labeled text field with optional leading icon and inline error message.
- `Modal` — A centered dialog overlay used for confirmations (sign-out, delete
- `ProgressBar` — A linear progress meter used for video scrub position and trivia
- `Spinner` — A circular loading indicator used while videos buffer or a network
- `Switch` — A binary on/off toggle used in settings  autoplay, notifications, dark
- `Text` — The typography primitive for all EduTok headings, body copy, captions,
- `VideoCard` — A YouTube-style video list entry: 16:9 thumbnail with a duration badge,
