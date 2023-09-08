import { MyVoteHttpClient } from "@/api/clients";

class EmotionController {
  static API_ENDPOINT = "emotions/";

  static async getEmotionStats(strings) {
    const postData = {
      texts: strings
    }
    const response = await MyVoteHttpClient()
      .post(this.API_ENDPOINT, postData)
      .catch((err) => {
        return err;
      });
    return response.data;
  }
}

export { EmotionController };
