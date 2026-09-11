# Del Campo Seguros

Del Campo Seguros is a Spanish-language website prototype for an insurance
broker. It presents the firm's value proposition, services, working method, and
an internal decision survey.

The application is a dependency-free Sites worker-style project. The complete
website source is in `worker/index.js`; raster source assets are in `assets/`.
See [`docs/product.md`](docs/product.md) for the current product scope and
[`docs/architecture.md`](docs/architecture.md) for the technical design.

## Development

- Edit `worker/index.js` for application changes.
- Never edit `dist/`; it is generated and ignored by Git.
- Keep `.openai/hosting.json` as part of the Sites deployment configuration.
- Do not add dependencies unless the project has a clear need for one.

Run the canonical quality gate with:

```sh
npm run verify
```

This rebuilds `dist/` and validates the generated artifact. The build embeds the
PNG assets into the generated worker, so the output is self-contained.

The generated layout is:

```text
dist/
├── .openai/
│   └── hosting.json
└── server/
    └── index.js
```
