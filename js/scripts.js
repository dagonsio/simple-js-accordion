let accordionElement = document.getElementsByClassName('accordionElement');
let accordionElementContent = document.getElementsByClassName('accordionElementContent');

for (i = 0; i < accordionElement.length; i++) {
    accordionElement[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    
    let thisElementClass = this.nextElementSibling.className;
    
    for (i = 0; i < accordionElement.length; i++) {
        accordionElementContent[i].className = 'accordionElementContent closed';
    }

    if (thisElementClass == 'accordionElementContent closed') {
        this.nextElementSibling.className = 'accordionElementContent opened';        
    }    
    
}