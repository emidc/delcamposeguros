# Architecture

## Overview

The project is a dependency-free Sites worker-style application. Its deployment
configuration is stored in `.openai/hosting.json`. The repository contains one
application source file and a small build pipeline that produces a self-contained
ES module artifact.

## Runtime

`worker/index.js` exports a default object with an asynchronous `fetch(request)`
method. It uses standard request, URL, response, and byte-array APIs available in
the current Sites worker-style runtime.

The worker handles two request outcomes:

- `/` renders the complete HTML document.
- Every other path returns `404 Not found`.

A trailing slash is removed before routing, with the empty result normalized to
`/`.

The HTML, CSS, visible content, and browser JavaScript are all returned from
`worker/index.js`. Browser JavaScript manages only the responsive navigation
menu. Contact actions use standard `mailto:`, `tel:`, and WhatsApp links. There
are no runtime package imports or backend application APIs.

## Assets

Sector, coverage, and temporary team photographs, the WhatsApp icon, and the
official brand variants live in `assets/`.

`worker/index.js` contains placeholders for the five sector JPEGs, nine coverage
JPEGs, eight team JPEGs, two brand PNGs, and the WhatsApp SVG. During the build,
`scripts/embed-assets.mjs` reads the source assets, creates base64 data URLs, and
replaces the matching placeholders in the generated worker.

Source assets and placeholders must remain aligned. Do not manually paste
encoded raster data into `worker/index.js` or edit the generated artifact.

## Build and validation

`scripts/build.sh` is the canonical build. It:

1. Resolves the repository root.
2. removes and recreates `dist/`;
3. copies `worker/index.js` to `dist/server/index.js`;
4. copies `.openai/hosting.json` to `dist/.openai/hosting.json`; and
5. runs the asset embedding script against the generated worker.

`scripts/validate-artifact.mjs` parses the copied hosting configuration, imports
the generated worker as an ES module through a data URL, and asserts that it
exports `default.fetch` as a function.

The intentionally minimal quality gate is:

```sh
npm run verify
```

It runs the existing build followed by the existing artifact validation. The
scripts require Bash and a modern Node.js/npm environment, but the repository
does not currently declare a specific Node version.

## Generated output and deployment constraints

`dist/` is generated, ignored by Git, and must never be edited manually. Each
build recreates it from source.

`.openai/hosting.json` is part of the Sites deployment configuration and is
copied unchanged into the build artifact. It currently identifies the hosted
project and declares no D1 or R2 resources. Changes to this file should be made
only when deployment requirements explicitly change.

Preserve the worker module shape, build output layout, asset embedding flow, and
validation behavior unless a task explicitly changes those contracts.
