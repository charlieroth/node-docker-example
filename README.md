### Node Docker Example

- Fastify: HTTP Server
- Redis: Cache
- Traefik: HTTP reverse proxy and load balancer

### How To Run

0. Install Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
1. Clone repo: `git clone https://github.com/charlieroth/node-docker-example`
2. Build container: `docker build -t api .`
3. Run container: `docker-compose up`
3. Traefik Dashboard: [http://localhost:8080](http://localhost:8080)
3. Store Message: `curl -X POST http://localhost:4000/to-cache -H 'Content-Type: application/json' -d '{"message":{"key":"key-one","value":"value-one"}}'`
3. Retreive Message: `curl http://localhost:4000/from-cache\?key\=key-one`
4. Kill container: `docker-compose down`
