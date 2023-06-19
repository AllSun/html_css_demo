var random_num,
    front_lucky = [],
    end_lucky = [];

while(front_lucky.length !== 5){
    random_num = parseInt(Math.random()*(32-1+1) + 1);
    if(!front_lucky.includes(random_num)){
        front_lucky.push(random_num);
    }
}

while(end_lucky.length !== 2){
    random_num = parseInt(Math.random()*(12-1+1) + 1);
    if(!end_lucky.includes(random_num)){
        end_lucky.push(random_num);
    }
}

console.log("前区号码为"+front_lucky);
console.log("后区号码为"+end_lucky);