import { FileWithPath } from "react-dropzone";
import { Record, FileRecords } from '../utils/types';
const fs = window.require('fs');
const csvParser = window.require('csv-parser')

// export const readFiles = (files) => {

//     const fileReader =  new FileReader()
    
//     //iterate through file names for each
//     //readFile()
// }

export const readCSVFile = (fileObject: FileWithPath): Record[] => {

    const filePath = fileObject.path;
    const results: any[] = [];

    console.log('readCSVFile: '+ filePath)

    fs.createReadStream(filePath, 'utf8')
    .on('error' , () => {
        console.error('error')
    })
    .pipe(csvParser({separator: '\t'} ))
    .on('data', (row: any) => {

        delete row.id;
        let record: Record = row;
        console.log(record)
        
        results.push(row)
    })
    .on('end',  () => {
    })

    return results

}

//for each file
export const processRawData = (spikeData : Object, records: Object[]) => {

    let spikeDNAIn = 0;
    let spikeDNAOut = 0;

    //count up all records for given spike 

    
     
}