class ViewComponent extends BaseComponent{

    constructor() {
        consoleAlert( 'Viewe Component configureVue');
        super();
    }

    init(){
        consoleAlert( 'Viewe Component configureVue');

        consoleAlert( 'Viewe Component Loaded');

        if( true ){
            // just for testing purpose
            //this.showMenusScreen('tim-hortons');
            this.showMenuIetmsScreen('section_7410');
            //this.showHomeScreen();
            //this.showRenderScreen('cafeLocations');
        }else{
            if( this.getAppClassManager().getRequestComponent().hasModeSelect() ){
                consoleAlert( 'showLoginScreen' );
                this.showLoginScreen();
            }else{
                consoleAlert( 'showSplashScreen' );
                this.showSplashScreen();
            }
        }


    }

    replaceAppScreen( template , id = 'app' ){
        consoleAlert( template );
        document.getElementById(id).innerHTML = template ;
        consoleAlert( document.getElementById(id).innerHTML  );
    }

    showSplashScreen(){

        let template ='<div id="screen-container"><div class="screen"  id="splash-screen"><div class=" spalsh-screen-image  spalsh-screen "></div></div></div>';
        this.replaceAppScreen( template );

        let object = this;
        setTimeout(function () {
            object.showLoginScreen();
        },3000);

    }

    showLoginScreen(){

        consoleAlert( 'showLoginScreen' );

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

        consoleAlert( "showHomeScreen" );


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
            resolve();

        }).then(function () {

            new Promise(function (resolve, reject) {

                selfObject.getMenuIetmsModel( menu ).getAll().then(function ( snapshot ) {
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
        } ;
        if( !templateParentArray.hasOwnProperty( template ) ){
            consoleAlert( 'Template parent array is not available.'+template );
        }
        return document.getElementById( templateParentArray[template] );
    }

    addToView( template , model ){
        //model = new Cafe();
        let primaryKey = model.primaryKey;
        let data = model.data;
        let templateString = document.getElementById(template).innerHTML;
        templateString = ( new MyString( templateString ) ).replaceChars( '{{primaryKey}}' , model.primaryKey );
        for( let key in data ){
            let findIn = '{{'+key+'}}';
            let value = data[key];
            if( typeof value === "object"){
                value = JSON.stringify(value);
            }
            if( templateString.indexOf( findIn ) !== -1 ){
                templateString = ( new MyString( templateString ) ).replaceChars( findIn , value );
            }
            console.log( data.name , 'Added' );
        }
        this.getParentElement( template ).innerHTML +=  templateString;
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
            selfObject.addUserDetails(  );
            if( id === "cafeLocations" ){
                selfObject.showAllCafeLocations();
            }
            selfObject.getAppClassManager().getEventHandlerComponent().stopLoading();
        }).catch(function () {
            selfObject.globalCatch( reason );
        });
    }

    showFeedbackForm(){

    }

    showOrderHistory(){

    }

    showPaymentMethod(){

    }

    addBackButton(){

    }

    addCafeHeading(){
        let cafe = JSON.parse( localStorage.getItem('cafe') );
        let cafeEntity = new Cafe( cafe.id , cafe );
        this.addToView('cafe-heading', cafeEntity );
    }

    addMenuHeading(){
        let menu = JSON.parse( localStorage.getItem('menu') );
        let menuEnity = new Menu( menu.id , menu );
        this.addToView('menu-heading', menuEnity );
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
            let templateString = document.querySelector('.editInfo-screen-content').innerHTML;
            let data = authResultObject.user;
            for( let key in data ){
                let findIn = '{{'+key+'}}';
                let value = data[key];
                if( templateString.indexOf( findIn ) !== -1 ){
                    if( value == null ){
                        value = "" ;
                    }
                    templateString = ( new MyString( templateString ) ).replaceChars( findIn , value );
                }
                //console.log( data.name , 'Added' );
            }
            document.querySelector('.editInfo-screen-content').innerHTML = templateString;
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


    initMap222() {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        var haight = new google.maps.LatLng(37.7699298, -122.4469157);
        var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
        var mapOptions = {
            zoom: 16,
            center: haight
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        directionsRenderer.setMap(map);
    }

    calcRoute() {
        var selectedMode = document.getElementById('mode').value;
        var request = {
            origin: haight,
            destination: oceanBeach,
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
    }



}
