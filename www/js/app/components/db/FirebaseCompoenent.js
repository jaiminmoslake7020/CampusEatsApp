class FirebaseCompoenent extends BaseComponent{

    constructor() {
        super();
    }

    init(){
        this.setUpFirebase();
        this.setUpFirebaseUi();
    }

    setUpFirebase(){

        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBChFqqjM0nvMwfjQS_nH1D1YmlHnZ3Y6Q",
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

        self.defaultStorage = firebase.storage();
        self.db = firebase.firestore();
    }

    setUpFirebaseUi(){
        self.firebase_ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    loadFirebaseAuthenticationFunctions(){
        let appObject = this;
        self.firebase_ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    console.log( JSON.stringify( authResult ) );
                    console.log( redirectUrl );

                    if( typeof authResult === "object"  && authResult.hasOwnProperty( 'user' )  ){
                        localStorage.setItem('authResult', JSON.stringify(authResult) );

                        setInterval(function () {
                            if( !campusEats.getAppClassManager().getViewComponent().authentiCate() ){
                                campusEats.getAppClassManager().getViewComponent().showFreshLoginScreen();
                            }
                        }, 10000 );

                        return campusEats.getAppClassManager().getViewComponent().showHomeScreen();
                    }else{
                        campusEats.getAppClassManager().getEventHandlerComponent().alert( 'Error' , '' , '' , buttons );
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
            signInFlow: 'redirect',
            signInSuccessUrl: window.location.href+'?success=1',
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
                },
                //firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
               // firebase.auth.FacebookAuthProvider.PROVIDER_ID   requiers more configuration
            ],
            // Other config options...
        });
    }




}
