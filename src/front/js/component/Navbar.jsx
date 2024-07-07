import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import profilePicture from "../../img/placeholder-profile-picture.jpg";
import "../../styles/navbar.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleLogout = () => {
		actions.userLogout()
	}

	return (
		<nav className="navbar-custom">
			<div className="navbar-custom-logo">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 red-color">RentUni</span>
				</Link>
			</div>
			<div>
				<Link to="/demo">
					<span>Lorem</span>
				</Link>
				<Link to="/uploadimg">
					<span>Upload</span>
				</Link>
				<Link to="/uploadflat">
					<span>Upload Flat</span>
				</Link>
				<Link to="/chats/1">
					<span>Chats</span>
				</Link>
				{store.isLogedIn ?
					<div class="dropdown">
						<button class="btn btn-custom red-background dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Menú
							<span className="profile-picutre"><img src={store.userData.profile_picture} /></span>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">
								<Link to="/dashboard">
									<span className="red-color">Perfil</span>
								</Link>
							</a></li>
							<li><a class="dropdown-item" href="#">
								{store.userData.is_student ?
									<Link to="/favorites">
										<span className="red-color">Favoritos</span>
									</Link>
									:
									<Link to="/myflats">
										<span className="red-color">Mis pisos</span>
									</Link>
								}
							</a></li>
							<li><a class="dropdown-item" href="#">
								<Link to="/chats/1">
									<span className="red-color">Mensajes</span>
								</Link>
							</a></li>
							<li><a class="dropdown-item" href="#">
								<Link to="/">
									<button className="btn-custom red-background" onClick={handleLogout}> <i className="fas fa-sign-out-alt"></i> Desconectar</button>
								</Link>
							</a></li>
						</ul>
					</div>

					:
					<>
						<Link to="/login">
							<button className="btn-custom red-background">Login</button>
						</Link>
						<Link to="/Signup" >
							<span className="red-color">Sign Up</span>
						</Link>
					</>}
			</div>
		</nav>
	);
};
