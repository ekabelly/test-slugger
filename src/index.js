const slugger = (...args) => args.join('-');

module.exports = slugger;

// slugger('hello', 'world', 'user');