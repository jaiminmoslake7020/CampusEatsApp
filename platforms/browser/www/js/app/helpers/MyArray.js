class MyArray {

    constructor( contentArray ) {
        this.contentArray = contentArray;
    }

    isEmpty(){
       return this.contentArray.length === 0 ;
    }

    isNotEmpty(){
        return !this.isEmpty();
    }

}