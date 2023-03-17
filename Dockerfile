FROM denoland/deno

EXPOSE 8080

WORKDIR /app

USER deno

ADD . /app

COPY src/deps.ts ./
RUN deno cache src/deps.ts

COPY src/index.ts ./

CMD ["run", "--allow-net", "src/index.ts"]
