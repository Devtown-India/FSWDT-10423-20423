const PrevIcon = ({ goBack }) => {
  return (
    <svg
      onClick={goBack}
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      className="go_back"
    >
      <g id="Arrow / Caret_Circle_Left">
        <path
          id="Vector"
          d="M13 15L10 12L13 9M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default PrevIcon;
