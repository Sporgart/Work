import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfile } from '../../store/actionCreators/updateProfile';

import InputProfileImg from '../inputProfileImg/InputProfileImg';

import wastebasket from '../../assets/img/profileImg/wastebasket.png';
import saveIco from '../../assets/img/profileImg/save.png';

import styles from './ModalWindow.module.css';

const ModalWindow = ({ setModalFlag }) => {
	const dispatch = useDispatch();

	const allProfile = useSelector((state) => state);
	const [profileImg, setProfileImg] = useState(allProfile.profileImg);
	const [firstName, setFirstName] = useState(allProfile.firstName);
	const [lastName, setLastName] = useState(allProfile.lastName);
	const [patronymic, setPatronymic] = useState(allProfile.patronymic);
	const [profession, setProfession] = useState(allProfile.profession);
	const [languages, setLanguages] = useState(allProfile.languages);
	const [flafNewLang, setFlafNewLang] = useState(false);
	const [newLang, setNewLang] = useState({});

	const closeModalWindow = () => {
		setModalFlag(false);
	};

	const addNewLanguage = () => {
		setFlafNewLang((cv) => !cv);
		setNewLang({ id: -1, name: 'change name', indicator: 100 });
	};

	const handleWrapperClick = (event) => {
		event.stopPropagation();
	};

	const changeFunc = () => {
		dispatch(
			updateProfile({
				...allProfile,
				profileImg: profileImg,
				languages: languages,
				firstName: firstName,
				lastName: lastName,
				patronymic: patronymic,
				profession: profession,
			})
		);
		closeModalWindow();
		setNewLang({
			id: -1,
			name: 'change name',
			indicator: 100,
		});
	};

	const createLanguage = (language) => {
		if (languages.some((lang) => lang.name === language.name)) return; // Добавить какой нибудь визуал по ошибку
		setLanguages((cv) => [
			...cv,
			{
				...language,
				id: languages[languages.length - 1].id + 1,
			},
		]);
		addNewLanguage();
	};

	const deleteLanguage = (language) => {
		setLanguages((cv) => cv.filter((lang) => lang.id !== language.id));
	};

	const updateLanguages = (language) => {
		console.log();
		setLanguages((cv) =>
			cv.map((lang) => (lang.id === language.id ? language : lang))
		);
	};

	useEffect(() => {
		document.addEventListener('click', closeModalWindow);
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('click', closeModalWindow);
		};
	}, []);

	return (
		<div className={styles.shadow}>
			<div className={styles.wrapper} onClick={handleWrapperClick}>
				<p className={styles['modal-name']}>Change your profile</p>
				<div className={styles['main-info']}>
					<InputProfileImg
						profileImg={profileImg}
						setProfileImg={setProfileImg}
					/>
					<div className={styles.tempFIO}>
						<span>Main info</span>
						<div className={styles.row}>
							<span>your firstName:</span>
							<input
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className={styles.row}>
							<span>your lastName:</span>
							<input
								type="text"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div className={styles.row}>
							<span>your patronymic:</span>
							<input
								type="text"
								value={patronymic}
								onChange={(e) => setPatronymic(e.target.value)}
							/>
						</div>
						<div className={styles.row}>
							<span>your profession:</span>
							<input
								type="text"
								value={profession}
								onChange={(e) => setProfession(e.target.value)}
							/>
						</div>
						<span>Languages</span>
						<div className={styles['lang-wrapper']}>
							{languages.map((language) => (
								<div key={language.id} className={styles.row}>
									<input
										type="text"
										value={language.name}
										onChange={(e) =>
											updateLanguages({
												...language,
												name: e.target.value,
											})
										}
									></input>
									<input
										type="number"
										min="0"
										max="100"
										value={language.indicator || ''}
										onChange={(e) => {
											let value = +e.target.value;

											if (value < 0) value = 0;
											if (value > 100) value = 100;
											updateLanguages({
												...language,
												indicator: value,
											});
										}}
									/>
									<img
										src={wastebasket}
										alt="wastebasket"
										onClick={() => deleteLanguage(language)}
									/>
								</div>
							))}
						</div>
						{flafNewLang && (
							<div className={styles.row}>
								<input
									type="text"
									value={newLang.name}
									onChange={(e) =>
										setNewLang((cv) => ({
											...cv,
											name: e.target.value,
										}))
									}
								></input>
								<input
									type="number"
									min="0"
									max="100"
									value={newLang.indicator || ''}
									onChange={(e) => {
										let value = +e.target.value;

										if (value < 0) value = 0;
										if (value > 100) value = 100;
										setNewLang((cv) => ({
											...cv,
											indicator: value,
										}));
									}}
								/>
								<img
									src={saveIco}
									alt="save"
									onClick={() => createLanguage(newLang)}
								/>
							</div>
						)}
						<button
							className={styles['add-languages']}
							onClick={addNewLanguage}
						>
							{flafNewLang ? 'do not add' : 'Add language'}
						</button>
					</div>
					<div className={styles['manage-btn']}>
						<button className={styles.save} onClick={changeFunc}>
							Save
						</button>
						<button
							className={styles.cancel}
							onClick={closeModalWindow}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalWindow;
