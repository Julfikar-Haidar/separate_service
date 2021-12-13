import { createWebHistory, createRouter } from 'vue-router';
import UserList from '../components/UserList';
import Create from '../components/Create';
import EditUser from '../components/EditUser';




const routes = [
	{
		path: '/',
		name: 'UserList',
		component: UserList
	},
	{
		path: '/create-user',
		name: 'Create',
		component: Create
	},
	{
		path: '/edit-user/:id',
		name: 'EditUser',
		component: EditUser
	},

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


export default router;