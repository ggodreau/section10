import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArchivesComponent} from './archives.component';
//import {AlbumComponent} from './album.component';
//import {ContactComponent} from './contact.component';
//import {RouterOutlet} from 'angular2/router';
//import {RouterLink} from 'angular2/router';

@RouteConfig([
//	{
//	path: '/albums', 
//	name: 'Albums',
//	component: AlbumsComponent,
//	useAsDefault: true
//	},
	{
	path: '/archives/:year/:id',
	name: 'Archives',
	component: ArchivesComponent
	}
//	{
//	path: '/contact',
//	name: 'Contact',
//	component: ContactComponent
//	},
//	{
//	path: '/*other',
//	name: 'Other',
//	redirectTo: ['Albums']
//	}
])
@Component({
    selector: 'exercise',
    templateUrl: '/app/exercise.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ExerciseComponent {
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
