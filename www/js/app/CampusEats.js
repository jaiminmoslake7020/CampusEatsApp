class CampusEats {

    constructor() {
    }

    init(){
        alert(' CampusEats init');
        this.getAppClassManager().init();
        this.getAppClassManager().setUp();
    }

    /**
     * @returns {AppClassManager}
     */
    getAppClassManager(){
        if( typeof this.AppClassManager === "undefined" ){
            this.AppClassManager = new AppClassManager();
        }
        return this.AppClassManager;
    }

}
