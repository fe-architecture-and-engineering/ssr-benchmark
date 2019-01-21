# ssr-benchmark

benchmark server side rendering techniques include Vue, Pug and standard ES6 Template Literals.

## Usage
### start server
```bash
npm install
npm run start
```

### testing
use ApacheBench to run the testing:
```ab
ab -n 1000 -c 100 http://127.0.0.1:3000/<path>
```

`<path>` could be values like below:
- `es6`: standard ES6 Template Literals
- `vue`: Vue ssr
- `pug`: Pug template engine


## Testing result
see [issue](https://github.com/fe-architecture-and-engineering/ssr-benchmark/issues/1)