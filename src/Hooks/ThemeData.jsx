import React, { useState } from "react";

export default function ThemeData() {
  const [isDark, setIsDark] = useState(false);
  return {
    isDark,
    setIsDark,
  };
}
