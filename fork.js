const {fork} = require('child_process');
const chalk = require('chalk')

async function start(){
const child = fork('./index.js')
//send pesan ke child
//child.send("Hello Child")

//terima pesan dari child
child.on("message",msg=>{
console.log('child to parent =>',msg)
})

child.on("close",(anu)=>{
//console.log('terclose',anu)
console.log(chalk.black(chalk.bgRed(`Super Bot is restarting..`)))
start()
})

child.on("exit",(anu2)=>{
//console.log('terexit',anu2)
})

}
start()