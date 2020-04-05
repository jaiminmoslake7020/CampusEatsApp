class OrderItem extends BaseManager{

    get orderItemId() {
        return this._orderItemId;
    }

    set orderItemId(value) {
        this._orderItemId = value;
    }

    get menuItemId() {
        return this._menuItemId;
    }

    set menuItemId(value) {
        this._menuItemId = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get calories() {
        return this._calories;
    }

    set calories(value) {
        this._calories = value;
    }

    get customizerOptions() {
        return this._customizerOptions;
    }

    set customizerOptions(value) {
        this._customizerOptions = value;
    }

    get actualData() {
        return this._actualData;
    }

    set actualData(value) {
        this._actualData = value;
    }

    constructor( props ) {
        super( props );
    }

    init( orderItemId = null , menuItemId , name , price , quantity , calories , customizerOptions , actualData  ) {
        if( orderItemId === null ){
            orderItemId = this.getViewComponent().getStringHelper().makeid(5);
        }
        this._orderItemId = orderItemId;
        this._menuItemId = menuItemId;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._calories = calories;
        this._customizerOptions = customizerOptions;
        this._actualData = actualData;

    }

    saveToOrder(){
        (new OrderManager()).addIetm( this.orderItemId , this );
    }

}