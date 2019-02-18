export const random = array =>
  array[Math.floor(Math.random() * array.length)];


export const timeout = (ms, opts) =>
  new Promise((res, rej) => setTimeout(opts.reject ? rej : res, ms));

export const applyTimeout = (promise, ms) => Promise.race([
  promise,
  timeout(ms, { reject: true })
]);
