let myPromise: Promise<number> = new Promise<number>((resolve) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        resolve(Number(randomNumber.toFixed(4)));
    }, 3000);
});
myPromise.then((result) => {
    console.log("Число 1 таск: ", result);
});

////////

const generateAndLogNumbers = () => {
    const delays = [3000, 2000, 1000];

    const promises = delays.map((delay) => {
        return new Promise<number>((resolve) => {
            setTimeout(() => {
                myPromise.then((result : number) => {
                    resolve(result);
                });
            }, delay); 
        });
    });

    Promise.all(promises)
        .then((results) => {
            console.log("Число 1 из 3 таск: ", results[0]);
            console.log("Число 2 из 3 таск: ", results[1]);
            console.log("Число 3 из 3 таск: ", results[2]);
        })
        .catch((err) => {
            console.error("Ошибка: ", err);
        });
};

generateAndLogNumbers();

//////////
function TaskFour() : void {
    let pr = new Promise((res,rej) => {
        rej('ku')
    })
    
    pr
        .then(() => console.log(1))
        .catch(() => console.log(2))
        .catch(() => console.log(3))
        .then(() => console.log(4))
        .then(() => console.log(5))
}

TaskFour();
//////

let promiseTaskFive = new Promise<number> ((resolve) => {
    resolve(21);
})

promiseTaskFive
    .then((result) => {
        console.log("первое число 5 задание: " + result); 
        return result;
    })
    .then((result) => {
        console.log("второе число 5 задание: " + (result * 2));
    });

//асинк эвэйт
async function Async() {
    const result = await promiseTaskFive;
    console.log("первое число 6 задание: " + result); 
        
    const secondResult = result * 2; 
    console.log("второе число 6 задание: " + secondResult);
}

Async();

///////////
let promise1 = new Promise((res,rej) =>{
    res('Resolved promise - 1')
  })
  promise1
    .then((res)=>{
      console.log("Resolved promise - 2")
      return "OK"
    })
    .then((res) =>{
      console.log(res)
    })
  
  let promise2 = new Promise((res, rej) => {
    res('Resolved promise - 1')
  })
  promise2
    .then(res => {
      console.log(res)
      return 'OK'
    })
    .then((res1) => {
      console.log(res1)
    })
  
  let promise3 = new Promise((res, rej) => {
    res('Resolved promise - 1')
  })
  promise3
    .then(res => {
      console.log(res)
      return res
    })
    .then((res1) => {
      console.log('Resolved promise - 2')
    })
  
  let promise4 = new Promise((res, rej) => {
    res('Resolved promise - 1')
  })
  promise4
    .then(res => {
      console.log(res)
      return res
    })
    .then((res1) => {
      console.log(res1)
    })
  
  let promise5 = new Promise((res, rej) => {
    res('Resolved promise - 1')
  })
  promise5
    .then(res => {
      console.log(res)
    })
    .then(res1 => {
      console.log(res1)
    })
  
  let pr = new Promise((res,rej) =>{
    rej('ku')
  })
  
  pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))
  
