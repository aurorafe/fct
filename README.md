# aurorafe tool chain config

## dev

```bash
git clone https://github.com/aurorafe/ftc.git

nvm use

pnpm i

pnpm run lint
pnpm run build
```

#### local link

1. 首先我们需要将 `packages` 下的某个包在本地link到全局，以 `tsconfig`为例：

```bash
cd ./packages/tsconfig
pnpm link --global
```

2. 在需要使用的仓库下执行以下命令关联

```bash
pnpm link --global @aurorafe/tsconfig
```