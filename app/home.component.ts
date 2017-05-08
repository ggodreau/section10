import {Component} from 'angular2/core';
//import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router, RouterLink} from 'angular2/router';

import {ArchivesComponent} from './archives.component';

@Component({
    template: `
	<h1>Home</h1>
            <ul>
                <li *ngFor="#archive of archives">
                    <a [routerLink]="['Archives', { id: archive.id, year: archive.year }]">
                            {{ archive.year }}/{{ archive.id }}
                    </a>
                </li>
            </ul>
	`,		
    directives: [RouterLink]
})
export class HomeComponent {
	archives = [
		{
		year: '2016',
		id: '1'
		},
		{
		year: '2016',
		id: '2'
		},
		{
		year: '2017',
		id: '3'
		}]

}
