
import * as React from 'react';
import { DataAccess } from './DataAccess';

export interface VendorData {
  vendorId: number;
  name: string;
  ocgNumber: string;
  managingQsArea: string;
  primaryAddress: string;
}

export class App extends React.Component {
  render() {
    const url: string = 'http://localhost:3001/api/vendors';
    // tslint:disable-next-line:no-console
    console.log(url);
    let dataArray: VendorData[] = this.getData(url);

    return (
      <div>
        <h1>Axios Data Access</h1>
        {this.formatTable(dataArray)}
      </div>
    );
  }

  private getData(url: string): VendorData[] {
    const dataAccess: DataAccess<VendorData> = new DataAccess<VendorData>(url);
    const dataArray: VendorData[] = dataAccess.getData();
    // tslint:disable-next-line:no-console
    console.log('Data = ', dataArray);
    return dataArray;
  }

  private formatTable(dataArray: VendorData[]): JSX.Element {
    if (dataArray === undefined) {
        return (<h2>undefined</h2>);
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Vendor Id</th>
            <th>Name</th>
            <th>OCG Number</th>
            <th>Managing QS Area</th>
            <th>Primary Address</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((data: VendorData, n: number) => {
            return (
              <tr key={`row ${n}`}>
                <td>data.vendorId</td>
                <td>data.name</td>
                <td>data.ocgNumber</td>
                <td>data.managingQsArea</td>
                <td>data.primaryAddress</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// export class App extends React.Component {
//   render() {
//     const url: string = 'http://localhost:3001/api/vendors';
//     // tslint:disable-next-line:no-console
//     console.log(url);
//     let dataArray: VendorData[] = this.getData(url);

//     return (
//       <div>
//         <h1>Axios Data Access</h1>
//         {this.formatTable(dataArray)}
//       </div>
//     );
//   }

//   private getData(url: string): VendorData[] {
//     const dataAccess: DataAccess<VendorData> = new DataAccess<VendorData>(url);
//     const dataArray: VendorData[] = dataAccess.getData();
//     // tslint:disable-next-line:no-console
//     console.log('Data = ', dataArray);
//     return dataArray;
//   }

//   private formatTable(dataArray: VendorData[]): JSX.Element {
//     if (dataArray === undefined) {
//         return (<h2>undefined</h2>);
//     }

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Vendor Id</th>
//             <th>Name</th>
//             <th>OCG Number</th>
//             <th>Managing QS Area</th>
//             <th>Primary Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataArray.map((data: VendorData, n: number) => {
//             return (
//               <tr key={`row ${n}`}>
//                 <td>data.vendorId</td>
//                 <td>data.name</td>
//                 <td>data.ocgNumber</td>
//                 <td>data.managingQsArea</td>
//                 <td>data.primaryAddress</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   }
// }
