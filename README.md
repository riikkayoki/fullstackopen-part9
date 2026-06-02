# Full Stack Open — Part 9 (TypeScript)

Solutions for the [Full Stack Open](https://fullstackopen.com/en/part9) TypeScript part.

## CI status

[![Patientor E2E Tests](https://github.com/riikkayoki/fullstackopen-part9/actions/workflows/patientor-e2e-tests.yml/badge.svg)](https://github.com/riikkayoki/fullstackopen-part9/actions/workflows/patientor-e2e-tests.yml)
[![Patientor API Tests](https://github.com/riikkayoki/fullstackopen-part9/actions/workflows/patientor-api-tests.yml/badge.svg)](https://github.com/riikkayoki/fullstackopen-part9/actions/workflows/patientor-api-tests.yml)
[![Health app E2E Tests](https://github.com/riikkayoki/fullstackopen-part9/actions/workflows/healthapp-e2e-tests.yml/badge.svg)](https://github.com/riikkayoki/fullstackopen-part9/actions/workflows/healthapp-e2e-tests.yml)

## Running the apps

Each project is self-contained — run `npm install` in its directory first. Vite
frontends default to <http://localhost:5173>, so run only one at a time (or pass
`-- --port <n>`).

### Patientor (`patientor`)

Needs both backend and frontend running, in separate terminals:

```bash
# terminal 1 — backend → http://localhost:3001
cd patientor/backend && npm install && npm run dev

# terminal 2 — frontend → http://localhost:5173
cd patientor/frontend && npm install && npm run dev
```

### Flight diaries (`flightdiaries`)

```bash
# terminal 1 — backend → http://localhost:3000
cd flightdiaries/backend && npm install && npm run dev

# terminal 2 — frontend → http://localhost:5173
cd flightdiaries/frontend && npm install && npm run dev
```

### Health app (`healthapp`)

An Express server plus standalone calculators:

```bash
cd healthapp && npm install

npm run dev                  # server → http://localhost:3000 (/bmi, /exercises, /hello)
npm run calculateBmi         # BMI calculator (edit args in bmiCalculator.ts)
npm run calculateExercises   # exercise calculator
```

### Course exercises (`course`)

```bash
cd course && npm install && npm run dev   # → http://localhost:5173
```

> The Patientor backend uses port **3001**; the Health app and Flight diaries
> backends both use port **3000**, so don't run those two at the same time.

## Running the tests

Each suite expects its app to be running first (see above).

```bash
# Patientor frontend E2E — needs frontend on :5173 + backend on :3001
cd patientor-tests && npm install && npm test

# Patientor backend API — needs backend on :3001
cd patientor-api-tests && npm install && npm test

# Health app E2E — needs healthapp server on :3000
cd healthapp-tests && npm install && npm test
```

> The frontend must be served on the default port **5173** for `patientor-tests`
> (the Playwright config targets `http://localhost:5173`); use
> `npm run dev -- --port 5173 --strictPort` if other Vite apps are running.
