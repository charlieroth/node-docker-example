# Node Docker Example

- Fastify: HTTP Server
- Redis: Cache
- Traefik: HTTP reverse proxy and load balancer

# How To Run

0. Install Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
1. Clone repo: `git clone https://github.com/charlieroth/node-docker-example`
2. Build container: `docker build -t cache-api`
3. Run container: `docker-compose up`
4. Kill container: `docker-compose down`
