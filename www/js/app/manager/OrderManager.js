class OrderManager extends BaseManager{

    constructor(props) {
        super(props);
        let currentOrder = localStorage.getItem('currentOrder');
        if( currentOrder === null ){
            currentOrder = {} ;
        }else{
            currentOrder = JSON.parse( currentOrder ) ;
        }
        this._currentOrder = currentOrder ;
    }

    get currentOrder() {
        return this._currentOrder;
    }

    set currentOrder(value) {
        this._currentOrder = value;
        localStorage.setItem('currentOrder' ,  JSON.stringify(value) ) ;
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

    isCartExists(){
        let currentOrder = this.currentOrder;
        if( currentOrder !== null && typeof currentOrder == "object" && JSON.stringify(currentOrder) !== "{}" ){
            return true;
        }else{
            return false;
        }
    }

}