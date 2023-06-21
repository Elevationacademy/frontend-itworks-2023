window.x = 100

const foo = {
    x: 5,
    friend: {
        x: 33,
        innerFoo: function () {
            console.log("foo in friend: ", this.x)
        }
    },
    boo: function(){
        setTimeout(()=>{
            console.log("x after boo timeout: ", this.x)
        }, 1000);
    }
}

foo.friend.innerFoo()               // 33
foo.boo()                           // 5
