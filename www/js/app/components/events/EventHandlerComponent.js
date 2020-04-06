window.addEventListener('load',function () {
    consoleAlert( "showLoading" );
    (new LoadingBar()).show();
});

$('body').on('click','.home-button',function () {
    (new ViewComponent()).showHomeScreen();
});

$('body').on('click','.menu-button.hamburger-menu',function () {
    (new NavBar()).toggle();
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
    (new ViewComponent()).showFreshLoginScreen();
});

$('body').on('click','.cart-menu',function (e) {
    e.preventDefault();
    (new ViewComponent()).showCartMenu();
});

$('body').on('click', '.back-button',function (e) {
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
        case "cart-menu-screen" :
            let menuC = JSON.parse( localStorage.getItem( 'menu')) ;
            (new ViewComponent()).showMenuIetmsScreen( menuC.id );
            break;
    }
});

$('body').on('click','.checkoutButton',function () {
    (new ViewComponent()).showPaymentScreen();
});

function validateExpiryDate(){
    var today, someday;
    var expiryDate = $('#expiry_date').val() ;
    if( expiryDate.indexOf('/') !== -1 ){
        let expiryDateValues = expiryDate.split( '/' );
        let month = expiryDateValues[0];
        let year = expiryDateValues[1];
        month = parseInt(month);
        year = parseInt(year);

        if( !(month >= 1 && month <= 12) ){
            $('#expiry_date').parent('li').find('span.text-danger').append('Please add correct expiry date in correct format. Example for Jan 2019 is 01/19.');
            return true;
        }

        today = new Date();
        someday = new Date();
        year = 2000+year;
        someday.setFullYear( year, month, 1);

        if (someday < today) {
            $('#expiry_date').parent('li').find('span.text-danger').append("The expiry date is before today's date. Please select a valid expiry date");
            return true;
        }

        return false ;
    }else{
        $('#expiry_date').parent('li').find('span.text-danger').append('Please add correct expiry date in correct format. Example for Jan 2019 is 01/19.');
    }
    return true ;
}

function validate_cvv(cvv){

    if( cvv == null || cvv == "" ){
        $('#cvv').parent('li').find('span.text-danger').append('Invalid cvv code.');
        return true;  //invalid cvv number
    }

    var myRe = /^[0-9]{3,4}$/;
    var myArray = myRe.exec(cvv);
    if(cvv!=myArray)
    {
        $('#cvv').parent('li').find('span.text-danger').append('Invalid cvv code.');
        return true;
    }else{
        return false;  //valid cvv number
    }

}

function insertCardData(){

    $('#card_number').val('4111111111111111');
    $('#expiry_date').val('12/23');
    $('#cvv').val('123');
    $('#name_on_card').val('Jaimin Pandya');

}

$('body').on('click','.confirm-order',function () {

    $('#card_number').parent('li').find('span.text-danger').html('');
    $('#expiry_date').parent('li').find('span.text-danger').html('');
    $('#cvv').parent('li').find('span.text-danger').html('');
    $('#name_on_card').parent('li').find('span.text-danger').html('');

    let isCreditCardValidated = true ;
    new Promise(function (resolve, reject) {

        if( ! $('#card_number').hasClass('valid') ){
            $('#card_number').parent('li').find('span.text-danger').append('Creadit card information is incorrect.');
            isCreditCardValidated = false ;
        }else{
            $('#card_number').parent('li').find('span.text-danger').html('');
        }

        if( !($('#name_on_card').val() != null && $('#name_on_card').val() != "") ){
            $('#name_on_card').parent('li').find('span.text-danger').append('Please add your name on card.');
            isCreditCardValidated = false ;
        }else{
            $('#name_on_card').parent('li').find('span.text-danger').html('');
        }

        let validateExpiry = false ;
        new Promise(function (resolve, reject) {
            validateExpiry = validateExpiryDate();
            resolve( validateExpiry );
        }).then(function ( validateExpiry ) {

            if( validateExpiry ){
                isCreditCardValidated = false ;
            }else{
                $('#expiry_date').parent('li').find('span.text-danger').html('');
            }

            new Promise(function (resolve, reject) {

                let validate_csv = validate_cvv( $('#cvv').val());
                resolve( validate_csv );

            }).then(function ( validate_csv ) {

                if( validate_csv  ){
                    isCreditCardValidated = false ;
                }else{
                    $('#cvv').parent('li').find('span.text-danger').html('');
                }

                if( isCreditCardValidated ){

                    let orderId = (new OrderManager()).bookOrder();
                    (new ViewComponent()).showConfirmOrderScreen( orderId );

                }

            }).catch(function ( reason ) {
                console.log( reason );
            });

        }).catch(function ( reason ) {
            console.log( reason );
        });


        resolve();

    }).then(function () {

    }).catch(function ( reason ) {
        console.log( reason );
    });

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

class EventHandlerComponent extends BaseComponent{

    constructor(props) {
        super(props);
        this._counter = 0 ;
    }


    init(){

    }

    addGoToHomeEvent(){
        // addd outside of class
    }

    homeScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();

        let c = this._counter;
        console.log(  c++  );
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

    showCartMenuEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
        (new CustomizeOrderItem()).init();
    }

    showPaymentScreenEvent(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
        callCreditCard();
    }

    showConfirmOrderScreenEvent(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        this.addHamburgerMenuEvent();
    }

    addRenderScreenEvents(){
        let selfObject = this;
        this.startLazyLoad();
        this.activatePage();
        this.stopLoading();
        (new OrderManager()).removeOrder();
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

        let menu = brandButton.dataset.id;
        let custInfo = document.querySelector('[data-id="'+menu+'"]').querySelector('.customize-info').innerHTML;
        if( custInfo === "{{customizations}}" ){
            custInfo = {} ;
        }else{
            custInfo = JSON.parse( custInfo );
        }

        let menuItemObject = {'id': brandButton.dataset.id ,'name': brandButton.dataset.name ,'url': brandButton.dataset.src , 'sizes': sizesInfo ,'nutrition': nutritionInfo , 'customizations': custInfo  } ;
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

        this.addCartEvent();

        window.scrollTo(0,0);
    }

    addCartEvent(){
        let isCartExists = (new OrderManager()).isCartExists();
        if( isCartExists && $('#cart-menu-screen').length == 0 ){
            $('.cart-menu').removeClass('dnone');
        }
    }

    addBackButtonEvent(){
        let selfObject = this;
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
