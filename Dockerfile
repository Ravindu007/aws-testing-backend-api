FROM node

ARG ENV=dev  # Adjust to match your available environment (e.g., 'dev')
ENV ENV=${ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Use the appropriate build command based on the environment
RUN if [ "$ENV" = "dev" ]; then npm run build:dev; else npm run build; fi

RUN npm i -g env-cmd

EXPOSE 3200 8080 9000

# Run the correct start command based on the environment
CMD if [ "$ENV" = "dev" ]; then npm run start:prod:dev; else npm run start; fi
