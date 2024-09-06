import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class SandboxImagesService {

  async getSandboxImage() {
    const response = await api.get('api/images')
    console.log('GOT IMAGES 🖼️', response.data);

    const newImage = new ToDo(response.data)
    AppState.image = newImage

  }


}

export const sandboxImageService = new SandboxImagesService()