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
            this.showHomeScreen();
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

            resolve();

        }).then(function () {

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

            let template = '<div id="screen-container"><div class="screen"  id="home-screen"></div></div>' ;
            selfObject.replaceAppScreen( template );
            document.getElementById('home-screen').innerHTML = document.getElementById('nav-menu').innerHTML;

            document.getElementById('ion-content').classList.remove('content');
            document.getElementById('ion-content').classList.add('menu-screen-content');

            document.getElementById('home-screen').id = 'menu-screen';

            resolve();

        }).then(function () {

            new Promise(function (resolve, reject) {

                selfObject.getMenusModel( cafeId ).getAll().then(function ( snapshot ) {
                    for( let i = 0 ; i < snapshot.length ; i++ ){
                        let cafe = snapshot[i];
                        selfObject.addToView( 'ion-menu-button' , cafe );
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

    getIonContent(){
        return document.getElementById('ion-content');
    }

    getParentElement( template ){
        let templateParentArray = {
            'ion-button' : 'ion-content',
            'ion-tab-button' :'ion-tab-bar' ,
            'ion-menu-button' :'ion-content' ,
            'ion-tab' :'menu-tabs'
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
            if( templateString.indexOf( findIn ) !== -1 ){
                templateString = ( new MyString( templateString ) ).replaceChars( findIn , value );
            }
        }
        this.getParentElement( template ).innerHTML +=  templateString;
    }

}
