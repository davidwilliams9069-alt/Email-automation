#!/usr/bin/env bash
# Vercel build script for Django
# exit on error
set -o errexit

# Install dependencies
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

# Note: Migrations should be run separately or via a one-off command
# since Vercel serverless functions have a read-only filesystem
# Run migrations manually: python manage.py migrate
# Or configure a separate migration command in your CI/CD pipeline
