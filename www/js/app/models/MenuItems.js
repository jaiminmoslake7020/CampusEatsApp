class MenuItems extends FirebaseActiveRecord{

    constructor(menuId) {
        super();

        this.firebase_collection = this.main_collection+"/Cafes/"+localStorage.getItem('cafe')+"/menus/"+menuId+"/menuitems";
        this.firebase_is_merge = true ;

        this.cafe_incremental = 0 ;
        this.cafes_json = "/CampusEatsMobileApp/www/website-data/cafes.json";
        this.cafesJsonData = {} ;

        this._entityClass = 'Menu' ;
    }

    getAll(){
        return this.findAll();
    }

    init() {
        super.init();
    }

    save() {
        super.save();
    }

    update(){
        super.update()
    }

    afterSave() {
        if( super.afterSave() ){
            //this.getAppClassManager().getEventHandlerComponent().alert('Info','Record saved');
            console.log('Info','Record saved');
        }
    }

}