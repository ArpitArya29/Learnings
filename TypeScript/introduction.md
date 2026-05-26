# What is TypeScript?
An extension of javascript that provides type safety for the data variables. A layer over javascript, gives more superpower over JS
- A Types on the javascript data variables

## Issues over javascript
- More freedom over data-types
- Losse Docs
- Developer Tooling (not the expected behaviour)
- AI have not that context of JS over TS

## Advantages of TypeScript 
- Add-on of javascript
- TS does not run, at the end of day, it is the JS that runs
### Additional behaviour of javascript
- Type Checker
- Provides consistency over code


# Configuring TypeScript
- npm init -y (generates the package.json)
- npm i -D typescript (install typescript project-wise)
- npx tsc --init (initializes a typescript compiler)
    - generates the tsconfig.json
    - root dir : "./src" (all codes must be write in this directory)
    - out dir : "./dist" (compiled code is predent in this directory)
    - We have to create the src and dist folder
    - write your code in src/[filename.ts]

- for compilation
    - npx tsc (generates some files undes ./disc directory with [filename.js])

- for running
    - node dist/[filename.js]

- for ease, change the script in package.json
    - "start": "node dist/index.js"
    - "dev": "npx tsc"