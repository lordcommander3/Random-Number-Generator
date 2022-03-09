var a=Math.random() //by default the range will from 0 to 1 
console.log("Before setting range : " + a)

a = a*(1000-1)+1  //here we have changed the range (max-min)+min
console.log("After setting range : " + a)


console.log("without decimal : " + Math.floor(a))



