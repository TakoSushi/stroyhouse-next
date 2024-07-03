# Сайт Стройхаус
## Главная страница

[Сайт проекта](https://takosushi-stroyhouse-next-81f2.twc1.net/)


___
Коментации по работе в dev mode.
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
