# Usa Node con versión específica compatible con Astro
FROM node:18.20.8-alpine

# Establece directorio de trabajo
WORKDIR /app

# Copia archivos
COPY . .

# Instala dependencias con npm ci (más seguro que npm install para builds)
RUN npm ci

# Compila el proyecto Astro
RUN npm run build

# Expone el puerto por defecto de Astro preview
EXPOSE 4321

# Comando para servir el sitio
CMD ["npx", "astro", "preview"]
