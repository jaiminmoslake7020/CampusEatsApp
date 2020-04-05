let isDebug = false;
function consoleAlert( data ){
    console.log(data);
    if( isDebug ){
        alert( data );
    }
}
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
