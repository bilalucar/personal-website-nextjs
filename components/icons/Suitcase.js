import * as React from 'react';

function SvgSuitcase(props) {
  return (
    <svg
      fill="currentColor"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.5 22h-19C1.1 22 0 20.9 0 19.5v-12C0 6.1 1.1 5 2.5 5h19C22.9 5 24 6.1 24 7.5v12c0 1.4-1.1 2.5-2.5 2.5zM2.5 6C1.7 6 1 6.7 1 7.5v12c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5v-12c0-.8-.7-1.5-1.5-1.5z" />
      <path d="M15.5 6c-.3 0-.5-.2-.5-.5v-2c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5v2c0 .3-.2.5-.5.5S8 5.8 8 5.5v-2C8 2.7 8.7 2 9.5 2h5c.8 0 1.5.7 1.5 1.5v2c0 .3-.2.5-.5.5zM12 14h-.2L.3 10c-.2-.1-.4-.4-.3-.7.1-.2.4-.4.7-.3L12 13l11.3-4c.3-.1.5 0 .6.3s0 .5-.3.6l-11.5 4c0 .1 0 .1-.1.1z" />
    </svg>
  );
}

export default SvgSuitcase;
