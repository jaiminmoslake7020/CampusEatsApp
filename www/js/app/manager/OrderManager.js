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

    removeOrder(){
        this.currentOrder = {} ;
    }

    bookOrder(){

        return this.getViewComponent().getStringHelper().makeid(10);

        let newDbOrder = {} ;
        let currentOrder = this.currentOrder ;

        let totalPriceOfOrder = 0 ;
        for( let orderItem in currentOrder ){

            console.log(currentOrder[orderItem]);

            let orderItemData = {id:orderItem, itemId:orderItem,
                'name': currentOrder[orderItem]._name ,
                'calories': currentOrder[orderItem]._calories ,
                'quantity': currentOrder[orderItem]._quantity ,
                'price': currentOrder[orderItem]._price ,
                'url': currentOrder[orderItem]._actualData.url
            };
            totalPriceOfOrder += orderItemData.price ;
            selfObject.addingViewHelper( 'cart-item', orderItem , orderItemData );
        }

        newDbOrder.totalPriceOfOrder = newDbOrder ;
        //newDbOrder.


        


    }

}