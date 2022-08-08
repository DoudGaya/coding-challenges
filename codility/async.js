// async whith the event loop


function f1(){
    console.log('f1');
}

function f2(){
    console.log('f2');
}

const main = () => {
  console.log('main')
    setTimeout(f1, 0);

    new Promise((resolve, reject) => {
    resolve('success 1');
    }).then((resolve) => console.log(resolve));


    f2();
}


main();