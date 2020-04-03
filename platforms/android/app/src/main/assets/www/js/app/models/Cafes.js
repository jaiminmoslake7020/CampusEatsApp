class Cafes extends FirebaseActiveRecord{

    constructor() {

        super();
        this.firebase_collection = this.main_collection+"/Cafes";
        this.firebase_is_merge = true ;

        this.cafe_incremental = 0 ;
        this.cafes_json = "/CampusEatsMobileApp/www/website-data/cafes.json";
        this.cafesJsonData = {} ;

        this._entityClass = 'Cafe' ;

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

    /**
     * This function is for development only it will add all the data from the
     * www/website-data/cafes.json
     * to firebase and create required collections and documents
     * it should be run without phonegap from browser.
     *
     * before running please
     * firebase list projects
     * firebase use PROJECTID
     * firebase firestore:delete -r Cafes
     *
     * -r is recusrsive
     */
    setUp(){
        let selfObject = this;
        selfObject.addCafes();
    }

    addCafes(){
        let selfObject = this;
        $.getJSON( this.cafes_json, function( cafes ) {
            selfObject.cafesJsonData = cafes;
            selfObject.createRecord( 0 );
        });

    }

    createRecord( i = 0  ){
        let selfObject = this;
        let cafes = this.cafesJsonData;
        let increment = 0 ;
        for( let cafe in cafes ){
            if( increment === i ){

                selfObject.order = i ;

                selfObject.firebase_document = cafe;
                selfObject.firebase_is_merge = true ;
                selfObject.firebase_data = cafes[cafe];
                selfObject.addObjectAsANewCollection('working_hours',"working_hours");
                selfObject.addObjectAsANewCollection('menus',"menus");
                new Promise( ( resolve, reject ) => {
                    selfObject.save();
                    resolve();
                }).then(() => {
                    selfObject.createRecord( selfObject.cafe_incremental++ );
                }).catch(( reason )=>{
                    console.log( reason );
                });

            }
            increment++;
        }
    }

}