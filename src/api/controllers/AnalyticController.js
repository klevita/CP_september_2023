import { DenisHttpClient } from "@/api/clients";

class AnalyticController {
  static API_ENDPOINT = "analytics/";


  static async getTop(id, str) {
    const response = await DenisHttpClient()
      .get(this.API_ENDPOINT + "question/top-positive" + `?file_id=${id}&emotional=${str}&limit=7`)
      .catch((err) => {
        return err;
      });
    return response.data;
  }
  static async getEmotionalDestribution(id, str) {
    const response = await DenisHttpClient()
      .get(this.API_ENDPOINT + `answer/emotional-distribution?file_id=${id}&limit=100&number_order=${str}`)
      .catch((err) => {
        return err;
      });
    return response.data;
  }
}

export { AnalyticController };
