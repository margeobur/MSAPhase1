import * as React from "react";

const About = () => {
    return (
        <div className="centreText">
            <h1>BeDisBot</h1>
            <h2>This is my submission for the first assignment in MSA.</h2>
            <p>It uses the Discord REST api. Normally one wouldn't reveal the bot authentication token -
                bots aren't even supposed to be implemented in front-end code like this. However, I didn't
                think it was in the scope of the assignment and it would have been costly to set up</p>
        </div>
    );
}

export default About;