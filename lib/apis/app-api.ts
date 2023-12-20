import axios, {AxiosInstance} from "axios";

type SubscribeEmailResponse = {
  success: boolean;
  message: string;
};

class AppApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_APP_API_BASE_URL + "/api",
    });
  }

  public async subscribeEmail(email: string): Promise<{
    success: boolean;
    message: string;
    error?: string;
  }> {
    try {
      const response = await this.client.post<SubscribeEmailResponse>(
        "/home/subscribe",
        {email}
      );

      return response.data;
    } catch (error: unknown) {
      return {
        success: false,
        message: "Something went wrong",
        error: (error as Error).message,
      };
    }
  }
}

export default AppApi;
