import React from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next';

const Box = () => {
    const { t } = useTranslation();

    return (
        <div className="projects_container animate-fade-in-down" id="projects">
            <h2 className="projects_title">{t('project')}</h2>
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
                            {t('rank')}
                            <br /><br />
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
                        <h3 className="projects_name">Rick and Morty API v2</h3>
                        <p className="projects_project-info">
                            {t('rick')}
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
