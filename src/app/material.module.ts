import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
//import { from } from 'rxjs';
//import { from } from 'rxjs';

// import {
//     MatToolbarModule,
//     MatButtonModule,
//     MatInputModule,
//     MatIconModule
// } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]
})
export class MaterialModule { }