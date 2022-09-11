import React from 'react';
import { Row, Col } from 'antd';

import './CoreValues.scss';
const CoreValues = () => {
	return (
		<div id='values' className='px-5'>
			<h1 className='title'>THE SHIBA KENZO'S CORE VALUES</h1>
			<Row className='px-lg-5 pt-5' gutter={30}>
				<Col xl={12} lg={12} md={12} sm={24} xs={24}>
					<Row gutter={10} className='mt-5'>
						<Col xl={12} lg={12} md={12} sm={24} xs={24}>
							<div className='transparency p-3'>
								<h1>TRANSPARENCY </h1>
								<p>We maintain an open communication with our Community.</p>
							</div>
						</Col>
						<Col xl={12} lg={12} md={12} sm={24} xs={24}>
							<div className='transparency p-3'>
								<h1>COMMUNITY</h1>
								<p>
									Ultimately, KENZO is owned by the Community, meaning we have a tendency to encourage
									cluster efforts.
								</p>
							</div>
						</Col>
						<Col xl={12} lg={12} md={12} sm={24} xs={24}>
							<div className='transparency p-3'>
								<h1>TRUST </h1>
								<p>
									Trust is a dominant and important factor for the ShibaKenzo team. Therefore the team
									allocation will be locked and vested through a schedule for team members with
									specified dates and token amounts.
								</p>
							</div>
						</Col>
						<Col xl={12} lg={12} md={12} sm={24} xs={24}>
							<div className='transparency p-3'>
								<h1>CHARITY </h1>
								<p>
									We respect people and all animals, therefore we have decided to donate money to
									World Wildlife Fund, Inc. (WWF)
								</p>
							</div>
						</Col>
					</Row>
				</Col>
				<Col xl={12} lg={12} md={12} sm={24} xs={24}>
					<img
						src='./images/Frame.png'
						alt='hands'
						className='d-none d-md-block '
						style={{ height: '500px' }}
					/>
				</Col>
			</Row>

			<h1 className='title' style={{ marginTop: '50px', marginBottom: '100px', letterSpacing: '1rem' }}>
				Tokenomics
			</h1>
			<Row gutter={30} className='px-lg-5 text-center finance'>
				<Col xl={6} lg={6} md={6} sm={12} xs={12}>
					<img src='./images/finance1.png' alt='message' width={'100%'} />
					<h3 className='heading'>Decentralized finance</h3>
				</Col>
				<Col xl={6} lg={6} md={6} sm={12} xs={12}>
					<img src='./images/finance2.png' alt='message' width={'100%'} />
					<h3 className='heading'>Auto Liquidity Protocol </h3>
				</Col>
				<Col xl={6} lg={6} md={6} sm={12} xs={12}>
					<img src='./images/finance3.png' alt='message' width={'100%'} />
					<h3 className='heading'>Charity</h3>
				</Col>
				<Col xl={6} lg={6} md={6} sm={12} xs={12}>
					<img src='./images/finance4.png' alt='message' width={'100%'} />
					<h3 className='heading'> Liquidity Lock</h3>
				</Col>
			</Row>

			<h1 className='title' style={{ marginTop: '90px', marginBottom: '100px', letterSpacing: '1rem' }}>
				Roadmap
			</h1>
			<Row gutter={30} className='px-lg-5 text-center finance'>
				<Col xl={2} lg={2} md={2} sm={2} xs={2}>
					{' '}
				</Col>
				<Col xl={10} lg={10} md={10} sm={24} xs={24}>
					<img src='./images/message.png' alt='message' width={'100%'} />
				</Col>
				<Col xl={2} lg={2} md={2} sm={2} xs={2}>
					{' '}
				</Col>

				<Col xl={8} lg={8} md={8} sm={24} xs={24}>
					<div className='d-flex align-items-center justify-content-center h-100'>
						<div className='p-4 healthy text-left'>
							<p className='para'>
								Did you know Shiba is a Japanese breed of small thick-coated AGILE dogs?{' '}
							</p>
							<p className='para'>Kenzo has a Japanese origin which means STRONG & HEALTHY </p>
							<p className='para'>
								From these words, we draw the inspiration of the name SHIBA KENZO for our token; a
								STRONG, AGILE & HEALTHY token that could stand for test of time{' '}
							</p>
						</div>
					</div>
				</Col>
				<Col xl={2} lg={2} md={2} sm={2} xs={2}>
					{' '}
				</Col>
			</Row>

			<Row gutter={30} className='px-lg-5 text-center finance'>
				<Col xl={2} lg={2} md={2} sm={2} xs={2}>
					{' '}
				</Col>

				<Col xl={20} lg={20} md={20} sm={24} xs={24}>
					<p className='Berlin-para'>
						Our team works from Berlin, London, Oslo and Stockholm. We combine a deep understanding of the
						crypto market. Please read more about us, and why you should invest in Shiba Kenzo under
						documents section.
					</p>
					<div className='d-md-flex align-items-center justify-content-between mt-5'>
						<a
							href='https://markets.businessinsider.com/news/stocks/shiba-kenzo-plans-initial-coin-offering-for-meme-token-1030504628'
							target='_blank'>
							<img src='./images/insider.png' alt='insider' className='insider-image' />
						</a>
						<a
							href='https://finance.yahoo.com/news/shiba-kenzo-plans-initial-coin-153500348.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGCwa9NQ2PTilixKspUtk28gCwqtZ0MbQi5p5m6R4cr30ONJHPwYiUJvKy_7RL8E2hiQ-1FyJTBQg-rcqavP3_dpKrQ4brcfGuQw10tYmh8rdOSPr3Vmi2ZaVVmTOOCMDYcuzzE7UflO7wDSqvlIBYceC5zHP4WJHvWhJ6DL8Eh1'
							target='_blank'>
							<img src='./images/yahoo.png' alt='insider' className='insider-image' />
						</a>
						<a
							href='https://mrbitcoinnews.com/2021/06/08/shiba-kenzo-plans-initial-coin-offering-for-meme-token/'
							target='_blank'>
							<img src='./images/news.png' alt='insider' className='insider-image' />
						</a>
					</div>
				</Col>
				<Col xl={2} lg={2} md={2} sm={2} xs={2}>
					{' '}
				</Col>
			</Row>

			<div className='d-flex align-items-center justify-content-between px-md-5' style={{ marginTop: '80px' }}>
				<img src='./images/logo.svg' alt='insider' className='footer-logo' />
				<div className='d-md-block d-none'>
					<div className='d-flex align-items-center'>
						<p className='coin'>Home</p>
						<p className='coin'>Coinmarketcap</p>
						<p className='coin'>Tokenomics</p>
						<p className='coin'>Contact</p>
						<p className='coin'>Documents</p>
					</div>
				</div>
				<div className='d-flex align-items-center'>
					<a href='https://t.me/ShibaKenzo' target='_blank'>
						<img src='./images/messenger.png' alt='insider' className='social-logo' />
					</a>
					<a href='https://twitter.com/shiba_kenzo' target='_blank'>
						<img src='./images/twitter.png' alt='insider' className='social-logo' />
					</a>
					<a href='https://shibakenzo.medium.com' target='_blank'>
						<img src='./images/medium.png' alt='insider' className='social-logo' />
					</a>
				</div>
			</div>

			<div className='m-4 px-md-3'>
				<div className='line' />
			</div>

			<div className='d-md-flex align-items-center justify-content-between px-md-5 my-4'>
				<p className='copy'>© 2021 Copyright - Shiba Kenzo</p>
				<p className='copy'>info@shibakenzo.com</p>
			</div>
		</div>
	);
};

export default CoreValues;
