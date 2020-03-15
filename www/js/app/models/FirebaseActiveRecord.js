class FirebaseActiveRecord extends FirebaseCompoenent{
    get main_collection() {
        return this._main_collection;
    }

    set main_collection(value) {
        this._main_collection = value;
    }
    get error() {
        return this._error;
    }

    set error(value) {
        this._error = value;
    }
    get firebase_collection() {
        return this._firebase_collection;
    }

    set firebase_collection(value) {
        this._firebase_collection = value;
    }

    get firebase_document() {
        return this._firebase_document;
    }

    set firebase_document(value) {
        this._firebase_document = value;
    }

    get firebase_is_merge() {
        return this._firebase_is_merge;
    }

    set firebase_is_merge(value) {
        this._firebase_is_merge = value;
    }

    get firebase_data() {
        return this._firebase_data;
    }

    set firebase_data(value) {
        this._firebase_data = value;
    }

    get processing_firebase_request() {
        return this._processing_firebase_request;
    }

    set processing_firebase_request(value) {
        this._processing_firebase_request = value;
    }

    get appRoot() {
        return this._appRoot;
    }

    set appRoot(value) {
        this._appRoot = value;
    }

    get objectAsANewCollection() {
        return this._objectAsANewCollection;
    }

    set objectAsANewCollection(value) {
        this._objectAsANewCollection = value;
    }

    get currentData_CollectionList() {
        return this._currentData_CollectionList;
    }

    set currentData_CollectionList(value) {
        this._currentData_CollectionList = value;
    }

    constructor() {
        super();
        this._firebase_collection = null ;
        this._firebase_document = null ;
        this._firebase_is_merge = false ;
        this._firebase_data = null ;
        this._processing_firebase_request = false ;
        this._appRoot = "../../../" ;
        this._objectAsANewCollection = {} ;
        this._currentData_CollectionList = {} ;
        this._error = null ;

        this._main_collection = "" ;
    }

    addNewCurrentDataCollection( key , value ){
        let currentData_CollectionList = this.currentData_CollectionList;
        currentData_CollectionList[key] = value;
        this.currentData_CollectionList = currentData_CollectionList;
    }

    addObjectAsANewCollection( key , value ){
        let addObjectAsANewCollection = this.objectAsANewCollection;
        addObjectAsANewCollection[key] = value;
        this.objectAsANewCollection = addObjectAsANewCollection;
    }

    init() {

    }

    beforeValidate(){
        return true;
    }

    afterValidate(){
        return true;
    }

    validate(){
        let validationErrors = [];
        if( this.getStringHelper( this.firebase_collection ).isEmptyString() ){
            validationErrors.push( ' firebase_collection can not be empty. ' );
        }
        if( this.getStringHelper( this.firebase_data ).isEmptyString() ){
            validationErrors.push( ` firebase_data can not be empty for ${this.firebase_collection}. ` );
        }
        if( this.getArrayHelper( validationErrors ).isNotEmpty() ){
            this.triigerAlert( 'Error' , validationErrors.join(',')  )
        }
        return true;
    }

    beforeSave(){
        this.processing_firebase_request = true ;
        return true;
    }

    save(){
        if( this.validate() ){
            let selfObject = this;
            if( !this.firebase_data.hasOwnProperty('created_at') ){
                this.firebase_data.created_at = firebase.firestore.Timestamp.fromDate(new Date()) ;
            }
            if( !this.firebase_data.hasOwnProperty('updated_at') ){
                this.firebase_data.updated_at = firebase.firestore.Timestamp.fromDate(new Date()) ;
            }

            let firebase_data = this.firebase_data ;
            if( this.objectAsANewCollection !== {} ){
                for( let key in firebase_data){
                    if( typeof firebase_data[key] === "object" && this.objectAsANewCollection.hasOwnProperty(key) ){
                        this.addNewCurrentDataCollection( key , firebase_data[key] );
                        delete firebase_data[key] ;
                    }
                }
            }

            this.beforeSave();
            let recent_firebase_document = this.firebase_document;
            // Add a new document in collection "cities"
            self.db.collection(  this.firebase_collection ).doc( this.firebase_document ).set(
                firebase_data , { merge: this.firebase_is_merge  }
            )
            .then(function() {

                if( selfObject.addObjectAsANewCollection ){

                    new Promise( ( resolve, reject ) => {

                       for( let collection_name in selfObject.currentData_CollectionList ){

                           let newItSelf = new FirebaseActiveRecord();
                           newItSelf.firebase_collection = selfObject.firebase_collection+"/"+recent_firebase_document+"/"+collection_name;
                           newItSelf.firebase_document = recent_firebase_document ;
                           newItSelf.firebase_data = selfObject.currentData_CollectionList[collection_name];
                           newItSelf.firebase_is_merge = true ;
                           new Promise( ( resolve, reject ) => {
                               newItSelf.save();
                           }).then(() => {
                               newItSelf.afterSave();
                           }).catch(( reason )=>{
                               console.log( reason );
                               newItSelf.afterError( reason );
                           });

                       }

                    }).then(() => {
                        selfObject.afterSave();
                    }).catch(( reason )=>{
                        console.log( reason );
                    });

                }else{
                    selfObject.afterSave();
                }

            })
            .catch(function(error) {
                selfObject.afterError( error );
            });
        }
    }

    afterSave(){
        this.processing_firebase_request = false ;
        return true;
    }

    afterError( error ){
        console.error("Error writing document: ", error);
        this.processing_firebase_request = false ;
        this.error = error;
    }

    update(){
        this.firebase_is_merge = true ;
        this.save();
    }

}