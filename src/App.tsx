
import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

// interface VendorData {
//   vendorId: number;
//   name: string;
//   ocgNumber: string; 
//   managingQsArea: string;
//   primaryAddress: string;
// }

export class App extends React.Component {
  render() {
    this.getVendorData('http://localhost:3001/api/vendors');

    return (
      <h1>Fetch via TypeScript</h1>
    );
  }

  private getVendorData(serviceUrl: string): void {
    const configuration: AxiosRequestConfig = {
      headers: 'access-control-allow-origin'
    };

    axios.get(serviceUrl, configuration)
      .then(function (response: any): void {
        // tslint:disable-next-line:no-console
        console.log(`Response = ${response}`);
      })
      .catch(function (error: any): void {
        // tslint:disable-next-line:no-console
        console.log(`Error = ${error}`);
      });
  }
}
