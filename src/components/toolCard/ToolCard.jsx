import styles from './ToolCard.module.css';

const ToolCard = ({ name, tools }) => {
	return (
		<li className={styles['tool-card']}>
			<span className={styles['tool-name']}>{name}</span>
			<ul className={styles['tool-list']}>
				{tools.map((tool) => (
					<li key={tool.name}>
						<img src={tool.link} alt={tool.name} />
					</li>
				))}
			</ul>
		</li>
	);
};

export default ToolCard;
