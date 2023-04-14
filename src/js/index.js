//code scroll top button
const scrollTop = document.getElementById('section-banner');
const moveScroll = ((entry) => {
    const buttonScroll = document.getElementById('buttonScroll-id');
     entry.forEach(element => {
        if(element.isIntersecting){
            buttonScroll.classList.remove('visible');
        } else {
            buttonScroll.classList.add('visible');
        }
    });
});

const observerScroll = new IntersectionObserver(moveScroll, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observerScroll.observe(scrollTop);

//code animation section strategy

const sectionStrategy = document.getElementById('strategy-section');

const animationStrategy = (entry) =>{
    const strategyClass = document.querySelectorAll('.strategy-wraper');
    entry.forEach(item => {
        if(item.isIntersecting){
            strategyClass.forEach(element => {
                element.classList.add('visibleStrategy');
            });
        }else{
            strategyClass.forEach(element => {
                element.classList.remove('visibleStrategy');
            });
        }
    });
}

const observerStrategy = new IntersectionObserver(animationStrategy, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
});

observerStrategy.observe(sectionStrategy);

//code animation section 

const sectionBlog = document.getElementById('blog-section');
const animationBlog = (entry) => {
    const blogClass = document.querySelectorAll('.blog-column');
    entry.forEach(element => {
        if(element.isIntersecting){
            blogClass.forEach(item => {
                item.classList.add('visibleBlog');
            });
        } else{
            blogClass.forEach(item => {
                item.classList.remove('visibleBlog');
            });
        }
    });
}

const observerBlog = new IntersectionObserver(animationBlog, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
});

observerBlog.observe(sectionBlog);

//code section animation form

const sectionForm = document.getElementById('contact-section');

const animationForm = (entry) => {
    const formImgClass = document.querySelector('.form-wraper-img');
    const formClass = document.querySelector('.form-wraper-design');
    entry.forEach(element => {
        if(element.isIntersecting){
            formImgClass.classList.add('visibleFormImg');
            formClass.classList.add('visibleForm');
        } else{
            formImgClass.classList.remove('visibleFormImg');
            formClass.classList.remove('visibleForm');
        }
    });
}

const observeForm = new IntersectionObserver(animationForm, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
    
});

observeForm.observe(sectionForm);

