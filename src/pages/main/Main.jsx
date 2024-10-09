import { useState } from 'react';

import CustomizableBlock from '../../components/customizableBlock/CustomizableBlock';
import ModalWindow from '../../components/modalWindow/ModalWindow';
import ChangeBtn from '../../components/changeBtn/ChangeBtn';
import Experience from '../../components/experience/experience';
import Tools from '../../components/tools/Tools';
import Education from '../../components/education/Education';
import Interests from '../../components/interests/Interests';
import LetsChat from '../../components/letsChat/LetsChat';

import styles from './Main.module.css';

const Main = () => {
	const [modalFlag, setModalFlag] = useState(false);

	const modalWindow = modalFlag ? (
		<ModalWindow setModalFlag={setModalFlag} />
	) : null;

	return (
		<div className={styles.container}>
			{modalWindow}
			<CustomizableBlock />
			<ChangeBtn setModalFlag={setModalFlag} />
			<div className={styles['block']}>
				<Experience />
				<Tools />
			</div>
			<div className={styles['block']}>
				<Education />
				<div className={styles['second-block']}>
					<Interests />
					<LetsChat />
				</div>
			</div>
		</div>
	);
};

export default Main;
