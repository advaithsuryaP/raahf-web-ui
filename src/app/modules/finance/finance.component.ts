import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Transaction } from '../../core/models/transanction.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-finance.component',
    imports: [MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './finance.component.html',
    styleUrl: './finance.component.css'
})
export default class FinanceComponent {
    displayedColumns: string[] = ['Date', 'Activity', 'Category', 'Account', 'Amount'];

    dataSource: Transaction[] = [
        {
            date: '2025-01-01',
            activity: 'Salary',
            category: 'Income',
            account: 'Bank',
            amount: 1000
        }
    ];
}
