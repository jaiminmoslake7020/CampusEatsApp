
class CampusEats {

    init(){
        this.configureVue();
        this.setUpFirebase();
        this.showSplashScreen();

    }

    configureVue(){
        Vue.config.productionTip = false;

    }

    setUpFirebase(){

        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyC58WAuu4J8nmfBFGjaLeMEKlvGuBZ1xGg",
            authDomain: "campuseats-431d3.firebaseapp.com",
            databaseURL: "https://campuseats-431d3.firebaseio.com",
            projectId: "campuseats-431d3",
            storageBucket: "campuseats-431d3.appspot.com",
            messagingSenderId: "94074607384",
            appId: "1:94074607384:web:594dbcadcdb444e47bf06d",
            measurementId: "G-KDJMVEZ6TZ"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

        this.defaultStorage = firebase.storage();
        this.db = firebase.firestore();
        this.firebase_ui = new firebaseui.auth.AuthUI(firebase.auth());

    }

    loadFirebaseAuthenticationFunctions(){
        let appObject = this;
        this.firebase_ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    console.log( JSON.stringify( authResult ) );
                    console.log( redirectUrl );

                    if( typeof authResult === "object"  && authResult.hasOwnProperty( 'user' )  ){

                        this.authResult = authResult;
                        return appObject.showHomeScreen();

                    }else{

                        Swal.fire({
                            icon: 'error',
                            title: 'Login Unsucceful',
                            text: 'Something went wrong!',
                        });

                        return false;
                    }

                },
                uiShown: function() {
                    // The widget is rendered.
                    // Hide the loader.
                    setTimeout(function () {
                        document.getElementById('firebaseui-auth-container').classList.add('active');
                    },100);
                }
            },
            signInFlow: 'popup',
            signInSuccessUrl: window.location.href+'?success=1',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            // Other config options...
        });


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

        this.loadFirebaseAuthenticationFunctions();

    }

    showHomeScreen(){

        var app = new Vue({
            el: '#screen-container',
            template: '<div id="screen-container"><div class="screen"  id="home-screen">HOME SCREEN</div></div>'
        });

    }



}