class Cafe extends BaseEntity{

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get logo() {
        return this._logo;
    }

    set logo(value) {
        this._logo = value;
    }

    get merchant_id() {
        return this._merchant_id;
    }

    set merchant_id(value) {
        this._merchant_id = value;
    }

    get cafe_vendor_id() {
        return this._cafe_vendor_id;
    }

    set cafe_vendor_id(value) {
        this._cafe_vendor_id = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get cafe_primary_colour() {
        return this._cafe_primary_colour;
    }

    set cafe_primary_colour(value) {
        this._cafe_primary_colour = value;
    }

    get cafe_secondary_colour() {
        return this._cafe_secondary_colour;
    }

    set cafe_secondary_colour(value) {
        this._cafe_secondary_colour = value;
    }

    constructor( id , data ) {
        super( id , data  );

        this._name = data['name'];
        this._logo = data['logo'];
        this._merchant_id = data['merchant_id'];
        this._cafe_vendor_id = data['cafe_vendor_id'];
        this._address = data['address'];
        this._cafe_primary_colour = data['cafe_primary_colour'];
        this._cafe_secondary_colour = data['cafe_secondary_colour'];

    }

}