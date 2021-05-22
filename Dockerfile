FROM hayd/deno:latest
WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
COPY . .


EXPOSE 8000

# Added to ENTRYPOINT of base image.

CMD ["bundle", "src/frontend/index.jsx", "src/static/index.js", "--allow-read", "--allow-net", "--config", "./tsconfig.json", "--import-map=src/import_map.json"]
CMD ["run", "--import-map=src/import_map.json", "--allow-env", "--allow-read", "--allow-net", "--config", "./tsconfig.json", "src/main.tsx"]