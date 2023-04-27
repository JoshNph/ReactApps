function urlify(str) {
    // Remove special characters and make everything lowercase
    str = str.replace(/[^\w\s]/gi, '').toLowerCase();
    // Replace spaces with dashes
    str = str.trim().replace(/\s+/g, '-');
    return str;
  }
  
  console.log(urlify("hello world")); // "hello-world"
  console.log(urlify(" hello  world ")); // "hello-world"
  console.log(urlify("Emma's world")); // "emmas-world"
  console.log(urlify("The Quick Brown Fox Jumps Over the Lazy Dog!")); // "the-quick-brown-fox-jumps-over-the-lazy-dog"
  