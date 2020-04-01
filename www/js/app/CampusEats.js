let isDebug = false;
function consoleAlert( data ){
    if( isDebug ){
        alert( data );
    }
}
localStorage.app = "CampusEats";

class CampusEats {

    constructor() {
    }

    init(){
        consoleAlert(' CampusEats init');
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
