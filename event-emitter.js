const EventEmmitter = require('node:events');
const eventEmmiter = new EventEmmitter()


eventEmmiter.on("birthday", ()=>{
    console.log(`Happy Bithday Bro`)
})
eventEmmiter.on("birthday",(gift,giftmore)=>{
    console.log(`i will sent you a ${gift} ${giftmore}`)
    
})

eventEmmiter.emit("birthday","bike","and many more")