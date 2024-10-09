import { useRef } from 'react';
import downArrow from '../../assets/img/profileImg/downArrow.png';

import styles from './InputProfileImg.module.css';

const InputProfileImg = ({ profileImg, setProfileImg }) => {
	const refImg = useRef(null);

	const drowing = (eve) => {
		const choosedFile = eve.target.files[0];
		if (choosedFile) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				refImg.current.src = reader.result;
				setProfileImg(reader.result);
			});
			reader.readAsDataURL(choosedFile);
		}
	};

	return (
		<div className={styles['input__user-img']}>
			<img
				ref={refImg}
				src={profileImg}
				className={styles.input__picture}
				alt=""
			/>
			<input
				type="file"
				accept="image/*, .png, .jpg, .web"
				className={styles.input__file}
				id="file"
				onChange={drowing}
			/>
			<label htmlFor="file" className={styles.input__uploadbtn}>
				<img
					src={downArrow}
					width={'75%'}
					height={'75%'}
					style={{ opacity: '76%' }}
				/>
			</label>
		</div>
	);
};

export default InputProfileImg;
