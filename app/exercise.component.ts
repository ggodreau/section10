import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArchivesComponent} from './archives.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/archives', name: 'Archives', component: ArchivesComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] },
    //    { path: '/', name: 'Exercise', component: ExerciseComponent }
)]
    //    { path: '/archives/:year/:id', name: 'Archives', component: 'ArchivesComponent'})]
    
@Component({
    selector: 'exercise',
    template: `
        <ul>
            <li>
                <a [routerLink]="['Home']">home</a>
            </li>
            <li>
                <a [routerLink]="['Archives']">archives</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ExerciseComponent {
}
