class Cafes extends FirebaseActiveRecord{

    constructor(props) {
        super(props);
        this.firebase_collection = this.main_collection+"/Cafes";
        this.firebase_is_merge = true ;

        this.cafe_incremental = 0 ;
        this.cafes_json = "/CampusEatsMobileApp/www/website-data/cafes.json";
        this.cafesJsonData = {} ;
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
            this.getAppClassManager().getEventHandlerComponent().alert('Info','Record saved');
        }
    }

    setUp(){
        
        let selfObject = this;
        new Promise( ( resolve, reject ) => {

            self.db.collection('/Cafes').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('working_hours').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('monday').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('tuesday').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('wednesday').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('thursday').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('friday').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('saturday').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            self.db.collection('sunday').delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

        }).then(() => {

            selfObject.addCafes();

        }).catch(( reason )=>{
            console.log( reason );
            selfObject.triigerAlert('','',reason)
        });


    }

    addCafes(){
        let selfObject = this;
        $.getJSON( this.cafes_json, function( cafes ) {
            selfObject.cafesJsonData = cafes;
            selfObject.createRecord( 0 );
        });

    }

    createRecord( i = 0  ){
        let cafes = this.cafesJsonData;
        let increment = 0 ;
        for( let cafe in cafes ){
            if( increment === i ){

                selfObject.firebase_document = cafe;
                selfObject.firebase_is_merge = true ;
                selfObject.firebase_data = cafes[cafe];
                selfObject.addObjectAsANewCollection('working_hours',"working_hours");
                new Promise( ( resolve, reject ) => {
                    selfObject.save();
                }).then(() => {
                    selfObject.createRecord( selfObject.cafe_incremental++ );
                }).catch(( reason )=>{
                    console.log( reason );

                });

            }
            increment++;
        }
    }

    addSubway( callback ){

        this.firebase_data = {
            "name": "Subway",
            "logo": "images/brands/subway.png",
            "merchant_id": "x",
            "cafe_vendor_id": "y",
            "address": "Cafeteria Langara College, Science Building, 170 W 49th Ave, Vancouver, BC V5Y 2Z6",
            "cafe_primary_colour": "green",
            "cafe_secondary_colour": "yellow",
            "created_at":  firebase.firestore.Timestamp.fromDate(new Date()),
        };
        this.firebase_document = 'subway';
        this.firebase_is_merge = true ;
        this.save();
    }

    addStarbucks( callback ){

        this.firebase_data = {
            "name": "Starbucks",
            "logo": "images/brands/starbucks.png",
            "merchant_id": "x",
            "cafe_vendor_id": "y",
            "address": "100 W 49th Ave 1st Floor, Vancouver, BC V5Y 2Z6",
            "cafe_primary_colour": "green",
            "cafe_secondary_colour": "white",
        };
        this.firebase_document = 'starbucks';
        this.firebase_is_merge = true ;
        this.save();
    }

    addTimHortons( callback ){

        this.firebase_data = {
            "name": "Tim Hortons",
            "logo": "images/brands/tim.png",
            "merchant_id": "x",
            "cafe_vendor_id": "y",
            "address": "100 W 49th Ave 1st Floor, Vancouver, BC V5Y 2Z6",
            "cafe_primary_colour": "red",
            "cafe_secondary_colour": "white",
        };
        this.firebase_document = 'tim-hortons';
        this.firebase_is_merge = true ;
        this.save();

    }


}