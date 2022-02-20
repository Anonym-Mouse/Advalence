var fs = require('fs');
fs.readFile('test.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    var array = JSON.parse(data)
console.log(array)
  })
  
