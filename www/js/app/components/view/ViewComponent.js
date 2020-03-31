class ViewComponent extends BaseComponent{

    constructor() {
        super();
    }

    init(){
        this.configureVue();

        alert( "Viewe Component Loaded" );

        if( false ){
            // just for testing purpose
            this.showMenusScreen('tim-hortons')
        }else{
            if( this.getAppClassManager().getRequestComponent().hasModeSelect() ){
                alert( "showLoginScreen" );
                this.showLoginScreen();
            }else{
                alert( "showSplashScreen" );
                this.showSplashScreen();
            }
        }


    }

    configureVue(){
        Vue.config.productionTip = false;
    }

    showSplashScreen(){

        alert( "showSplashScreen  "+document.getElementById('screen-container').innerHTML );


        var app = new Vue({
            el: '#screen-container',
            template: '<div id="screen-container"><div class="screen"  id="splash-screen"><div class=" spalsh-screen-image  spalsh-screen "></div></div></div>'
        });

        let object = this;
        setTimeout(function () {
            alert( "showSplashScreen   dfgdf"+document.getElementById('screen-container').innerHTML );
            object.showLoginScreen();
        },3000);

    }

    showLoginScreen(){
        alert( "showLoginScreen" );

        let selfObject = this;
        new Promise(function (resolve, reject) {

            var app = new Vue({
                el: '#screen-container',
                template: '<div id="screen-container"><div class="screen"  id="login-screen"><div class=" spalsh-screen-image  spalsh-screen "><div id="firebaseui-auth-container"></div></div></div></div>'
            });
            selfObject.getAppClassManager().getFirebaseCompoenent().loadFirebaseAuthenticationFunctions();
            resolve();

        }).then(function () {
            selfObject.getAppClassManager().getEventHandlerComponent().stopLoading();
        });

    }

    showHomeScreen(){

        alert( "showHomeScreen" );


        let selfObject = this;
        selfObject.getAppClassManager().getEventHandlerComponent().showLoading();

        new Promise(function (resolve, reject) {

            var app = new Vue({
                el: '#screen-container',
                template: '<div id="screen-container"><div class="screen"  id="home-screen"></div></div>'
            });

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

            var app = new Vue({
                el: '#screen-container',
                template: '<div id="screen-container"><div class="screen"  id="home-screen"></div></div>'
            });

            document.getElementById('home-screen').innerHTML = document.getElementById('nav-menu').innerHTML;

            var app = new Vue({
                el: '#ion-content',
                template: '<ion-content class="ion-padding screen-content menu-screen-content " id="ion-content" ></ion-content>'
            });

            document.getElementById('home-screen').id = 'menu-screen';
            //document.getElementById('ion-content').innerHTML = document.getElementById('ion-tabs').innerHTML;

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
            alert( 'Template parent array is not available.'+template );
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
