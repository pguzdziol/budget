import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Revenue } from "./revenue";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RevenueService {
  private revenuesUrl: string;

  constructor(private http: HttpClient) {
    this.revenuesUrl = "http://localhost:8080/revenues";
  }

  public findAll(): Observable<Revenue[]> {
    return this.http.get<Revenue[]>(this.revenuesUrl);
  }

  public save(revenue: Revenue) {
    return this.http.post<Revenue>(this.revenuesUrl, revenue);
  }
}
