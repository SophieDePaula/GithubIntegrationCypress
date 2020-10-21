module.exports = {
  saveDebugData: false,
  dontCloseBatches: true,
  disableBrowserFetching: true,
  concurrency: 25,
  useDom: true,
  enablePatterns: true,
  failCypressOnDiff: false,
  browser: [
    { width: 1280, height: 720 },
    { width: 375, height: 720 }
  ]
};
