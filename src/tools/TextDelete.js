export function StoreDelete(params){

 
    //grab the saved trashData
    let trashRetrieve = localStorage.getItem("trashData");
    
    let deleteLast = false;
    //put dummy data in before splitting
    if (trashRetrieve == null){
        deleteLast = true;
        trashRetrieve = "this should not show on the webpage either"
    }
    
    //turn the local storage into an array
    let trashArray = trashRetrieve.split("&#11088");
    //place the supplied variable at the front of the array
    trashArray.unshift(params);

    //delete the dummy data if there is any
    if (deleteLast === true){
        deleteLast = false;
        trashArray.splice(trashArray.length - 1, 1);
    }

    //turn the array back into a string and update local storage
    let trashString = trashArray.join("&#11088");
    localStorage.setItem("trashData", trashString);




    return(trashArray);

  

}
