class AppClassManager {

    constructor() {
    }

    init(){
        this.getViewComponent();
        this.getFirebaseCompoenent();
        this.getLocalStorageComponent();
    }

    setUp(){
        this.getViewComponent().init();
        this.getFirebaseCompoenent().init();
        this.getLocalStorageComponent().init();
    }

    getViewComponent(){
        if( typeof this.ViewComponent === "undefined" ){
            this.ViewComponent = new ViewComponent();
        }
        return this.ViewComponent;
    }

    getLocalStorageComponent(){
        if( typeof this.LocalStorageComponent === "undefined" ){
            this.LocalStorageComponent = new LocalStorageComponent();
        }
        return this.LocalStorageComponent;
    }

    getFirebaseCompoenent(){
        if( typeof this.FirebaseCompoenent === "undefined" ){
            this.FirebaseCompoenent = new FirebaseCompoenent();
        }
        return this.FirebaseCompoenent;
    }



}
