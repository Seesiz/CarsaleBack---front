import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor() { }
  
  async valider(idAnnonce:String) {
    try {
      const response = await axios.put("http://localhost:8080/annonces/valider?idAnnonce="+idAnnonce);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
