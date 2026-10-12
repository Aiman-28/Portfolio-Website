# Aiman Iqbal — Portfolio (React)

Dark, purple-glow personal portfolio built with **React 18 + Vite**.

## Run

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/
    npm run preview    # preview the build

## Where to edit

All content lives in `src/data/`:

- `site.js` — name, email, phone, location, photo, social links
- `projects.js` — projects (title, description, tags, `live` and `source` links)
- `experience.js` — internships, education, certifications
- `skills.js` — skill groups
- `about.js` — About highlights

Replace `public/assets/resume.pdf` with your latest CV (the **Download CV** button uses it).
To show a photo, put it in `public/assets/` and set `PHOTO = 'assets/photo.jpg'` in `site.js`.

## Deploy

Push to GitHub (never commit `node_modules`), then import the repo on Vercel. Preset: **Vite**.
