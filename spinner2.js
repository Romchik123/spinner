const arr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let timer = 100;

// When running, run it in the terminal! ::
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, (timer += 200)); // <= 1s delay to make it noticeable. Can dial it down later.
}
