const container=document.querySelector('.container');
const detailedProfile=document.querySelector('.detailed-profile');
const viewBtn=document.querySelector('.view-btn');
const closeBtn=document.querySelector('#close-btn');

container.addEventListener('click',function(e){
    e.stopPropagation();
    if(e.target='button'){
        container.style.display='none';
        detailedProfile.style.display='block';
    }
   
})

closeBtn.addEventListener('click',function(e){
    container.style.display='flex';
    detailedProfile.style.display='none';
})