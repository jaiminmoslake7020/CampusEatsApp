class NavBar extends BaseComponent{
    constructor() {
        super();
    }

    init() {
        super.init();

    }

    show(){
        document.querySelector('.app-nav').classList.add('active-menu');
    }

    hide(){
        document.querySelector('.app-nav').classList.remove('active-menu');
    }

    toggle(){
        document.querySelector('.app-nav').classList.toggle('active-menu');
    }

}