export function StoreDelete(params){

    console.log(params);
    //state does not work
    let trashRetrieve = localStorage.getItem("trashData");
    
    
    console.log(trashRetrieve);

    //put dummy data in before splitting
    let trashArray = trashRetrieve.split("&#11088");
    trashArray.unshift(params);

    let trashString = trashArray.join("&#11088");
    localStorage.setItem("trashData", trashString);

    console.log(trashArray);
    console.log(trashString);



    return(trashArray);

  

}
/*
function PrintDelete(){

}
*/