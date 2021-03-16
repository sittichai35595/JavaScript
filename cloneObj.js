const obj1  = {
    person : 'Sittichai',
    weight : 85
}

const obj2 = {... obj1};
obj2.weight = 80;
console.log(obj1);
console.log(obj2);