class BaseEntity {

    get primaryKey(){
        return this._primaryKey
    }

    set primaryKey( value ){
        this._primaryKey = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    constructor( id , data ) {
        this._primaryKey = id;
        this._data = data;
    }

}