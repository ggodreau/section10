import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {

    constructor(private _router: Router){
    }

    onSubmit(form){
        console.log(form);
	this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous){
	console.log("next", next);
	console.log("previous", previous);
	// If we had a control group, we'd use this:
	// if (this.form.dirty)
	confirm("Form is dirty, are you sure?");
    }
}
