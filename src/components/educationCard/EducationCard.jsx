import styles from './EducationCard.module.css';

const EducationCard = ({ date, name, tags, university }) => {
	return (
		<li className={styles['education-card']}>
			<span className={styles['time-frame']}>{date}</span>
			<div className={styles['main-info']}>
				<p className={styles.name}>{name}</p>
				<ul className={styles.tags}>
					{tags.map((el, index) => (
						<li key={index} className={styles.tag}>
							{el}
						</li>
					))}
				</ul>
			</div>
			<p className={styles.university}>{university}</p>
		</li>
	);
};

export default EducationCard;
