import React from 'react';
import { Button, Progress } from 'antd';
import Navigation from '../../Components/Navbar';

import './Banner.scss';

const Banner = () => {
	return (
		<div id='landing'>
			<div className='px-lg-5'>
				<Navigation />
				<div className='smallTab text-center'>
					<div className='mt-5 iconsColumn'>
						<Button type='primary' className='customButtons px-3'>
							PRE-SALE
						</Button>
					</div>
					<div className='mt-5'>
						<Progress percent={50} showInfo={false} />
					</div>
					<div className='softcapContainer d-flex align-items-center justify-content-between p-2'>
						<p className='softcap'>Softcap 300 BNB</p>
						<p className='softcap'>Hardcap 600 BNB</p>
					</div>
					<h1 className='title mt-4'>THE FIRST SHIBA MEME</h1>
					<h2 className='token mt-3'>DEFLATIONARY TOKEN</h2>
					<h3 className='farm mt-3'>
						ON THE SHIBAKENZO UPCOMING <span>YIELD FARM</span>
					</h3>
					{/* <div className='mt-5 iconsColumn'>
						<Button type='primary' className='customButtons px-3'>
							BUY NOW
						</Button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Banner;
