var fs = require('fs');

fs.appendFile('mynewfile1.txt','This is mytext',function(err){
  if(err) throw err
  console.log('Updated!');
});
  
