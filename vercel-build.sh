#!/bin/sh
echo "Current directory: $(pwd)"
echo "Listing files:"
ls -l
npm install --prefix frontend
npm run build --prefix frontend
