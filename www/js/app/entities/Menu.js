class Menu extends BaseEntity{
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    constructor( id , data ) {
        super( id , data  );

        this._name = data['name'];
        this._id = data['id'];
        this._type = data['type'];
        this._url = data['url'];

    }

}