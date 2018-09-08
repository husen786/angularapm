import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
function emailMAtcher(c:AbstractControl){
  let emailcontrol=c.get('email');
  let confrimcontrol=c.get('confirmEmail');
  if(emailcontrol.pristine||confrimcontrol.pristine){
    return null;
  }
  if(emailcontrol.value===confrimcontrol.value){
    return null;
  }
  return {'match':true};
}
@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customerForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.maxLength(20)]],
      emailGroup:this.fb.group({
        email:['',[Validators.required]],
        confirmEmail:['',[Validators.required]]

      },{validator:emailMAtcher}),
      phone:'',
      notification:'email',
      sendCatalog:true,
      addresses:this.fb.group({
        street1:'',
        street2:'',
        city:'',
        state:'',
        zip:''

      })
      

    });
    this.customerForm.get('notification').valueChanges.subscribe(
      value=>this.setNotification(value)
    );
  }
  populateData():void{
   this.customerForm.patchValue({
     firstName:'Rahat',
    lastName:'Husen',

  })
}
  setNotification(notify:string):void{
    const phonecontrol=this.customerForm.get('phone');
    if(notify=='text'){
      phonecontrol.setValidators(Validators.required);
    }
    else{
      phonecontrol.clearValidators();
    }
    phonecontrol.updateValueAndValidity();
  }
  save() {
  // TODO: Use EventEmitter with form value
  console.warn(this.customerForm.value);
}


}
