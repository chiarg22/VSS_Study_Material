function printPattern() {
    var rows = 5;
    var count = 1;
  
    for (var i = rows; i >= 1; i--) {
      var pattern = "";
      
      for (var j = count; j <= 2 * i - 1 + count; j++) {
        pattern += j + " ";
      }
  
      console.log(pattern);
      count++;
    }
  }
  
  printPattern();