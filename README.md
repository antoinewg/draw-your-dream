## Stable diffusion prompt

## Noteworthy files

- [pages/index.ts](pages/index.ts) - The React frontend that renders the home page in the browser
- [pages/api/predictions/index.ts](pages/api/predictions/index.ts) - The backend API endpoint that calls Replicate's API to create a prediction
- [pages/api/predictions/[id].ts](pages/api/predictions/[id].ts) - The backend API endpoint that calls Replicate's API to get the prediction result

## Usage

Install dependencies:

```console
pnpm install
```

Add your [Replicate API token](https://replicate.com/account#token) to `.env.local`:

```
REPLICATE_API_TOKEN=<your-token-here>
```

Run the development server:

```console
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

<img src="https://user-images.githubusercontent.com/2289/208017930-a39ca4d5-2410-4049-bce0-20718480c73b.png" alt="app screenshot">

[Source](https://replicate.com/docs/get-started/nextjs)
