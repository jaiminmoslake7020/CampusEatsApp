class RequestComponent extends BaseComponent{

    constructor() {
        super();
    }

    init(){

    }

    getUrl(){
        return window.location.href;
    }

    getUrlParams(){
        let url = new URL( this.getUrl() );
        return url.searchParams;
    }

    hasModeSelect(){
       return  this.getUrlParams().get('mode') === "select"
    }
}