// tslint:disable:no-console

import axios, { AxiosResponse, AxiosError } from 'axios';

export class DataAccess<T> {
    private data: T[];

    constructor(private url: string) {
    }

    public getData(): T[] {
        axios.get(this.url)
            .then(this.handleSuccess)
            .catch(this.handleError);

        return this.data;
    }

    private handleSuccess(response: AxiosResponse<T[]>): void {
        console.log(response.data);
        this.data = response.data;
    }

    private handleError(error: AxiosError): void {
        if (error.response) {
            // The request was made and the server responded
            // with a status code that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }

        console.log(error.config);
    }
}

// export class DataAccess {
//     public data: VendorData[];

//     constructor(private url: string) {
//     }

//     public getData(): VendorData[] {
//         axios.get(this.url)
//             .then(this.handleSuccess)
//             .catch(this.handleError);

//         return this.data;
//     }

//     // private handleSuccess<T>(response: AxiosResponse<T>): void {
//     //   console.log('response.data = ', response.data);
//     // }

//     private handleSuccess(response: AxiosResponse<VendorData[]>): void {
//         console.log(response.data);
//         this.data = response.data;
//     }

//     private handleError(error: AxiosError): void {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//         } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//             // http.ClientRequest in node.js
//             console.log(error.request);
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log('Error', error.message);
//         }

//         console.log(error.config);
//     }
// }