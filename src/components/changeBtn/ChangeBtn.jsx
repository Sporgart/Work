import styles from './ChangeBtn.module.css';

const ChangeBtn = ({ setModalFlag }) => {
	const openModalWindow = (event) => {
		setModalFlag(true);
		event.stopPropagation();
	};
	return (
		<button className={styles['change-btn']} onClick={openModalWindow}>
			Change profile
		</button>
	);
};

export default ChangeBtn;
