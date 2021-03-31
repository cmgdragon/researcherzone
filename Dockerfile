FROM hayd/deno:latest
WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
COPY . .


EXPOSE 8000

# Added to ENTRYPOINT of base image.
CMD ["run", "--allow-env", "--allow-read", "--allow-net", "--config", "./tsconfig.json", "src/main.tsx"]