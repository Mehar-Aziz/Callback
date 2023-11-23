function add(a, b, callback) {
    const sum = a + b;
    callback(sum);
  }
  
  function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Both parameters must be numbers'));
      } else {
        const sum = a + b;
        resolve(sum);
      }
    });
  }
  
 
  add(5, 10, result => {
    console.log('Result using callback:', result);
  });

  addAsync(7, 3)
  .then(result => {
    console.log('Result using Promise:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

  module.exports = add;