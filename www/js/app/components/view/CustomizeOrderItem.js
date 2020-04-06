let selfObject ;

//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('body').on('click', '.btn-number' , function(e){
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
$('body').on('focusin', '.input-number' ,function(){
    $(this).data('oldValue', $(this).val());
});
$('body').on('change', '.input-number' ,function() {
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
$('body').on('keydown', '.input-number' ,function (e) {
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

function onSizeInput(){
   // selfObject.calculatePriceAndCalories();
}

$('body').on('click', '.radio-label' ,function (e) {
    //$('.sizeInput').parent('.btn-group').find('input[type="radio"]').prop('checked',false);
    //$(this).prop('checked',true);
    setTimeout(function () {
        selfObject.calculatePriceAndCalories();
    },100)
});

// $('body').on('change', '.sizeInput' ,function (e) {
//     //$('.sizeInput').parent('.btn-group').find('input[type="radio"]').prop('checked',false);
//     //$(this).prop('checked',true);
//     selfObject.calculatePriceAndCalories();
// });

$('body').on('change', '.counter', function (e) {
    selfObject.calculatePriceAndCalories();
});

$('body').on('click','.editItem',function () {
     let orderItem = $(this).data('id');
    if( orderItem != null ){
        let currentOrder = (new OrderManager()).currentOrder;
        if( orderItem in currentOrder ){
            let customizedItem = currentOrder[ orderItem ]._actualData;
            localStorage.setItem( 'menu_item' , JSON.stringify( customizedItem ) );
            (new ViewComponent()).showCustomizeMenuItemOption( customizedItem.id , orderItem );
        }
    }
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
        let size = null ;


        if(  $('.sizeInput.coffeeSize').length > 0 ){
            let noneSelected = true;
            $('.sizeInput.coffeeSize').each(function (index , el) {
                if( $(el).parent('label').hasClass('active') ){
                    size = $(el).data('tag');
                }
            });
        }



        let cafeId = $('.menu-item-btn').data('cafe');
        let menuId = $('.menu-item-btn').data('menu');
        let menuItemId = $('.menu-item-btn').data('id');
        let menuItemName = $('.menu-item-btn').data('name');

        orderItem.init( orderItemId , menuItemId , menuItemName ,
            parseFloat($('#customizedPrice').text()) ,
            quanitityInput,
            parseFloat($('#customizedCalories').text()) ,
            customizerData,
            menu_item ,
            cafeId ,
            menuId ,
            size
        );
        orderItem.saveToOrder();
        resolve();

    }).then(function () {

        let menu = JSON.parse( localStorage.getItem('menu') );
        if( menu == null ){
            console.log('menu empty showing homescreen.');
            return this.showHomeScreen();
        }
        return (new ViewComponent()).showCartMenu();

    }).catch(function (reason) {
        consoleAlert(reason);
    });

});

$('body').on('click', '.removeItem', function (e) {
    let orderItemId = $(this).data('id');
    let selfObject = (new CustomizeOrderItem());

    new Promise(function (resolve, reject) {
        selfObject.calculatePriceAndCalories();
        let orderManager = new OrderManager();
        if( (orderItemId === null || orderItemId === "{{itemOrderId}}" || orderItemId === "" ) ){
            orderItemId = null ;
        }
        if( orderItemId !== null ){
            orderManager.removeItem( orderItemId );
        }
        resolve();

    }).then(function () {

        let menu = JSON.parse( localStorage.getItem('menu') );
        if( menu == null ){
            console.log('menu empty showing homescreen.');
            return selfObject.showHomeScreen();
        }
        let isCartExists = (new OrderManager()).isCartExists() ;
        if( orderItemId !== null && isCartExists ){
            return selfObject.showCartMenu();
        }

        return selfObject.showMenuIetmsScreen( menu );

    }).catch(function (reason) {
        consoleAlert(reason);
    });

});


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

    removeCustomizerData( key  ){
        let customizerData = this.customizerData;
        if( key in customizerData ){
            delete customizerData[key];
        }
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
        let selfObject = this;
        let price = 0 ;
        let calories = 0 ;
        if(  $('.sizeInput.coffeeSize').length > 0 ){
            let noneSelected = true;
            $('.sizeInput.coffeeSize').each(function (index , el) {
                if( $(el).parent('label').hasClass('active') ){
                    let selectedSize = $(el) ;
                    price = parseFloat(selectedSize.data('price'));
                    calories = parseFloat(selectedSize.data('calories'));
                    noneSelected = false;

                    let title = $(el).data('title');
                    let parentTitle =  $(el).data('parent-title');
                    selfObject.addCustomizerData( $(el).data('id') , { 'title':title ,  'price':price, 'value':1, 'calories':calories , 'parentTitle':parentTitle  } );

                }
            });
            if( noneSelected ){
                (new EventHandlerComponent()).alert('Alert','','Please select size.');
            }
        }else if( this.elemExist( '#quanitityInput' ) ){
            price = parseFloat($('#quanitityInput').data('price'));
            calories = parseFloat($('#quanitityInput').data('calories'));
        }

        let quantity = 0 ;
        if( this.elemExist( '#quanitityInput' ) ){
            quantity = this.getValue( '#quanitityInput'  );
            price = price*quantity;
            calories = calories*quantity;
        }


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

            let title = $(el).data('title');
            let parentTitle =  $(el).data('parent-title');
            selfObject.addCustomizerData( $(el).data('id') , { 'title':title , 'price':priceItem, 'value':ownQuantity, 'calories':caloriesItem , 'parentTitle':parentTitle } );

        });

        if(  $('.sizeInput.notACoffeeSize').length > 0  ){
            $('.sizeInput.notACoffeeSize').each(function( index , el ){
                //console.log(  el ,$(el).data('title') , $(el).is(':checked') , $(el).parent('label').hasClass('active'));
                if( $(el).parent('label').hasClass('active') ){

                    let priceItem = $(el).data('price');
                    let caloriesItem = $(el).data('calories');
                    let ownQuantity = 1;

                    //console.log( $(el).data('title') ,  $(el).data('price') ,  $(el).data('calories') , ownQuantity );

                    priceItem = ownQuantity*priceItem;
                    caloriesItem = ownQuantity*caloriesItem;

                    priceItem = quantity*priceItem;
                    caloriesItem = quantity*caloriesItem;

                    price += priceItem ;
                    calories += caloriesItem;

                    let id = $(el).data('id');
                    let title = $(el).data('title');
                    let parentTitle =  $(el).data('parent-title');
                    selfObject.addCustomizerData( $(el).data('id') , { 'title':title ,  'price':priceItem, 'value':ownQuantity, 'calories':caloriesItem , 'parentTitle':parentTitle  } );

                }else{

                    selfObject.removeCustomizerData( $(el).data('id') )

                }
            });
        }

        $('#customizedPrice').text(parseFloat(price).toFixed(2));
        $('#customizedCalories').text(parseFloat(calories).toFixed(2));

        //console.log( selfObject.customizerData );

    }

}