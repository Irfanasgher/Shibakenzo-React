import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import './Navigation.scss';

const Navigation = () => {
	return (
		<div id='navbar'>
			<div href='#' className='text-center pt-4'>
				<img src='./images/logo.svg' alt='logo' style={{ width: '130px' }} />{' '}
			</div>
			<Navbar collapseOnSelect expand='lg' bg='none' variant='dark' className='navWrapper px-0'>
				{/* <Navbar.Toggle aria-controls='responsive-navbar-nav' /> */}
				{/* <Navbar.Collapse id='responsive-navbar-nav' className='d-lg-flex justify-content-between'>
					<Nav className='customNav'>
						<Nav.Link className='navlink'>About us</Nav.Link>
						<Nav.Link className='navlink' eventKey={2}>
							coinmarketcap
						</Nav.Link>
						<Nav.Link className='navlink' eventKey={3}>
							Media
						</Nav.Link>
					</Nav>
					<Navbar.Brand href='#'>
						<img src='./images/logo.svg' alt='logo' style={{ width: '100px' }} />{' '}
					</Navbar.Brand>
					<Nav className='customNav'>
						<Nav.Link className='navlink'>Documents</Nav.Link>
						<Nav.Link className='navlink'>tokenomics</Nav.Link>
						<Nav.Link className='navlink'>Roadmap</Nav.Link>
						<Nav.Link>
							<Button className='appButton d-flex align-items-center justify-content-center'>
								<div className='innerButton '>Contact us</div>
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse> */}
			</Navbar>
		</div>
	);
};

export default Navigation;
