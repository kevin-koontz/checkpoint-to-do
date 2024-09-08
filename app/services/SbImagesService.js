import { AppState } from "../AppState.js";
import { SbImage } from "../models/SbImage.js";
import { api } from "./AxiosService.js";

class SbImagesService {

  async getSbImages() {
    const response = await api.get('api/images')
    console.log('GOT IMAGES 🖼️', response.data);

    const newImage = new SbImage(response.data)
    AppState.image = newImage

  }


}

export const sbImagesService = new SbImagesService()