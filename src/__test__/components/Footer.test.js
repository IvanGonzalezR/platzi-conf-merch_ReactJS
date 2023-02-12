import React from "react";
import { Footer } from "../../components/Footer";
import TestRenderer from 'react-test-renderer';

describe("Footer", () => {
  const footer = TestRenderer.create(<Footer />);

  it("should render the footer", () => {
    expect(footer).toMatchSnapshot();
  });
  it('Render del titulo', () => {
    const tree = footer.toJSON();
    //Assert
    expect(tree.children[ 0 ].children[ 0 ]).toContain('PlatziConf');
    expect(tree.children[ 1 ].children[ 0 ]).toContain('os');
  });
});