# MUNDOPODCAST

## Development

# How to execute ?
```shell
docker compose up --buid
```

After you build for the first time, you just need to make:
```shell
docker compose up
```

# How to view the database?

After you build the application, you just need to make:
```shell
docker exec -it backend-db-1 /bin/bash
psql -U postgres -d podcast_db

# To be able to see the tables
\d
```