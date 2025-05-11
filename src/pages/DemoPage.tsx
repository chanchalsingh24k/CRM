import React from "react";
import GetDemoForm from "../components/GetDemoForm";

export default function DemoPage() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Schedule a Demo</h1>
      <p>Book a live demo with our CRM experts and see how our platform can help your business grow.</p>
      <div style={{ marginTop: 32 }}>
        <GetDemoForm />
      </div>
    </div>
  );
}
