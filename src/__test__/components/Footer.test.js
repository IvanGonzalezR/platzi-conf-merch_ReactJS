import React from "react";
import TestRenderer from 'react-test-renderer';
import { Footer } from "../../components/Footer";

describe("<Footer />", () => {
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

describe('Footer Snapshot', () => {
  const footer = TestRenderer.create(<Footer />);
  const tree = footer.toJSON();
  test('Comprobar la UI del componente Footer', () => {
    expect(tree).toMatchSnapshot();
  });
});