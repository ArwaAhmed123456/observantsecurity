# TODO: Vercel Deployment Troubleshooting

- [x] Fix vercel.json routes to serve from frontend/build
- [x] Create vercel-build.sh for logging and build steps
- [x] Add "vercel-build" script to root package.json
- [x] Update vercel.json to use @vercel/node with includeFiles and VERCEL_DEBUG for troubleshooting
- [ ] Test the deployment with vercel deploy --yes
- [ ] Check Vercel dashboard logs for errors
- [ ] If backend API issues, consider moving backend/server.js to api/ folder for serverless functions
