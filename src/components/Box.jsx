import React from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = () => {
    return (
        <div className="projects_container animate-fade-in-down" id="projects">
            <h2 className="projects_title">Projects</h2>
            <div className="projects_cards-container">
                <div className="projects_cards">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.themanelpj.vitalapp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={"/imagenes/unnamed.webp"}
                            className="projects_cards-image"
                            alt="project"
                        ></img>
                    </a>
                    <div className="projects_cards-info">
                        <h3 className="projects_name">Rankedly App</h3>
                        <p className="projects_project-info">
                            Aplicacion que permite crear, administrar unirte a torneos esports
                            hecha con react native <br></br> <br></br>
                        </p>
                        <div className="projects_project-stack">
                            <p>React Native</p>

                            <a
                                className="projects_project-stack-deploy"
                                href="https://play.google.com/store/apps/details?id=com.themanelpj.vitalapp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects_cards">
                    <a
                        href="https://rickandmortyapis.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={"/imagenes/rickandmorty.webp"}
                            className="projects_cards-image"
                            alt="project"
                        ></img>
                    </a>
                    <div className="projects_cards-info">
                        <h3 className="projects_name">Rick and Morty API</h3>
                        <p className="projects_project-info">
                            Esto es un proyecto hecho con la api de rick and morty con react
                            <br></br> <br></br>
                            <br></br>
                        </p>
                        <div className="projects_project-stack">
                            <p>ReactJS, JS, CSS</p>
                            <a
                                className="projects_project-stack-github"
                                href="https://github.com/disastermove/rickandmortyapi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                className="projects_project-stack-deploy"
                                href="https://rickandmortyapis.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projects_cards">
                    <a
                        href="https://rickandmortyapiv2.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={"/imagenes/rickandmortyv2.webp"}
                            className="projects_cards-image"
                            alt="project"
                        ></img>
                    </a>
                    <div className="projects_cards-info">
                        <h3 className="projects_name">Rick and Morty  API v2</h3>
                        <p className="projects_project-info">
                            Esto es un proyecto rehecho con la api de rick y morty con responsive y muchas mas cosas
                            <br></br> <br></br>
                            <br></br>
                        </p>
                        <div className="projects_project-stack">
                            <p>ReactJS, JS, CSS</p>
                            <a
                                className="projects_project-stack-github"
                                href="https://github.com/disastermove/rickandmortyv2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                className="projects_project-stack-deploy"
                                href="https://rickandmortyapiv2.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Box;
