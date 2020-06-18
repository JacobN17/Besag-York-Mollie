import * as React from 'react';
import Csvtablesetup from "./csvtablesetup";
// import CSVReader from 'react-csv-reader';
// import Loadfile from './loadfile';
// import Csvtablesetup from './csvtablesetup';
// import {Component} from 'react';
// import {Dragndrop} from './dragndrop'
// import {Upload} from "./upload";
//
//




type State = {
    showTable: boolean
    tabledata: {}
}

type Props = {}

class tableProps extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showTable: false,
            tabledata:{}
        }
    }

    render() {
        return (
            <div className="display-table">{this.state.showTable &&
            <Csvtablesetup tabledata={this.state.tabledata} />}</div>
        );
    }
}
export default tableProps;



// class Displaytable extends Component {
//
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             loading: false,
//             showTable: false,
//             error: false,
//             tabledata:{}
//         };
//     }
//
//     // :::::::: CSV parser ::::::::::
//     papaparseOptions = {
//         header: true,
//         dynamicTyping: true,
//         skipEmptyLines: true,
//         transformHeader: (header: string) => header.toLowerCase().replace(/\W/g, "_"),
//     };
//     //::::::::::::::::::::::::::::::::
//
//     //::::::::: for putting all data in CSV to MySQL :::::::::::
//     handleForce = (data: any, fileInfo: any) => {
//         this.setState({ loading: true });
//
//         let d = JSON.stringify({ ...data });
//
//         fetch('http://localhost:8080/upload', {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: d,
//         })
//             .then((response) => {
//                 this.setState({ loading: false });
//
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error("Something went wrong");
//                 }
//             })
//             .then((responseJson) => {
//                 console.log(responseJson);
//             })
//             .catch((error) => {
//                 this.setState({ error: true });
//                 console.log(error, this.state);
//             });
//     };
//     //:::::::::::::::: End of POST call to save data ::::::::::::::
//
//
//
//     //::::::::::: GET all data form MySQL table ::::::::::
//
//     loadClickHandler = () => {
//         //
//         this.setState({loading:true});
//         fetch('http://localhost:8080/upload')
//             .then((response) => {
//                 if (response.ok) {
//                     this.setState({loading:false});
//                     return response.json();
//                 } else {
//                     throw new Error("Something went wrong");
//                 }
//             })
//             .then((data) => {
//                 this.setState({tabledata:data});
//                 this.setState({showTable:true});
//                 //console.log(data);
//             })
//             .catch((err) => {
//                 this.setState({error:true});
//                 console.log(err);
//
//             });
//     };
//
// //:::::::::::
//
//     deleteClickHandler = ()=>{
//         this.setState({ loading: true });
//         this.setState({ loaded: false });
//
//
//         fetch('http://localhost:8080/upload', {
//             method: "DELETE"
//         })
//             .then((response) => {
//                 this.setState({ loading: false });
//                 this.setState({ loaded: true });
//
//                 if (response.ok) {
//                     this.loadClickHandler();
//                     return response.json();
//                 } else {
//                     throw new Error("Something went wrong");
//                 }
//             })
//             .then((responseJson) => {
//                 console.log(responseJson);
//             })
//             .catch((error) => {
//                 this.setState({ error: true });
//                 console.log(error, this.state);
//             });
//
//     }
//
// //:::::::::::
//
//
//
//     //::::::::::::::::::::::::::::::::::::::::::::::::::
//
//
//
//     render() {
//         if (this.state.loading) return <Loadfile />;
//         // if (this.state.error) return <CsvError />;
//         return (
//             <div className="wrapper">
//                 <div className="section1">
//                     <div className="container">
//                         <CSVReader
//                             cssClass="react-csv-input"
//                             label="Select CSV  :"
//                             onFileLoaded={this.handleForce.bind(this)}
//                             parserOptions={this.papaparseOptions}
//                         />
//                         <p>
//                             <i className="fas fa-exclamation-triangle" style={{color:"  #e6b800"}} />
//                             CSV file of customers data should be like :
//                             <a href="https://github.com/krishankantray/temp/blob/master/test.csv" target="_blank">Sample file</a>
//                             <br/>
//                             <i className="fas fa-exclamation-triangle" style={{color: " #e6b800"}}/>
//                             "id" column is Primary Key in the MySQL table ( i.e.  duplicates ID not allowed )
//                         </p>
//
//                     </div>
//                 </div>
//
//                 <div className="section2">
//
//                     <button className="button" onClick={this.loadClickHandler}>
//                         <span>Load Table </span>
//                     </button>
//                     {
//                         (this.state.showTable)&&
//                         <button className="button" style={{backgroundColor:"red"}} onClick={this.deleteClickHandler}>
//                             <span>Wipe table </span>
//                         </button>
//                     }
//                 </div>
//                 <div className="section3">{this.state.showTable && <Csvtablesetup tabledata={this.state.tabledata} />}</div>
//             </div>
//         );
//     }
// }
//
// export default Displaytable;