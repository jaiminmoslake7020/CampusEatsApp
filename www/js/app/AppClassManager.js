class AppClassManager {

    constructor() {
    }

    init(){
        this.getRequestComponent();
        this.getFirebaseCompoenent();
        this.getLocalStorageComponent();
        this.getViewComponent();
        this.getEventHandlerComponent();
    }

    setUp(){
        this.getRequestComponent().init();
        this.getFirebaseCompoenent().init();
        this.getLocalStorageComponent().init();
        this.getViewComponent().init();
        this.getEventHandlerComponent().init();
    }

    /**
     * @returns {ViewComponent}
     */
    getViewComponent(){
        if( typeof this.ViewComponent === "undefined" ){
            this.ViewComponent = new ViewComponent();
        }
        return this.ViewComponent;
    }

    /**
     * @returns {LocalStorageComponent}
     */
    getLocalStorageComponent(){
        if( typeof this.LocalStorageComponent === "undefined" ){
            this.LocalStorageComponent = new LocalStorageComponent();
        }
        return this.LocalStorageComponent;
    }

    /**
     * @returns {FirebaseCompoenent}
     */
    getFirebaseCompoenent(){
        if( typeof this.FirebaseCompoenent === "undefined" ){
            this.FirebaseCompoenent = new FirebaseCompoenent();
        }
        return this.FirebaseCompoenent;
    }

    /**
     * @returns {RequestComponent}
     */
    getRequestComponent(){
        if( typeof this.RequestComponent === "undefined" ){
            this.RequestComponent = new RequestComponent();
        }
        return this.RequestComponent;
    }

    /**
     * @returns {EventHandlerComponent}
     */
    getEventHandlerComponent(){
        if( typeof this.EventHandlerComponent === "undefined" ){
            this.EventHandlerComponent = new EventHandlerComponent();
        }
        return this.EventHandlerComponent;
    }

}
