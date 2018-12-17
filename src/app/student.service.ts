import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getHeaders() {
    let headers: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'application_id': '5c0121ec34841d67d12c05a1',
      'app_user_token': 'a2b28bb06b58edd514684e2ff481e1a52cb1bf26ce642674a26f4d5af583d50b',
      'portal_type': 'AP',
      'publish_type': 'work',
      'app_user_ip': '115.248.118.242',
      'Content-Type': 'application/json'
    });
    return headers;
  }

  constructor(private http: HttpClient) { }
  getAllData() {
    let headers = this.getHeaders();
    return this.http.get('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s', { headers });
  }
  getByID(id) {
    let headers = this.getHeaders();
    return this.http.get('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s/' + id, { headers });
  }
  postData(student) {
    let headers = this.getHeaders();
    return this.http.post('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s', student, { headers });
  }
  updataData(id, row_version, student) {
    let headers = this.getHeaders().append('row_version', row_version);
    return this.http.put('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s/' + id, student, { headers });
  }
  deleteData(id, row_version) {
    let headers = this.getHeaders().append('row_version', row_version);
    return this.http.delete('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s/' + id, { headers });
  }
  getBv() {
    let headers = this.getHeaders();
    return this.http.get('https://brisol.ajrgroup.in/sr-q/api/views/5c149a3534841d67e22c72ef/static/run', { headers });
  }
}
