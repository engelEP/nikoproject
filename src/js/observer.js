export function observer (section, callBack) {
    
    const animation = (entry) => {
        entry.forEach(element => {
            callBack(element);
        });
    }
    
    const observer = new IntersectionObserver(animation, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
    });

    observer.observe(section);
}

// export function scroll (section, idClass, addClass) {
    
//     const animation = (entry) => {
//         entry.forEach(element => {
//             if(!element.isIntersecting){
//                 idClass.classList.add(addClass);
//             } else{
//                 idClass.classList.remove(addClass);
//             }
//         });
//     }
    
//     const observer = new IntersectionObserver(animation, {
//         root: null,
//         rootMargin: '0px 0px 0px 0px',
//         threshold: 0
//     });

//     observer.observe(section);
// }