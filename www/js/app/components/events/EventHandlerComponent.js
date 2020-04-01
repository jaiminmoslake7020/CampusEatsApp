window.addEventListener('load',function () {
    consoleAlert( "showLoading" );
    (new EventHandlerComponent()).showLoading();
});

class EventHandlerComponent extends BaseComponent{

    init(){

    }

    homeScreenEvents(){
        let selfObject = this;
        this.stopLoading();

        consoleAlert( "homeScreenEvents" );
        Array.from( document.getElementsByClassName('brand-logos') , ( el ) => {
                el.addEventListener('click' ,  selfObject.goToMenuPage )
        });

    }

    menuScreenEvents(){
        let selfObject = this;
        this.stopLoading();

        // Array.from( document.getElementsByClassName('brand-logos') , ( el ) => {
        //     el.addEventListener('click' ,  selfObject.goToMenuPage )
        // });

    }

    goToMenuPage( event ){
        let brandButton = this;
        let cafe = brandButton.dataset.id;
        (new ViewComponent()).showMenusScreen( cafe );
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

    async showLoading() {


            // const loading = document.createElement('ion-loading');
            // loading.message = 'Please wait...';
            //
            // new Promise( ( resolve , reject ) => {
            //     document.body.appendChild(loading);
            //     resolve();
            // }).then(function () {
            //     loading.present();
            //     selfObject.loadingBar = loading;
            // }).catch(function ( reason ) {
            //     selfObject.globalCatch( reason );
            // });

            let selfObject = this;

            // const loading = document.createElement('ion-loading');
            // loading.message = 'Please wait...';
            // loading.duration = 10000;
            //
            // document.body.appendChild(loading);
            // await loading.present();
            //
            // selfObject.loadingBar = loading;

        consoleAlert( "showLoading 1" );

            const loading = await loadingController.create({
                message: 'Loading',
            });
            self.appearedLoading = true ;
            loading.present().then(function () {
                self.appearedLoading = true;
            });
            self.loadingBar = loading;

        consoleAlert( "showLoading 2" );


    }

    stopLoading() {
        consoleAlert( "stopLoading 1" );

        let interval = setInterval(function () {

           if( self.appearedLoading || window.appearedLoading ){
               Array.from( document.getElementsByTagName('ion-loading') , ( el , i ) => {
                   el.dismiss();
                   self.appearedLoading = false;
                   window.appearedLoading = false;
               });
               consoleAlert( "stopLoading stopped" );
               clearInterval( interval );
           }

       } , 1000 );

    }

}
