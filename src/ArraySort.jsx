import './App.css';

function ForTest(params){

    let data = params.value;
    const dataArray = data.split('&#11088');
    //let dataLoop = "";
    //const dataContainer = dataArray;
    //let dataLength = dataArray.length;



    //needs to be fixed
    /*
    let lengthCheck = 0;
    let lengthSign = "Fixed"


    const showArray = (event) => {
        if (lengthCheck % 2 === 0){
            lengthSign = "Dynamic"
            dataLength = 5;
        }
        else{
            lengthSign = "Fixed"
            dataLength = dataArray.length;
        }
    }
    */
    
    //passed string should be converted back into an array
    console.log(data);
    console.log(dataArray);
    
 

    let counter = 0;
    //console.log(dataArray);
    //after the loop, the data is returned to be printed to the web page
    const dataPrint = dataArray.map(data=>{
        return ( 
        //Try to print the entries as an array with the same formatting here
        //Or just try to figure out how to modify each data entry individually
        <div id="SAVED-TEXT-BORDER">
            <p id="COUNTER">{"\t\t" + ++counter + ")."}</p>
            <p id="SAVED-TEXT">{data.split("\n").map(data=>"\t" + data).join("\n")}</p>
        </div>
        )
    })
    //console.log(dataPrint);
    return dataPrint;

}

export default ForTest;