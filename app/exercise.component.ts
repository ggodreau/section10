import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import {AlbumsComponent} from './albums.component';
//import {AlbumComponent} from './album.component';
//import {ContactComponent} from './contact.component';
//import {RouterOutlet} from 'angular2/router';
//import {RouterLink} from 'angular2/router';

//@RouteConfig([
//	{
//	path: '/albums', 
//	name: 'Albums',
//	component: AlbumsComponent,
//	useAsDefault: true
//	},
//	{
//	path: '/albums/:id',
//	name: 'Album',
//	component: AlbumComponent
//	},
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
//])
@Component({
    selector: 'exercise',
    templateUrl: '/app/exercise.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ExerciseComponent {
}
