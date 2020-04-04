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

    customizeMenuItemsScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
        this.addBackButtonEvent();
        this.addDataOnScroll();

        //plugin bootstrap minus and plus
        //http://jsfiddle.net/laelitenetwork/puJ6G/
        $('.btn-number').click(function(e){
            e.preventDefault();
            var fieldName = $(this).attr('data-field');
            var type      = $(this).attr('data-type');
            var input = $("input[name='"+fieldName+"']");
            var currentVal = parseInt(input.val());
            if (!isNaN(currentVal)) {
                if(type == 'minus') {

                    if(currentVal > input.attr('min')) {
                        input.val(currentVal - 1).change();
                    }
                    if(parseInt(input.val()) == input.attr('min')) {
                        $(this).attr('disabled', true);
                    }

                } else if(type == 'plus') {

                    if(currentVal < input.attr('max')) {
                        input.val(currentVal + 1).change();
                    }
                    if(parseInt(input.val()) == input.attr('max')) {
                        $(this).attr('disabled', true);
                    }

                }
            } else {
                input.val(0);
            }
        });
        $('.input-number').focusin(function(){
            $(this).data('oldValue', $(this).val());
        });
        $('.input-number').change(function() {
            var minValue =  parseInt($(this).attr('min'));
            var maxValue =  parseInt($(this).attr('max'));
            var valueCurrent = parseInt($(this).val());
            var name = $(this).attr('name');
            if(valueCurrent >= minValue) {
                $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
            } else {
                alert('Sorry, the minimum value was reached');
                $(this).val($(this).data('oldValue'));
            }
            if(valueCurrent <= maxValue) {
                $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
            } else {
                alert('Sorry, the maximum value was reached');
                $(this).val($(this).data('oldValue'));
            }
        });
        $(".input-number").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

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
    }

    addHamburgerMenuEvent(){
        let selfObject = this ;

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
            selfObject.addGoToHomeEvent();
            selfObject.addHamburgerMenuEvent();
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
