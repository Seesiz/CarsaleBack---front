import { Injectable } from '@angular/core';
import axios from 'axios';
import { url } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  constructor() {}

  async valider(idAnnonce: String) {
    try {
      const response = await axios.put(
        `${url}/annonces/valider?idAnnonce=` + idAnnonce
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
