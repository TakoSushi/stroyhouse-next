Run the development server:
Что бы dev мод заработал нормально убедитеcь, что в файле next.config.mjs закоментирована строка

```
const nextConfig = {
  //  assetPrefix: ".",
};
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To get static site version

В файле next.config.mjs раскоментируйте строку

```
const nextConfig = {
  //  assetPrefix: ".",
};
```

```bash
npm run export
```
