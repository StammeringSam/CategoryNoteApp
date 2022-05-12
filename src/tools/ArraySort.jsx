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

    let counter = 0;
    if (params.length === 'View All'){dataArray = short;}
   
    //after the loop, the data is returned to be printed to the web page

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