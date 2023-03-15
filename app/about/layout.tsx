import React from "react";
type props = {
  children: React.ReactNode;
};
export default function AboutLayout({ children }: props) {
  return (
    <html lang="en">
      <body>
        <div>
          <h3>welcome to about</h3>
          {children}
        </div>
      </body>
    </html>
  );
}
