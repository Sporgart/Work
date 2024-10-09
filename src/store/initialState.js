import baseProfileImg from '../assets/img/profileImg/default-avatar.jpg';

const initialState = {
	profileImg: baseProfileImg,
	firstName: 'Karthik',
	lastName: 'Ramaswamy',
	patronymic: 'Subramaniam',
	profession: 'UX/UI Designer',
	languages: [
		{
			id: 1,
			name: 'English',
			indicator: 100,
		},
		{
			id: 2,
			name: 'Malayalam',
			indicator: 100,
		},
		{
			id: 3,
			name: 'Hindi',
			indicator: 100,
		},
	],
};

export default initialState;
