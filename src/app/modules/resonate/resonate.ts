import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resonate',
    imports: [],
    templateUrl: './resonate.html',
    styleUrl: './resonate.css'
})
export default class Resonate implements OnInit {
    months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    currentMonth: string = '';
    currentDay: number = 0;
    days: number[] = [];

    ngOnInit(): void {
        this.currentMonth = this.months[new Date().getMonth()];
        const noOfDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        this.days = Array.from({ length: noOfDays }, (_, i) => i + 1);

        this.currentDay = new Date().getDate();
    }
}
