FROM php:8.3-cli-alpine
WORKDIR /app
RUN apk add --no-cache git unzip postgresql-dev && docker-php-ext-install pdo_pgsql
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY composer.json composer.json
RUN composer install --no-interaction --prefer-dist --no-scripts
COPY . .
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
