import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    return (
        <Row className="animate-fade-in-down" style={{ justifyContent: "center", paddingBottom: "60px", paddingTop: "20px" }}>
            <GitHubCalendar
                username="disastermove"
                blockSize={15}
                blockMargin={5}
                color="#2b2d42"
                fontSize={16}
            />
        </Row>
    );
}

export default Github;
