# deploy

## deploy
old compose:
```sh
docker-compose down && docker-compose build && docker-compose up -d && docker-compose logs -f
```

new compose:
```sh
docker compose down && docker compose build && docker compose up -d && docker compose logs -f
```
