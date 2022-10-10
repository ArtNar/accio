export enum API_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface ApiBaseOptions {
  baseURL?: string;
  headers?: { [key: string]: string };
}

export interface ApiBaseRequestOptions {
  method: API_METHODS;
  url: string;
  data?: any;
  headers?: any;
  returnFullResponse?: boolean;
}

type RequestOptions = {
  returnFullResponse?: boolean;
};

export class ApiBase {
  private _options: ApiBaseOptions;

  constructor(options?: ApiBaseOptions) {
    this._options = options ?? {};
  }

  protected request = async <T>(options: ApiBaseRequestOptions): Promise<T> => {
    const headers = {
      ...this._options.headers,
      ...options.headers,
    };

    const requestConfig = {
      method: options.method,
      headers,
      body: JSON.stringify(options.data),
    };

    let data: any;

    try {
      const response = await fetch(
        `${this._options.baseURL}/${options.url}`,
        requestConfig
      );
      data = await response.json();
    } catch (e: any) {
      console.error(e);
      throw e;
    }

    return data;
  };

  protected async fetch<T>(
    path: string,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>({
      method: API_METHODS.GET,
      url: path,
      ...options,
    });
  }

  protected async create<T>(
    url: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>({
      method: API_METHODS.POST,
      url,
      data,
      ...options,
    });
  }

  protected async update<T>(
    url: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>({
      method: API_METHODS.PUT,
      url,
      data,
      ...options,
    });
  }

  protected async delete<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>({
      method: API_METHODS.DELETE,
      url,
      ...options,
    });
  }
}
