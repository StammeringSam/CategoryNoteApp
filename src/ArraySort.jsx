import './App.css';
import './Responsive.css';

function MapArray(params){

    let data = params.value;
    let dataPrint = null;

    let dataArray = data.split('&#11088');

    let short = [];
    let dataLength = dataArray.length;
    const maxLength = 3;
    if (dataArray.length > maxLength){ dataLength = maxLength;}
    
    for (let i = 0; i < dataLength; i++ ){
        if (dataArray[i] === undefined){
            short[i] = "\n";
        }
        else{
            short[i] = dataArray[i] + "\n";
        }
    }

    
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
    /*
    console.log(data);
    console.log(dataArray);
    */
    
 

    let counter = 0;
    if (params.length === 'Show All'){dataArray = short;}
    //console.log(dataArray);
    //after the loop, the data is returned to be printed to the web page

        dataPrint = dataArray
        //.filter((data))=> data[0] == 'A' || data[0] == 'B'
        //.sort((a,b)=>a.charCodeAt(0) - b.charCodeAt(0))
        .map(data=>{
            return ( 
            //Try to print the entries as an array with the same formatting here
            //Or just try to figure out how to modify each data entry individually
            <div id="SAVED-TEXT-BORDER">
                <p id="COUNTER">{"\t\t" + ++counter + ")."}</p>
                <p id="SAVED-TEXT">{data.split("\n")
                .map(data=>"\t\t" + data).join("\n")}</p>
            </div>
            )
        })
        //console.log(dataPrint);
        return dataPrint;

    }

export default MapArray;