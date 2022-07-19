import { IUsers } from './IUsers';
import { API_PATH } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<IUsers[]>(`${API_PATH}clients`).toPromise();
  }

  getById(id: number) {
    return this.httpClient.get<IUsers>(`${API_PATH}clients/${id}`).toPromise();
  }

  addUser(client: IUsers) {
    return this.httpClient
      .post<IUsers>(`${API_PATH}clients`, client)
      .toPromise();
  }

  update(client: IUsers) {
    return this.httpClient
      .put<IUsers>(`${API_PATH}clients/${client.id}`, client)
      .toPromise();
  }

  delete(clientId: number) {
    return this.httpClient
      .delete<void>(`${API_PATH}clients/${clientId}`)
      .toPromise();
  }
}
