function count() {
 let res = "";
    for (let i = 1; i <= 5 ; i++) {
        for (let j =1 ; j <=5; j++) {
           res=res+ j;
        }
        res=res+ "\n";
    }
    console.log(res);    
}

count();