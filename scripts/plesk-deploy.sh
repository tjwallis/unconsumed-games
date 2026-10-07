#!/bin/sh
# Build the static site and publish it to the Plesk web root.
#
# Plesk → Websites & Domains → Git → (repository) → Repository settings:
#   Deployment mode:  Automatic
#   Server path:      a folder outside httpdocs, e.g. /unconsumed-games
#   Deployment actions:  sh scripts/plesk-deploy.sh /var/www/vhosts/<domain>/httpdocs
#
# Needs Node 22 (Plesk's Node.js extension installs it under /opt/plesk/node) and
# SSH access for the subscription set to /bin/bash (not chrooted), so the deploy
# action can see Node.
set -eu

TARGET="${1:-../httpdocs}"

# Use the newest Node from Plesk's Node.js extension when none is on PATH.
if ! command -v npm >/dev/null 2>&1; then
  NODE_BIN="$(ls -d /opt/plesk/node/*/bin 2>/dev/null | sort -V | tail -n 1 || true)"
  if [ -n "$NODE_BIN" ]; then PATH="$NODE_BIN:$PATH"; export PATH; fi
fi
command -v npm >/dev/null 2>&1 || { echo "plesk-deploy: npm not found. Install Node 22 with Plesk's Node.js extension." >&2; exit 1; }
echo "plesk-deploy: node $(node -v)"

npm ci --no-audit --no-fund
npm run build:static

[ -d "$TARGET" ] || { echo "plesk-deploy: target $TARGET does not exist" >&2; exit 1; }

# Mirror the build into the web root. Keep Let's Encrypt's .well-known folder.
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete-after --exclude '.well-known/' dist/client/ "$TARGET"/
else
  cp -a dist/client/. "$TARGET"/
fi
echo "plesk-deploy: published to $TARGET"
