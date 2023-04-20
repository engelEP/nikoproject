import { observer } from "./observer.js";

//code scroll top button
const scrollTop = document.getElementById('section-banner');
const buttonScroll = document.getElementById('buttonScroll-id');
observer(scrollTop, (entry) => {
    if(!entry.isIntersecting){
        buttonScroll.classList.add('visible');
    } else{
        buttonScroll.classList.remove('visible');
    }
});

//code animation section strategy
const sectionStrategy = document.getElementById('strategy-section');
const strategyClass = document.querySelectorAll('.strategy-wraper');
strategyClass.forEach(element => {
    observer(sectionStrategy, (entry) => {
        if(entry.isIntersecting){
            element.classList.add('visibleStrategy');
        } else{
            element.classList.remove('visibleStrategy');
        }
    });  
});

// //code animation section 
const sectionBlog = document.getElementById('blog-section');
const blogClass = document.querySelectorAll('.blog-column');
blogClass.forEach(element => {
    observer(sectionBlog, (entry) => {
        if(entry.isIntersecting){
            element.classList.add('visibleBlog');
        } else{
            element.classList.remove('visibleBlog');
        }
    });  
});

// //code section animation form
const sectionForm = document.getElementById('contact-section');
const formImgClass = document.querySelector('.form-wraper-img');
const formClass = document.querySelector('.form-wraper-design');

observer(sectionForm, (entry) =>{
    if(entry.isIntersecting){
        formImgClass.classList.add('visibleFormImg');
    } else{
        formImgClass.classList.remove('visibleFormImg');
    }
});
observer(sectionForm, (entry) =>{
    if(entry.isIntersecting){
        formClass.classList.add('visibleForm');
    } else{
        formClass.classList.remove('visibleForm');
    }
});

//animation progress bar of the section skill

const percentage = [75, 60, 85, 90, 70, 80];
const sectionSkill = document.getElementById('section-percentage-id');
const skillClass = document.querySelectorAll('.empty');
const percentageNumber = document.querySelectorAll('.skill-percentage-number');

skillClass.forEach((element, index) =>{
    observer(sectionSkill, (item) =>{
        if(item.isIntersecting){
            element.classList.add('full');
            percentageNumber[index].innerHTML = `${percentage[index]}%`;
            element.style.width = `${percentage[index]}%`;
        } else{
            element.classList.remove('full');
            element.style.width = "0%";
        }
    });
});

