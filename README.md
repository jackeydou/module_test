# CommonJS
```
pnpm --filter commonjs run dev
```

Output：
```
index.js, a:  1
index.js, add(a, 1) 2
a += 1, a: 2
setTimeout in index.js, a:  1
setTimeout in index.js, add(a, 1):  2
```

# webpack esm & commonjs

webpack commonjs
```
pnpm --filter webpack_common_js run build

```


webpack esmodule
```
pnpm --filter webpack_esm run build

```
