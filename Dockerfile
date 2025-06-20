# Use Ruby 3.4.4 Alpine image for smaller size and ARM64 compatibility
FROM ruby:3.4.4-alpine

# Set production environment
ENV RAILS_ENV=production
ENV NODE_ENV=production
ENV BUNDLE_WITHOUT="development:test"
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true

# Install system dependencies
RUN apk add --no-cache \
    build-base \
    postgresql-dev \
    nodejs \
    npm \
    git \
    tzdata \
    yaml-dev \
    curl \
    && rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /app

# Copy Gemfile first for better layer caching
COPY Gemfile Gemfile.lock ./

# Install Ruby gems
RUN bundle config --global frozen 1 \
    && bundle config set --local deployment 'true' \
    && bundle config set --local without 'development test' \
    && bundle install --jobs 4 --retry 3 \
    && bundle clean --force

# Copy package.json for better layer caching
COPY package.json package-lock.json ./

# Copy application code
COPY . .

# Install Node.js dependencies (postinstall will run webpack -p automatically)
RUN npm ci --omit=dev

# Precompile assets (this will run Webpack)
# RUN bundle exec rake assets:precompile (already run by npm ci step above)

# Create a non-root user
RUN addgroup -g 1000 -S appgroup \
    && adduser -u 1000 -S appuser -G appgroup

# Change ownership of the app directory
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose port 3000
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Start the Rails server
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]