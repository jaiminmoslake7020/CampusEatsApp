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
        }else{
            if( this.getAppClassManager().getRequestComponent().hasModeSelect() ){
                consoleAlert( 'showLoginScreen' );
                this.showLoginScreen();
            }else{
                consoleAlert( 'showSplashScreen' );
                this.showSplashScreen();
            }
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
            //this.showCustomizeMenuItemOption("d762b653f3fe6ac800512b464183744b");
            //this.showHomeScreen();
            this.showCartMenu();
            //this.showRenderScreen('cafeLocations');
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
            return;
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
            return;
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

    showMenuIetmsScreen( menu ){

        if( !this.authentiCate() ){
            return;
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

                        let menuObj = JSON.parse( localStorage.getItem('menu') );
                        if( menuObj == null ){
                            console.log('menu empty showing homescreen.');
                            selfObject.showHomeScreen();
                        }

                        menuItem.data.customizations = menuObj.customizations ;
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

    showCustomizeMenuItemOption( menuItem ){

        if( !this.authentiCate() ){
            return;
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
            selfObject.addMenuItemHeading();
            selfObject.addCustomizingOptions();
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
            return;
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
            selfObject.addingViewHelper( 'menu-heading', 'cart-heading' , {'name':'Your Cart'} );
            selfObject.addingViewHelper( 'cart-container-template', 'cart-container-template' , {} );
            selfObject.addUserDetails();
            selfObject.addFooterContainer();

            resolve();

        }).then(function () {

            let currentOrder = (new OrderManager()).currentOrder;
            for( let orderItem in currentOrder ){

                console.log(currentOrder[orderItem]);

                let orderItemData = {id:orderItem, itemId:orderItem,
                    'name': currentOrder[orderItem]._name ,
                    'calories': currentOrder[orderItem]._calories ,
                    'quantity': currentOrder[orderItem]._quantity ,
                    'price': currentOrder[orderItem]._price ,
                    'url': currentOrder[orderItem]._actualData.url
                };
                selfObject.addingViewHelper( 'cart-item', orderItem , orderItemData );
            }

        }).then(function () {


            selfObject.getAppClassManager().getEventHandlerComponent().showCartMenuEvents();

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
            'cart-item':'cart-items'
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
                if( templateString.indexOf( findIn ) !== -1 ){
                    templateString = ( new MyString( templateString ) ).replaceChars( findIn , value );
                }
                //console.log( data.name , 'Added' );
            }
            let element ;
            if( customizer != null ){
                element = document.getElementById( 'customizers-options-'+customizer );
            }else{
                element = this.getParentElement( template );
            }
            if( element === null ){
                console.log( template , model , customizer , append );
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
            this.showHomeScreen();
        }
        let cafeEntity = new Cafe( cafe.id , cafe );
        this.addToView('cafe-heading', cafeEntity );
    }

    addMenuHeading(){
        let menu = JSON.parse( localStorage.getItem('menu') );
        if( menu == null ){
            console.log('menu empty showing homescreen.');
            this.showHomeScreen();
        }
        let menuEnity = new Menu( menu.id , menu );
        this.addToView('menu-heading', menuEnity );
    }

    addMenuItemHeading(){
        let menu_item = JSON.parse( localStorage.getItem('menu_item') );
        if( menu_item == null ){
            console.log('menu_item empty showing homescreen.');
            this.showHomeScreen();
        }
        let menuEnity = new BaseEntity( menu_item.id , menu_item );
        console.log( menuEnity );
        this.addToView('ion-customize-menu-item-button', menuEnity );
    }

    addCustomizingOptions(){
        let selfObject = this;
        this.addingViewHelper('addItemContainer', 'btnContainer' , {}  );
        this.addQuantity(  );

        let menu = JSON.parse( localStorage.getItem('menu_item') );
        if( menu == null ){
            console.log('menu_item empty showing homescreen.');
            this.showHomeScreen();
        }

        if( "customizations" in menu){
            if( typeof menu.customizations === "object" && menu.customizations != null ){
                let customizations = menu.customizations ;
                console.log( customizations );
                for( let key in customizations ){
                    console.log( key , customizations[key] , customizations[key].options );
                    let customizer = customizations[key];
                    customizer.id = key;
                    if( "options" in customizer ){
                        let options = customizations[key].options;
                        customizer.align = "left" ;
                        selfObject.addingViewHelper( 'customizer-parent' , key , customizer  );
                        for( let key1 in options ){
                            if( "category" in options[key1] ){
                                let categories = options[key1].category ;
                                for ( let key2 in categories ){
                                    categories[key2].value = 0 ;
                                    categories[key2].id = key2 ;
                                    categories[key2].min = 0 ;
                                    selfObject.addingViewHelper( 'customizer-parent' , key1 , {name:"",'id':key1, 'align':'left' }  );
                                    selfObject.addingViewHelper( 'customizer' , key2 ,  categories[key2] , key1  );
                                }
                            }else{
                                options[key1].value = 0;
                                options[key1].id = key1;
                                options[key1].min = 0 ;
                                selfObject.addingViewHelper( 'customizer' , key1 , options[key1]  , key  );
                            }
                        }
                    }
                }
            }
        }
    }

    addQuantity(  ){

        let menu_item = JSON.parse( localStorage.getItem('menu_item') );
        if( menu_item == null ){
            console.log('menu_item empty showing homescreen.');
            this.showHomeScreen();
        }

        this.addingViewHelper( 'customizer-parent' , 'quantity_option' , {'name':'Size','id':'size', 'align':'center' }  );
        this.addingViewHelper( 'customizer-size' , 'size' , {name:'size'}  , 'size'  );

        let quantity = {'name':'Quantity','value':1} ;
        if( "sizes" in menu_item ){
            let hadMedium = false ;
            let countDown = 1 ;
            for( let key in menu_item.sizes ){
                quantity[key+'_price'] = menu_item.sizes[key]['price'];
                quantity[key+'_calories'] = menu_item.sizes[key]['calories'];

                let size = menu_item.sizes[key];
                size.id = key;
                size["checked"] = "" ;
                size["active"] = "" ;
                if( key === "medium" ){
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
        }

        quantity.min = 1;
        this.addingViewHelper( 'customizer-parent' , 'quantity_option' , {'name':'Quantity','id':'quantity',  'align':'left'}  );
        // 'Quantity' is the name of identifier of customizer
        this.addingViewHelper( 'customizer' , 'quantity' , quantity  , 'quantity'  );

    }

    addingViewHelper( template , entityId , entityData , specialCustomizer = null , append = true ){
        let entity = new BaseEntity( entityId , entityData  );
        console.log( 'entity' , entity );
        this.addToView( template , entity , specialCustomizer , append );
    }

    addUserDetails( id = null ){

        console.trace();

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
       $('body').append($('#footer').html());
    }

}
