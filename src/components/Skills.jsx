import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mb-5 mt-5 animate-fade-in-down">
      <h2 className="text-center skilla">{t("skills")}</h2>
      <Container className="grids">
        <Row className="rower">
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/html.webp" alt="HTML" fluid /> */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5a1 1 0 0 0-.97 1.243l1 4A1 1 0 0 0 9 11h4.8c.11 0 .2.09.2.2v2.303a.2.2 0 0 1-.059.141l-1.8 1.8a.2.2 0 0 1-.282 0l-2.152-2.151a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 16 14v-4a1 1 0 0 0-1-1H9.937a.2.2 0 0 1-.194-.151l-.4-1.6A.2.2 0 0 1 9.537 7H16a1 1 0 1 0 0-2z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.306 1a3 3 0 0 0-2.97 3.424l1.57 10.983a3 3 0 0 0 .994 1.834l6.124 5.36a3 3 0 0 0 3.952 0l6.124-5.36a3 3 0 0 0 .995-1.834l1.569-10.983A3 3 0 0 0 19.694 1zm-.99 3.141A1 1 0 0 1 4.306 3h15.388a1 1 0 0 1 .99 1.141l-1.57 10.984a1 1 0 0 1-.33.61l-6.125 5.36a1 1 0 0 1-1.318 0l-6.124-5.36a1 1 0 0 1-.332-.61z"
                  fill="#fff"
                />
              </svg>
              <p>HTML</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/css.webp" alt="CSS" fluid /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 5a1 1 0 0 0 0 2h4.234l-3.73 2.132A1 1 0 0 0 9 11h4.8c.11 0 .2.09.2.2v2.303a.2.2 0 0 1-.059.141l-1.8 1.8a.2.2 0 0 1-.282 0l-2.152-2.151a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 16 14v-4a1 1 0 0 0-1-1h-2.234l3.73-2.132A1 1 0 0 0 16 5z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.306 1a3 3 0 0 0-2.97 3.424l1.57 10.983a3 3 0 0 0 .994 1.834l6.124 5.36a3 3 0 0 0 3.952 0l6.124-5.36a3 3 0 0 0 .995-1.834l1.569-10.983A3 3 0 0 0 19.694 1zm-.99 3.141A1 1 0 0 1 4.306 3h15.388a1 1 0 0 1 .99 1.141l-1.57 10.984a1 1 0 0 1-.33.61l-6.125 5.36a1 1 0 0 1-1.318 0l-6.124-5.36a1 1 0 0 1-.332-.61z"
                  fill="#fff"
                />
              </svg>
              <p>CSS</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/js.webp" alt="JavaScript" fluid /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-1.8a.2.2 0 0 0-.2.2v1.6c0 .11.09.2.2.2H17a1 1 0 0 1 1 1v3a1 1 0 0 1-.293.707l-3 3a1 1 0 0 1-1.414-1.414l2.648-2.649a.2.2 0 0 0 .059-.141V11.2a.2.2 0 0 0-.2-.2H14a1 1 0 0 1-1-1zm-2 0a1 1 0 1 0-2 0v7.103a.2.2 0 0 1-.341.141l-.6-.6A.2.2 0 0 1 8 12.503V12a1 1 0 1 0-2 0v1a1 1 0 0 0 .293.707l3 3A1 1 0 0 0 11 16z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.336 4.424A3 3 0 0 1 4.306 1h15.388a3 3 0 0 1 2.97 3.424l-1.57 10.983a3 3 0 0 1-.994 1.834l-6.125 5.36a3 3 0 0 1-3.95 0L3.9 17.24a3 3 0 0 1-.995-1.834zM4.306 3a1 1 0 0 0-.99 1.141l1.57 10.984a1 1 0 0 0 .33.61l6.126 5.36a1 1 0 0 0 1.316 0l6.126-5.36a1 1 0 0 0 .33-.61l1.57-10.984A1 1 0 0 0 19.694 3z"
                  fill="#fff"
                />
              </svg>
              <p>JavaScript</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/react.webp" alt="React" fluid /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#fff"
                  d="M12 10.11A1.87 1.87 0 1 1 10.13 12 1.88 1.88 0 0 1 12 10.11M7.37 20c.63.38 2-.2 3.6-1.7a24 24 0 0 1-1.51-1.9 23 23 0 0 1-2.4-.4c-.51 2.14-.32 3.61.31 4m.71-5.74-.29-.51a8 8 0 0 0-.29.86c.27.06.57.11.88.16zm6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9h-1.71c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47h3.42c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7a24 24 0 0 1 1.51 1.9 23 23 0 0 1 2.4.36c.51-2.14.32-3.61-.32-4m-.7 5.74.29.51a8 8 0 0 0 .29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7c1.47.84 1.63 3.05 1 5.63 2.54.75 4.37 2 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1 5.63s-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68s1.83-2.94 4.37-3.69c-.62-2.58-.46-4.79 1-5.63s3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12a23 23 0 0 1 .92 2.26c2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 18 9.74a23 23 0 0 1-.92 2.26M6.92 12A23 23 0 0 1 6 9.74c-2.1.63-3.28 1.53-3.28 2.26S3.93 13.63 6 14.26A23 23 0 0 1 6.92 12m9 2.26-.3.51c.31 0 .61-.1.88-.16a8 8 0 0 0-.29-.86zM13 18.3c1.59 1.5 3 2.08 3.59 1.7s.83-1.82.32-4a23 23 0 0 1-2.4.36A24 24 0 0 1 13 18.3M8.08 9.74l.3-.51c-.31 0-.61.1-.88.16a8 8 0 0 0 .29.86zM11 5.7C9.38 4.2 8 3.62 7.37 4s-.82 1.82-.31 4a23 23 0 0 1 2.4-.36A24 24 0 0 1 11 5.7"
                />
              </svg>
              <p>React</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/node.webp" alt="Node.js" fluid /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <g data-name="Layer 2">
                  <path
                    fill="none"
                    data-name="invisible box"
                    d="M0 0h48v48H0z"
                  />
                  <g data-name="Q3 icons" fill="#fff">
                    <path d="M42.3 11.8 25.7 2.4a4 4 0 0 0-3.4 0L5.7 11.8A3.4 3.4 0 0 0 4 14.7v18.6a3.4 3.4 0 0 0 1.7 2.9l4.4 2.5a7.2 7.2 0 0 0 3.8 1c3.1 0 4.9-1.9 4.9-5.1V16.3a.5.5 0 0 0-.5-.5h-2.1a.5.5 0 0 0-.5.5v18.3c0 1.5-1.5 2.9-3.9 1.7l-4.6-2.6a.5.5 0 0 1-.2-.4V14.7a.8.8 0 0 1 .2-.5l16.5-9.3h.6l16.5 9.3a.8.8 0 0 1 .2.5v18.6a.5.5 0 0 1-.2.4L24.3 43a.6.6 0 0 1-.6 0l-4.2-2.4a.3.3 0 0 0-.4 0l-2.5 1.1c-.3.1-.7.2.1.7l5.6 3.1a3.1 3.1 0 0 0 3.4 0l16.6-9.3a3.4 3.4 0 0 0 1.7-2.9V14.7a3.4 3.4 0 0 0-1.7-2.9" />
                    <path d="M29.1 30.3c-4.4 0-5.3-1-5.7-3.1a.4.4 0 0 0-.4-.4h-2.2a.4.4 0 0 0-.4.4c0 2.7 1.5 6 8.7 6 5.2 0 8.2-2 8.2-5.5s-2.4-4.5-7.5-5.1-5.6-1-5.6-2.2.4-2.2 4.2-2.2 4.7.7 5.2 2.9a.5.5 0 0 0 .5.4h2.1l.4-.2a.4.4 0 0 0 .1-.3c-.3-3.9-3-5.7-8.3-5.7s-7.5 2-7.5 5.2 2.8 4.5 7.3 5 5.9 1.2 5.9 2.3-1.5 2.5-5 2.5" />
                  </g>
                </g>
              </svg>
              <p>Node.js</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/sass.webp" alt="Sass" fluid /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width="40"
                height="40"
                viewBox="0 0 1.6 1.6"
              >
                <path d="M.757.251a.6.6 0 0 0-.228.034C.405.328.272.395.176.483.062.587.044.679.051.717c.027.135.217.223.293.288l-.011.006c-.038.019-.18.091-.216.17-.041.089.007.152.038.161a.23.23 0 0 0 .249-.098.25.25 0 0 0 .023-.228l-.001-.002.03-.017Q.485.98.511.967a.4.4 0 0 0-.02.098c-.004.05.017.116.045.141a.05.05 0 0 0 .036.012c.032 0 .047-.026.063-.057.02-.038.038-.082.038-.082s-.022.12.038.12c.022 0 .044-.028.054-.042l.002-.003.004-.005v-.004l.058-.105C.867.967.903.876.903.876q.005.03.015.059.012.034.031.069l-.014.019v.001l-.023.029c-.03.035-.066.075-.07.086q-.01.02.007.031.013.008.037.006a.2.2 0 0 0 .055-.012.2.2 0 0 0 .047-.024.1.1 0 0 0 .046-.091.2.2 0 0 0-.017-.065l.008-.011c.046-.066.082-.139.082-.139q.005.03.014.059t.027.059a.25.25 0 0 0-.08.101c-.017.049-.004.071.022.076a.1.1 0 0 0 .04-.008q.027-.009.051-.026c.029-.021.058-.051.056-.091A.2.2 0 0 0 1.224.95.3.3 0 0 1 1.37.933c.131.015.156.095.151.128s-.032.052-.042.057-.012.008-.011.012q.001.008.013.004c.011-.002.068-.027.071-.089.004-.078-.073-.164-.208-.163a.3.3 0 0 0-.136.031C1.194.886 1.18.862 1.178.844 1.175.823 1.172.811 1.175.786s.018-.06.018-.062S1.19.709 1.159.709 1.103.715 1.1.723q-.008.021-.012.044A1 1 0 0 1 .996.94Q.979.91.975.89C.972.869.969.857.972.832S.99.772.99.77.987.755.956.755.9.761.897.769.891.795.885.813a7 7 0 0 1-.099.219l-.024.05-.002.004.001-.002-.008.015q-.007.012-.011.014a.1.1 0 0 1 .001-.046C.754 1.012.78.925.78.922.78.92.785.905.763.897.742.889.734.902.732.902S.729.907.729.907.753.81.683.81C.64.81.58.856.55.898L.449.952.401.978.398.975C.314.887.159.826.166.708.168.665.184.553.464.416.694.304.877.335.909.403.955.5.811.682.572.708.481.718.439.679.427.667.415.653.413.653.408.655.4.659.405.671.408.678c.007.018.038.046.088.063A.43.43 0 0 0 .769.718c.145-.055.255-.203.222-.33C.97.307.877.26.759.254M.682.868q.006 0 .008.004a.5.5 0 0 1-.038.136c-.015.036-.047.128-.066.123C.57 1.127.559 1.057.583.988A.3.3 0 0 1 .634.896C.652.877.671.867.682.868m.487.113q.004.012.004.025c0 .052-.038.071-.061.079-.005-.003-.004-.014.012-.048a.2.2 0 0 1 .045-.056m-.789.053a.18.18 0 0 1-.045.179c-.043.046-.104.063-.13.049-.028-.016-.017-.084.036-.133a1 1 0 0 1 .102-.074l.027-.016.003-.002.007-.004m.589.008v.004c0 .041-.041.069-.059.08q-.01.005-.015.004c-.002-.001.003-.006.003-.006s.033-.034.045-.05z" />
              </svg>
              <p>Sass</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/reactnative.webp" alt="React Native" fluid /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.074 2.994c.059-1.03.305-1.478 1.01-1.838.76-.387 1.957-.207 3.366.507.607.307.669.313 1.733.177 1.413-.181 3.233-.18 4.538.002.987.138 1.052.13 1.66-.177 2-1.013 3.58-.947 4.151.174.286.56.339 2.01.117 3.208-.122.664-.11.747.186 1.182 2.08 3.065.581 8.033-2.982 9.887a6 6 0 0 1-.69.3c-.575.22-.75.287-.538 1.298.102.486.224 1.695.272 2.686.087 1.792.086 1.805-.228 2.17-.428.498-1.045.506-1.462.02-.273-.317-.3-.466-.3-1.689 0-1.806-.197-3.006-.665-4.035-.557-1.224-.144-1.681 1.128-1.955 1.768-.38 3.15-1.471 3.92-3.096.731-1.545.841-3.68-.482-4.978-.376-.447-.402-.853-.134-2.074.1-.456.185-1.045.188-1.309.003-.416-.035-.479-.29-.479-.162 0-.78.236-1.373.523l-.947.459a.5.5 0 0 1-.277.047 30.3 30.3 0 0 0-7.114 0 .5.5 0 0 1-.279-.046l-.946-.46c-.593-.287-1.211-.523-1.373-.523-.374 0-.38.276-.039 1.916.209 1.001.349 1.224-.253 2.025-.902 1.2-1.127 2.69-.643 4.256.609 1.973 2.101 3.305 4.2 3.75 1.265.268 1.595.618 1.112 2.069-.38 1.14-.62 1.435-1.173 1.435-.743 0-1.209-.644-.953-1.318.113-.297.08-.329-.617-.582-2.126-.776-3.752-2.513-4.495-4.804-.575-1.77-.322-4.075.6-5.467.314-.475.318-.515.172-1.423a10.3 10.3 0 0 1-.1-1.838m-.742 12.951a1 1 0 0 0-1.664 1.11c.226.34.497.618.726.848l.124.123c.193.19.363.36.533.56.378.443.754 1.04.968 2.11.096.477.438.734.628.846.206.121.431.193.616.24.379.095.839.145 1.275.174.479.032.998.042 1.462.045a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1h-.304c-.587.002-1.352.004-2.026-.04a7 7 0 0 1-.788-.09c-.301-1.184-.788-1.972-1.308-2.582-.23-.27-.468-.506-.662-.698l-.103-.103c-.224-.223-.37-.382-.477-.543"
                  fill="#fff"
                />
              </svg>
              <p>Github</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/figma.webp" alt="Figma" fluid /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3H9a3 3 0 0 0 0 6m3-6v6m0-6h3a3 3 0 1 1 0 6m-3 0H9m3 0h3m-3 0v6M9 9a3 3 0 1 0 0 6m6-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 6H9m3 0v3a3 3 0 1 1-3-3"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Figma</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="skill-box">
              {/* <Image src="/iconos/figma.webp" alt="Figma" fluid /> */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 0.75 0.75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.5.275.497.272A.16.16 0 0 0 .384.225H.375a.15.15 0 0 0 0 .3h.009A.16.16 0 0 0 .497.478L.5.475m-.425.05v-.3l.3-.175.3.175v.3L.375.7z"
                  stroke="#fff"
                  stroke-width=".05"
                />
              </svg>
              <p>C</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
