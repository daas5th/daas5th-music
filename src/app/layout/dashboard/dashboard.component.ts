import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MusicService} from "../../service/MusicService";
import {HealthCheckService} from "../../service/HealthCheckService";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }


    public employHealth : string = 'success';
    public departmentHealth : string = 'success';
    public organizationHealth : string = 'success';



    constructor(private musicService:MusicService, private healthCheckService:HealthCheckService) {
        this.places = [
            {
                imgSrc: 'https://cdnimg.melon.co.kr/svc/user_images/plylst/340/64/415053911_org.png?tm=20190419035049/melon/resize/x262/quality/100/optimize',
                place: 'Cozy 5 Stars Apartment',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'https://cdnimg.melon.co.kr/svc/user_images/plylst/2018/03/284/56/440983974_org.jpg?tm=20190423070740/melon/resize/x262/quality/100/optimize',
                place: 'Office Studio',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'https://cdnimg.melon.co.kr/cm/photo/images/000/800/64/067/80064067_org.jpg/melon/quality/80/optimize',
                place: 'Beautiful Castle',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }

    ngOnInit() {

      //각 서비스 health check.
      this.musicService.getTest().subscribe((data) => console.info(data));

      let _this = this;
      this.healthCheckService.getEmployeeHealth().subscribe(
        function (result) {
          _this.employHealth = 'success';
        },
        function (result) {
          _this.employHealth = 'danger';
        }
      );

      this.healthCheckService.getDepartmentHealth().subscribe(
        function (result) {
          _this.departmentHealth = 'success';
        },
        function (result) {
          _this.departmentHealth = 'danger';
        }
      );

      this.healthCheckService.getOrganizationHealth().subscribe(
        function (result) {
          _this.organizationHealth = 'success';
        },
        function (result) {
          _this.organizationHealth = 'danger';
        }
      );

      //console.info(this.employHealth, this.departmentHealth, this.organizationHealth);

    };

}
