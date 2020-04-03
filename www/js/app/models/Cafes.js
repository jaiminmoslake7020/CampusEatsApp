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
     * firebase projects:list
     * firebase use campuseats-431d3
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

                let cafeRecord = new Cafes();
                cafeRecord.order = i ;
                cafeRecord.firebase_document = cafe;
                cafeRecord.firebase_is_merge = true ;
                cafeRecord.firebase_data = cafes[cafe];
                if( "working_hours" in cafes[cafe] ){
                    cafeRecord.addObjectAsANewCollection('working_hours',"working_hours");
                }else{
                    cafeRecord.removeObjectAsANewCollection('working_hours');
                }
                if( "menus" in cafes[cafe] ){
                    cafeRecord.addObjectAsANewCollection('menus',"menus");
                }else{
                    cafeRecord.removeObjectAsANewCollection('menus');
                }
                new Promise( ( resolve, reject ) => {
                    cafeRecord.save();
                    resolve();
                }).then(() => {
                    selfObject.cafe_incremental++;
                    let cafe_incremental = selfObject.cafe_incremental;
                    selfObject.createRecord( cafe_incremental );
                }).catch(( reason )=>{
                    console.log( reason );
                });

            }
            increment++;
        }
    }

}