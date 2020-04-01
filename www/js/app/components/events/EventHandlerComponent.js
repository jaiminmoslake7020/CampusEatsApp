window.addEventListener('load',function () {
    consoleAlert( "showLoading" );
    (new LoadingBar()).show();
});

class EventHandlerComponent extends BaseComponent{

    init(){

    }

    homeScreenEvents(){
        let selfObject = this;
        this.stopLoading();
        this.addHamburgerMenuEvent();

        consoleAlert( "homeScreenEvents" );
        Array.from( document.getElementsByClassName('brand-logos') , ( el ) => {
                el.addEventListener('click' ,  selfObject.goToMenuPage )
        });

    }

    addHamburgerMenuEvent(){
        document.querySelector('.menu-button.hamburger-menu').addEventListener('click',function () {
            (new NavBar()).toggle();
        });
    }

    menuScreenEvents(){
        let selfObject = this;
        this.stopLoading();
        this.addHamburgerMenuEvent();


        // Array.from( document.getElementsByClassName('brand-logos') , ( el ) => {
        //     el.addEventListener('click' ,  selfObject.goToMenuPage )
        // });

    }

    goToMenuPage( event ){
        let brandButton = this;
        let cafe = brandButton.dataset.id;
        (new ViewComponent()).showMenusScreen( cafe );
    }

    alert( header , subHeader , message , buttons ){
        const alert = document.createElement('ion-alert');
        if( header != null ){
            alert.header = header;
        }else{
            alert.header = 'Alert';
        }
        if( subHeader != null ){
            alert.subHeader = subHeader;
        }else{
            alert.subHeader = 'Subtitle';
        }
        if( message != null ){
            alert.message = message;
        }else{
            alert.message = 'This is an alert message.';
        }
        if( buttons != null ){
            alert.buttons = buttons;
        }else{
            alert.buttons = ['OK'];
        }
        document.body.appendChild(alert);
        return alert.present();
    }

    showLoading() {
        let selfObject = this;
        consoleAlert( "showLoading 1" );
        (new LoadingBar()).show();
        consoleAlert( "showLoading 2" );
    }

    stopLoading() {
        consoleAlert( "stopLoading 1" );
        (new LoadingBar()).hide();
        consoleAlert( "stopLoading 2" );
    }

}
