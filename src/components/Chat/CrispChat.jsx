"use client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("002efbe0-17fe-45d4-9c08-18427b7ec7af");
  }, []);
};
export default CrispChat;
