import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from './../shared/cart.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.page.html',
  styleUrls: ['./edit-cart.page.scss'],
})
export class EditCartPage implements OnInit {
  updateCartForm: FormGroup;
  id: any;
  cartService: any;
  updateCourseForm: any;

  constructor(
    private courseService: CartService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.cartService.getCart(this.id).valueChanges().subscribe(res => {
      this.updateCartForm.setValue(res);
    });
  }

    ngOnInit() {

    this.updateCartForm = this.fb.group({
      item: [''],
      price: ['']
    });
    console.log(this.updateCartForm.value);
  }

    updateForm() {
    this.cartService.updateCourse(this.id, this.updateCartForm.value).then(() => {
        this.router.navigate(['/tab1']);
      })
      .catch((error: any) => console.log(error));
  }

  }


