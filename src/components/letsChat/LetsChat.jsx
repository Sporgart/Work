import styles from './LetsChat.module.css';

const LetsChat = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.name}>
				Let´s chat! I´m ready to work on excinting projects
			</p>
			<a
				href="mailto:srkarthik.designscape@gmail.com"
				className={styles['my-contact']}
			>
				srkarthik.designscape@gmail.com
			</a>
		</div>
	);
};

export default LetsChat;
