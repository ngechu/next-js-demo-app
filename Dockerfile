# pull official base image
FROM node:lts AS build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH



# install app dependencies
COPY package.json ./
#COPY package-lock.json ./
RUN yarn install --ignore-engines
RUN yarn add react-scripts@4.0.1 -g

# add app
COPY . ./
RUN yarn run build

# Production env
FROM nginx:1.18.0-alpine
COPY --from=build /app/build /usr/share/nginx/html

# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# start app
#CMD ["npm", "start"]
