const ulRefs = document.querySelectorAll('.item');
console.log('Number of categories', ulRefs.length);

ulRefs.forEach(element => {
    const h2Refs_EL = element.firstElementChild;
    const liRefs_EL = element.lastElementChild;
    console.log('Category', h2Refs_EL.textContent);
    console.log('Elements', liRefs_EL.children.length); 
})