import './App.css';
import './Responsive.css';

function MapArray(params){

    let data = params.value;
    let dataPrint = null;

    //turn the supplied string into an array
    let dataArray = data.split('&#11088');
    
    let short = [];
    let dataLength = dataArray.length;
    const maxLength = 3;

    //cap the length of the array by default
    if (dataArray.length > maxLength){ dataLength = maxLength;}
    
    //replace undefined elements in an array with a paragraph
        //else update the array with the data given to the file
    for (let i = 0; i < dataLength; i++ ){
        if (dataArray[i] === undefined){
            short[i] = "\n";
        }
        else{
            short[i] = dataArray[i] + "\n";
        }
    }

    let counter = 0;
    //when specified by the user or by default, only display the first three elements
    if (params.length === 'View All'){dataArray = short;}
   

    //display the index number above each element
    //format each element with tabs as it is mapped through
    //after mapping through dataArray, the data is returned to be printed to the web page

        dataPrint = dataArray
       
        .map(data=>{
            return ( 
           
            <div id="SAVED-TEXT-BORDER">
                <p id="COUNTER">{"\t\t" + ++counter + ")."}</p>
                <p id="SAVED-TEXT">{data.split("\n")
                .map(data=>"\t\t" + data).join("\n")}</p>
            </div>
            )
        })
        
        return dataPrint;

    }

export default MapArray;