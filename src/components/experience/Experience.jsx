import ExperienceCard from '../experienceCard/ExperienceCard';

import { experience } from '../../helpers/constants/experience';

import styles from './Experience.module.css';

const Experience = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.name}>Experience</span>
			<ul className={styles['experience-list']}>
				{experience.reverse().map((exp) => (
					<ExperienceCard
						key={exp.name}
						date={exp.date}
						name={exp.name}
						tags={exp.tags}
						workIncludes={exp.workIncludes}
					/>
				))}
			</ul>
		</div>
	);
};

export default Experience;
