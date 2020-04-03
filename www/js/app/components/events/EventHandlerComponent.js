window.addEventListener('load',function () {
    consoleAlert( "showLoading" );
    (new LoadingBar()).show();
});

class EventHandlerComponent extends BaseComponent{

    init(){

    }

    homeScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();

        consoleAlert( "homeScreenEvents" );
        Array.from( document.getElementsByClassName('brand-logos') , ( el ) => {
                el.addEventListener('click' ,  selfObject.goToMenuPage )
        });

    }


    menuScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
        this.addBackButtonEvent();

        Array.from( document.getElementsByClassName('menu-btn') , ( el ) => {
            el.addEventListener('click' ,  selfObject.goToMenuIetmsPage )
        });

    }

    menuItemsScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
        this.addBackButtonEvent();
        this.addDataOnScroll();

        Array.from( document.getElementsByClassName('menu-item-btn') , ( el ) => {
            el.addEventListener('click' ,  selfObject.customizeMenuItem )
        });

    }

    goToMenuPage( event ){
        let brandButton = this;
        let cafe = brandButton.dataset.id;
        localStorage.setItem( 'cafe'  , cafe);
        (new ViewComponent()).showMenusScreen( cafe );
    }

    goToMenuIetmsPage( event ){
        let brandButton = this;
        let menu = brandButton.dataset.id;
        localStorage.setItem( 'menu'  , menu);
        localStorage.setItem('menu_item_offset',0);
        (new ViewComponent()).showMenuIetmsScreen( menu );
    }

    customizeMenuItem( event ){
        let brandButton = this;
        let menu = brandButton.dataset.id;
        localStorage.setItem( 'menu_item' , menu);
        (new ViewComponent()).showMenuIetmsScreen( menu );
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

    addHamburgerMenuEvent(){
        document.querySelector('.menu-button.hamburger-menu').addEventListener('click',function () {
            (new NavBar()).toggle();
        });
        document.querySelector('body').addEventListener('click',function ( e ) {
            if( document.querySelector('.app-nav.active-menu') != null && document.querySelector('.app-nav.active-menu').length !== 0 ){
                if( e.target.closest('.menu') === null && e.target.closest('.hamburger-menu-container') === null  ){
                    (new NavBar()).hide();
                }if( e.target.closest('.hamburger-menu-container') !== null ){
                    // do notthing
                }else{
                    console.log(  e.target.closest('.menu') );
                    console.log(  e.target.closest('.hamburger-menu-container') );
                }
            }
        });
    }

    addBackButtonEvent(){
        let selfObject = this;
        $('.back-button').on('click',function (e) {
            let screen = $('.screen').attr('id');

            switch (screen) {
                case "menu-screen" :
                    (new ViewComponent()).showHomeScreen( );
                    break;
                case "menu-item-screen" :
                    let cafe = localStorage.getItem( 'cafe');
                    (new ViewComponent()).showMenusScreen( cafe );
                    break;
            }
        });
    }

    showLoading() {
        let selfObject = this;
        consoleAlert( "showLoading 1" );
        (new LoadingBar()).show();
        consoleAlert( "showLoading 2" );
    }

    activatePage(){
        document.querySelector('.screen-content').classList.add('active');
    }

    stopLoading() {
        consoleAlert( "stopLoading 1" );
        (new LoadingBar()).hide();
        consoleAlert( "stopLoading 2" );
    }

    addDataOnScroll(){

        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                console.log('hit bottom');
                (new ViewComponent()).addMenuitems();
            }
        });

    }

    startLazyLoad(){
        //return ;
        //will work on this later
        //setTimeout(function () {

            var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
            if ("IntersectionObserver" in window) {
                let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target;
                            lazyImage.src = lazyImage.dataset.src;
                            //lazyImage.srcset = lazyImage.dataset.srcset;
                            lazyImage.classList.remove("lazy");
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
                lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            }

        //}, 10000);

    }

}
