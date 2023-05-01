let d = new Date();


function callback(){
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(callback, 1000);
