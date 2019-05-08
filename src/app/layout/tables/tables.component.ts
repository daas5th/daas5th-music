import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
    displayedColumns = ['id', 'imgSrc', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

/** Constants used to fill up our data base. */
const COLORS = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
];
const NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth'
];

const IMG = [
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/188/10276188_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/823/10276823_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/284/10277284_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/225/10277225_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/314/10277314_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/257/10277257_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/917/10276917_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/285/10277285_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/099/10277099_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/824/10276824_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/635/10276635_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/757/10276757_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/809/10276809_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/825/10276825_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/058/10277058_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/823/10276823_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/856/10276856_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/76/490/10276490_500.jpg/melon/resize/120/quality/80/optimize',
  'https://cdnimg.melon.co.kr/cm/album/images/102/77/223/10277223_500.jpg/melon/resize/120/quality/80/optimize'
];

export interface UserData {
    id: string;
    imgSrc: string;
    name: string;
    progress: string;
    color: string;
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';

    return {
        id: id.toString(),
        imgSrc: IMG[Math.round(Math.random() * (COLORS.length - 1))],
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
