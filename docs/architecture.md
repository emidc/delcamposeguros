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

The worker handles three request outcomes:

- `/` renders the complete HTML document.
- `/og.png` decodes and returns the embedded Open Graph PNG.
- Every other path returns `404 Not found`.

A trailing slash is removed before routing, with the empty result normalized to
`/`. The request origin is used to construct the absolute Open Graph and Twitter
image URL.

The HTML, CSS, visible content, and browser JavaScript are all returned from
`worker/index.js`. Browser JavaScript manages the modal survey, device-local
survey storage, clipboard export, toast messages, and the simulated contact-form
submission. There are no runtime package imports or external application APIs.

## Assets

The source PNG files live in `assets/`:

- `del-campo-logo.png`
- `del-campo-favicon.png`
- `del-campo-og.png`

`worker/index.js` contains a placeholder for each asset. During the build,
`scripts/embed-assets.mjs` reads each PNG, creates a base64 `data:image/png` URL,
and replaces the matching placeholder in the generated worker. The logo and
favicon are then referenced directly as data URLs in the HTML. The Open Graph
image is decoded and served from `/og.png`.

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
