import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeNgModule } from '../../modules/prime-ng.module';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-master',
  imports: [PrimeNgModule, ReactiveFormsModule, FormsModule, RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  formToAdd : FormGroup = new FormGroup({
    nameAr: new FormControl('', [Validators.required]),
    nameEn: new FormControl('', [Validators.required]),
}) 
items: any = [
    {
        id:crypto.randomUUID(),
        nameAr : 'التميز التشغيلي',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'التميز التشغيلي',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'التميز التشغيلي',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'التميز التشغيلي',
        nameEn : 'test name',
    },
    {
        id:crypto.randomUUID(),
        nameAr : 'خدمة المتعاملين',
        nameEn : 'test name',
    },
]
customers!: any[];

representatives!: any[];


loading: boolean = true;

activityValues: number[] = [0, 100];

constructor() {}

addRecord(){
    if( this.formToAdd.valid){
        const {nameAr,nameEn,classification} = this.formToAdd.value
        this.items.push(
            {
                id: crypto.randomUUID(),
                nameAr,
                nameEn,
                classification,
            },
        )
        this.formToAdd.reset()
    }else{
        this.formToAdd.markAllAsTouched()
        this.formToAdd.markAllAsDirty()
    }
}
onRowDelete(item:any,index:number){
    this.items = this.items.filter((ele:any)=> ele.id != item.id)
}

ngOnInit() { }


clonedItems: { [s: string]: any } = {};
onRowEditInit(item: any) {
    this.clonedItems[item.id as string] = { ...item };
}

onRowEditSave(item: any) {
    if (item.price > 0) {
        delete this.clonedItems[item.id as string]; 
    }
}

onRowEditCancel(product: any, index: number) {
    this.items[index] = this.clonedItems[product.id as string];
    delete this.clonedItems[product.id as string];
}
}
