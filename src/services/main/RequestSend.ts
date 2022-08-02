// import {generateApiError, generateNetworkError} from 'CustomError/genrateError';

// export async function requestSend(url, body, header, method) {
//   let option = {method: method, headers: header, body: body};
//   if (method == 'GET') {
//     delete option.body;
//   }
//   try {
//     console.log(url,option);
//     const response = await fetch(url, option);
//     if (response.status == 401) {
//       generateApiError(
//         option,
//         response,
//         url,
//         'authorization',
//         response,
//         response,
//       );
//     }
//     if (response.status == 402) {
//       generateApiError(
//         option,
//         response,
//         url,
//         'authorization',
//         response,
//         response,
//       );
//     }
//     if (response.status == 204) {
//       return {data: null, message: 'success', success: false};
//     }
//     const responseJson = await responseToJSon(option, response, url);
//     if (responseJson) {
//       if (response.status == 200) {
//         if (responseJson.status == 404) {
//           generateApiError(
//             option,
//             {status: 404},
//             url,
//             null,
//             responseJson.error
//               ? responseJson.error.message
//                 ? responseJson.error.message
//                 : responseJson.error
//               : responseJson.message
//               ? responseJson.message
//               : responseJson,
//             responseJson,
//           );
//           return;
//         }
//         if (responseJson) {
//           if (responseJson.data && responseJson.success) {
//             return {
//               message: 'success',
//               success: true,
//               data: responseJson.data ? responseJson.data : responseJson,
//             };
//           }
//           if (!responseJson.success && responseJson.message)
//             return {
//               message: responseJson.message,
//               success: false,
//               data: null,
//             };
//         }
//         return {
//           message: 'success',
//           success: true,
//           data: responseJson,
//         };
//       }
//       if (response.status == 400) {
//         generateApiError(
//           option,
//           response,
//           url,
//           null,
//           responseJson.error
//             ? responseJson.error.message
//               ? responseJson.error.message
//               : responseJson.error
//             : responseJson.message
//             ? responseJson.message
//             : responseJson,
//           responseJson,
//         );
//       }
//       if (response.status == 500) {
//         generateApiError(
//           option,
//           response,
//           url,
//           null,
//           responseJson.error
//             ? responseJson.error.message
//               ? responseJson.error.message
//               : responseJson.error
//             : responseJson.message
//             ? esponseJson.message
//             : responseJson,
//           responseJson,
//         );
//         return;
//       }
//       if (response.status == 403) {
//         generateApiError(
//           option,
//           response,
//           url,
//           null,
//           responseJson.error
//             ? responseJson.error.message
//               ? responseJson.error.message
//               : responseJson.error
//             : responseJson.message
//             ? esponseJson.message
//             : responseJson,
//           responseJson,
//         );
//       }
//       if (response.status == 404) {
//         generateApiError(
//           option,
//           response,
//           url,
//           null,
//           responseJson.error
//             ? responseJson.error.message
//               ? responseJson.error.message
//               : responseJson.error
//             : responseJson.message
//             ? esponseJson.message
//             : responseJson,
//           responseJson,
//         );
//       }
//     }
//     generateApiError(option, response, url, null, 'error not found', null);
//   } catch (e) {
//     //console.log(e);
//     if (e.message === 'Network request failed') {
//       generateNetworkError(url, option, e);
//     }
//     if (!e.mainType) {
//       generateApiError(option, null, url, null, e.message ? e.message : e, e);
//     }
//     throw e;
//   }
// }
// export async function responseToJSon(option, response, url) {
//   try {
//     return await response.json();
//   } catch (e) {
//     generateApiError(option, response, url, null, 'json error', e);
//     throw e;
//   }
// }

export enum REQUEST_METHOD {
  get = 1,
  post = 2,
  put = 3,
  patch = 4,
  delete = 5,
}

interface RequestHeader {
  Authorization?: String
}

export const requestSend = (method: REQUEST_METHOD, url: string, body: object, header: any) => {}
