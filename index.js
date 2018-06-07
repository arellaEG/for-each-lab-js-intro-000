function iterativeLog(array){
  array.forEach(function callback(element, index, array)=>
    {console.log(`${index}:${element}`)})
}
