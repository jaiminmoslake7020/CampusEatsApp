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

        let newDbOrder = {} ;
        newDbOrder.items = {} ;
        let currentOrder = this.currentOrder ;

        let totalPriceOfOrder = 0 ;
        for( let orderItem in currentOrder ){
            let orderItemData = {id:orderItem, itemId:orderItem,
                'name': currentOrder[orderItem]._name ,
                'menuId': currentOrder[orderItem]._menuId ,
                'menuItemId': currentOrder[orderItem]._menuItemId ,
                'calories': currentOrder[orderItem]._calories ,
                'quantity': currentOrder[orderItem]._quantity ,
                'price': currentOrder[orderItem]._price ,
                'url': currentOrder[orderItem]._actualData.url,
                'customizerOptions': currentOrder[orderItem]._customizerOptions,
                'size': currentOrder[orderItem]._size
            };
            totalPriceOfOrder += parseFloat(currentOrder[orderItem]._price) ;
            newDbOrder.items[orderItem] = orderItemData;
            newDbOrder.cafeId = currentOrder[orderItem]._cafeId ;
        }

        newDbOrder.totalPriceOfOrder = totalPriceOfOrder ;
        newDbOrder.totalPriceOfOrder = totalPriceOfOrder ;
        newDbOrder.user_id = JSON.parse( localStorage.authResult ).user.uid ;

        let f = new FirebaseActiveRecord();
        f.firebase_collection = f.main_collection+"/Orders";
        f.firebase_is_merge = true ;
        f.firebase_document = this.getViewComponent().getStringHelper().makeid(10)+Math.round((new Date()).getTime() / 1000);
        f.firebase_data = newDbOrder;

        let selfObject = this;
        new Promise(function ( resolve ) {
            f.save();
            resolve();
        }).then(function () {
            return f.firebase_document;
        });

        return f.firebase_document;
    }

}