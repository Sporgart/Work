import styles from './ExperienceCard.module.css';

const ExperienceCard = ({ date, name, tags, workIncludes }) => {
	return (
		<li className={styles['experience-card']}>
			<span className={styles['time-frame']}>{date}</span>
			<div className={styles['main-info']}>
				<div className={styles['experience-name']}>
					<p className={styles.name}>{name}</p>
					<ul className={styles.tags}>
						{tags.map((el, index) => (
							<li key={index} className={styles.tag}>
								{el}
							</li>
						))}
					</ul>
				</div>
				<ul className={styles['experience-description']}>
					{workIncludes.map((el, index) => (
						<li key={index} className={styles.description}>
							{el}
						</li>
					))}
				</ul>
			</div>
		</li>
	);
};

export default ExperienceCard;
