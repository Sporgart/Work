import ToolCard from '../toolCard/ToolCard';

import { tools } from '../../helpers/constants/tools';

import styles from './Tools.module.css';

const Tools = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.name}>Tools</span>
			<ul className={styles['tools-list']}>
				{tools.map((tool) => (
					<ToolCard
						key={tool.name}
						name={tool.name}
						tools={tool.tools}
					/>
				))}
			</ul>
		</div>
	);
};

export default Tools;
