//    file:///C:/Users/Acer/Desktop/PROJECTS_PHP_JS/JS_train/projectsToTrain/View.html

class ModalWindow
{
     buttonOpen = document.getElementById('btn-open');
     showWindow = document.getElementById('wrapper-modal');

     btnClose = document.getElementById('btn-close');

     overlay = document.getElementById('overlay');

     openModalWindow = () => {
         this.buttonOpen.addEventListener('click', () =>{
             this.showWindow?.classList.add('active');
         });
     }

    closeModalWindow = () => {
        this.btnClose.addEventListener('click', () =>{
            this.showWindow?.classList.remove('active');
        });

        this.overlay.addEventListener('click', () =>{
            this.showWindow?.classList.remove('active');
        });
    }
}

const modalWindow = new ModalWindow();
modalWindow.openModalWindow();
modalWindow.closeModalWindow();





















