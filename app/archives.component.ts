import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>Archives</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
	  Hello, archives!
        </div>
    `
})
export class ArchivesComponent implements OnInit {
    isLoading = true;

    constructor(
	private _routeParams: RouteParams
    ){}
    
    ngOnInit(){
        console.log(this._routeParams.get("id"))
            });
    }
}
