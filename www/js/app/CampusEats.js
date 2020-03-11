class CampusEats {

    constructor() {
    }

    init(){
        this.getAppClassManager().init();
        this.getAppClassManager().setUp();
    }

    getAppClassManager(){
        if( typeof this.AppClassManager === "undefined" ){
            this.AppClassManager = new AppClassManager();
        }
        return this.AppClassManager;
    }

}
