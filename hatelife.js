//1
const randTime = () => {
	new Promise(resolve => {
		const sec = Math.random() * 1000
		setTimeout(() => {
		}, sec);
	})
}
//2
function depthTimer(depth) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`depth${depth}`, new Date());
        if (depth === 3) {
          return reject(new Error('Already 3-depth!!!'));
        }
        resolve(depth + 1);
      }, depth * 1000);
    });
  }
//3
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = []
        let completed = 0
        promises.forEach((promise, index) => {
            Promise.resolve(promise) 
                .then(result => {
                    results[index] = result
                    completed++
                    if (completed === promises.length) {
                        resolve(results)
                    }
                })
                .catch(reject);
        })
    })
}
//3.5
function promiseAllSettled () {
    arr = []
    return Promise((resolve, reject) =>  {
        .then() {

        } .catch() {

        } .finally() {

        }
    })
}
//4
async function asyncAll(promises) {
    const results = [];
    for (const promise of promises) {
        results.push(await promise);
    }
    return results;
}
//5
async function getUserPosts(id) {
    try{
        const fetched = await fetch ("https://jsonplaceholder.typicode.com/users/" + id)
        const fetched2 = await fetch ("https://jsonplaceholder.typicode.com/posts?userId=" + id)
        const data = await fetched.json()
        const data2 = await fetched2.json()
        const id  = data.id
        const name = data.username
        const result = {
            id: userData.id,                
            name: userData.name,            
            posts: data2.map(post => ({ 
                id: data2.id,
                title: data2.title,
                body: data2.body
        }))}
    console.log(result)
    } 
    catch (error) {
        console.error("shit failed", error)   
    }
}