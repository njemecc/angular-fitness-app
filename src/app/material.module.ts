import { compileNgModule } from "@angular/compiler";
import { NgModule } from "@angular/core";

import {MatButtonModule} from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
@NgModule({
    imports:[MatButtonModule,MatIconModule,MatInputModule],
    exports:[MatButtonModule,MatIconModule,MatInputModule]
})

export class MaterialModule { }