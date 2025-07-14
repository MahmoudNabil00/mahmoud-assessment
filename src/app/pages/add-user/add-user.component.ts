import { Component, inject, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../modules/prime-ng.module';
import { Router } from '@angular/router';
import { ImgsComponent } from "../../shared/imgs/imgs.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToggleSwitchChangeEvent } from 'primeng/toggleswitch';

@Component({
  selector: 'mahmoud-add-user',
  imports: [PrimeNgModule, ImgsComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit{
  router = inject(Router)
  previewUrl = 'assets/imgs/profile-lg.png';
  fb = inject(FormBuilder)
  form !: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      firstName:['',Validators.required],
      middleName:['',[]],
      lastName:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      RF_ID:[false],
      role:['',Validators.required],
      department:['',Validators.required],
    })
  }
  navigateToDashboard(isSuccess:number = 0){
    if(isSuccess==0){
      this.router.navigate(['dashboard'])
    }
    if(isSuccess && this.form.valid){
      this.router.navigate(['dashboard'])
    }else{
      this.form.markAllAsDirty()
      this.form.markAllAsTouched()
    }
  }

  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  RefIdChange(event:ToggleSwitchChangeEvent){
    if(event.checked){
      this.form.addControl('rfi',new FormControl(''))
    }else{
      this.form.removeControl('rfi')
    }
  }
}
