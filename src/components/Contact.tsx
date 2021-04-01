import PageHeading from "../utils/PageHeading"

const Contact = () => {
    return (
        <div className="contact-page" id="contact">
            <PageHeading heading="Contact" />
            <section>
                <div className="left-side">
                    <h2 className="text-primary">Let's Connect</h2>
                    <p>Have a cool idea for your project? Need reliable partner to improve your product? I am here to help you uncomplicate your product development. </p>
                </div>
                <div className="right-side">
                    <form>
                        <div className="feild">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="feild">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="feild">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Enter your message" required />
                        </div>
                        <button type="submit" className="btn primary submit-btn">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
