import { useSelector } from 'react-redux';

import styles from './CustomizableBlock.module.css';

const CustomizableBlock = () => {
	const allProfile = useSelector((state) => state);

	return (
		<div className={styles.wrapper}>
			<img
				src={allProfile.profileImg}
				alt="avatar"
				className={styles['profile-img']}
			/>
			<div className={styles['personal-info']}>
				<p className={styles.hello}>Hello 👋🏻 I’m</p>
				<p className={styles.name}>
					{allProfile.firstName} {allProfile.patronymic?.[0]}
					{''}
					{allProfile.lastName[0]}
					<br />
					<span>{allProfile.profession}</span>
				</p>
			</div>
			<div className={styles.languages}>
				<p className={styles['block-name']}>Languages</p>
				<ul className={styles['lang-list']}>
					{allProfile.languages?.map((language) => (
						<li key={language.name} className={styles.language}>
							<span>{language.name}</span>
							<div
								className={styles.indicator}
								style={{
									width: `calc(${language.indicator}%*60/100)`,
								}}
							></div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CustomizableBlock;
