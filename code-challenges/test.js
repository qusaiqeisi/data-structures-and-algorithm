// let numbers = [1,2,3,4];
// let sum = numbers.reduce( function(accumulator,value,idx) {
//   accumulator = accumulator + value;
//   console.log(accumulator);
//   return accumulator;
// }, 5);
// console.log(sum);


let people = [
    {name:'Fred', role:'Developer'},
    {name:'Suzy', role:'Developer'},
    {name:'Gina', role:'Manager'},
    {name:'Jim', role:'Support'}
  ];
  
  let folks = people.reduce( (accumulator, person, idx) => {
    accumulator[person.name] = person.role;
    return accumulator;
  }, {} );
  

  console.log(folks);
//   // folks:
//   {
//     Fred: 'Developer',
//     Suzy: 'Developer',
//     Gina: 'Manager',
//     Jim: 'Support'
//   }