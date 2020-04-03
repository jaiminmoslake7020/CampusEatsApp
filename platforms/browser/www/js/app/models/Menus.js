class Menus extends FirebaseActiveRecord{

    constructor(documentId) {
        super();

        this.firebase_collection = this.main_collection+"/Cafes/"+documentId+"/menus";
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