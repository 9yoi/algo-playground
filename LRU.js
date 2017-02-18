function lru (limit = 2) {
  this.limit = limit;
}

let cache = new lru (10)
console.log(cache.limit)