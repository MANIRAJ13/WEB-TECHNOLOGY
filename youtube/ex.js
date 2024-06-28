function mani(){
    let a=10
    let b=20
    if(a===b){
        alert('good morning')
    }
    else{
        alert('good evening')
    }
}
mani()


let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    btn.style.background ='red'
})
