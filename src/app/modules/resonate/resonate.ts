import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-resonate',
    imports: [MatSlideToggleModule, MatButtonModule],
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
    yesterday: number = 0;
    days: number[] = [];

    habits: string[] = ['Prayer - Sandhyavandanam', 'Excercise - Swimming'];

    ngOnInit(): void {
        this.currentMonth = this.months[new Date().getMonth()];
        const noOfDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        this.days = Array.from({ length: noOfDays }, (_, i) => i + 1);

        this.yesterday = new Date().getDate() - 1;
    }
}
