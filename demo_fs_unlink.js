var fs = require('fs');

//Delete the file newfile2.txt

fs.unlink('mynewtext2.txt',function(err){
  if(err) throw err;
  console.log('File Deleted !');
});
