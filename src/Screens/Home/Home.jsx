import React, { Component } from 'react';
import { Button, Progress } from 'antd';
import './Home.scss';
export default class Home extends Component {
	render() {
		return (
			<main id='home'>
				<nav class='navbar navbar-expand-lg fixed-top'>
					<div class='container'>
						<a class='navbar-brand' href='img/logo2.svg' target='_blank'>
							<img src='img/logo2.svg' alt='Logo' loading='lazy' />
						</a>
						<button
							class='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#myNavbarToggler7'
							aria-controls='myNavbarToggler7'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span class='navbar-toggler-icon'></span>
						</button>
						<div class='collapse navbar-collapse' id='myNavbarToggler7'>
							<ul class='navbar-nav ml-auto align-items-baseline'>
								<li class='nav-item'>
									<a class='nav-link' href='#about'>
										About
									</a>
								</li>
								<li class='nav-item'>
									<a class='nav-link' href='javascript:void(0);'>
										coinmarketcap
									</a>
								</li>
								{/* <li class='nav-item'>
									<a class='nav-link' href=''>
										CoinGecko <br />
										<span>(Applied)</span>
									</a>
								</li> */}
								<li class='nav-item'>
									<a class='nav-link' href='#media'>
										Media
									</a>
								</li>
								<li class='nav-item'>
									<a class='nav-link' href='#media'>
										Documents
									</a>
								</li>
								{/* <li class='nav-item dropdown'>
									<a
										class='nav-link dropdown-toggle'
										href='#'
										id='navbarDropdown'
										role='button'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'>
										Documents
									</a>
									<div class='dropdown-menu' aria-labelledby='navbarDropdown'>
										<a class='dropdown-item' href='img/WHITE_PAPER-converted.pdf'>
											Whitepaper
										</a>
										<a class='dropdown-item' href='img/ONE_PAGER-converted.pdf'>
											One Pager
										</a>
									</div>
								</li> */}
								<li class='nav-item'>
									<a class='nav-link' href='#tokenomics'>
										Tokenomics
									</a>
								</li>
								<li class='nav-item'>
									<a class='nav-link' href='#roadmap'>
										Roadmap
									</a>
								</li>
								<li class='nav-item'>
									<button class='nav-btn' onclick="location.href='mailto:info@shibakenzo.com'">
										Contact Us
									</button>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<section class='header' id='home'>
					<div class='container'>
						<div class='row align-items-center'>
							<div class='col-12 col-md-6 col-lg-6 col-xl-7'>
								<p class='wow fadeInUp' data-wow-duration='1' data-wow-delay='1s'>
									THE FIRST SHIBA MEME
								</p>
								<h1 class='wow fadeInUp' data-wow-duration='1' data-wow-delay='1.4s'>
									DEFLATIONARY TOKEN
								</h1>
								<h2 class='wow fadeInUp' data-wow-duration='1' data-wow-delay='1.8s'>
									ON THE SHIBAKENZO UPCOMING <span>YIELD FARM</span>
								</h2>

								{/* <!--<h4>Countdown To Kenzo Fair Launch</h4>-->
                        <!--<div id="timer">-->
                        <!--  <div class="timer-bx" id="days"></div>-->
                        <!--  <div class="timer-bx" id="hours"></div>-->
                        <!--  <div class="timer-bx" id="minutes"></div>-->
                        <!--  <div class="timer-bx" id="seconds"></div>-->
                        <!--</div>--> */}
								<a href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xAF1fC9766a15A50dBA7Cc6feF52d3e3189a117D4'>
									{' '}
									<button class='wow fadeIn' data-wow-duration='1' data-wow-delay='2s'>
										{' '}
										BUY NOW
									</button>
								</a>
								<a href='#'>
									{' '}
									<button class='wow fadeIn ml-3' data-wow-duration='1' data-wow-delay='2s'>
										{' '}
										YEILD FARM
									</button>
								</a>
							</div>
							<div class='col-12 col-md-6 col-lg-6 col-xl-5'>
								<img src='img/mob-img.png' alt='image' />
							</div>
						</div>
					</div>
				</section>
				<section class='value' id='about'>
					<div className='text-center' style={{ marginTop: '-50px' }}>
						<div className=''>
							<Progress percent={50} showInfo={false} />
						</div>
						<div className='softcapContainer d-flex align-items-center justify-content-between p-2'>
							<p className='softcap'>Softcap 300 BNB</p>
							<p className='softcap'>Hardcap 600 BNB</p>
						</div>
					</div>
					<div class='container mt-5'>
						<div class='row align-items-center'>
							<div class='col-12 text-center'>
								<h2 class='wow fadeInUp' data-wow-duration='2s'>
									THE SHIBA KENZO'S CORE VALUES
								</h2>
							</div>
							<div class='col-12 col-md-12 col-lg-6 grid-cont'>
								<div class='row'>
									<div class='col-12 col-sm-6 col-md-6 col-lg-6 px-1 d-flex'>
										<div
											id='value1'
											class='wow fadeIn value-content-box active'
											data-wow-duration='1s'
											data-wow-delay='1s'>
											<h5>TRANSPARENCY</h5>
											<p>We maintain an open communication with our Community.</p>
										</div>
									</div>
									<div class='col-12 col-sm-6 col-md-6 col-lg-6 px-1 d-flex'>
										<div
											id='value2'
											class='wow fadeIn value-content-box'
											data-wow-duration='1s'
											data-wow-delay='1.3s'>
											<h5>COMMUNITY</h5>
											<p>
												Ultimately, KENZO is owned by the Community, meaning we have a tendency
												to encourage cluster efforts.
											</p>
										</div>
									</div>
									<div class='col-12 col-sm-6 col-md-6 col-lg-6 px-1 d-flex'>
										<div
											id='value4'
											class='wow fadeIn value-content-box'
											data-wow-duration='1s'
											data-wow-delay='1.9s'>
											<h5>TRUST</h5>
											<p>
												Trust is a dominant and important factor for the ShibaKenzo team.
												Therefore the team allocation will be locked and vested through a
												schedule for team members with specified dates and token amounts.
											</p>
										</div>
									</div>
									<div class='col-12 col-sm-6 col-md-6 col-lg-6 px-1 d-flex'>
										<div
											id='value5'
											class='wow fadeIn value-content-box'
											data-wow-duration='1s'
											data-wow-delay='2.2s'>
											<h5>CHARITY</h5>
											<p>
												We respect people and all animals, therefore we have decided to donate
												money to World Wildlife Fund, Inc. (WWF)
											</p>
										</div>
									</div>
									{/* <!--<div class="col-12 col-sm-12 col-md-12 col-lg-12 px-1 d-flex">-->
                            <!--    <div id="value5" class="wow fadeIn value-content-box" data-wow-duration="1s" data-wow-delay="2.2s">-->
                            <!--        <h5>TOKENOMICS</h5>-->
                            <!--        <p>Maximum Supply 500,000,000. Transaction Fee 10% of which 50% Redistributed to Holders. 50% Automatically Added to The Liquidity Pool.</p>-->
                            <!--    </div>-->
                            <!--</div>--> */}
								</div>
							</div>
							<div class='col-12 col-md-12 col-lg-6'>
								<img
									id='value-img1'
									class='wow fadeInUp'
									data-wow-delay='1s'
									src='img/value.png'
									alt='Image'
									loading='lazy'
								/>
							</div>
						</div>
					</div>
				</section>
				<section class='tokenomic' id='tokenomics'>
					<div class='container'>
						<div class='row'>
							<div class='col-12 text-center'>
								<h2 class='wow fadeInUp' data-wow-duration='1s'>
									Tokenomics
								</h2>
								{/* <!--<ul class="list-unstyled">-->
                        <!--    <li><span>Maximum Supply 500,000,000</span> <span>Transaction Fee 10%</span></li>-->
                        <!--    <li><span>5% Redistributed To Holder</span> <span>5% Automatically Added To The Liquidity Pool </span></li>-->
                            
                        <!--</ul>--> */}
							</div>
						</div>
						<div class='row align-items-end text-center'>
							<div class='col-6 col-sm-4 col-md'>
								<div class='token-img-bx wow fadeInUp' data-wow-duration='1s' data-wow-delay='1s'>
									<img class='token-img' src='img/token-img1.svg' alt='Image' loading='lazy' />
									<img
										class='token-base-img'
										src='img/tokenomics-img-base.svg'
										alt='Image'
										loading='lazy'
									/>
									<h5>Decentralized finance</h5>
								</div>
							</div>
							<div class='col-6 col-sm-4 col-md'>
								<div class='token-img-bx wow fadeInUp' data-wow-duration='1s' data-wow-delay='2s'>
									<img class='token-img' src='img/token-img3.svg' alt='Image' loading='lazy' />
									<img
										class='token-base-img'
										src='img/tokenomics-img-base.svg'
										alt='Image'
										loading='lazy'
									/>
									<h5>Auto Liquidity Protocol</h5>
								</div>
							</div>
							<div class='col-6 col-sm-4 col-md'>
								<div class='token-img-bx wow fadeInUp' data-wow-duration='1s' data-wow-delay='2.5s'>
									<img class='token-img' src='img/token-img4.svg' alt='Image' loading='lazy' />
									<img
										class='token-base-img'
										src='img/tokenomics-img-base.svg'
										alt='Image'
										loading='lazy'
									/>
									<h5>Charity</h5>
								</div>
							</div>
							<div class='col-6 col-sm-4 col-md'>
								<div class='token-img-bx wow fadeInUp' data-wow-duration='1s' data-wow-delay='3s'>
									<img class='token-img' src='img/token-img5.svg' alt='Image' loading='lazy' />
									<img
										class='token-base-img'
										src='img/tokenomics-img-base.svg'
										alt='Image'
										loading='lazy'
									/>
									<h5>Liquidity Lock</h5>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class='roadmap' id='roadmap'>
					<div class='container'>
						<div class='row justify-content-center'>
							<div class='col-12'>
								<h2 class='wow fadeInUp' data-wow-duration='1s'>
									Roadmap
								</h2>

								<p>
									Did you know Shiba is a Japanese breed of small thick-coated AGILE dogs? <br />
									Kenzo has a Japanese origin which means STRONG & HEALTY <br />
									From these words, we draw the inspiration of the name SHIBA KENZO for our token; a
									STRONG, AGILE & <br /> HEALTHY token that could stand for test of time
								</p>
							</div>
							<div class='col-12 col-md-8 pt-4'>
								{/* <!--<h3>open early investors sale</h3>--> */}
								<div class='road-cont wow fadeIn' data-wow-delay='.5s'>
									<button class='road-txt btn1 wow fadeInUp' data-wow-delay='1s'>
										Website Launch
										<br /> Native Token Development
										<br /> Distribution Pool Contract
									</button>
									<button class='road-txt btn2 wow fadeInUp' data-wow-delay='1s'>
										{/* Community Growth
										<br /> */}
										CoinMarketCap Listing
										<br /> Coingecko Listing
									</button>
									<button class='road-txt btn1 wow fadeInUp' data-wow-delay='1s'>
										Exchange Listing <br /> Marketing Campaign
										<br /> Request The First Audit
									</button>
									<button class='road-txt btn2 wow fadeInUp' data-wow-delay='1s'>
										Partnership Announcements
										<br /> Community Events
										<br /> Voting Mechanism
									</button>
									<button class='road-txt btn1 wow fadeInUp' data-wow-delay='1s'>
										Launch of shibakenzo.finance
										<br /> Request Second Audit, By CertiK
									</button>
								</div>
								<h3>More to be announced</h3>
							</div>
							{/* <!--<div class="col-12 col-md-4">-->
                        <!--<p class="roadmap-txt"></p>-->
                        <!--<p class="roadmap-txt mt-4"></p>-->
                    <!--</div>--> */}
						</div>
						<div class='row justify-content-center pt-5 text-center'>
							<div class='col-12 col-md-10 col-lg-8'>
								<p>
									Our team works from Berlin, London, Oslo and Stockholm. We combine a deep
									understanding of the crypto market. Please read more about us, and why you should
									invest in Shiba Kenzo under documents section.
								</p>

								<div class='d-block d-sm-flex align-items-center justify-content-between pt-5'>
									{/* <!--<div class="part-img">-->
                            <!--  <a target="blank" href="https://markets.businessinsider.com/news/stocks/shiba-kenzo-plans-initial-coin-offering-for-meme-token-1030504628"> <img src="img/partner1.svg" alt="Image" loading="lazy"></a> -->
                            <!--</div>--> */}
									<div class='part-img'>
										<a
											target='blank'
											href='https://markets.businessinsider.com/news/stocks/shiba-kenzo-plans-initial-coin-offering-for-meme-token-1030504628'>
											{' '}
											<img src='img/bsc1.svg' alt='Image' loading='lazy' />
										</a>
									</div>
									<div class='part-img'>
										<a
											target='blank'
											href='https://markets.businessinsider.com/news/stocks/shiba-kenzo-plans-initial-coin-offering-for-meme-token-1030504628'>
											{' '}
											<img src='img/partner2.svg' alt='Image' loading='lazy' />
										</a>
									</div>
									<div class='part-img'>
										<a
											target='blank'
											href='https://finance.yahoo.com/news/shiba-kenzo-plans-initial-coin-153500348.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGhMtZXoTAR0lRG8iTOEMj_x38vy4nRs5DChPDePU60kbYJBcNfJKexkv4ypj7vX8S5MWlUsdPthLkgUSmXZwEJ9vnnt-8v-7D8hZU9FrI7ElOGDx2KtUvcjWQXYFF6Hzt8kcKJKJfnMKiViP2R0EMgbQS5j2fbkyxpS__UgPPIc'>
											{' '}
											<img src='img/partner3.svg' alt='Image' loading='lazy' />
										</a>
									</div>

									<div class='part-img'>
										<a
											target='blank'
											href='https://ambcrypto.com/kenzo-token-surpasses-400-holders/'>
											{' '}
											<img src='img/amb.svg' alt='Image' loading='lazy' />
										</a>
									</div>
									{/* <div class='part-img'>
										<a
											target='blank'
											href='https://cryptonews.com/news/kenzo-token-surpasses-400-holders-11164.htm'>
											{' '}
											<img src='img/cryptonews.svg' alt='Image' loading='lazy' />
										</a>
									</div>
									<div class='part-img'>
										<a
											target='blank'
											href='https://dailyhodl.com/2021/07/22/kenzo-token-surpasses-400-holders/'>
											{' '}
											<img src='img/daily.svg' alt='Image' loading='lazy' />
										</a>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</section>
				<footer class='footer' id='media'>
					<div class='container'>
						<div class='row align-items-center py-4'>
							<div class='col-12 col-sm-12 col-md-3'>
								<img src='img/footer-logo2.svg' alt='Image' loading='lazy' />
							</div>
							<div class='col-12 col-sm-12 col-md-6'>
								<div class='footer-links'>
									<ul class='list-unstyled'>
										<li>
											<a href='#home'>Home</a>
										</li>
										<li>
											<a href='javascript:void(0);'>CoinMarketCap</a>
										</li>
										{/* <li>
											<a href='javascript:void(0);'>
												CoinGecko <br />
												<span>(Applied)</span>
											</a>
										</li> */}
										<li>
											<a href='javascript:void(0);'>Tokenomics</a>
										</li>
										<li>
											<a
												onclick="location.href='mailto:info@shibakenzo.com'"
												href='javascript:void(0);'>
												Contact
											</a>
										</li>
										<li>
											<a href='javascript:void(0);'>Documents</a>
											{/* <ul>
												<li>
													<a href='img/WHITE_PAPER-converted.pdf'>Whitepaper</a>
												</li>
												<li>
													<a href='img/ONE_PAGER-converted.pdf'>One Pager</a>
												</li>
											</ul> */}
										</li>
									</ul>
								</div>
							</div>
							<div class='col-12 col-sm-12 col-md-3'>
								<div class='social-media-link'>
									{/* <div class='social-icon'>
										<a href='https://github.com/TechRate/Smart-Contract-Audits/blob/main/ShibaKenzo%20Full%20Smart%20Contract%20Security%20Audit.pdf'>
											<img src='img/1.svg' alt='Github Icon' loading='lazy' />
										</a>
									</div> */}
									<div class='social-icon'>
										<a href='https://t.me/ShibaKenzo'>
											<img src='img/2.svg' alt='Facebook Icon' loading='lazy' />
										</a>
									</div>
									<div class='social-icon'>
										<a href='https://twitter.com/shiba_kenzo'>
											<img src='img/4.svg' alt='Twitter Icon' loading='lazy' />
										</a>
									</div>
									<div class='social-icon'>
										<a href='https://shibakenzo.medium.com'>
											<img src='img/3.svg' alt='Medium Icon' loading='lazy' />
										</a>
									</div>
									{/* <div class='social-icon'>
										<a href='https://www.reddit.com/r/CryptoMoonShots/comments/oisev1/shiba_kenzo_200k_marketcap_launched_a_few_days/'>
											<img src='img/6.svg' alt='Medium Icon' loading='lazy' />
										</a>
									</div>
									<div class='social-icon'>
										<a href='https://www.facebook.com/shibakenzotoken'>
											<img src='img/7.svg' alt='Medium Icon' loading='lazy' />
										</a>
									</div>
									<div class='social-icon'>
										<a href='https://www.instagram.com/shibakenzotoken/'>
											<img src='img/5.svg' alt='Medium Icon' loading='lazy' />
										</a>
									</div> */}
								</div>
							</div>
						</div>
						<div class='row copy-border py-4'>
							<div class='col-12 col-sm-6'>
								<p class='copy'>© 2021 Copyright - Shiba Kenzo</p>
							</div>
							<div class='col-12 col-sm-6 text-sm-right'>
								<p class='copy mail'>info@shibakenzo.com</p>
							</div>
						</div>
					</div>
				</footer>
			</main>
		);
	}
}
