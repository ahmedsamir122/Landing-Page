// -----------adding the new navigation links daynamic---------
let link = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section'); 
// i declared an empty array of the element li
let list =[];
list.length=sections.length;
for(let x=0; x<list.length;x++)
{
    list[x]=document.createElement('li');
    list[x].innerHTML=`<a href="#section${x+1}" class="menu__link">Section${x+1}</a>`;
    link.appendChild(list[x]);
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    if(rect.top >=-50  && rect.top < (window.innerHeight-100 ) )
    {
        return true ;
    }
    else {
        return false ;
    }  
}

// here i added the active class according the previous function
let listOfSections=document.querySelectorAll("section");
let listOfAnchors=document.querySelectorAll("a");
function activeSection () {
        for (let i=0;i<listOfSections.length;i++)
    {
        if (isInViewport(listOfSections[i]))
        {
            if (listOfSections[i].classList.contains('your-active-class'))
            {
                listOfAnchors[i].setAttribute('style','background: #333; color: #fff; transition: ease 0.3s all;');
            }
            else {
                
                listOfSections[i].classList.add('your-active-class');
                listOfAnchors[i].setAttribute('style','background: #333; color: #fff; transition: ease 0.3s all;');
            }
            
        }
        else 
        {
            listOfSections[i].classList.remove('your-active-class');
            listOfAnchors[i].removeAttribute('style','background: #333; color: #fff; transition: ease 0.3s all;');
        }
    }
}
// calling the function 
document.addEventListener('scroll',activeSection);


// ------scrolling smooth -------
let anchors = document.querySelectorAll('.menu__link');
anchors.forEach(anchor => {
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        // getting the id of the target section
        let targetId = this.getAttribute('href');
        let section = document.querySelector(targetId);

        section.scrollIntoView({behavior: 'smooth'} );
    });
});

const icon = document.querySelector('.bars');


icon.addEventListener('click', function(e){
    link.classList.toggle('active');
})
