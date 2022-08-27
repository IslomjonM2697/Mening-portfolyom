let contacktbtn = document.querySelector('.gap-2')
contact1 = document.querySelector('.contakt')
qaytish=document.querySelector('.butt')
buttons=document.getElementsByClassName('.btn')
contacktbtn.addEventListener('click', function () {
    contact1.style.display = 'block';
    buttons.style.display='none';
    
    

}
)
contact1.addEventListener('block', function(){
 buttons.style.display='none';
    
})
qaytish.addEventListener('click', function(){
    alert('Biz siz bilan albatta bog`lanamiz')
    contact1.style.display = 'none'
    


})
