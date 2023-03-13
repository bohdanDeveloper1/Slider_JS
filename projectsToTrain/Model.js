// завдання з TABS
//  file:///C:/Users/Acer/Desktop/JS_train/projectsToTrain/View.html
class Tabs
{
    // tabs - вузел елементів
    tabs = document.getElementById('tabs');
    content = document.querySelectorAll('.content');

    // видаляю клас active в кожного елемента, приписую active поточному елементу
    changeClass = (currentTab) =>{
    let elements= this.tabs.children;
    for (let i =0; i < elements.length; i++){
        elements[i].classList.remove('active');
    }
    currentTab.className = 'tab-btn active';
}

    changeText = () =>{
        this.tabs.addEventListener('click', (e)=>{
            // отримаємо атрибут елементу  = e.target.dataset.назва_атрибуту;
            // e.target - це ссилка на поточний елемент (на який я клікнув)
            const currentTab = e.target.dataset.btn;
            console.log(currentTab);
            this.changeClass(e.target);
            for(let i = 0; i < this.content.length; i++){
                this.content[i].classList.remove('active');
                if (this.content[i].dataset.content === currentTab){
                    this.content[i].classList.add('active');
                }
            }
        });
    }
}

const tabs = new Tabs();
tabs.changeText();



























