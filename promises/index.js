function delayFn(time){
  return new Promise((resolve)=> setTimeout(resolve, time))

}

console.log('Promise lecture starts')
kdelayFn(2000).then(()=> console.log('after 2 seconds promise resolved'))
console.log("end");