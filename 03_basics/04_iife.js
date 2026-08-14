(function chai(){
    console.log(`DB connected`)
})();    //Wrapped in () and then immediately called by ()

//why we use it: sometimes there can be some problem due to global scope pollution so for mitigating that we use IIFE

((PORT)=>{
    console.log(`DB running at ${PORT}`)
})(4000);