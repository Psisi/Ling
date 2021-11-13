import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="bottom">
                    <h1>Need help?</h1>
                    <p>Get in touch with us.</p>
                    <a href="#" className="button">Contact us</a>
                    <a href="#" className="button">0800800800</a>
                    <a href="#" className="button">Visit us</a>
                </div>
                <hr/>
                <div className="copyright">
                    <p>Copyright@ 2021 Ling's blog. All rights reserved.</p>
                </div>
            </footer>
        )
    }
}
export default Footer;