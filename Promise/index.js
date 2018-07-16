'use strict'

function me () {
  let Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise1')
    }, 2000)
  })
  return Promise1
}


let Promise2 = new Promise((resolve, reject) => {
  me()
      .then(res => {
        resolve(res)
      })
      .catch(err => reject(err))
})

Promise2
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('we catch the error')
      console.log(err)
    })

