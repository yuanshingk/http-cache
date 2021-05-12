FROM node:lts-alpine3.13@sha256:7021600941a9caa072c592b6a89cec80e46cb341d934f1868220f5786f236f60
ARG PORT=8080 BASEURL=""
ENV NODE_ENV=production \
    PORT=${PORT} \
    BASEURL=${BASEURL}

WORKDIR /app

COPY --chown=node:node package*.json /app

RUN npm ci --only=production

COPY --chown=node:node . /app

EXPOSE ${PORT}/tcp

USER node
CMD ["node", "src/index.js"]

