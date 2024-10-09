import { education } from '../../helpers/constants/education';
import EducationCard from '../educationCard/EducationCard';

import styles from './Education.module.css';

const Education = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.name}>Education</span>
			<ul className={styles['education-list']}>
				{education.reverse().map((ed) => (
					<EducationCard
						key={ed.name}
						date={ed.date}
						name={ed.name}
						tags={ed.tags}
						university={ed.university}
					/>
				))}
			</ul>
		</div>
	);
};

export default Education;
