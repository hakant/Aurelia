import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "movies.json";

@inject(HttpClient)
export class MovieData{

  constructor(httpClient){
    this.http = httpClient;
  }

  getById(id){
    return this.getAll()
        .then(content => {
          for (var i = 0; i < content.length; i++) {
            if (content[i].id == id){
              return content[i];
            }
          }
        });
  }

  getAll(){
    return this.http.get(baseUrl)
      .then(response => {
        return response.content;
      });
  }
}
