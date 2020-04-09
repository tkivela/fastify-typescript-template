FROM node:12.16.1

WORKDIR /usr/src/app
COPY . .

# Install package dependencies, don't allow any changes to the lockfile
RUN yarn install --frozen-lockfile --no-progress
# Build project and clean up everything that's not needed for running
RUN ./docker/docker-build-and-clean.sh

EXPOSE 3042
CMD [ "yarn", "prod" ]