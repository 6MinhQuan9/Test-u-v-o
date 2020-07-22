//bài 1
var num = '1 4 1 64 128 5 4 7 32 '
var dayso = []
console.log(num)
var a = ''
for(i=0;i<num.length;i++){
    if(num[i]!=' '){
        a = a + num[i]
    }else{
        if(a!=''){
            dayso.push(a)
        }
        a = ''
    }
}
console.log(dayso)
for(i=dayso.length-1;i>-1;i--){
    console.log(dayso[i])
}
//bài 2 chưa làm được
