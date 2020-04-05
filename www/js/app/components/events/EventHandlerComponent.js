window.addEventListener('load',function () {
    consoleAlert( "showLoading" );
    (new LoadingBar()).show();
});

class EventHandlerComponent extends BaseComponent{

    init(){

    }

    addGoToHomeEvent(){
        $('body').on('click','.home-button',function () {
            (new ViewComponent()).showHomeScreen();
        });
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

        Array.from( document.getElementsByClassName('menu-item-btn') , ( el ) => {
            el.addEventListener('click' ,  selfObject.customizeMenuItem )
        });

    }

    customizeMenuItemsScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
        (new CustomizeOrderItem()).init();
    }

    addRenderScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
    }

    goToMenuPage( event ){
        let brandButton = this;
        let cafe = brandButton.dataset.id;
        let cafeObject = {'id': brandButton.dataset.id ,'name': brandButton.dataset.name ,'logo': brandButton.dataset.src } ;
        localStorage.setItem( 'cafe' , JSON.stringify(cafeObject));
        (new ViewComponent()).showMenusScreen( cafe );
    }

    goToMenuIetmsPage( event ){
        let brandButton = this;

        let menu = brandButton.dataset.id;
        let custInfo = document.querySelector('[data-id="'+menu+'"]').querySelector('.customize-info').innerHTML;
        if( custInfo === "{{customizations}}" ){
            custInfo = {} ;
        }else{
            custInfo = JSON.parse( custInfo );
        }

        let menuObject = {'id': brandButton.dataset.id ,'name': brandButton.dataset.name ,'url': brandButton.dataset.src, 'customizations': custInfo } ;
        localStorage.setItem( 'menu'  , JSON.stringify( menuObject ) );
        localStorage.setItem('menu_item_offset',0);
        (new ViewComponent()).showMenuIetmsScreen( menu );
    }

    customizeMenuItem( event ){
        let brandButton = this;

        let sizesInfo = document.querySelector('[data-id="'+brandButton.dataset.id+'"]').querySelector('.sizes-info').innerHTML;
        if( sizesInfo === "{{sizes}}" ){
            sizesInfo = {} ;
        }else{
            sizesInfo = JSON.parse( sizesInfo );
        }

        let nutritionInfo = document.querySelector('[data-id="'+brandButton.dataset.id+'"]').querySelector('.nutrition-info').innerHTML;
        if( nutritionInfo === "{{nutrition}}" ){
            nutritionInfo = {} ;
        }else{
            nutritionInfo = JSON.parse( nutritionInfo );
        }

        let menuItemObject = {'id': brandButton.dataset.id ,'name': brandButton.dataset.name ,'url': brandButton.dataset.src , 'sizes': sizesInfo ,'nutrition': nutritionInfo } ;
        localStorage.setItem( 'menu_item' , JSON.stringify( menuItemObject ) );
        (new ViewComponent()).showCustomizeMenuItemOption( menuItemObject.id );
    }

    alert( header , subHeader , message , buttons ){
        // add botstrap alert
        let data = (new ViewComponent()).addingViewHelper('alert-template-parent' , 'alert',
            { header:header, subHeader:subHeader, message:message , buttons:buttons  }
         );
        $('#alert').modal('show');
    }

    addHamburgerMenuEvent(){
        let selfObject = this ;

        selfObject.addGoToHomeEvent();
        selfObject.addBackButtonEvent();

        $('.menu-button.hamburger-menu').on('click',function () {
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

        $('body').on('click','.renderOnly',function (e) {
            e.preventDefault();
            let href = $(this).attr('href');
            href = href.replace('#','');
            (new ViewComponent()).showRenderScreen( href );
        });

        $('body').on('click','.logout',function (e) {
            e.preventDefault();
            localStorage.clear();
            (new ViewComponent()).showLoginScreen();
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
                    let cafe = JSON.parse( localStorage.getItem( 'cafe')) ;
                    (new ViewComponent()).showMenusScreen( cafe.id );
                    break;
                case "customize-menu-item-screen" :
                    let menu = JSON.parse( localStorage.getItem( 'menu')) ;
                    (new ViewComponent()).showMenuIetmsScreen( menu.id );
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
        //
        // $(window).scroll(function() {
        //     if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        //         console.log('hit bottom');
        //         (new ViewComponent()).addMenuitems();
        //     }
        // });

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
