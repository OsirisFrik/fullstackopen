# Full Stack Open

## Parts

- [Part 0](./part0/)
- [Part 1](./part1/)
- [Part 2](./part2/)
- [Part 3](./part3/)

## Run

> Use npm/yarn workspaces

### Part 1

```sh
yarn workspace <anecdotes | courseinfo | unicafe> dev
```

### Part 2

```sh
yarn workspace <countries | kurssitiedot> dev
```

### Part 3

```sh
yarn workspace backend dev
```

## Deploy

### Build docker image

```sh
docker build -t open-fs:latest .
```

### Fly.io deploy

```sh
fly launch
```

[https://open-fs.fly.dev/](https://open-fs.fly.dev/)
