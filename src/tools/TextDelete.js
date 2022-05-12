export function StoreDelete(params){

 
    
    let trashRetrieve = localStorage.getItem("trashData");
    console.log(trashRetrieve);
    
    let deleteLast = false;
    //put dummy data in before splitting
    if (trashRetrieve == null){
        deleteLast = true;
        trashRetrieve = "this should not show on the webpage either"
    }
    
    let trashArray = trashRetrieve.split("&#11088");
    trashArray.unshift(params);

    if (deleteLast === true){
        deleteLast = false;
        trashArray.splice(trashArray.length - 1, 1);
    }

    let trashString = trashArray.join("&#11088");
    localStorage.setItem("trashData", trashString);




    return(trashArray);

  

}
