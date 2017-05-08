import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArchivesComponent} from './archives.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
)]
    //    { path: '/archives/:year/:id', name: 'Archives', component: 'ArchivesComponent'})]
    
@Component({
    selector: 'exercise',
    template: `
        <ul>
            <li>
                <a [routerLink]="['Home']">click me</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ExerciseComponent {
}
