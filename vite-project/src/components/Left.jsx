import React, { useRef, useState } from "react";
function Left() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: "A",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "B",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "C",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "D",

      subItems: [
        "Installation",
        "Configuration",
        "Playground",
        "Installation",
        "Configuration",
        "Playground",
        "Installation",
        "Configuration",
        "Playground",
        "Installation",
        "Configuration",
        "Playground",
        "Installation",
        "Configuration",
        "Playground",
      ],
    },
    {
      title: "E",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "F",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "A",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "B",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "C",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "D",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "E",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "F",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "A",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "B",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "C",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "D",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "E",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "F",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "A",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "B",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "C",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "D",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "E",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "F",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "A",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "B",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "C",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "D",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "E",

      subItems: ["Installation", "Configuration", "Playground"],
    },
    {
      title: "F",

      subItems: ["Installation", "Configuration", "Playground"],
    },
  ];
  return (
    <div>
      <div className="sidebar">
        {menuItems.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-title" onClick={() => togglePanel(index)}>
              {item.title}
            </div>
            <div
              className="accordion-content-wrapper"
              ref={(el) => (contentRefs.current[index] = el)} // Her panelin referansını tutuyoruz
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${contentRefs.current[index].scrollHeight}px`
                    : "0px",
              }}
            >
              <div className="accordion-content">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="sub-item">
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Left;
