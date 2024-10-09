import styles from './InterestsCard.module.css';

const InterestsCard = ({ name }) => {
	return <li className={styles['interests-card']}>{name}</li>;
};

export default InterestsCard;
