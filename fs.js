const fs = require('fs')
//const read = fs.readFileSync('./path.txt','utf8')
//fs.writeFileSync('./write.txt',`Write file : ${read}`,{flag : 'a'})
//console.log(read)
console.log('Start')
fs.readFile('./path.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Done withis task')
    const read = result
    fs.writeFile('./write.txt',`Write : ${read}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        
    })
})
//In Asynchronous file reading multiple tasks are done at a time
console.log('Started reading next file')