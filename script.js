//A
  const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
  
const findSpiderMan = superheroes.find( (superheroes) =>{
    return superheroes.name === "Spiderman"
})
  
  console.log(findSpiderMan) 
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}



//B


const doubleArrayValues = items.forEach ( (item)=>{
 return item * 2
})

  doubleArrayValues([1, 2, 3]) 
  // result should be [2, 4, 6]


  //c


  const containsNumberBiggerThan10 = items.filter( (item) =>{
  return item >10
  }  )

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
  // result should be true
 containsNumberBiggerThan10([1,2,1,2,1,2])
  // result should be 
  
  //d

  const isItalyInTheGreat7 = items.some ( (item)=> {
      return item ==="Italy"
  })

    isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
  // result should be true


  //e
  const numbers= [1, 4, 3, 6, 9, 7, 11]
  const tenfold = (numbers)=> numbers.forEach( numbers*10)

    console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]

// f


const getallen = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]
const isBelow100 =  getallen.some( (getal)=>{

return getal < 100
})


  console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false

  //g

  const items = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234] 
  const bigSum = items.reduce( (currentTotal, item)=>{
 return item + currentTotal
  }, 0)

  console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118