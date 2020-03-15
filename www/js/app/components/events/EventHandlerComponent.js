class EventHandlerComponent extends BaseComponent{

    init(){

    }

    homeScreenEvents(){

        document.addEventListener('load',function () {

            document.getElementById('start-menu').addEventListener('click',function () {
                menuController.enable(true, 'first');
                menuController.open('first');
            });

        });

    }

    alert( header , subHeader , message , buttons ){
        const alert = document.createElement('ion-alert');
        if( header != null ){
            alert.header = header;
        }else{
            alert.header = 'Alert';
        }
        if( subHeader != null ){
            alert.subHeader = subHeader;
        }else{
            alert.subHeader = 'Subtitle';
        }
        if( message != null ){
            alert.message = message;
        }else{
            alert.message = 'This is an alert message.';
        }
        if( buttons != null ){
            alert.buttons = buttons;
        }else{
            alert.buttons = ['OK'];
        }
        document.body.appendChild(alert);
        return alert.present();
    }

}
