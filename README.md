deploy
======

Development
-----------
to run development build, run the following:
```sh
docker compose down && docker compose rm && docker compose build && docker compose up --build --force-recreate -d && docker compose logs -f
```

to run development build with old compose, run the following:
```sh
docker-compose down && docker-compose rm && docker-compose build && docker-compose up --build --force-recreate -d && docker-compose logs -f
```
