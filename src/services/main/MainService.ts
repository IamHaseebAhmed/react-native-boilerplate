import { Config } from '@managers';

var BASE_URL = Config.BASE_URL;

enum CONTENT_TYPE {
  UrlEncoded = 1,
  JsonData = 2,
  TextPlain = 3
}

class MainService {

  constructor(accessToken: string, refreshToken: string) {
    accessToken = accessToken;
    refreshToken = refreshToken;
  }

  async getUrlEncodedApi(data: any) {
    let api = Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    return api;
  }

  async get(api: string, data: object, isLoggedIn: boolean, contentType: CONTENT_TYPE) {

    let url: string, encodedData: string, reqHeader: any;

    if (contentType == 1) {
      encodedData = await this.getUrlEncodedApi(data);
      url = BASE_URL += '?' + encodedData
      reqHeader['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (contentType == 2) {
      encodedData = JSON.stringify(data);
      reqHeader['Content-Type'] = 'application/json';
    }

    if (isLoggedIn) {
      reqHeader['Bearer ']
    }
  }
}

class Service {
  async get(
    api: string,
    param: any = null,
    isLogin: boolean = false,
    contentType: number = 0,
    dataFormType: any = 0,
    baseUrlType: number = 0,
    header: any = {},
  ) {
    try {
      let url, setCofig, encodedData;
      setCofig = await this.setCofig(
        api,
        header,
        baseUrlType,
        contentType,
        isLogin,
      );
      url = setCofig.url;
      if (param) {
        encodedData = await this.toFormUrlEncoded(param);
        url = setCofig.url += '?' + encodedData;
      }
      let response = await requestSend(
        setCofig.url,
        null,
        setCofig.header,
        'GET',
      );
      return response;
    } catch (e) {
      console.log(e);
      if ((e && e.status == 401) || (e && e.status == 402)) {
        let newResponse = await this.refreshToken(
          'get',
          api,
          param,
          isLogin,
          contentType,
          dataFormType,
          baseUrlType,
          header,
        );
        if (newResponse) {
          return newResponse;
        }
        throw e;
      }
      throw e;
    }
  }

  async post(
    api: string,
    param: any = null,
    isLogin: boolean = false,
    contentType: number = 0,
    dataFormType: any = 0,
    baseUrlType: number = 0,
    header: any = {},
  ) {
    try {
      let body, setCofig;
      setCofig = await this.setCofig(
        api,
        header,
        baseUrlType,
        contentType,
        isLogin,
      );
      if (
        (dataFormType == 0 && contentType == 0) ||
        (!dataFormType && !contentType)
      ) {
        body = await this.toFormUrlEncoded(param);
      } else if (dataFormType == 1) {
        body = await this.serializeJSON(param);
      } else if (dataFormType == 2) {
        body = JSON.stringify(param);
      }
      let response = await requestSend(
        setCofig.url,
        body,
        setCofig.header,
        'POST',
      );
      return response;
    } catch (e) {
      console.log("ERROR :: ", e);
      if ((e && e.status == 401) || (e && e.status == 402)) {
        let newResponse = await this.refreshToken(
          'post',
          api,
          param,
          isLogin,
          contentType,
          dataFormType,
          baseUrlType,
          header,
        );
        if (newResponse) {
          return newResponse;
        }
        throw e;
      }
      throw e;
    }
  }
  async patch(
    api: string,
    param: any = null,
    isLogin: boolean = false,
    contentType: number = 0,
    dataFormType: any = 0,
    baseUrlType: number = 0,
    header: any = {},
  ) {
    try {
      let body, setCofig;
      setCofig = await this.setCofig(
        api,
        header,
        baseUrlType,
        contentType,
        isLogin,
      );
      if (
        (dataFormType == 0 && contentType == 0) ||
        (!dataFormType && !contentType)
      ) {
        body = await this.toFormUrlEncoded(param);
      } else if (dataFormType == 1) {
        body = await this.serializeJSON(param);
      } else if (dataFormType == 2) {
        body = JSON.stringify(param);
      }
      let response = await requestSend(
        setCofig.url,
        body,
        setCofig.header,
        'PATCH',
      );
      return response;
    } catch (e) {
      if ((e && e.status == 401) || (e && e.status == 402)) {
        let newResponse = await this.refreshToken(
          'patch',
          api,
          param,
          isLogin,
          contentType,
          dataFormType,
          baseUrlType,
          header,
        );
        if (newResponse) {
          return newResponse;
        }
        throw e;
      }
      throw e;
    }
  }
  async delete(
    api: string,
    param: any = null,
    isLogin: boolean = false,
    contentType: number = 0,
    dataFormType: any = 0,
    baseUrlType: number = 0,
    header: any = {},
  ) {
    try {
      let body, setCofig;
      setCofig = await this.setCofig(
        api,
        header,
        baseUrlType,
        contentType,
        isLogin,
      );
      if (
        (dataFormType == 0 && contentType == 0) ||
        (!dataFormType && !contentType)
      ) {
        body = await this.toFormUrlEncoded(param);
      } else if (dataFormType == 1) {
        body = await this.serializeJSON(param);
      } else if (dataFormType == 2) {
        body = JSON.stringify(param);
      }
      let response = await requestSend(
        setCofig.url,
        body,
        setCofig.header,
        'DELETE',
      );
      return response;
    } catch (e) {
      if ((e && e.status == 401) || (e && e.status == 402)) {
        let newResponse = await this.refreshToken(
          'delete',
          api,
          param,
          isLogin,
          contentType,
          dataFormType,
          baseUrlType,
          header,
        );
        if (newResponse) {
          return newResponse;
        }
        throw e;
      }
      throw e;
    }
  }
  async put(
    api: string,
    param: any = null,
    isLogin: boolean = false,
    contentType: number = 0,
    dataFormType: any = 0,
    baseUrlType: number = 0,
    header: any = {},
  ) {
    try {
      let body, setCofig;
      setCofig = await this.setCofig(
        api,
        header,
        baseUrlType,
        contentType,
        isLogin,
      );
      if (
        (dataFormType == 0 && contentType == 0) ||
        (!dataFormType && !contentType)
      ) {
        body = await this.toFormUrlEncoded(param);
      } else if (dataFormType == 1) {
        body = await this.serializeJSON(param);
      } else if (dataFormType == 2) {
        body = JSON.stringify(param);
      }
      // console.log(body);
      let response = await requestSend(
        setCofig.url,
        body,
        setCofig.header,
        'PUT',
      );
      return response;
    } catch (e) {
      if ((e && e.status == 401) || (e && e.status == 402)) {
        let newResponse = await this.refreshToken(
          'put',
          api,
          param,
          isLogin,
          contentType,
          dataFormType,
          baseUrlType,
          header,
        );
        if (newResponse) {
          return newResponse;
        }
        throw e;
      }
      throw e;
    }
  }
  async refreshToken(
    methond,
    api,
    param,
    isLogin,
    contentType,
    dataFormType,
    baseUrlType,
    header,
  ) {
    try {
      let refreshToken = await UserInfoStorage.getRefreshToken();
      if (refreshToken) {
        let url = 'api/v1/user/refresh-access-token';
        let para = { refresh_token: refreshToken };
        let response = await this.post(url, para, false, 1, 2);
        // console.log('refreshToken>>>>>>>>>>>>>>>>>>>>>>>>', response);

        if (response?.data?.result?.access_token) {
          let object = await UserInfoStorage.setRefreshTokenData(
            response.data.result,
          );
          let newResponse = null;
          if (methond == 'get') {
            newResponse = await this.get(
              api,
              param,
              isLogin,
              contentType,
              dataFormType,
              baseUrlType,
              header,
            );
          }
          if (methond == 'post') {
            newResponse = await this.post(
              api,
              param,
              isLogin,
              contentType,
              dataFormType,
              baseUrlType,
              header,
            );
          }
          if (methond == 'patch') {
            newResponse = await this.patch(
              api,
              param,
              isLogin,
              contentType,
              dataFormType,
              baseUrlType,
              header,
            );
          }
          if (methond == 'delete') {
            newResponse = await this.delete(
              api,
              param,
              isLogin,
              contentType,
              dataFormType,
              baseUrlType,
              header,
            );
          }
          if (methond == 'put') {
            newResponse = await this.put(
              api,
              param,
              isLogin,
              contentType,
              dataFormType,
              baseUrlType,
              header,
            );
          }
          return newResponse;
        }
      }
      return false;
    } catch (e) {
      console.log('refreshToken>>>>>>>>>>>>>>>>>>>>>>>>', e);

      console.log(e);
      return false;
    }
  }
  // sets configs e.g header, contentType
  async setCofig(api, header, baseUrlType, contentType, isLogin) {
    let url = BaseUrl.api + api,
      token,
      Content_Type = 'application/x-www-form-urlencoded';
    if (contentType == 1) {
      Content_Type = 'application/json';
    }
    if (contentType == 2) {
      Content_Type = 'multipart/form-data';
    }
    var requestHeader = {
      Accept: 'application/json',
      'Content-Type': Content_Type,
    };
    if (header) {
      requestHeader = Object.assign(requestHeader, header);
    }
    if (baseUrlType === 1) {
      url = BaseUrl.notification + api;
    }
    if (baseUrlType === 2) {
      url = api;
    }

    if (isLogin) {
      let response = await UserInfoStorage.getToken();
      if (response) {
        requestHeader = Object.assign(requestHeader, {
          Authorization: 'Bearer ' + response,
        });
      } else {
        generateApiError(
          requestHeader,
          { status: 402 },
          url,
          null,
          'authorization',
          null,
        );
        return;
      }
    }
    return {
      header: requestHeader,
      url: url,
    };
  }
  async toFormUrlEncoded(param) {
    let promise = new Promise(async (resolve, reject) => {
      const formBody = Object.keys(param)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(param[key]),
        )
        .join('&');
      return resolve(formBody);
    });
    return promise;
  }
  async serializeJSON(data) {
    return Object.keys(data)
      .map(function (keyName) {
        return (
          encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
        );
      })
      .join('&');
  }
}

module.exports = { Service: new Service() };