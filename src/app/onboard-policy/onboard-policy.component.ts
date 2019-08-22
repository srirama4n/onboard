import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-onboard-policy',
  templateUrl: './onboard-policy.component.html',
  styleUrls: ['./onboard-policy.component.css']
})
export class OnboardPolicyComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'Field is required';
  post: any = '';
  lifespans: string[] = ['1 Year', '6 Month', '7 Day'];
  types: string[] = ['Application', 'Standard'];
  environments: string[] = ['Test', 'PROD'];
  plans: string[] = ['Standard', 'Gold'];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'lifespan': [null, [Validators.required]],
      'type': [null, [Validators.required]],
      'environment': [null, [Validators.required]],
      'plan': [null, [Validators.required]],
      'configurationItemId': [null, [Validators.required]],
      'policyOwner': [null, [Validators.required]],
    });
  }

  onSubmit(post) {
    if (this.formGroup.valid) {
      this.post = post;
    }
  }

}
