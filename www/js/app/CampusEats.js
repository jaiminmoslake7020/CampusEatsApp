class CampusEats {

    constructor() {
    }

    init(){

        console.log( console.trace() );

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
