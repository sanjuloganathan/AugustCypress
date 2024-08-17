// Reverse the string inside the function => "Trendnologies".=> loop


function rev() {
    let str="Trendnologies"
    for(i=str.length-1;i>=0;i--){
        console.log(str[i])
    }   
}
rev()

// iterate 0 to 10 even number inside the function=> loop

for(let i=0;i<=10;i++){
    if (i%2==0) {
        console.log(i)
    }
}