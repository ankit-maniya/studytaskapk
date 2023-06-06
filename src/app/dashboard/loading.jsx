import React from "react";

const Loading = () => {
  return (
    <div class="text-center vh-100 d-flex justify-content-center align-items-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
