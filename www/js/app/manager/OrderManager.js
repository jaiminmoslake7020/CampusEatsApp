class OrderManager extends BaseManager{

    constructor(props) {
        super(props);
    }

    get currentOrder() {
        return this._currentOrder;
    }

    set currentOrder(value) {
        this._currentOrder = value;
        localStorage.getItem('_currentOrder' ,  this._currentOrder ) ;
    }

    init( currentOrder ) {
        this.currentOrder = localStorage.getItem('_currentOrder') ;
    }

    addIetm( key , data ){
        let currentOrder = this.currentOrder;
        currentOrder[key] = data;
        this.currentOrder = currentOrder;
    }

    removeItem( key ){
        let currentOrder = this.currentOrder;
        if( key in currentOrder ){
            delete currentOrder[key];
        }
        this.currentOrder = currentOrder;
    }

    calculateOrder(){

    }

}