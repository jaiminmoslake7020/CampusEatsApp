class MyString{

    constructor( content ) {
        this.content = content;
    }

    isNull(){
        return this.content === null ;
    }

    isNotNull(){
        return !this.isNull() ;
    }

    isEmptyString(){
        return this.content === "" ;
    }

    isNotEmptyString(){
        return !this.isEmptyString();
    }

    isEmpty(){
        return this.isNull() || this.isEmptyString() ;
    }

    isNotEmpty(){
        return !this.isEmpty()
    }



}