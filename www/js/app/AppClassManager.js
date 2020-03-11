class AppClassManager {

    constructor() {
    }

    init(){
        this.getRequestComponent();
        this.getFirebaseCompoenent();
        this.getLocalStorageComponent();
        this.getViewComponent();
    }

    setUp(){
        this.getRequestComponent().init();
        this.getFirebaseCompoenent().init();
        this.getLocalStorageComponent().init();
        this.getViewComponent().init();
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

    getRequestComponent(){
        if( typeof this.RequestComponent === "undefined" ){
            this.RequestComponent = new RequestComponent();
        }
        return this.RequestComponent;
    }

}
