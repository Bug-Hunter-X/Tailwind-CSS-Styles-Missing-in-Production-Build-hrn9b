# Tailwind CSS Styles Missing in Production

This repository demonstrates an uncommon bug where Tailwind CSS styles fail to apply after the production build process.  The styles are correctly included, however, some classes are missing from the production version.  The development version functions correctly.  The solution involves ensuring Tailwind's purge process correctly identifies and includes necessary classes.

## Bug Reproduction

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run build` to build for production.
4. Observe that some Tailwind CSS classes are missing in the production build.

## Solution

The solution is provided in `bugSolution.js`. It involves carefully reviewing your Tailwind configuration (tailwind.config.js) to ensure that all necessary classes are being purged properly and correctly set up for production builds.