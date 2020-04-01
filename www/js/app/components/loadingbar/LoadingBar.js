class LoadingBar extends BaseComponent{
    constructor() {
        super();
    }

    init() {
        super.init();

        this._title = "Loading" ;
        this._icon = " fas fa-cog " ;
    }

    show(){
       // document.getElementById('loadingBar').classList.add('active');
    }

    hide(){
        setTimeout( function () {
            document.getElementById('loadingBar').classList.remove('active');
        },100);
    }

}