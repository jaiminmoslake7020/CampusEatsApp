class LocalStorageComponent extends BaseComponent{

    constructor() {
        super();
    }

    init(){

    }

    setItem( key , value ){
        localStorage[key] = value;
    }

    getItem( key ){
        return localStorage[key];
    }

}
