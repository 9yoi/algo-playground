function moveDisks (n, origin, destination, buffer) {
  // if no more disks, return
  if (n < 0) {
    return;
  }
  // move top (n - 1) disks from origin to buffer via destination
  moveDisks(n - 1, origin, buffer, destination);
  // move top disk from origin to destination
  moveTop(origin, destination);
  // move n-1 disks from buffer to destination via origin
  moveDisks(n - 1, buffer, destination, origin);
}


