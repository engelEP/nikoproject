import { observer, scroll } from "./observer.js";

//code scroll top button
const scrollTop = document.getElementById('section-banner');
const buttonScroll = document.getElementById('buttonScroll-id');
scroll(scrollTop, buttonScroll, 'visible');

//code animation section strategy
const sectionStrategy = document.getElementById('strategy-section');
const strategyClass = document.querySelectorAll('.strategy-wraper');
strategyClass.forEach(element => {
    observer(sectionStrategy, element, 'visibleStrategy');  
});

//code animation section 
const sectionBlog = document.getElementById('blog-section');
const blogClass = document.querySelectorAll('.blog-column');
blogClass.forEach(element => {
    observer(sectionBlog, element, 'visibleBlog');  
});

//code section animation form
const sectionForm = document.getElementById('contact-section');
const formImgClass = document.querySelector('.form-wraper-img');
const formClass = document.querySelector('.form-wraper-design');

observer(sectionForm, formImgClass, 'visibleFormImg');
observer(sectionForm, formClass, 'visibleForm');
