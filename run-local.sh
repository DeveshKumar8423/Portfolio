#!/usr/bin/env bash
set -euo pipefail

# run-local.sh
# Lightweight helper to install deps and start the Vite dev server for this repo.
# Usage: chmod +x run-local.sh && ./run-local.sh

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "== Portfolio dev helper =="

# Check node
if ! command -v node >/dev/null 2>&1; then
  echo "\nNode.js is not installed or not on PATH.\nPlease install Node 22.x (nvm/fnm/asdf recommended) and re-run this script."
  exit 1
fi

NODE_V=$(node -v)
NODE_MAJOR=$(echo "$NODE_V" | sed -E 's/v([0-9]+).*/\1/')

if [ "$NODE_MAJOR" -ne 22 ]; then
  echo "\nWarning: package.json expects Node 22.x but the current Node version is $NODE_V"
  read -r -p "Continue anyway? (y/N): " YN
  YN=${YN:-N}
  if [[ ! "$YN" =~ ^[Yy]$ ]]; then
    echo "Aborting. Please switch to Node 22 and re-run."
    exit 1
  fi
fi

echo "\nRemoving node_modules and package-lock.json (if present)..."
rm -rf node_modules package-lock.json

echo "\nVerifying npm cache..."
npm cache verify

echo "\nInstalling dependencies (this may take a minute)..."
npm install

echo "\nStarting Vite dev server..."
# Start in foreground so you see logs. If you want background, run with &
npm run dev

# End of script
