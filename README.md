# Bio-ladder

Bio-ladder is a open-source tool to showcase social media profiles or profiles on other platforms. It's inspired by [linktree](https://linktr.ee/).

## How to use it

While linktr.ee allows you to create a user and then append it to their domain, **Bio-ladder** wants you to decide how to deploy it, wherever you pick **GitHub Pages**, **Vercel**, **Heroku**, etc.

To start using **Bio-ladder** just fork the repository and then clone it:

```bash
git clone https://github.com/{your_username}/bio-ladder
```

or `gh repo clone {your_username}/bio-ladder` if you use `github-cli`.

After that, `cd` to the recently created folder and install the dependencies, it's originally managed with `pnpm` but you can use any package manager.

Once you have it, run the development server with `pnpm run dev` (or the command your package manager uses).

**Bio-ladder** uses `Next.js` to take advantage of the SSG (Static Site Generation) and help the SEO and performance of the page.

Then, to really start customizing your **Bio-ladder**, you have to edit the `/data/links.ts` file.

## Editing the links

I tried to describe the interfaces the best I could, but I'm going to describe the steps anyways.

So, once you are at the file, you will find a capped constant named `LINKS`, this will be your main and (hopefully) unique modification.

Remove the links (if any) and replace them with yours following this pattern:

```ts
const LINKS: ILink[] = [
  {
    platform: "PLATFORM_NAME", // This will be auto-completed. See /types/social.ts for the supported platforms.
    title: "YOUR_TITLE", // Title to be displayed at the platform's card, can be anything.
    url: "YOUR_URL", // URL to be redirected on card click. You can write it manually or use any of the getters I created. See /utils/getters.ts.
    color: "HEX_CODE or CSS-PROPERTY", // This is optional. It will replace the default background color for the platform. It can be a HEX code (e.g.: #273) or a CSS property (e.g.: linear-gradient)
  },
];
```

And that's it! Your **Bio-ladder** is now updated.

## Adding new platforms

To add new platforms, you are going to modify two files: `/types/social.ts` (for auto-complete) and `/models/socials.tsx` (for icon and background color).

1. Add the platform's uppercased name in `SocialType` at `/types/social.ts` like this:

```ts
type SocialType =
  // All of the platforms...
  "YOUR_PLATFORM" | "OTHER";
```

2. Add the platform's uppercased name in `SOCIALS` at `/models/socials.tsx` as a index, as well as its icon and color.

```tsx
import {
  // All icon imports...
  FaYourPlatform
} from 'react-icons/fa'

const SOCIALS: IDictionary = {
  // All of the platforms...
  YOUR_PLATFORM: {
    icon: <FaYourPlatform />
    color: 'YOUR_PLATFORM_COLOR'
  }
}
```

**NOTE**: You can import the icon from other package if FontAwesome doesn't have it. Check [react-icons](https://react-icons.github.io/react-icons) to look for your desired icon.

Once you have added it, just create a new entry in `LINKS` at `/data/links.ts` as described on `How to use it`.

## TO-DO

- [ ]: User's profile picture, name and other personal data.
- [ ]: Guide to deployment and configuration.
- [X]: Support many of the most popular platforms.

Copyright (c) 2022 Ticiano Morvan - MIT License
