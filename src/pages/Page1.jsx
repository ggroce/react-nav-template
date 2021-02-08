import React from 'react';

function Page1(props) {
  const lines = [];
  for (let i = 100; i > 0; i--) {
    lines.push(<p key={i}>Let us test the scrolling.</p>);
  };

  return(
    <div>
      <h1>Page 1</h1>
      {lines}
    </div>
  );
}

export default Page1;
