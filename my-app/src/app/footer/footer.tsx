import React from "react";
import ActionButtons from "../navbar/action-buttons";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
      <div>
        <h3>Subscribe to Buto Ijo Newsletter</h3>
        <p>
          Buto Ijo is a newsletter web service that is oriented for Indonesian
          developers and programmers. Stay updated with the latest news,
          tutorials, and events in the tech industry.
        </p>
        <form>
          {/* <input type="email" placeholder="Enter your email" /> */}
          <div className="md:flex md:space-x-4">
            <Button className="text-md button">Get Started</Button>
          </div>
        </form>
      </div>
      {/* <div>Other footer content</div> */}
    </footer>
  );
};

export default Footer;
