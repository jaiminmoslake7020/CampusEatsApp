//*****************************************************************
//*****************************************************************
//  Project - Web Programmin & HTML-CSS 1
//*****************************************************************
//*****************************************************************


//*****************************************************************
//*****************************************************************
//  Root Variables
//*****************************************************************
//*****************************************************************

const und = "undefined" ;
const str = "string" ;
const num = "number" ;
const obj = "object" ;
const isNullCheck = "isNull" ;




//*****************************************************************
//*****************************************************************
//  Function Declarations
//*****************************************************************
let parseToArray = ( stringContent ) => {
    if( stringContent === null ){
        return [] ;
    }else if ( stringContent === "" ){
        return [];
    }else if ( typeof stringContent === "string" && stringContent.indexOf(",") === -1 ){
        return [ stringContent ];
    }else if ( typeof stringContent === "string" && stringContent.indexOf(",") !== -1 ){
        return stringContent.split(",");
    }else{
        return [];
    }
};

let show = (el) => {
    let dataDisplay = el.getAttribute('data-display');
    if( !isNullOrEmpty( dataDisplay ) ){
        el.style.display = dataDisplay ;
    }else{
        el.style.display = "initial" ;
    }
    removeClass(el,'dnone');
};

let hide = ( el ) => {
    el.style.display = "none" ;
    addClass(el,'dnone');
};

let removeClass = ( el, className ) => {
    if( hasClass( el , className ) ){
        let classesString = el.getAttribute('class');
        classesString = replaceChars( classesString , className , '' );
        el.setAttribute( 'class' , classesString );
    }
};

let addClass = ( el , className ) =>{
    if( !hasClass( el , className ) ){
        let classesString = el.getAttribute('class');
        classesString += className;
        el.setAttribute( 'class' , classesString );
    }
};

let hasClass = ( el , className ) =>{
    let classesString = el.getAttribute('class');
    return hasCharacter( classesString , className );
};

let hasCharacter = ( stringContent , character ) => {
    if( isNotNullOrEmpty(stringContent) ){
        let indexOfstringContent = stringContent.indexOf( character );
        return indexOfstringContent !== -1 ? true : false ;
    }else{
        return  false;
    }
};

let replaceChars = ( stringContent , findIn , replaceWith ) => {
    return stringContent.replace( findIn , replaceWith );
};

let getType = ( content ) => {
    return typeof content;
};

let isUndefined = ( content ) =>{
    return getType( content ) === "undefined" ;
};

let isString = ( content ) => {
    return getType( content ) === "string" ;
};

let isNumber = ( content ) => {
    return getType( content ) === "number" ;
};

let isObject = ( content ) => {
    return getType( content ) === "object" ;
};

let isNull = ( content ) => {
    return !isUndefined( content ) && content === null ;
};

let isEmpty = ( content ) => {
    return isString( content ) && content === "" ;
};

let isNullOrEmpty = ( content ) => {
    return isNull( content ) || isEmpty( content ) ;
};

let isNotNullOrEmpty = ( content ) => {
    return !isNullOrEmpty( content );
};

let uniqueArray = ( array ) => {
    let newArray = [] ;
    for( key in array ){
        let value = array[key].trim();
        if( newArray.indexOf( value ) === -1 ){
            if( isNotNullOrEmpty( value ) ){
                newArray[key] = value;
            }
        }
    }
    return newArray;
};

let generateId = ( content ) => {
    return replaceChars( content , " " , "_" )
};

let getWhoPaidForThis = ( content ) => {
    content = content.trim();
    let contentId = generateId( content );
    let whoPaidTemplateValue = whoPaidTemplate.innerHTML ;
    whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND}" , content );
    whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND}" , content );
    whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND_ID}" , contentId  );
    whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND_ID}" , contentId  );
    return whoPaidTemplateValue;
};

let getWhoWasInvolved = ( content ) => {
    content = content.trim();
    let contentId = generateId( content );
    let forWhomTemplateValue = forWhomTemplate.innerHTML ;
    forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND}" , content );
    forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND}" , content );
    forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND_ID}" , contentId  );
    forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND_ID}" , contentId  );
    return forWhomTemplateValue;
};


let generateBox = ( title , money ) => {
    title = title.trim();
    let titleId = generateId( title )+"-"+(Date.now());
    let expenseTemplateValue = expenseTemplate.innerHTML ;
    expenseTemplateValue = replaceChars( expenseTemplateValue , "{TITLE}" , title );
    expenseTemplateValue = replaceChars( expenseTemplateValue , "{MONEY}" , money.toFixed(2) );
    expenseTemplateValue = replaceChars( expenseTemplateValue , "{BOX_ID}" , titleId  );
    expenseTemplateValue = replaceChars( expenseTemplateValue , "{BOX_ID}" , titleId  );
    expenseTemplateValue = replaceChars( expenseTemplateValue , "{BOX_ID}" , titleId  );
    dashboardViewChild.innerHTML += expenseTemplateValue ;
    return "box-body-"+titleId;
};

let addWhohasToGive = ( titleId,  personInvolved , share , payeePerson ) => {

    let hasToGiveValue = hasToGive.innerHTML ;
    hasToGiveValue = replaceChars( hasToGiveValue , "{personInvolved}" , personInvolved );
    hasToGiveValue = replaceChars( hasToGiveValue , "{share}" , share.toFixed(2) );
    hasToGiveValue = replaceChars( hasToGiveValue , "{payeePerson}" , payeePerson  );

    document.getElementById( titleId ).innerHTML += hasToGiveValue ;

};

let addWhohasToTake = ( titleId,  personsInvolvedString , money , payeePerson ) => {

    let hasToTakeValue = hasToTake.innerHTML ;
    hasToTakeValue = replaceChars( hasToTakeValue , "{payeePerson}" , payeePerson );
    hasToTakeValue = replaceChars( hasToTakeValue , "{share}" , money.toFixed(2) );
    hasToTakeValue = replaceChars( hasToTakeValue , "{personsInvolvedString}" , personsInvolvedString  );

    document.getElementById( titleId ).innerHTML += hasToTakeValue ;

};



//*****************************************************************
//*****************************************************************
//  Root scope variable Declartions

expense_people.addEventListener('keyup', (e) => {
    let expensePeopleVal = expense_people.value;
    expensePeopleVal = parseToArray(expensePeopleVal.trim());
    expensePeopleVal = uniqueArray( expensePeopleVal );
    if( expensePeopleVal.length === 0 ){
        expense_people_info.innerHTML = 'Please add names of people involved in the purchase.' ;
        hide( peoplesInvolved );
    }else{
        whoPaid.innerHTML = "" ;
        forWhom.innerHTML = "" ;
        for( key in expensePeopleVal ){
            whoPaid.innerHTML += getWhoPaidForThis( expensePeopleVal[key] );
        }
        for( key in expensePeopleVal ){
            forWhom.innerHTML += getWhoWasInvolved( expensePeopleVal[key] );
        }
        show( peoplesInvolved );
    }
});


splitSubmitBtn.addEventListener('click',(e)=>{
    let title = expense_money_spent_on_which.value;
    let process = true ;
    if( isNullOrEmpty( title ) ){
        expense_money_spent_on_which_info.innerHTML =  `Please add something where you have spent the money.` ;
        show( expense_money_spent_on_which_info );
        process = false ;
    }else{
        hide( expense_money_spent_on_which_info );
    }

    let money = parseFloat(expense_money_spent.value);
    if( isNullOrEmpty( money ) && !isNumber( money )  ){
        expense_money_spent_info.innerHTML =  `Please add how much you have spent. It must be a number.` ;
        show( expense_money_spent_info );
        process = false ;
    }else{
        hide( expense_money_spent_info );
    }

    let peoples = expense_people.value;
    if( isNullOrEmpty( money )){
        expense_people_info.innerHTML =  `Please add who were involved in this transaction.` ;
        show( expense_people_info );
        process = false ;
    }else{
        hide( expense_people_info );
    }

    if( process ){
        if( isNotNullOrEmpty( document.querySelector('input[name="expense[who-paid]"]') ) ){
            let processInside = true;

            let whoPaid = document.querySelector('input[name="expense[who-paid]"]:checked');
            if( isNullOrEmpty( whoPaid ) ){
                whoPaidContainer_info.innerHTML = `Please select the person who paid ` ;
                show( whoPaidContainer_info );
                processInside = false;
            }else{
                hide( whoPaidContainer_info );
            }

            let whoRInvolved = document.querySelectorAll('input[name="expense[for-whom]"]:checked')  ;
            if( isNullOrEmpty( whoRInvolved ) ){
                forWhomContainer_info.innerHTML = `Please select the person who paid ` ;
                show( forWhomContainer_info );
                processInside = false;
            }else{
                hide( forWhomContainer_info );
            }

            if( processInside ){

                let boxId = generateBox( title , money );
                let personsInvolved = "" ;
                let share = money/whoRInvolved.length ;
                let shareTake = 0 ;
                for( who of whoRInvolved ){
                    if(  whoPaid.value  !==  who.value){
                        addWhohasToGive( boxId , who.value , share , whoPaid.value );
                        personsInvolved += who.value+"," ;
                        shareTake += parseFloat( share );
                    }
                }
                addWhohasToTake( boxId , personsInvolved , shareTake , whoPaid.value );

            }
        }
    }

});


let typeCheck = ( content , typeCheckAgainst ) => {

    let typeofContent = typeof content ;
    if( typeofContent === typeCheckAgainst){
        //  undefined
        //  string
        //  number
        //  object
        return true;
    }else if( typeofContent !== und && content === null && typeCheckAgainst === isNullCheck ){
        return true;
    }else if( typeofContent === isNull ){

    }

};


