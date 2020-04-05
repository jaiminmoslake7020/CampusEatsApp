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

    replaceChars(  findIn , replaceWith ) {
        let content = this.content.replace( findIn , replaceWith );
        if( content.indexOf( findIn ) !== -1 ){
            return ( new MyString( content ).replaceChars( findIn , replaceWith ) );
        }
        return content;
    };

    //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}