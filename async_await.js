// function getData() {
//   return new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(455);
//     }, 4000);
//   })
// }

// console.log('Loading modules');

// console.log('Do something else');

// console.log('Loading data');

// let data = getData()
// method 1 data is a promise by callback approch
// data.then((v)=>{
//     console.log(data)
//     console.log('processing data')
//     console.log("task2")
// })

// method 2 new approch of async and await 

// async function getData() {
//     // simulate getting data function from a server
//     return new Promise((resolve, reject) =>{
//       setTimeout(() =>{
//           resolve(455);
//       }, 4000);
//     })
//   } // background function working in background

// converting this fake situation to a real one

  async function getData() {
    // simulate getting data function from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json();
    return data;
  }
  
async function main(){
    console.log('Loading modules');
    console.log('Do something else');
    console.log('Loading data');
    let data = await getData() // to use await we have to make another main function
    // await can only be used inside a async function
    console.log(data)
    console.log('processing data')
    console.log("task2")
} // now the process is wrapped in a main function

// settle - resolve or reject both
// resolve - settled sucessfully
// reject - not settled sucessfully

  main()


// json placeholder fetch data using api post data


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

















