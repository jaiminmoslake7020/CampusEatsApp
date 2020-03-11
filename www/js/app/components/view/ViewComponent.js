class ViewComponent extends BaseComponent{

    constructor() {
        super();
    }

    init(){
        this.configureVue();
        if( this.getAppClassManager().getRequestComponent().hasModeSelect() ){
            this.showHomeScreen();
        }else{
            this.showSplashScreen();
        }
    }

    configureVue(){
        Vue.config.productionTip = false;
    }

    showSplashScreen(){

        var app = new Vue({
            el: '#screen-container',
            template: '<div id="screen-container"><div class="screen"  id="splash-screen"><div class=" spalsh-screen-image  spalsh-screen "></div></div></div>'
        });

        let object = this;
        setTimeout(function () {
            object.showLoginScreen();
        },3000);

    }

    showLoginScreen(){

        var app = new Vue({
            el: '#screen-container',
            template: '<div id="screen-container"><div class="screen"  id="login-screen"><div class=" spalsh-screen-image  spalsh-screen "><div id="firebaseui-auth-container"></div></div></div></div>'
        });

        this.getAppClassManager().getFirebaseCompoenent().loadFirebaseAuthenticationFunctions();

    }

    showHomeScreen(){

        var app = new Vue({
            el: '#screen-container',
            template: '<div id="screen-container"><div class="screen"  id="home-screen">HOME SCREEN</div></div>'
        });

    }

}
