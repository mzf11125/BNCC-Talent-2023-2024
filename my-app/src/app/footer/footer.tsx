import React from "react";
import ActionButtons from "../navbar/action-buttons";
import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#121827",
        padding: "20px",
        textShadow: "2px 2px 4px #000000",
        color: "#FFFFFF",
      }}
    >
      <div>
        <h3 style={{ textShadow: "none" }}>Subscribe to Buto Ijo Newsletter</h3>
        <p>
          Buto Ijo is a newsletter web service that is oriented for Indonesian
          developers and programmers. Stay updated with the latest news,
          tutorials, and events in the tech industry.
        </p>
        <form>
          {/* <input type="email" placeholder="Enter your email" /> */}
          <div className="md:flex md:space-x-4">
            <Button className="text-md button">
              <a href="/#signup-section">Subscribe</a>
            </Button>
          </div>
        </form>
      </div>
      {/* <div>Other footer content</div> */}
    </footer>
  );
};

export default Footer;
