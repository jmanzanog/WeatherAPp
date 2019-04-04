import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "../../services/store.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private storeService: StoreService) {}
  ngOnInit() {}
  addLocation() {
    console.log("addLocation()"); // jump to Search location screen
    this.router.navigateByUrl("/search");
  }
}
