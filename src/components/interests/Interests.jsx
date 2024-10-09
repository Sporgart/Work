import { interests } from '../../helpers/constants/interests';
import InterestsCard from '../interestsCard/InterestsCard';
import styles from './Interests.module.css';

const Interests = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.name}>Interests</span>
			<ul className={styles['interests-list']}>
				{interests.map((name) => (
					<InterestsCard key={name} name={name} />
				))}
			</ul>
		</div>
	);
};

export default Interests;
