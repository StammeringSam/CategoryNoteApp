export function SaveTrash(){

    //get local storage info and split the data if not null
    let phone = localStorage.getItem('phoneData')? localStorage.getItem('phoneData').split('&#11088') : [];
    let password = localStorage.getItem('passwordData')? localStorage.getItem('passwordData').split('&#11088') : [];
    let url = localStorage.getItem('urlData')? localStorage.getItem('urlData').split('&#11088') : [];
    let address = localStorage.getItem('addressData')? localStorage.getItem('addressData').split('&#11088') : [];
    let recipe = localStorage.getItem('recipeData')? localStorage.getItem('recipeData').split('&#11088') : [];
    let misc = localStorage.getItem('miscData')? localStorage.getItem('miscData').split('&#11088') : [];

    //get local storage info from trash and split the data if not null
    let phoneSave = localStorage.getItem('phoneTrash')? localStorage.getItem('phoneTrash').split('&#11088') : [];
    let passwordSave = localStorage.getItem('passwordTrash')? localStorage.getItem('passwordTrash').split('&#11088') : [];
    let urlSave = localStorage.getItem('urlTrash')? localStorage.getItem('urlTrash').split('&#11088') : [];
    let addressSave = localStorage.getItem('addressTrash')? localStorage.getItem('addressTrash').split('&#11088') : [];
    let recipeSave = localStorage.getItem('recipeTrash')? localStorage.getItem('recipeTrash').split('&#11088') : [];
    let miscSave = localStorage.getItem('miscTrash')? localStorage.getItem('miscTrash').split('&#11088') : [];

    //create arrays of each local storage array
        //first for elements on main page
        //second for elements in trash
    let original = [phone, url, password, address, recipe, misc];
    let saves = [phoneSave, urlSave, passwordSave, addressSave, recipeSave, miscSave];

    let loopNum = 0;
    let storeName;

    //loop through each element of the first array
    original.forEach((category) => {

        //reverse the array in saves array that matches the index of the current original array index
        let reverse = saves[loopNum].reverse();

        //add the map trashed elements to the beginning of the current array
        reverse.map((val) => (category.unshift(val)));

        //turn the current array into a string...
        category = category.join('&#11088');
      
        //...determine what local storage to save it to...
        switch (loopNum){
            case 0:
                storeName = 'phoneData'
                break
            case 1:
                storeName = 'urlData'
                break
            case 2:
                storeName = 'passwordData'
                break
            case 3:
                storeName = 'addressData'
                break
            case 4:
                storeName = 'recipeData'
                break
            case 5:
                storeName = 'miscData'
                break
            default:
                storeName = 'trashData'
                break
        }

        //...then update the local storage
        localStorage.setItem(storeName, category);

        loopNum++;

    });
    

}