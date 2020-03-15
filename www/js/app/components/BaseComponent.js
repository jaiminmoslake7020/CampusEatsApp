class BaseComponent {

    constructor() {
    }

    init(){
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

    /**
     * @param content
     * @returns {MyString}
     */
    getStringHelper( content ){
        this.StringHelper = new MyString( content );
        return this.StringHelper;
    }

    /**
     * @param content
     * @returns {MyArray}
     */
    getArrayHelper( content ){
        this.ArrayHelper = new MyArray( content );
        return this.ArrayHelper;
    }

    triigerAlert( header , subHeader , message , buttons )
    {
        this.getAppClassManager().getEventHandlerComponent().alert( header , subHeader , message , buttons )
    }

}
