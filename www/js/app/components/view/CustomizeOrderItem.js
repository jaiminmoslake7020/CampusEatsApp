let selfObject = null ;
class CustomizeOrderItem extends ViewComponent{

    get customizerData() {
        if( typeof this._customizerData === "undefined"){
            this._customizerData = {};
        }
        return  this._customizerData ;
    }

    set customizerData(value) {
        this._customizerData = value;
    }

    addCustomizerData( key , value ){
        let customizerData = this.customizerData;
        customizerData[key] = value;
        this.customizerData = customizerData;
    }

    constructor() {
        super();
    }

    init() {
        this._customizerData = {};
        this.addEvents();
    }

    addEvents(){
        selfObject = this ;
        selfObject.calculatePriceAndCalories();
    }

    getValue( elem ){
       let elemValue = $(elem).val();
       return parseInt(elemValue);
    }

    elemExist( elem ){
        return $(elem).length > 0;
    }

    calculatePriceAndCalories(){
        let price = 0 ;
        let calories = 0 ;
        if(  $('.sizeInput').length > 0 ){
            let selectedSize = $('.sizeInput:checked');
            if( selectedSize.length === 0 ){
                (new EventHandlerComponent()).alert('Alert','','Please select size.');
            }
            price = parseFloat(selectedSize.data('price'));
            calories = parseFloat(selectedSize.data('calories'));
        }else if( this.elemExist( '#quanitityInput' ) ){
            price = parseFloat(selectedSize.data('price'));
            calories = parseFloat(selectedSize.data('calories'));
        }

        let quantity = 0 ;
        if( this.elemExist( '#quanitityInput' ) ){
            quantity = this.getValue( '#quanitityInput'  );
            price = price*quantity;
            calories = calories*quantity;
        }

        let selfObject = this;
        $('.counter:not([name="Quantity"])').each(function (index , el) {
            let priceItem = $(el).data('price');
            let caloriesItem = $(el).data('calories');
            let ownQuantity = $(el).val();
            priceItem = ownQuantity*priceItem;
            caloriesItem = ownQuantity*caloriesItem;

            priceItem = quantity*priceItem;
            caloriesItem = quantity*caloriesItem;

            price += priceItem ;
            calories += caloriesItem;


            selfObject.addCustomizerData( $(el).data('id') , {'price':priceItem, 'value':ownQuantity, 'calories':caloriesItem} );

        });

        $('#customizedPrice').text(parseFloat(price).toFixed(2));
        $('#customizedCalories').text(parseFloat(calories).toFixed(2));

    }

}

//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();
    var fieldName = $(this).attr('data-field');
    var type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {

            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    var minValue =  parseInt($(this).attr('min'));
    var maxValue =  parseInt($(this).attr('max'));
    var valueCurrent = parseInt($(this).val());
    var name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});


$('body').on('change', '.sizeInput' ,function (e) {
    $('.sizeInput').prop('checked',false);
    $(this).prop('checked',true);
    selfObject.calculatePriceAndCalories();
});

$('body').on('change', '.counter', function (e) {
    selfObject.calculatePriceAndCalories();
});

$('body').on('click', '.addItem', function (e) {
    selfObject.calculatePriceAndCalories();
    let orderItem = new OrderItem();

    let orderItemId = $(this).data('id');
    if( ( orderItemId === undefined ||  orderItemId === null || orderItemId === "{{itemOrderId}}" || orderItemId === "" ) ){
        orderItemId = null ;
    }

    new Promise(function (resolve, reject) {

        let menu_item = JSON.parse( localStorage.getItem('menu_item') );
        let quanitityInput = parseInt(selfObject.getValue( '#quanitityInput' ));
        let customizerData = selfObject.customizerData;
        orderItem.init( orderItemId , menu_item.id , menu_item.name ,
            parseFloat($('#customizedPrice').text()) ,
            quanitityInput,
            parseFloat($('#customizedCalories').text()) ,
            customizerData,
            menu_item
        );
        orderItem.saveToOrder();
        resolve();

    }).then(function () {

        let menu = JSON.parse( localStorage.getItem('menu') );
        if( menu == null ){
            console.log('menu empty showing homescreen.');
            this.showHomeScreen();
        }
        (new ViewComponent()).showMenuIetmsScreen( menu.id );

    }).catch(function (reason) {
        consoleAlert(reason);
    });

});

$('body').on('click', '.removeItem', function (e) {
    let orderItemId = $(this).data('id');

    new Promise(function (resolve, reject) {
        selfObject.calculatePriceAndCalories();
        if( (orderItemId === null || orderItemId === "{{itemOrderId}}" || orderItemId === "" ) ){
            orderItemId = null ;
        }
        if( orderItemId !== null ){
            (new OrderManager()).removeItem( orderItemId );
        }
        resolve();

    }).then(function () {

        let menu = JSON.parse( localStorage.getItem('menu') );
        if( menu == null ){
            console.log('menu empty showing homescreen.');
            this.showHomeScreen();
        }
        (new ViewComponent()).showMenuIetmsScreen( menu.id );

    }).catch(function (reason) {
        consoleAlert(reason);
    });

});
