# NLP & AI Portfolio

A research-oriented personal portfolio built with Next.js, TypeScript, Tailwind CSS and Lucide React.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally

1. Extract the ZIP file.
2. Open the extracted `nlp-ai-portfolio` folder in VS Code.
3. Open the integrated terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser.

## Production build

```bash
npm run build
npm start
```

## Customize your details

- Edit `src/components/sections.tsx` to update the hero, about, skills, projects, research and contact content.
- Edit `src/app/layout.tsx` to change the site metadata.
- Replace the placeholder email and social links in `src/components/sections.tsx`.
- Add your CV as `public/resume.pdf` and the Resume link will work.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your GitHub repository.
4. Keep the default Next.js build settings.
5. Click **Deploy**.

The portfolio is frontend-only. Project descriptions and links are sample content/placeholders; replace them with verified project details before publishing.
