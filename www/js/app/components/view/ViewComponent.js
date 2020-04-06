class ViewComponent extends BaseComponent{

    constructor() {
        consoleAlert( 'Viewe Component configureVue');
        super();
    }

    authentiCate(){
        let userLoggedIn = false;
        let authResult = localStorage.getItem('authResult');
        if( authResult == null ){
        }else{
            let authResultObject = JSON.parse(authResult);
            if( 'user' in authResultObject ){
                let data = authResultObject.user;
                if( typeof data === "object" && "uid" in data && data.uid != null ){
                    console.log('User '+ data.displayName +' is logged in.');
                    userLoggedIn = true ;
                }
            }
        }

        if( userLoggedIn ){
            return true;
        }
        return false;
    }

    init(){
        consoleAlert( 'Viewe Component configureVue');
        consoleAlert( 'Viewe Component Loaded');

        let userLoggedIn = this.authentiCate();
        if( userLoggedIn ){
            // just for testing purpose
            //this.showMenusScreen('tim-hortons');
            //this.showMenuIetmsScreen('section_7410');
            //this.showCustomizeMenuItemOption("983a617f80c40ce93a34f681f90460f6");
            //this.showHomeScreen();
            return this.showCartMenu();
            //return this.showPaymentScreen();
           // return this.showConfirmOrderScreen('YTfubvjh');
            //this.showRenderScreen('cafeLocations');
        }else{
            if( this.getAppClassManager().getRequestComponent().hasModeSelect() ){
                consoleAlert( 'showLoginScreen' );
                return this.showLoginScreen();
            }else{
                consoleAlert( 'showSplashScreen' );
                return this.showSplashScreen();
            }
        }
    }

    replaceAppScreen( template , id = 'app' ){
        consoleAlert( template );
        document.getElementById(id).innerHTML = template ;
        consoleAlert( document.getElementById(id).innerHTML  );
    }

    removeFooterContainerIfExist(){
        if( $('#footer-container').length > 0 ){
            $('#footer-container').remove()
        }
    }

    showSplashScreen(){

        this.removeFooterContainerIfExist();
        let template ='<div id="screen-container"><div class="screen"  id="splash-screen"><div class=" spalsh-screen-image  spalsh-screen "></div></div></div>';
        this.replaceAppScreen( template );

        let object = this;
        setTimeout(function () {
            object.showLoginScreen();
        },3000);

    }

    showFreshLoginScreen(){
        window.location.reload() ;
    }

    showLoginScreen(){

        consoleAlert( 'showLoginScreen' );
        this.removeFooterContainerIfExist();

        let selfObject = this;
        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="login-screen"><div class=" spalsh-screen-image  spalsh-screen "><div id="firebaseui-auth-container"></div></div></div></div>';
            selfObject.replaceAppScreen( template );

            selfObject.getAppClassManager().getFirebaseCompoenent().loadFirebaseAuthenticationFunctions();
            resolve();

        }).then(function () {
            selfObject.getAppClassManager().getEventHandlerComponent().stopLoading();
        });

    }

    showHomeScreen(){

        if( !this.authentiCate() ){
            return this.showFreshLoginScreen();
        }

        consoleAlert( "showHomeScreen" );
        this.removeFooterContainerIfExist();

        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();

        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="home-screen"></div></div>';
            selfObject.replaceAppScreen( template );
            document.getElementById('home-screen').innerHTML = document.getElementById('nav-menu').innerHTML;
            document.getElementById('ion-content').classList.add('home-screen-content');
            selfObject.addUserDetails();
            consoleAlert( "NavMenu" );
            resolve();

        }).then(function () {

            consoleAlert( "NavMenu" );

            new Promise(function (resolve, reject) {

                selfObject.getCafesModel().getAll().then(function ( snapshot ) {
                    for( let i = 0 ; i < snapshot.length ; i++ ){
                        let cafe = snapshot[i];
                        selfObject.addToView( 'ion-button' , cafe );
                    }
                }).then(function () {
                    resolve();
                }).catch(function ( reason ) {
                    selfObject.globalCatch( reason )
                });

            }).then(function () {

                selfObject.getAppClassManager().getEventHandlerComponent().homeScreenEvents();

            }).catch(function ( reason ) {
                selfObject.globalCatch( reason )
            });

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    showMenusScreen( cafeId ){

        if( !this.authentiCate() ){
            return this.showFreshLoginScreen();
        }

        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();

        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="menu-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById('menu-screen').innerHTML = document.getElementById('nav-menu').innerHTML;
            document.getElementById('ion-content').classList.remove('home-screen-content');
            document.getElementById('ion-content').classList.add('menu-screen-content');
            selfObject.addCafeHeading();
            selfObject.addUserDetails();
            selfObject.addFooterContainer();

            resolve();

        }).then(function () {

            new Promise(function (resolve, reject) {

                selfObject.getMenusModel( cafeId ).getAll().then(function ( snapshot ) {
                    for( let i = 0 ; i < snapshot.length ; i++ ){
                        let menu = snapshot[i];
                        menu.data['cafeId'] = cafeId;
                        selfObject.addToView( 'ion-menu-button' , menu );
                    }
                }).then(function () {
                    resolve();
                }).catch(function ( reason ) {
                    selfObject.globalCatch( reason )
                });

            }).then(function () {

                selfObject.getAppClassManager().getEventHandlerComponent().menuScreenEvents();

            }).catch(function ( reason ) {
                selfObject.globalCatch( reason )
            });

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    showMenuIetmsScreen( menuObject ){
        let menu = menuObject.id;

        if( !this.authentiCate() ){
            return this.showFreshLoginScreen();
        }

        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();

        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="menu-item-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById('menu-item-screen').innerHTML = document.getElementById('nav-menu').innerHTML;
            document.getElementById('ion-content').classList.remove('menu-screen-content');
            document.getElementById('ion-content').classList.add('menu-items-screen-content');
            selfObject.addCafeHeading();
            selfObject.addMenuHeading();
            selfObject.addUserDetails();
            selfObject.addFooterContainer();

            resolve();

        }).then(function () {

            new Promise(function (resolve, reject) {

                selfObject.getMenuIetmsModel( menu ).getAll().then(function ( snapshot ) {
                    for( let i = 0 ; i < snapshot.length ; i++ ){
                        let menuItem = snapshot[i];
                        menuItem.data['menuId'] = menu;
                        menuItem.data['cafeId'] = menuObject.cafeId;
                        menuItem.data.customizations = menuObject.customizations ;
                        selfObject.addToView( 'ion-menu-item-button' , menuItem );
                    }
                }).then(function () {
                    resolve();
                }).catch(function ( reason ) {
                    selfObject.globalCatch( reason )
                });

            }).then(function () {

                selfObject.getAppClassManager().getEventHandlerComponent().menuItemsScreenEvents();

            }).catch(function ( reason ) {
                selfObject.globalCatch( reason )
            });

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    showCustomizeMenuItemOption( menuItem , itemOrderId = null ){

        if( !this.authentiCate() ){
            return this.showFreshLoginScreen();
        }

        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();

        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="customize-menu-item-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById('customize-menu-item-screen').innerHTML = document.getElementById('nav-menu').innerHTML;
            document.getElementById('ion-content').classList.remove('menu-items-screen-content');
            document.getElementById('ion-content').classList.add('customize-menu-items-screen-content');
            selfObject.addCafeHeading();
            selfObject.addMenuHeading();
            selfObject.addUserDetails();
            selfObject.addMenuItemHeading( );
            selfObject.addCustomizingOptions( itemOrderId );
            selfObject.addFooterContainer();

            resolve();

        }).then(function () {

            selfObject.getAppClassManager().getEventHandlerComponent().customizeMenuItemsScreenEvents();

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });
    }

    showCartMenu(){

        if( !this.authentiCate() ){
            return this.showFreshLoginScreen();
        }

        let isCartExists = (new OrderManager()).isCartExists();
        if( !isCartExists ){
            return this.showHomeScreen();
        }

        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();

        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="cart-menu-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById('cart-menu-screen').innerHTML = document.getElementById('nav-menu').innerHTML;
            document.getElementById('ion-content').classList.remove('customize-menu-items-screen-content');
            document.getElementById('ion-content').classList.add('cart-menu-screen-content');
            selfObject.addCafeHeading();
            selfObject.addingViewHelper( 'menu-heading', 'cart-heading' , {'name':'Your Cart'} );
            selfObject.addingViewHelper( 'cart-container-template', 'cart-container-template' , {} );
            selfObject.addUserDetails();
            selfObject.addFooterContainer();

            resolve();

        }).then(function () {



            let totalPriceOfOrder = 0 ;
            let currentOrder = (new OrderManager()).currentOrder;
            for( let orderItem in currentOrder ){

                //console.log(currentOrder[orderItem]);

                let size = "" ;
                if( currentOrder[orderItem]._size != null ){
                    size = "&nbsp;-&nbsp;"+currentOrder[orderItem]._size ;
                }

                let orderItemData = {id:orderItem, itemId:orderItem,
                    'name': currentOrder[orderItem]._name ,
                    'calories': currentOrder[orderItem]._calories ,
                    'quantity': currentOrder[orderItem]._quantity ,
                    'price': currentOrder[orderItem]._price ,
                    'url': currentOrder[orderItem]._actualData.url,
                    'size': size
                };
                totalPriceOfOrder += orderItemData.price ;
                selfObject.addingViewHelper( 'cart-item', orderItem , orderItemData );

                let customizerOptions = currentOrder[orderItem]._customizerOptions ;
                if( !jQuery.isEmptyObject( customizerOptions ) ){

                    //console.log( "customizerOptions" );
                    //console.log( customizerOptions );
                    let newOptionsObject = {} ;
                    for( let option in customizerOptions ){
                        if( customizerOptions[option].parentTitle !== "Size" ){
                            let doNotAvoidIt = true ;
                            if( option.indexOf('___') !== -1 && customizerOptions[option].title == "No" ){
                                doNotAvoidIt = false ;
                            }
                            else if( customizerOptions[option].value !== "0" && customizerOptions[option].value !== 0 && doNotAvoidIt ){
                                if( !( customizerOptions[option].parentTitle in newOptionsObject ) ){
                                    newOptionsObject[ customizerOptions[option].parentTitle ] = {} ;
                                }
                                newOptionsObject[ customizerOptions[option].parentTitle ][ customizerOptions[option].title ] =  customizerOptions[option] ;
                                newOptionsObject[ customizerOptions[option].parentTitle ][ customizerOptions[option].title ]['option'] = option ;
                            }
                        }
                    }

                    //console.log( "newOptionsObject" );
                    //console.log( newOptionsObject );

                    if( !jQuery.isEmptyObject( newOptionsObject ) ){
                        selfObject.addingViewHelper( 'order-item-template', 'order-item-template' , {'id':orderItem} , 'detailed-summary-'+orderItem );
                        let count = 0 ;
                        for( let panel in newOptionsObject ){
                            let innerCount = 0 ;
                            let newId = orderItem+'-sub-item-'+count;
                            selfObject.addingViewHelper( 'order-item-sub-template', 'order-item-sub-template' , {'id':newId,'title':panel, 'orderId':orderItem } , 'accordion-'+orderItem );
                            for( let subPanel in newOptionsObject[panel] ){
                                let newNewId = orderItem+'-sub-sub-item-'+innerCount;
                                if( newOptionsObject[panel][subPanel].option.indexOf('___') !== -1  ){
                                    selfObject.addingViewHelper( 'order-item-detail-item', 'order-item-detail-item' , {'id':newNewId,'title':subPanel, 'value': newOptionsObject[panel][subPanel]['value'] , 'dnone' : ' dnone ' } , 'order-detail-container-'+newId );
                                }else{
                                    selfObject.addingViewHelper( 'order-item-detail-item', 'order-item-detail-item' , {'id':newNewId,'title':subPanel, 'value': newOptionsObject[panel][subPanel]['value'] , 'dnone' : '' } , 'order-detail-container-'+newId );
                                }
                                innerCount++;
                            }
                            count++;
                        }
                    }

                }

            }
            $('#totalPriceOfOrder').html('&nbsp;$'+parseFloat(totalPriceOfOrder).toFixed(2));



        }).then(function () {

            selfObject.getAppClassManager().getEventHandlerComponent().showCartMenuEvents();

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    showPaymentScreen(){

        if( !this.authentiCate() ){
            return this.showFreshLoginScreen();
        }

        let isCartExists = (new OrderManager()).isCartExists();
        if( !isCartExists ){
            return this.showHomeScreen();
        }

        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();

        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="payment-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById('payment-screen').innerHTML = document.getElementById('nav-menu').innerHTML;
            document.getElementById('ion-content').classList.remove('cart-menu-screen-content');
            document.getElementById('ion-content').classList.add('payment-screen-content');
            selfObject.addCafeHeading();
            selfObject.addingViewHelper( 'menu-heading', 'cart-heading' , {'name':'Payment'} );
            selfObject.addingViewHelper( 'payment-page', 'payment-page' , {} );
            selfObject.addUserDetails();
            selfObject.addFooterContainer();

            resolve();

        }).then(function () {

            let totalPriceOfOrder = 0 ;
            let currentOrder = (new OrderManager()).currentOrder;
            for( let orderItem in currentOrder ){
                totalPriceOfOrder += currentOrder[orderItem]._price ;
            }
            $('#total_amount').val(parseFloat(totalPriceOfOrder).toFixed(2));

        }).then(function () {

            selfObject.getAppClassManager().getEventHandlerComponent().showPaymentScreenEvent();

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    showConfirmOrderScreen( orderId ){

        if( !this.authentiCate() ){
            return this.showFreshLoginScreen();
        }

        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();
        selfObject.removeFooterContainerIfExist();

        new Promise(function (resolve, reject) {

            let template = '<div id="screen-container"><div class="screen"  id="confirm-order-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById('confirm-order-screen').innerHTML = document.getElementById('nav-menu').innerHTML;
            document.getElementById('ion-content').classList.remove('payment-screen-content');
            document.getElementById('ion-content').classList.add('confirm-order-screen-content');
            selfObject.addCafeHeading();
            selfObject.addingViewHelper( 'menu-heading', 'confirm-order-heading' , {'name':'Order Successfull'} );
            selfObject.addingViewHelper( 'confirm-order', 'confirm-order' , {'orderId':orderId} );
            selfObject.addUserDetails();

            resolve();

        }).then(function () {

            selfObject.showDirections();

        }).then(function () {

            selfObject.getAppClassManager().getEventHandlerComponent().showConfirmOrderScreenEvent();

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    getIonContent(){
        return document.getElementById('ion-content');
    }

    getParentElement( template ){
        let templateParentArray = {
            'ion-button' : 'ion-content',
            'cafe-heading' : 'ion-content',
            'menu-heading' : 'cafe-content',
            'ion-menu-button' :'cafe-content' ,
            'ion-menu-item-button' :'menu-content' ,
            'ion-customize-menu-item-button':'menu-content',
            'customizer-parent':'menu-content',
            '.editInfo-screen-content':'.editInfo-screen-content',
            'customizer-size-option':'customizer-size-options',
            'alert-template-parent':'alert-parent',
            'addItemContainer':'ion-content',
            'cart-container-template':'ion-content',
            'cart-item':'cart-items',
            'payment-page':'ion-content',
            'confirm-order':'ion-content',
            'nutrition-template':'nut-summary',
            'nutrition-item':'nutrition-container',
            'order-item-template' : 'detailed-summary'
        } ;
        if( !templateParentArray.hasOwnProperty( template ) ){
            consoleAlert( 'Template parent array is not available.'+template );
        }
        if( template.indexOf('.') !== -1 ){
            return document.querySelector( templateParentArray[template] );
        }else{
            return document.getElementById( templateParentArray[template] );
        }
    }

    addToView( template , model , customizer = null , append = true ){
        //model = new Cafe();
        let primaryKey = model.primaryKey;
        let data = model.data;
        let templateString ;
        if( template.indexOf('.') !== -1 ){
             templateString = document.querySelector(template).innerHTML;
        }else{
             templateString = document.getElementById(template).innerHTML;
        }
        if( templateString != null ){
            templateString = ( new MyString( templateString ) ).replaceChars( '{{primaryKey}}' , model.primaryKey );
            for( let key in data ){
                let findIn = '{{'+key+'}}';
                let value = data[key];
                if( ( template === "ion-menu-item-button" || template === "ion-customize-menu-item-button" ) && typeof value === "object" && key === "sizes"  ){
                    if( "medium" in value  ){
                        console.log( value.medium.price );
                        let valuex = value.medium.price;
                        let findInx = '{{price}}';
                        valuex = parseFloat( valuex ).toFixed(2);
                        templateString = ( new MyString( templateString ) ).replaceChars( findInx , valuex );
                    }else if( "small" in value ){
                        console.log( value.small.price );
                        let valuex = value.small.price;
                        let findInx = '{{price}}';
                        valuex = parseFloat( valuex ).toFixed(2);
                        templateString = ( new MyString( templateString ) ).replaceChars( findInx , valuex );
                    }else if( "large" in value  ){
                        console.log( value.large.price );
                        let valuex = value.large.price;
                        let findInx = '{{price}}';
                        valuex = parseFloat( valuex ).toFixed(2);
                        templateString = ( new MyString( templateString ) ).replaceChars( findInx , valuex );
                    }else if( "extra_large" in value  ){
                        console.log( value.extra_large.price );
                        let valuex = value.extra_large.price;
                        let findInx = '{{price}}';
                        valuex = parseFloat( valuex ).toFixed(2);
                        templateString = ( new MyString( templateString ) ).replaceChars( findInx , valuex );
                    }
                }
                if( template === "ion-customize-menu-item-button" && key === "nutrition" ){
                    let valuex =  value.calories;
                    let findInx = '{{calories}}';
                    templateString = ( new MyString( templateString ) ).replaceChars( findInx , valuex );
                }
                if( typeof value === "object"){
                    value = JSON.stringify(value);
                }
                if( ( template === "ion-menu-item-button" || template === "ion-customize-menu-item-button" ) && key === "price" ){
                    value = parseFloat(value).toFixed(2);
                }
                if( primaryKey === "user" && key === "photoURL" && value === null ){
                }else if( templateString.indexOf( findIn ) !== -1 ){
                    templateString = ( new MyString( templateString ) ).replaceChars( findIn , value );
                }
                //console.log( data.name , 'Added' );
            }
            let element ;
            if( customizer != null ){
                element = document.getElementById( customizer );
                if( element === null ){
                    console.log( template , model , customizer , append );
                }
            }else{
                element = this.getParentElement( template );
            }
            if( append ){
                element.innerHTML +=  templateString;
            }else{
                element.innerHTML = templateString;
            }
        }
    }

    addMenuitems(){

        let selfObject = this;
        new Promise(function (resolve, reject) {

            let menu_item_offset = localStorage.getItem('menu_item_offset');
            let menu = localStorage.getItem('menu');

            let getMenuIetmsModel = selfObject.getMenuIetmsModel( menu );
            getMenuIetmsModel.limitOffset = parseInt(menu_item_offset)+20;

            localStorage.setItem('menu_item_offset',  getMenuIetmsModel.limitOffset );

            getMenuIetmsModel.getAll().then(function ( snapshot ) {
                for( let i = 0 ; i < snapshot.length ; i++ ){
                    let menuItem = snapshot[i];
                    selfObject.addToView( 'ion-menu-item-button' , menuItem );
                }
            }).then(function () {
                resolve();
            }).catch(function ( reason ) {
                selfObject.globalCatch( reason )
            });

        }).then(function () {

            selfObject.getAppClassManager().getEventHandlerComponent().menuItemsScreenEvents();

        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    showRenderScreen( id ){
        let selfObject = this;
        new Promise(function (resolve, reject) {
            let template = '<div id="screen-container"><div class="screen"  id="'+id+'-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById(''+id+'-screen').innerHTML = document.getElementById('nav-menu').innerHTML;

            document.getElementById('ion-content').classList.remove('home-screen-content');
            document.getElementById('ion-content').classList.remove('menu-screen-content');
            document.getElementById('ion-content').classList.remove('menu-items-screen-content');

            document.getElementById('ion-content').classList.add(id+'-screen-content');

            document.getElementById('ion-content').innerHTML = $('#'+id).html();

            setTimeout(function () {
                document.getElementById('ion-content').classList.add('active');
            },200);

            resolve();
        }).then(function () {
            selfObject.addUserDetails( id );
            if( id === "cafeLocations" ){
                selfObject.showAllCafeLocations();
            }
        }).then(function () {
            selfObject.getAppClassManager().getEventHandlerComponent().addRenderScreenEvents();
        }).catch(function () {
            selfObject.globalCatch( reason );
        });
    }

    showOrderHistory(){

    }

    showPaymentMethod(){

    }

    addCafeHeading(){
        let cafe = JSON.parse( localStorage.getItem('cafe') );
        if( cafe == null ){
            console.log('cafe empty showing homescreen.');
            return this.showHomeScreen();
        }
        let cafeEntity = new Cafe( cafe.id , cafe );
        this.addToView('cafe-heading', cafeEntity );
    }

    addMenuHeading(){
        let menu = JSON.parse( localStorage.getItem('menu') );
        if( menu == null ){
            console.log('menu empty showing homescreen.');
            return this.showHomeScreen();
        }
        let menuEnity = new Menu( menu.id , menu );
        this.addToView('menu-heading', menuEnity );
    }


    addMenuItemHeading( ){

        let selfObject = this;
        let menu_item = JSON.parse( localStorage.getItem('menu_item') );
        if( menu_item == null ){
            console.log('menu_item empty showing homescreen.');
            return selfObject.showHomeScreen();
        }

        new Promise(function (resolve, reject) {

            let menuEnity = new BaseEntity( menu_item.id , menu_item );
            //console.log( menuEnity );
            selfObject.addToView('ion-customize-menu-item-button', menuEnity );
            resolve();

        }).then(function () {

            if( "nutrition" in menu_item && !jQuery.isEmptyObject( menu_item.nutrition ) ){
                selfObject.addingViewHelper('nutrition-template', 'nutrition-template' , {} );
                for( let item in menu_item.nutrition  ){
                    selfObject.addingViewHelper('nutrition-item', 'nutrition-item' , {'title':item,'value':menu_item.nutrition[item] } );
                }
            }

        }).catch(function ( error ) {
            selfObject.globalCatch( error );
        });

    }

    addCustomizingOptions( itemOrderId = null ){
        let selfObject = this;
        let itermEntity = {'existingOrder':'plus-square'} ;
        if( itemOrderId != null ){
            itermEntity = {'itemOrderId':itemOrderId,'existingOrder':'check-square'}
        }
        this.addingViewHelper('addItemContainer', 'btnContainer' , itermEntity  );
        this.addQuantity(  itemOrderId );

        let menu = JSON.parse( localStorage.getItem('menu_item') );
        if( menu == null ){
            console.log('menu_item empty showing homescreen.');
            return this.showHomeScreen();
        }

        if( "customizations" in menu){
            if( typeof menu.customizations === "object" && menu.customizations != null ){
                let customizations = menu.customizations ;
                //console.log( customizations );
                for( let key in customizations ){
                    //console.log( key , customizations[key] , customizations[key].options );
                    let customizer = customizations[key];
                    customizer.id = key;
                    if( "options" in customizer ){
                        let options = customizations[key].options;
                        customizer.align = "left" ;
                        selfObject.addingViewHelper( 'customizer-parent' , key , customizer  );
                        let defaultSelection = "no"  ;
                        for( let key1 in options ){
                            if( "category" in options[key1] ){
                                let categories = options[key1].category ;
                                for ( let key2 in categories ){

                                    let defaultValue = 0;
                                    if( itemOrderId != null ){
                                        let currentOrder = (new OrderManager()).currentOrder;
                                        if( itemOrderId in currentOrder ){
                                            let customizedItem = currentOrder[ itemOrderId ]._customizerOptions;
                                            if( key2 in currentOrder[ itemOrderId ]._customizerOptions ){
                                                defaultValue = currentOrder[ itemOrderId ]._customizerOptions[key2].value;
                                            }
                                        }
                                    }

                                    categories[key2].id = key2 ;
                                    categories[key2].min = 0 ;
                                    categories[key2].value = defaultValue ;
                                    categories[key2]['title'] = categories[key2].name;
                                    categories[key2]['parentTitle'] = customizer.name;

                                    selfObject.addingViewHelper( 'customizer-parent' , key1 , {name:"",'id':key1, 'align':'left' }  );
                                    selfObject.addingViewHelper( 'customizer' , key2 ,  categories[key2] , 'customizers-options-'+key1  );
                                }
                            }
                            else if( "sizes" in options[key1] ){

                                if(  $('#customizers-options-'+key1).length === 0  ){
                                    this.addingViewHelper( 'customizer-parent' , key1 , {'name':options[key1]['name'],'id': key1 , 'align':'left remove-cPrimary ' }  );
                                }
                                this.addingViewHelper( 'customizer-size-2' , 'size-container' , {name: key1 , key:key1 }  , 'customizers-options-'+key1 , false );

                                if( "category" in options[key1]['sizes'] ){
                                    let categories = options[key1]['sizes'].category ;

                                    for ( let key2 in categories ) {
                                        if (itemOrderId != null) {
                                            let currentOrder = (new OrderManager()).currentOrder;
                                            if (itemOrderId in currentOrder) {
                                                let customizedItem = currentOrder[itemOrderId]._customizerOptions;
                                                if (key1 + '___' + key2 in currentOrder[itemOrderId]._customizerOptions) {
                                                    defaultSelection = key2;
                                                    console.log(defaultSelection, 'Position 2', categories[key2]['name']);
                                                }
                                            }
                                        }
                                    }

                                    for ( let key2 in categories ){

                                        let category = categories[ key2 ];
                                        category.id = key1+'___'+key2 ;
                                        category["title"] = categories[ key2 ]['name']  ;
                                        category["parentTitle"] = options[key1]['name']  ;
                                        category["coffeeSize"] = "notACoffeeSize" ;

                                        if( key2 === defaultSelection ){
                                            console.log( defaultSelection , 'Position 3' , categories[ key2 ]['name'] );
                                            category["checked"] = "checked" ;
                                            category["active"] = "active" ;
                                        }else{
                                            category["checked"] = ' no-check ' ;
                                            category["active"] = ' no-active ' ;
                                        }
                                        category["tag"] = categories[ key2 ]['name'] ;

                                        selfObject.addingViewHelper( 'customizer-size-option' , key2+'_single_size' , category  , 'customizer-size-options-'+key1   );

                                    }
                                }

                            }
                            else{

                                let defaultValue = 0;
                                if( itemOrderId != null ){
                                    let currentOrder = (new OrderManager()).currentOrder;
                                    if( itemOrderId in currentOrder ){
                                        let customizedItem = currentOrder[ itemOrderId ]._customizerOptions;
                                        if( key1 in currentOrder[ itemOrderId ]._customizerOptions ){
                                            defaultValue = currentOrder[ itemOrderId ]._customizerOptions[key1].value;
                                        }
                                    }
                                }

                                options[key1].value = defaultValue;
                                options[key1].id = key1;
                                options[key1].min = 0 ;

                                options[key1]['title'] = options[key1].name;
                                options[key1]['parentTitle'] = customizer.name;

                                selfObject.addingViewHelper( 'customizer' , key1 , options[key1]  , 'customizers-options-'+key  );
                            }
                        }
                    }
                }
            }
        }
    }

    addQuantity(  itemOrderId = null ){

        let menu_item = JSON.parse( localStorage.getItem('menu_item') );
        if( menu_item == null ){
            console.log('menu_item empty showing homescreen.');
            return this.showHomeScreen();
        }

        let selectedSize = "medium" ;
        let quantityValue = 1 ;
        if( itemOrderId != null ){
            let currentOrder = (new OrderManager()).currentOrder;
            if( itemOrderId in currentOrder ){
                let customizedItem = currentOrder[ itemOrderId ];
                quantityValue = customizedItem._quantity;
                if( customizedItem._size === "S" ){
                    selectedSize = "small";
                }else if( customizedItem._size === "M" ){
                    selectedSize = "medium";
                }else if( customizedItem._size === "L" ) {
                    selectedSize = "large";
                }else if( customizedItem._size === "XL" ){
                    selectedSize = "extra_large";
                }
            }
        }

        let quantity = {'name':'Quantity','value':quantityValue} ;
        if( "sizes" in menu_item && !jQuery.isEmptyObject( menu_item.sizes ) ){

            this.addingViewHelper( 'customizer-parent' , 'quantity_option' , {'name':'Size','id':'size', 'align':'center' }  );
            this.addingViewHelper( 'customizer-size' , 'size' , {name:'size'}  , 'customizers-options-size'  );

            let hadMedium = false ;
            let countDown = 1 ;
            for( let key in menu_item.sizes ){
                quantity[key+'_price'] = menu_item.sizes[key]['price'];
                quantity[key+'_calories'] = menu_item.sizes[key]['calories'];

                let size = menu_item.sizes[key];
                size.id = key;
                size["checked"] = "" ;
                size["active"] = "" ;
                size["coffeeSize"] = "coffeeSize" ;
                size["parentTitle"] = "Size"  ;
                if( key === selectedSize ){
                    hadMedium = true ;
                    size["checked"] = "checked" ;
                    size["active"] = "active" ;
                }else if( hadMedium === false && countDown === menu_item.sizes.length ){
                    size["checked"] = "checked" ;
                    size["active"] = "active" ;
                }

                this.addingViewHelper( 'customizer-size-option' , 'single_size' , size   );
                countDown++;
            }

        }else{
            quantity['price'] = menu_item['price'];
            quantity['calories'] = menu_item.nutrition['calories'];
        }

        quantity['title'] = 'Quanitity';
        quantity['parentTitle'] = 'Quanitity';

        quantity.min = 1;
        this.addingViewHelper( 'customizer-parent' , 'quantity_option' , {'name':'Quantity','id':'quantity',  'align':'left'}  );
        // 'Quantity' is the name of identifier of customizer
        this.addingViewHelper( 'customizer' , 'quantity' , quantity  , 'customizers-options-quantity'  );

    }

    addingViewHelper( template , entityId , entityData , specialCustomizer = null , append = true ){
        let entity = new BaseEntity( entityId , entityData  );
        //console.log( 'entity' , entity );
        this.addToView( template , entity , specialCustomizer , append );
    }

    addUserDetails( id = null ){

        //console.trace();

        let authResult = localStorage.getItem('authResult');
        let authResultObject = JSON.parse(authResult);
        $('.user-info-box').find('.title').find('span').html( authResultObject.user.displayName );
        if( authResultObject.user.photoURL != null ){
            $('.user-info-box').find('.title-icon').html( '<img src="'+authResultObject.user.photoURL+'"  class=" img-responsive img-circle " alt=" '+authResultObject.user.displayName+' "  />' );
        }

        if( id === 'editInfo' ){

            let data = authResultObject.user;
            this.addingViewHelper( '.editInfo-screen-content' , 'user' , data , null , false );

        }
    }

    initMap( position ){
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        let LangaraPos = {lat:49.224604 , lng: -123.1117564 } ;

        console.log('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');

        var currentLocation = new google.maps.LatLng( position.coords.latitude  , position.coords.longitude  );
        var langara = new google.maps.LatLng( LangaraPos.lat , LangaraPos.lng );

        var map;
        map = new google.maps.Map(document.getElementById('map'), {
            center: LangaraPos,
            zoom:16
        });

        var image = {
            url: "http://campuseats.wmdd.ca/html-site/CampusEastCmsHtml/small/images/brands/user.png",
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(150, 150),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 0)
        };

        let marker = new google.maps.Marker({
            position: currentLocation ,
            map: map,
            icon: image,
            title: 'User Location'
        });

        let selfObject = new ViewComponent();
        selfObject.getCafesModel().getAll().then(function ( snapshot ) {

            for( let i = 0 ; i < snapshot.length ; i++ ){
                let cafe = snapshot[i];
                let data = cafe.data;
                console.log( data.position );

                if( data.logo.indexOf('union') !== -1 ){
                    data.logo =  selfObject.getStringHelper(  data.logo  ).replaceChars('jpeg','png')
                }

                var image = {
                    url: "http://campuseats.wmdd.ca/html-site/CampusEastCmsHtml/small/"+data.logo,
                    //url: "http://localhost/CampusEatsMobileApp/www/images/brands/small/subway.png",
                    // This marker is 20 pixels wide by 32 pixels high.
                    size: new google.maps.Size(150, 150),
                    // The origin for this image is (0, 0).
                    origin: new google.maps.Point(0, 0),
                    // The anchor for this image is the base of the flagpole at (0, 32).
                    anchor: new google.maps.Point(0, 0)
                };

                let marker = new google.maps.Marker({
                    position: { lat: data.position.lat, lng: data.position.lang } ,
                    map: map,
                    icon: image,
                    title: data.name
                });
            }

        }).then(function () {
            directionsRenderer.setMap(map);
            var request = {
                origin: currentLocation,
                destination: langara,
                // Note that JavaScript allows us to access the constant
                // using square brackets and a string value as its
                // "property."
                travelMode: 'TRANSIT'
            };
            directionsService.route(request, function(response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                }
            });
        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    initMapFailed( data ){
        let LangaraPos = {lat:49.224604 , lng: -123.1117564 } ;

        console.log( data );
        var map;
        map = new google.maps.Map(document.getElementById('map'), {
            center: LangaraPos,
            zoom:16
        });
    }

    showAllCafeLocations(){
        navigator.geolocation.getCurrentPosition( this.initMap , this.initMapFailed )
    }

    addFooterContainer(){
        if( $('#footer-container').length === 0 ){
            $('body').append($('#footer').html());
        }
    }

    initMapShowDirection( position ){
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        let LangaraPos = {lat:49.224604 , lng: -123.1117564 } ;

        console.log('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');

        var currentLocation = new google.maps.LatLng( position.coords.latitude  , position.coords.longitude  );
        var langara = new google.maps.LatLng( LangaraPos.lat , LangaraPos.lng );

        var map;
        map = new google.maps.Map(document.getElementById('map'), {
            center: LangaraPos,
            zoom:16
        });

        var image = {
            url: "http://campuseats.wmdd.ca/html-site/CampusEastCmsHtml/small/images/brands/user.png",
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(150, 150),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 0)
        };

        let marker = new google.maps.Marker({
            position: currentLocation ,
            map: map,
            icon: image,
            title: 'User Location'
        });

        let selfObject = new ViewComponent();
        let cafeId = JSON.parse( localStorage.getItem('cafe') ).id;

        selfObject.getCafesModel().getOne( cafeId ).then(function ( snapshot ) {

            console.log( snapshot.data() );

                let data = snapshot.data()  ;
                console.log( data.position );

                if( data.logo.indexOf('union') !== -1 ){
                    data.logo =  selfObject.getStringHelper(  data.logo  ).replaceChars('jpeg','png')
                }

                var image = {
                    url: "http://campuseats.wmdd.ca/html-site/CampusEastCmsHtml/small/"+data.logo,
                    //url: "http://localhost/CampusEatsMobileApp/www/images/brands/small/subway.png",
                    // This marker is 20 pixels wide by 32 pixels high.
                    size: new google.maps.Size(150, 150),
                    // The origin for this image is (0, 0).
                    origin: new google.maps.Point(0, 0),
                    // The anchor for this image is the base of the flagpole at (0, 32).
                    anchor: new google.maps.Point(0, 0)
                };
                langara = new google.maps.LatLng( data.position.lat , data.position.lang);;

                let marker = new google.maps.Marker({
                    position: { lat: data.position.lat, lng: data.position.lang } ,
                    map: map,
                    icon: image,
                    title: data.name
                });

        }).then(function () {
            directionsRenderer.setMap(map);
            var request = {
                origin: currentLocation,
                destination: langara,
                // Note that JavaScript allows us to access the constant
                // using square brackets and a string value as its
                // "property."
                travelMode: 'TRANSIT'
            };
            directionsService.route(request, function(response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                }
            });
        }).catch(function ( reason ) {
            selfObject.globalCatch( reason )
        });

    }

    showDirections(){
        navigator.geolocation.getCurrentPosition( this.initMapShowDirection , this.initMapFailed )
    }
}
