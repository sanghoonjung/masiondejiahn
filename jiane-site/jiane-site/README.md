# MAISON DE JIAHN

A polished Next.js birthday-dinner site for a five-person summer table.

## Public page

The public page presents the four-course birthday menu and a closing message for the host's wife. The late-night ramen remains hidden.

## Chef mode

- Long-press the MAISON DE JIAHN logo for 1.2 seconds, or
- Open `/?chef=true`, or
- Click the tiny footer label.

Chef mode includes the shopping checklist, timeline, full recipes, and hidden late-night course. Checklist state is saved in `localStorage`.

## Vercel

When this folder is inside a repository subfolder, set Vercel **Root Directory** to `jiane-site`. TypeScript dependencies are included in `package.json`.


## Privacy note
The public invitation page includes a full residential address. For a public Vercel deployment, consider restricting access or removing the unit number after guests have saved it.
