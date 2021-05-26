function improvedData (rawData) {
  let keys = Object.keys(rawData[0])
  let d = []

  for (let i = 0; i < rawData.length; i++) {
    let data = []
    for (let j = 0; j < keys.length; j++) {
      data.push(rawData[i][keys[j]])
    }
    d.push(data)
  }
  return { "h": keys, "d": d }
} 

console.log(improvedData([{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4}]))
// expected output
// {"h":["username","hair_color","height"], "d":[["ali","brown",1.2],["marc","blue",1.4]]}